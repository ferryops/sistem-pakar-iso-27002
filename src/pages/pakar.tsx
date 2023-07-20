import styles from "@/styles/pakar.module.css";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import {
  Table,
  Button,
  Input,
  Modal,
  Row,
  Checkbox,
  Text,
  Avatar,
} from "@nextui-org/react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, firebase } from "@/utils/firebase";
import { useRouter } from "next/router";
import Select from "@/components/OptionAssessment";
import OptionAssessment from "@/components/OptionAssessment";

export default function Pakar() {
  const [modalError, setModalError] = useState(false);
  const [user, setUser] = useState<any>();
  const provider = new GoogleAuthProvider();
  const router = useRouter();

  // check user login
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      const userLogin = auth.currentUser;
      if (userLogin) {
        setUser(user);
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
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(user);
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

  // logout google
  const logout = () => {
    auth.signOut();
    window.localStorage.removeItem("emailForSignIn");
    // router.push("/login");
  };

  const closeHandler = () => {
    setModalError(false);
    console.log("closed");
  };

  const [aspek, setAspek] = useState("");
  const [risk11, setRisk11] = useState<number>(0);
  const [risk12, setRisk12] = useState<number>(0);
  const [risk13, setRisk13] = useState<number>(0);
  const [risk14, setRisk14] = useState<number>(0);
  const [risk15, setRisk15] = useState<number>(0);
  const [risk16, setRisk16] = useState<number>(0);
  const [risk17, setRisk17] = useState<number>(0);

  const [risk21, setRisk21] = useState<number>(0);
  const [risk22, setRisk22] = useState<number>(0);
  const [risk23, setRisk23] = useState<number>(0);
  const [risk24, setRisk24] = useState<number>(0);
  const [risk25, setRisk25] = useState<number>(0);
  const [risk26, setRisk26] = useState<number>(0);
  const [risk27, setRisk27] = useState<number>(0);

  const [hasil, setHasil] = useState([
    {
      nama: "",
      hasil: "",
      level: "",
      colorlevel: "",
      rekomendasi: "",
    },
  ]);

  const kirim = () => {
    // cek input user kosong
    if (aspek === "") {
      setModalError(true);
      return;
    }
    // kalkulasi nilai risk
    let totalRisk =
      risk11 + risk12 + risk13 + risk14 + risk15 + risk16 + risk17;
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
          "Risiko sangat serius bagi keamanan informasi organisasi Anda. Jika risiko ini terwujud, dampaknya bisa sangat merugikan organisasi dan menyebabkan kerugian besar. Tindakan mitigasi yang kuat diperlukan untuk mengurangi risiko ini\n halo bang ";
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

    setHasil((prevHasil) => [
      ...prevHasil,
      {
        nama: aspek,
        hasil: total.toString(),
        level: level,
        colorlevel: colorLevel,
        rekomendasi: rekomendasi,
      },
    ]);
    setAspek("");
  };

  const hapus = (index: any) => {
    setHasil(hasil.filter((element, i) => i !== index));
  };

  const assesment1 = [
    "null",
    "Apakah organisasi telah mengembangkan kebijakan keamanan informasi yang sesuai dengan kebutuhan dan persyaratan yang dijelaskan dalam ISO 27002?",
    "Bagaimana kebijakan keamanan informasi organisasi dikembangkan agar sesuai dengan karakteristik, risiko, dan kebutuhan unik organisasi?",
    "Apakah kebijakan keamanan informasi yang telah dikembangkan oleh organisasi terkait dan sejalan dengan kebijakan lainnya yang ada?",
    "Sejauh mana kebijakan keamanan informasi telah diterapkan secara konsisten di seluruh organisasi?",
    "Bagaimana organisasi memantau dan mengukur kepatuhan terhadap kebijakan keamanan informasi yang telah dikembangkan?",
    "Apakah dilakukan audit internal terhadap implementasi, kepatuhan, dan efektivitas kebijakan keamanan informasi?",
    "Bagaimana tinjauan manajemen dilakukan untuk memastikan kebijakan keamanan informasi tetap relevan dan sesuai dengan perubahan lingkungan bisnis dan kebutuhan organisasi?,",
  ];
  const assesment2 = ["null", "asyoss"];

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
            <b>Kebijakan keamanan informasi</b>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assesment1[1]}</span>
              </div>
              <select onChange={(e) => setRisk11(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assesment1[2]}</span>
              </div>
              <select onChange={(e) => setRisk12(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assesment1[3]}</span>
              </div>
              <select onChange={(e) => setRisk13(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assesment1[4]}</span>
              </div>
              <select onChange={(e) => setRisk14(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assesment1[5]}</span>
              </div>
              <select onChange={(e) => setRisk15(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assesment1[6]}</span>
              </div>
              <select onChange={(e) => setRisk16(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assesment1[7]}</span>
              </div>
              <select onChange={(e) => setRisk17(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
          </div>
          {/* kontrol keamanan 2 */}
          <div className={styles.parameter}>
            <span>Organisasi keamanan informasi</span>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assesment2[1]}</span>
              </div>
              <select onChange={(e) => setRisk21(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assesment2[2]}</span>
              </div>
              <select onChange={(e) => setRisk22(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assesment2[3]}</span>
              </div>
              <select onChange={(e) => setRisk23(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assesment2[4]}</span>
              </div>
              <select onChange={(e) => setRisk24(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assesment2[5]}</span>
              </div>
              <select onChange={(e) => setRisk25(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assesment2[6]}</span>
              </div>
              <select onChange={(e) => setRisk26(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
          </div>
        </div>

        {/* button action */}
        <Button color="primary" auto onClick={kirim}>
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
              {hasil.map((nilai, index) => (
                <tr key={index}>
                  <td>{nilai.nama}</td>
                  <td className={styles.skor}>{nilai.hasil}</td>
                  <td className={styles.skor}>
                    <div className={`${styles[nilai.colorlevel]}`}>
                      {nilai.level}
                    </div>
                  </td>
                  <td style={{ whiteSpace: "pre-line" }}>
                    <span>{nilai.rekomendasi}</span>
                  </td>
                  <td>
                    <Button color="error" auto onClick={() => hapus(index)}>
                      <MdOutlineDeleteOutline />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
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
