import styles from "@/styles/pakar.module.css";
import { useState, useEffect } from "react";
import Head from "next/head";
import { Button, Input, Modal, Text, Avatar } from "@nextui-org/react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, firebase } from "@/utils/firebase";

export default function Pakardb() {
  const [modalError, setModalError] = useState(false);
  const [user, setUser] = useState<any>();
  const provider = new GoogleAuthProvider();

  // check user login
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

  // login google
  const loginGoogle = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        console.log(user);
      })
      .catch((error) => {
        // ...
        console.log(error);
      });
  };

  // logout google
  const logout = () => {
    auth.signOut();
    window.localStorage.removeItem("emailForSignIn");
  };

  // close modal
  const closeHandler = () => {
    setModalError(false);
    console.log("closed");
  };

  //   initial DB
  const db = firebase.firestore();
  const [emailUser, setEmailUser] = useState<string | null>();
  const initialUserData = {
    hasilMap: {
      nama: [],
      hasil: [],
      level: [],
      colorLevel: [],
      rekomendasi: [],
    },
    email: "",
  };
  const [userData, setUserData] = useState<any>(initialUserData);

  //   get data firebase
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
        setUserData(data[0]);
      } else {
        setUserData(initialUserData);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // Panggil fungsi dataUser saat emailUser berubah
  useEffect(() => {
    dataUser();
  }, [emailUser]);

  //   handle delete data
  const handleDelete = async (index: number) => {
    const result = window.confirm("Yakin menghapus data?");
    if (result) {
      const userRef = db.collection("user").doc(userData.id);
      try {
        // Ambil data dari Firestore
        const doc = await userRef.get();
        const hasilArray = doc.data()?.hasilMap.hasil ?? [];
        const namaArray = doc.data()?.hasilMap.nama ?? [];
        const levelArray = doc.data()?.hasilMap.level ?? [];
        const colorLevel = doc.data()?.hasilMap.colorLevel ?? [];
        const rekomendasi = doc.data()?.hasilMap.rekomendasi ?? [];

        // Hapus elemen pada indeks yang diberikan dari ketiga array
        hasilArray.splice(index, 1);
        namaArray.splice(index, 1);
        levelArray.splice(index, 1);
        colorLevel.splice(index, 1);
        rekomendasi.splice(index, 1);

        // Lakukan update pada ketiga array di Firestore
        await userRef.update({
          "hasilMap.hasil": hasilArray,
          "hasilMap.nama": namaArray,
          "hasilMap.level": levelArray,
          "hasilMap.colorLevel": colorLevel,
          "hasilMap.rekomendasi": rekomendasi,
        });

        // Perbarui state userData dengan data yang telah di-update
        setUserData({
          ...userData,
          hasilMap: {
            hasil: hasilArray,
            nama: namaArray,
            level: levelArray,
            colorLevel: colorLevel,
            rekomendasi: rekomendasi,
          },
        });
      } catch (error) {
        console.error("Error deleting element from Firestore:", error);
      }
    } else {
      return;
    }
  };

  //   handle Add
  const handleAdd = async () => {
    // cek input user kosong
    if (aspek === "") {
      setModalError(true);
      return;
    }
    // kalkulasi nilai risk
    let totalRisk = risk1 + risk2 + risk3 + risk4 + risk5 + risk6;
    let total = totalRisk;

    let level: string;
    let colorLevel: string;
    let rekomendasi: string;
    switch (total) {
      case 1:
      case 2:
        level = "High Risk";
        colorLevel = "error";
        rekomendasi =
          "Risiko sangat serius bagi keamanan informasi organisasi Anda. Jika risiko ini terwujud, dampaknya bisa sangat merugikan organisasi dan menyebabkan kerugian besar. Tindakan mitigasi yang kuat diperlukan untuk mengurangi risiko ini.";
        break;
      case 3:
        level = "Medium Risk";
        colorLevel = "warning";
        rekomendasi =
          "Risiko menunjukkan ancaman yang memiliki dampak moderat terhadap keamanan informasi organisasi Anda. Meskipun tidak seberat risiko tinggi, tetap perlu tindakan pencegahan dan pengendalian untuk mengurangi kemungkinan terjadinya risiko ini.";
        break;
      case 4:
      case 5:
        level = "Low Risk";
        colorLevel = "primary";
        rekomendasi =
          "Risiko memiliki dampak minimal atau terbatas terhadap keamanan informasi organisasi Anda. Risiko ini masih perlu diawasi dan diantisipasi, tetapi dapat dihadapi dengan kontrol yang memadai.";
        break;
      case 6:
        level = "Very Low Risk";
        colorLevel = "success";
        rekomendasi =
          "Risiko sangat rendah, hampir tidak memiliki dampak signifikan terhadap keamanan informasi organisasi Anda. Risiko ini umumnya dapat ditangani dengan kontrol sederhana dan penerimaan risiko.";
        break;
      default:
        level = "High Risk";
        colorLevel = "error";
        rekomendasi =
          "Risiko sangat serius bagi keamanan informasi organisasi Anda. Jika risiko ini terwujud, dampaknya bisa sangat merugikan organisasi dan menyebabkan kerugian besar. Tindakan mitigasi yang kuat diperlukan untuk mengurangi risiko ini.";
        break;
    }

    setAspek("");

    if (!emailUser) {
      console.error("Email is empty");
      return;
    }

    const userRef = db.collection("user").doc(emailUser);

    try {
      const doc = await userRef.get();
      if (doc.exists) {
        const docData = doc.data();
        const hasilMap = docData?.hasilMap || {};

        // Menggabungkan array lama dengan nilai baru dan tetap menjaga duplikat
        const namaArray = [...hasilMap.nama, aspek];
        const hasilArray = [...hasilMap.hasil, total.toString()];
        const levelArray = [...hasilMap.level, level];
        const colorLevelArray = [...hasilMap.colorLevel, colorLevel];
        const rekomendasiArray = [...hasilMap.rekomendasi, rekomendasi];

        // Lakukan update pada dokumen dengan hasilMap yang telah diperbarui
        await userRef.update({
          "hasilMap.nama": namaArray,
          "hasilMap.hasil": hasilArray,
          "hasilMap.level": levelArray,
          "hasilMap.colorLevel": colorLevelArray,
          "hasilMap.rekomendasi": rekomendasiArray,
        });
      } else {
        // Jika dokumen belum ada, buat dokumen baru dengan data yang diinginkan
        await userRef.set({
          hasilMap: {
            nama: [aspek],
            hasil: [total.toString()],
            level: [level],
            colorLevel: [colorLevel],
            rekomendasi: [rekomendasi],
          },
          email: emailUser,
        });
      }
      const updatedDoc = await userRef.get();
      setUserData(updatedDoc.data());
      alert("hasil tergenerate");
      dataUser();
    } catch (error) {
      console.error("Error adding element to Firestore:", error);
    }
  };

  const [aspek, setAspek] = useState("");
  const [risk1, setRisk1] = useState<number>(0);
  const [risk2, setRisk2] = useState<number>(0);
  const [risk3, setRisk3] = useState<number>(0);
  const [risk4, setRisk4] = useState<number>(0);
  const [risk5, setRisk5] = useState<number>(0);
  const [risk6, setRisk6] = useState<number>(0);

  const color = () => {
    console.log(userData.hasilMap.colorLevel);
  };

  return (
    <>
      {user ? (
        <div className={styles.user}>
          <Avatar size="lg" color="primary" bordered src={user.photoURL} />
          <div>
            <span>login sebagai : {user.displayName}</span>
            <hr />
            <Button size="xs" onClick={logout} color="error">
              Logout
            </Button>
          </div>
        </div>
      ) : (
        <Button size="xs" onClick={loginGoogle}>
          Login untuk menyimpan progress
        </Button>
      )}
      <main className={styles.main}>
        <Head>
          <title>Sistem Pakar | Dashboard</title>
        </Head>
        <h1>Sistem Pakar ISO 27002 Dengan Metode Certainty Factor</h1>
        <Input
          clearable
          bordered
          labelPlaceholder="Nama Aspek: misal Data Karyawan"
          onChange={(e) => setAspek(e.target.value)}
          fullWidth
          value={aspek}
        />

        {/* div form */}
        <div className={styles.form}>
          {/* Kontrol keamanan 1 */}
          <div className={styles.parameter}>
            <span>Kebijakan keamanan informasi</span>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>
                  Kebijakan keamanan informasi telah dikembangkan dan
                  dokumentasikan dengan jelas
                </span>
              </div>

              <select
                onChange={(e) => setRisk1(parseInt(e.target.value))}
                value={risk1}
              >
                <option value="0">Tidak Dilakukan</option>
                <option value="1">Dalam Perencanaan</option>
                <option value="2">Diterapkan Sebagian</option>
                <option value="3">Diterapkan Menyeluruh</option>
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>
                  Kebijakan mencakup komitmen manajemen atas keamanan informasi
                </span>
              </div>
              <select onChange={(e) => setRisk2(parseInt(e.target.value))}>
                <option value="0">Tidak Dilakukan</option>
                <option value="1">Dalam Perencanaan</option>
                <option value="2">Diterapkan Sebagian</option>
                <option value="3">Diterapkan Menyeluruh</option>
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>
                  Kebijakan memperhitungkan tujuan organisasi dan kebutuhan
                  bisnis
                </span>
              </div>
              <select onChange={(e) => setRisk3(parseInt(e.target.value))}>
                <option value="0">Tidak Dilakukan</option>
                <option value="1">Dalam Perencanaan</option>
                <option value="2">Diterapkan Sebagian</option>
                <option value="3">Diterapkan Menyeluruh</option>
              </select>
            </div>
          </div>
          {/* kontrol keamanan 2 */}
          <div className={styles.parameter}>
            <span>Organisasi keamanan informasi</span>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>Lorem</span>
              </div>
              <select onChange={(e) => setRisk4(parseInt(e.target.value))}>
                <option value="0">Tidak Dilakukan</option>
                <option value="1">Dalam Perencanaan</option>
                <option value="2">Diterapkan Sebagian</option>
                <option value="3">Diterapkan Menyeluruh</option>
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>Lorem</span>
              </div>
              <select onChange={(e) => setRisk5(parseInt(e.target.value))}>
                <option value="0">Tidak Dilakukan</option>
                <option value="1">Dalam Perencanaan</option>
                <option value="2">Diterapkan Sebagian</option>
                <option value="3">Diterapkan Menyeluruh</option>
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>Lorem</span>
              </div>
              <select onChange={(e) => setRisk6(parseInt(e.target.value))}>
                <option value="0">Tidak Dilakukan</option>
                <option value="1">Dalam Perencanaan</option>
                <option value="2">Diterapkan Sebagian</option>
                <option value="3">Diterapkan Menyeluruh</option>
              </select>
            </div>
          </div>
        </div>

        {/* button action */}
        <Button color="primary" auto onClick={handleAdd}>
          Analisa
        </Button>

        {/* div result */}
        <div className={styles.result}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ASPEK</th>
                <th>SKOR</th>
                <th>LEVEL</th>
                <th>REKOMENDASI</th>
                <th>AKSI</th>
              </tr>
            </thead>
            <tbody>
              {userData.hasilMap.hasil.map((hasil: string, index: number) => (
                <tr key={index}>
                  <td>{userData.hasilMap.nama[index]}</td>
                  <td>{hasil}</td>
                  <td className={styles.skor}>
                    <div
                      className={styles[userData.hasilMap.colorLevel[index]]}
                    >
                      {userData.hasilMap.level[index]}
                    </div>
                  </td>
                  <td>{userData.hasilMap.rekomendasi[index]}</td>
                  <td>
                    <Button
                      color="error"
                      auto
                      onPress={() => handleDelete(index)}
                    >
                      <MdOutlineDeleteOutline />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal input null */}
        <Modal
          closeButton
          blur
          aria-labelledby="modal-title"
          open={modalError}
          onClose={closeHandler}
          className={styles.inter}
        >
          <Modal.Header>
            <Text id="modal-title" size={18} color="error">
              Error
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Text>Nama aspek tidak boleh kosong!</Text>
          </Modal.Body>
          <Modal.Footer>
            <Button auto flat color="error" onPress={closeHandler}>
              Tutup
            </Button>
          </Modal.Footer>
        </Modal>
      </main>
    </>
  );
}
