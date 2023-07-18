import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, firebase } from "@/utils/firebase";
import styles from "@/styles/pakar.module.css";

export default function Login() {
  const [user, setUser] = useState<any>();
  const [emailUser, setEmailUser] = useState<string | null>();
  const provider = new GoogleAuthProvider();
  const router = useRouter();

  const loginGoogle = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(user);
        setEmailUser(user.email);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      const userLogin = auth.currentUser;
      if (userLogin) {
        setUser(user);
        setEmailUser(userLogin.email);
        console.log(user);
      } else {
        // User is signed out
        setUser(null);
      }
    });
  });

  const logout = () => {
    auth.signOut();
    window.localStorage.removeItem("emailForSignIn");
    // router.push("/login");
  };

  const db = firebase.firestore();
  const initialUserData = {
    hasilMap: {
      level: [],
      nama: [],
      hasil: [],
    },
    email: "",
  };
  const [userData, setUserData] = useState<any>(initialUserData);

  const dataUser = async () => {
    try {
      const userCollectionRef = db.collection("user");
      const snapshot = await userCollectionRef
        .where("email", "==", emailUser)
        .get();

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      if (data.length > 0) {
        // Jika data ditemukan, perbarui state userData dengan data dari Firestore
        setUserData(data[0]);
      } else {
        // Jika data tidak ditemukan, set state userData menjadi initialUserData
        setUserData(initialUserData);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    // Panggil fungsi dataUser saat emailUser berubah
    dataUser();
  }, [emailUser]);

  const handleDelete = async (index: number) => {
    const userRef = db.collection("user").doc(userData.id);

    try {
      // Ambil data dari Firestore
      const doc = await userRef.get();
      const hasilArray = doc.data()?.hasilMap.hasil ?? [];
      const namaArray = doc.data()?.hasilMap.nama ?? [];
      const levelArray = doc.data()?.hasilMap.level ?? [];

      // Hapus elemen pada indeks yang diberikan dari ketiga array
      hasilArray.splice(index, 1);
      namaArray.splice(index, 1);
      levelArray.splice(index, 1);

      // Lakukan update pada ketiga array di Firestore
      await userRef.update({
        "hasilMap.hasil": hasilArray,
        "hasilMap.nama": namaArray,
        "hasilMap.level": levelArray,
      });

      // Perbarui state userData dengan data yang telah di-update
      setUserData({
        ...userData,
        hasilMap: {
          hasil: hasilArray,
          nama: namaArray,
          level: levelArray,
        },
      });
    } catch (error) {
      console.error("Error deleting element from Firestore:", error);
    }
  };

  const lihatData = () => {
    console.log(userData.id);
  };
  const [newData, setNewData] = useState<string>("");
  // handle add
  const handleAdd = async () => {
    if (!emailUser) {
      console.error("Email is empty");
      return;
    }

    const userRef = db.collection("user").doc(emailUser);

    try {
      // Mengecek apakah dokumen dengan email pengguna sudah ada di Firestore
      const doc = await userRef.get();
      if (doc.exists) {
        // Jika dokumen sudah ada, lakukan update pada array di Firestore dengan menggunakan arrayUnion
        await userRef.update({
          "hasilMap.hasil":
            firebase.firestore.FieldValue.arrayUnion("hasil baru2"),
          "hasilMap.level":
            firebase.firestore.FieldValue.arrayUnion("level baru2"),
          "hasilMap.nama":
            firebase.firestore.FieldValue.arrayUnion("nama baru2"),
        });
      } else {
        // Jika dokumen belum ada, buat dokumen baru dengan data yang diinginkan
        await userRef.set({
          hasilMap: {
            hasil: ["hasil baru"],
            level: ["level baru"],
            nama: ["nama baru"],
          },
          email: emailUser,
        });
      }

      // Ambil data terbaru dari Firestore setelah update
      const updatedDoc = await userRef.get();

      // Perbarui state userData dengan data terbaru dari Firestore
      setUserData(updatedDoc.data());

      // Reset state newData menjadi string kosong setelah berhasil menambahkan value
      setNewData("");
    } catch (error) {
      console.error("Error adding element to Firestore:", error);
    }
  };

  return (
    <>
      <p onClick={loginGoogle}>login</p>
      <p onClick={logout}>logout</p>
      {user ? (
        <>
          <p>Selamat datang, {user.displayName}</p>
          <p>photo url, {user.photoURL}</p>
          <p>Provider ID: {user.providerId}</p>
          <p>Uid: {user.uid}</p>
        </>
      ) : null}
      <h3>fetching firebase</h3>

      <button onClick={lihatData}>console log</button>

      <input
        type="text"
        value={newData}
        onChange={(e) => setNewData(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ASPEK</th>
              <th>SKOR</th>
              <th>LEVEL</th>
            </tr>
          </thead>
          <tbody>
            {userData.hasilMap.hasil.map((hasil: string, index: number) => (
              <tr key={index}>
                <td>{hasil}</td>
                <td>{userData.hasilMap.nama[index]}</td>
                <td>{userData.hasilMap.level[index]}</td>
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
                <td>{index}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
