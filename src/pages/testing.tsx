import styles from "@/styles/pakar.module.css";
import { useState, useEffect } from "react";
import Head from "next/head";
import { Button, Input, Modal, Text, Avatar } from "@nextui-org/react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, firebase } from "@/utils/firebase";
import OptionAssessment from "@/components/OptionAssessment";

export default function Pakar() {
  const [modalError, setModalError] = useState(false);
  const [user, setUser] = useState<any>();
  const provider = new GoogleAuthProvider();

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

  const [risk31, setRisk31] = useState<number>(0);
  const [risk32, setRisk32] = useState<number>(0);
  const [risk33, setRisk33] = useState<number>(0);
  const [risk34, setRisk34] = useState<number>(0);
  const [risk35, setRisk35] = useState<number>(0);
  const [risk36, setRisk36] = useState<number>(0);
  const [risk37, setRisk37] = useState<number>(0);

  const [risk41, setRisk41] = useState<number>(0);
  const [risk42, setRisk42] = useState<number>(0);
  const [risk43, setRisk43] = useState<number>(0);
  const [risk44, setRisk44] = useState<number>(0);
  const [risk45, setRisk45] = useState<number>(0);
  const [risk46, setRisk46] = useState<number>(0);
  const [risk47, setRisk47] = useState<number>(0);

  const [risk51, setRisk51] = useState<number>(0);
  const [risk52, setRisk52] = useState<number>(0);
  const [risk53, setRisk53] = useState<number>(0);
  const [risk54, setRisk54] = useState<number>(0);
  const [risk55, setRisk55] = useState<number>(0);
  const [risk56, setRisk56] = useState<number>(0);
  const [risk57, setRisk57] = useState<number>(0);

  const [risk61, setRisk61] = useState<number>(0);
  const [risk62, setRisk62] = useState<number>(0);
  const [risk63, setRisk63] = useState<number>(0);
  const [risk64, setRisk64] = useState<number>(0);
  const [risk65, setRisk65] = useState<number>(0);
  const [risk66, setRisk66] = useState<number>(0);
  const [risk67, setRisk67] = useState<number>(0);

  const [risk71, setRisk71] = useState<number>(0);
  const [risk72, setRisk72] = useState<number>(0);
  const [risk73, setRisk73] = useState<number>(0);
  const [risk74, setRisk74] = useState<number>(0);
  const [risk75, setRisk75] = useState<number>(0);
  const [risk76, setRisk76] = useState<number>(0);
  const [risk77, setRisk77] = useState<number>(0);

  const [risk81, setRisk81] = useState<number>(0);
  const [risk82, setRisk82] = useState<number>(0);
  const [risk83, setRisk83] = useState<number>(0);
  const [risk84, setRisk84] = useState<number>(0);
  const [risk85, setRisk85] = useState<number>(0);
  const [risk86, setRisk86] = useState<number>(0);
  const [risk87, setRisk87] = useState<number>(0);

  const [risk91, setRisk91] = useState<number>(0);
  const [risk92, setRisk92] = useState<number>(0);
  const [risk93, setRisk93] = useState<number>(0);
  const [risk94, setRisk94] = useState<number>(0);
  const [risk95, setRisk95] = useState<number>(0);
  const [risk96, setRisk96] = useState<number>(0);
  const [risk97, setRisk97] = useState<number>(0);

  const [risk101, setRisk101] = useState<number>(0);
  const [risk102, setRisk102] = useState<number>(0);
  const [risk103, setRisk103] = useState<number>(0);
  const [risk104, setRisk104] = useState<number>(0);
  const [risk105, setRisk105] = useState<number>(0);
  const [risk106, setRisk106] = useState<number>(0);
  const [risk107, setRisk107] = useState<number>(0);

  const [risk111, setRisk111] = useState<number>(0);
  const [risk112, setRisk112] = useState<number>(0);
  const [risk113, setRisk113] = useState<number>(0);
  const [risk114, setRisk114] = useState<number>(0);
  const [risk115, setRisk115] = useState<number>(0);
  const [risk116, setRisk116] = useState<number>(0);
  const [risk117, setRisk117] = useState<number>(0);

  const [risk121, setRisk121] = useState<number>(0);
  const [risk122, setRisk122] = useState<number>(0);
  const [risk123, setRisk123] = useState<number>(0);
  const [risk124, setRisk124] = useState<number>(0);
  const [risk125, setRisk125] = useState<number>(0);
  const [risk126, setRisk126] = useState<number>(0);
  const [risk127, setRisk127] = useState<number>(0);

  const [risk131, setRisk131] = useState<number>(0);
  const [risk132, setRisk132] = useState<number>(0);
  const [risk133, setRisk133] = useState<number>(0);
  const [risk134, setRisk134] = useState<number>(0);
  const [risk135, setRisk135] = useState<number>(0);
  const [risk136, setRisk136] = useState<number>(0);
  const [risk137, setRisk137] = useState<number>(0);

  const [risk141, setRisk141] = useState<number>(0);
  const [risk142, setRisk142] = useState<number>(0);
  const [risk143, setRisk143] = useState<number>(0);
  const [risk144, setRisk144] = useState<number>(0);
  const [risk145, setRisk145] = useState<number>(0);
  const [risk146, setRisk146] = useState<number>(0);
  const [risk147, setRisk147] = useState<number>(0);

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
      risk11 +
      risk12 +
      risk13 +
      risk14 +
      risk15 +
      risk16 +
      risk17 +
      risk21 +
      risk22 +
      risk23 +
      risk24 +
      risk25 +
      risk26 +
      risk27 +
      risk31 +
      risk32 +
      risk33 +
      risk34 +
      risk35 +
      risk36 +
      risk37 +
      risk41 +
      risk42 +
      risk43 +
      risk44 +
      risk45 +
      risk46 +
      risk47 +
      risk51 +
      risk52 +
      risk53 +
      risk54 +
      risk55 +
      risk56 +
      risk57 +
      risk61 +
      risk62 +
      risk63 +
      risk64 +
      risk65 +
      risk66 +
      risk67 +
      risk71 +
      risk72 +
      risk73 +
      risk74 +
      risk75 +
      risk76 +
      risk77 +
      risk81 +
      risk82 +
      risk83 +
      risk84 +
      risk85 +
      risk86 +
      risk87 +
      risk91 +
      risk92 +
      risk93 +
      risk94 +
      risk95 +
      risk96 +
      risk97 +
      risk101 +
      risk102 +
      risk103 +
      risk104 +
      risk105 +
      risk106 +
      risk107 +
      risk111 +
      risk112 +
      risk113 +
      risk114 +
      risk115 +
      risk116 +
      risk117 +
      risk121 +
      risk122 +
      risk123 +
      risk124 +
      risk125 +
      risk126 +
      risk127 +
      risk131 +
      risk132 +
      risk133 +
      risk134 +
      risk135 +
      risk136 +
      risk137 +
      risk141 +
      risk142 +
      risk143 +
      risk144 +
      risk145 +
      risk146 +
      risk147;
    let total = totalRisk;
    let level: string;
    let colorLevel: string;
    let rekomendasi: string;

    let kontrol1: number = risk11 + risk12 + risk13 + risk14 + risk15 + risk16 + risk17;
    let kontrol2: number = risk21 + risk22 + risk23 + risk24 + risk25 + risk26 + risk27;
    let kontrol3: number = risk31 + risk32 + risk33 + risk34 + risk35 + risk36 + risk37;
    let kontrol4: number = risk41 + risk42 + risk43 + risk44 + risk45 + risk46 + risk47;
    let kontrol5: number = risk51 + risk52 + risk53 + risk54 + risk55 + risk56 + risk57;
    let kontrol6: number = risk61 + risk62 + risk63 + risk64 + risk65 + risk66 + risk67;
    let kontrol7: number = risk71 + risk72 + risk73 + risk74 + risk75 + risk76 + risk77;
    let kontrol8: number = risk81 + risk82 + risk83 + risk84 + risk85 + risk86 + risk87;
    let kontrol9: number = risk91 + risk92 + risk93 + risk94 + risk95 + risk96 + risk97;
    let kontrol10: number = risk101 + risk102 + risk103 + risk104 + risk105 + risk106 + risk107;
    let kontrol11: number = risk111 + risk112 + risk113 + risk114 + risk115 + risk116 + risk117;
    let kontrol12: number = risk121 + risk122 + risk123 + risk124 + risk125 + risk126 + risk127;
    let kontrol13: number = risk131 + risk132 + risk133 + risk134 + risk135 + risk136 + risk137;
    let kontrol14: number = risk141 + risk142 + risk143 + risk144 + risk145 + risk146 + risk147;

    let resultKontrol1,
      resultKontrol2,
      resultKontrol3,
      resultKontrol4,
      resultKontrol5,
      resultKontrol6,
      resultKontrol7,
      resultKontrol8,
      resultKontrol9,
      resultKontrol10,
      resultKontrol11,
      resultKontrol12,
      resultKontrol13,
      resultKontrol14;

    // kontrol 1
    switch (true) {
      case kontrol1 == 0:
        resultKontrol1 =
          "### Umpan balik Kebijakan keamanan informasi (Tidak Layak)\n\n Kontrol keamanan informasi ini tidak memenuhi standar ISO 27002 dan menghadirkan risiko serius bagi organisasi. Organisasi perlu melakukan evaluasi mendalam dan memperbaiki kontrol ini untuk memastikan kepatuhan dan perlindungan yang lebih baik terhadap informasi.";
        break;
      case kontrol1 == 1 || kontrol1 <= 7:
        resultKontrol1 =
          "### Umpan balik Kebijakan keamanan informasi(Memenuhi Kerangka Dasar)\n\n Kontrol ini memenuhi beberapa elemen dasar dari ISO 27002, tetapi masih memerlukan banyak perbaikan untuk mencapai tingkat kepatuhan yang lebih baik. Organisasi perlu mengidentifikasi area yang perlu diperbaiki dan meningkatkan detail serta ketepatan kebijakan.";
        break;
      case kontrol1 == 8 || kontrol1 <= 15:
        resultKontrol1 =
          "### Umpan balik Kebijakan keamanan informasi(Cukup Baik)\n\n Kontrol keamanan informasi ini cukup memenuhi persyaratan dasar ISO 27002 dan mencakup banyak elemen yang diperlukan. Organisasi perlu melakukan evaluasi rutin dan memperbaiki kebijakan sesuai dengan perubahan lingkungan dan ancaman keamanan.";
        break;
      case kontrol1 == 16 || kontrol1 <= 21:
        resultKontrol1 =
          "### Umpan balik Kebijakan keamanan informasi(Baik)\n\n Kontrol keamanan informasi ini sepenuhnya mematuhi standar ISO 27002 dan menunjukkan keunggulan dalam penerapan kebijakan keamanan informasi.";
        break;
      default:
        resultKontrol1 = "null";
        break;
    }
    // kontrol 2
    switch (true) {
      case kontrol2 == 0:
        resultKontrol2 =
          "### Umpan balik Organisasi keamanan informasi(Tidak Layak)\n\n Kontrol ini belum diterapkan atau diterapkan secara sangat tidak memadai dalam organisasi keamanan informasi. Kekurangan dalam implementasi dapat menyebabkan risiko keamanan yang tinggi dan rentan terhadap ancaman internal dan eksternal.";
        break;
      case kontrol2 == 1 || kontrol2 <= 7:
        resultKontrol2 =
          "### Umpan balik Organisasi keamanan informasi(Memenuhi Kerangka Dasar)\n\n Kontrol ini telah diimplementasikan secara dasar, namun ada beberapa kelemahan atau celah keamanan yang perlu diperbaiki. Implementasi kontrol ini mungkin belum konsisten dan tidak sepenuhnya mengikuti panduan yang ditetapkan oleh ISO 27002.";
        break;
      case kontrol2 == 8 || kontrol2 <= 15:
        resultKontrol2 =
          "### Umpan balik Organisasi keamanan informasi(Cukup Baik)\n\n Kontrol ini telah diimplementasikan dengan baik dan sebagian besar aspek keamanannya telah diterapkan secara memadai. Namun, mungkin masih ada beberapa area yang dapat ditingkatkan untuk meningkatkan keamanan secara keseluruhan.";
        break;
      case kontrol2 == 16 || kontrol2 <= 21:
        resultKontrol2 =
          "### Umpan balik Organisasi keamanan informasi(Baik)\n\n Kontrol ini telah diimplementasikan dengan sangat baik dan mencapai standar keamanan informasi yang diinginkan sesuai dengan ISO 27002.";
        break;
      default:
        resultKontrol2 = "null";
        break;
    }
    // kontrol 3
    switch (true) {
      case kontrol3 == 0:
        resultKontrol3 =
          "### Umpan balik Manajemen aset(Tidak Layak)\n\n Kontrol keamanan ini tidak dipatuhi atau diabaikan sepenuhnya. Risiko kehilangan, kebocoran, atau penyalahgunaan aset informasi sangat tinggi, dan organisasi tidak mengambil tindakan yang memadai untuk mengatasi masalah ini.";
        break;
      case kontrol3 == 1 || kontrol3 <= 7:
        resultKontrol3 =
          "### Umpan balik Manajemen aset(Memenuhi Kerangka Dasar)\n\n Organisasi memiliki kerangka dasar untuk mengelola aset informasi, namun implementasinya masih terbatas. Beberapa aset mungkin sudah terlindungi, tetapi masih ada area yang rentan dan memerlukan perhatian lebih.";
        break;
      case kontrol3 == 8 || kontrol3 <= 15:
        resultKontrol3 =
          "### Umpan balik Manajemen aset(Cukup Baik)\n\n Kontrol keamanan ini telah diimplementasikan dengan cukup baik oleh organisasi. Organisasi juga telah melaksanakan tindakan pemeliharaan rutin untuk memastikan aset tetap relevan dan aman dari ancaman yang mungkin timbul.";
        break;
      case kontrol3 == 16 || kontrol3 <= 21:
        resultKontrol3 =
          "### Umpan balik Manajemen aset(Baik)\n\n Organisasi telah mencapai tingkat keunggulan dalam mengelola aset informasi.";
        break;
      default:
        resultKontrol3 = "null";
        break;
    } // kontrol 4
    switch (true) {
      case kontrol4 == 0:
        resultKontrol4 =
          "### Umpan balik Keamanan sumber daya manusia(Tidak Layak)\n\n Tidak ada upaya untuk memberikan pelatihan dan kesadaran keamanan yang memadai kepada karyawan.";
        break;
      case kontrol4 == 1 || kontrol4 <= 7:
        resultKontrol4 =
          "### Umpan balik Keamanan sumber daya manusia(Memenuhi Kerangka Dasar)\n\n Sebagian besar karyawan memiliki kesadaran tentang pentingnya keamanan informasi dan terlibat dalam beberapa praktik keamanan. Meskipun ada kesadaran, keterlibatan aktif dalam mengidentifikasi dan melaporkan insiden keamanan masih perlu ditingkatkan.";
        break;
      case kontrol4 == 8 || kontrol4 <= 15:
        resultKontrol4 =
          "### Umpan balik Keamanan sumber daya manusia(Cukup Baik)\n\n Karyawan secara umum memiliki pemahaman yang baik tentang pentingnya keamanan informasi dan terlibat secara aktif dalam praktik keamanan. Karyawan cenderung melaporkan insiden keamanan dan bekerja sama dalam mengidentifikasi dan mengurangi risiko keamanan.";
        break;
      case kontrol4 == 16 || kontrol4 <= 21:
        resultKontrol4 =
          "### Umpan balik Keamanan sumber daya manusia(Baik)\n\n Karyawan memiliki kesadaran yang tinggi tentang pentingnya keamanan informasi dan secara proaktif terlibat dalam menjalankan praktik keamanan.";
        break;
      default:
        resultKontrol4 = "null";
        break;
    } // kontrol 5
    switch (true) {
      case kontrol5 == 0:
        resultKontrol5 =
          "### Umpan balik Akses kontrol(Tidak Layak)\n\n Kontrol keamanan ini tidak diimplementasikan atau diabaikan sepenuhnya. Tidak ada upaya yang dilakukan untuk melindungi informasi dari akses yang tidak sah, baik secara fisik maupun logis. Kondisi ini meningkatkan risiko kebocoran data dan potensi kehilangan informasi yang sangat sensitif.";
        break;
      case kontrol5 == 1 || kontrol5 <= 7:
        resultKontrol5 =
          "### Umpan balik Akses kontrol(Memenuhi Kerangka Dasar)\n\n Kontrol keamanan ini ada, tetapi implementasinya masih sangat terbatas dan belum sepenuhnya sesuai dengan standar ISO 27002. Beberapa upaya telah dilakukan untuk menerapkan kontrol akses fisik dan logis, namun masih ada kelemahan dan celah yang dapat dieksploitasi oleh pihak yang tidak sah.";
        break;
      case kontrol5 == 8 || kontrol5 <= 15:
        resultKontrol5 =
          "### Umpan balik Akses kontrol(Cukup Baik)\n\n Penerapan kontrol akses fisik dan logis telah mencapai tingkat yang cukup baik sesuai dengan ISO 27002. Upaya yang serius telah dilakukan untuk melindungi informasi dari akses yang tidak sah. Namun, masih ada beberapa area yang perlu ditingkatkan untuk mencapai tingkat keamanan yang optimal.";
        break;
      case kontrol5 == 16 || kontrol5 <= 21:
        resultKontrol5 =
          "### Umpan balik Akses kontrol(Baik)\n\n Kontrol keamanan ini diimplementasikan dengan sangat baik sesuai dengan standar ISO 27002. Semua persyaratan untuk menerapkan kontrol akses fisik dan logis telah dipenuhi dengan benar. Informasi sensitif dan kritis telah terlindungi dengan efektif dari akses yang tidak sah, baik dari segi fisik maupun logis. Sistem keamanan ini dianggap kuat dan handal.";
        break;
      default:
        resultKontrol5 = "null";
        break;
    } // kontrol 6
    switch (true) {
      case kontrol6 == 0:
        resultKontrol6 =
          "### Umpan balik Perencanaan dan pemulihan bencana(Tidak Layak)\n\n Organisasi ini tidak memiliki rencana pemulihan bencana yang jelas dan terstruktur untuk mengatasi gangguan layanan. Kurangnya perencanaan ini dapat menyebabkan ketidakmampuan untuk memulihkan layanan dengan efisien, menyebabkan kerugian yang signifikan bagi bisnis dan pelanggan.";
        break;
      case kontrol6 == 1 || kontrol6 <= 7:
        resultKontrol6 =
          "### Umpan balik Perencanaan dan pemulihan bencana(Memenuhi Kerangka Dasar)\n\n Organisasi ini telah mengambil langkah awal dalam mengembangkan rencana pemulihan bencana. Mereka telah mengidentifikasi beberapa risiko potensial dan mulai menyusun rencana dasar untuk mengatasi gangguan layanan. Namun, rencana ini mungkin masih perlu diperbaiki dan diperinci agar lebih efektif. ";
        break;
      case kontrol6 == 8 || kontrol6 <= 15:
        resultKontrol6 =
          "### Umpan balik Perencanaan dan pemulihan bencana(Cukup Baik)\n\n Organisasi ini telah berhasil mengembangkan dan mengimplementasikan rencana pemulihan bencana yang memadai. Rencana pemulihan ini juga telah diuji secara berkala dan telah melibatkan seluruh tim terkait. Meskipun ada ruang untuk peningkatan dan perbaikan, rencana pemulihan ini memberikan fondasi yang solid untuk menghadapi bencana dan meminimalkan dampaknya.";
        break;
      case kontrol6 == 16 || kontrol6 <= 21:
        resultKontrol6 =
          "### Umpan balik Perencanaan dan pemulihan bencana(Baik)\n\n Organisasi ini memiliki rencana pemulihan bencana yang sangat baik dan teruji. Rencana ini mencakup langkah-langkah yang rinci dan jelas untuk mengatasi berbagai jenis bencana dan gangguan layanan.";
        break;
      default:
        resultKontrol6 = "null";
        break;
    } // kontrol 7
    switch (true) {
      case kontrol7 == 0:
        resultKontrol7 =
          "### Umpan balik Manajemen keamanan operasional(Tidak Layak)\n\n Kontrol ini tidak memenuhi kerangka dasar yang diperlukan untuk memastikan operasi keamanan yang efektif. Pemantauan, pemeliharaan, dan perlindungan sistem tidak dilaksanakan dengan cukup, meninggalkan celah dalam keamanan dan berisiko untuk menghadapi ancaman keamanan.";
        break;
      case kontrol7 == 1 || kontrol7 <= 7:
        resultKontrol7 =
          "### Umpan balik Manajemen keamanan operasional(Memenuhi Kerangka Dasar)\n\n Kontrol ini memenuhi kerangka dasar untuk memastikan operasi keamanan yang efektif melalui pemantauan, pemeliharaan, dan perlindungan sistem. Namun, masih ada beberapa aspek yang perlu diperbaiki untuk mencapai tingkat keamanan yang optimal.";
        break;
      case kontrol7 == 8 || kontrol7 <= 15:
        resultKontrol7 =
          "### Umpan balik Manajemen keamanan operasional(Cukup Baik)\n\n Kontrol ini cukup baik dalam memastikan operasi keamanan yang efektif melalui pemantauan, pemeliharaan, dan perlindungan sistem. Sebagian besar kebutuhan keamanan terpenuhi, tetapi ada beberapa ruang untuk peningkatan dan penyesuaian untuk menghadapi perkembangan ancaman keamanan yang lebih baru.";
        break;
      case kontrol7 == 16 || kontrol7 <= 21:
        resultKontrol7 =
          "### Umpan balik Manajemen keamanan operasional(Baik)\n\n Kontrol telah diimplementasikan dengan baik dan mencakup aspek-aspek penting yang diperlukan untuk melindungi sistem dari ancaman keamanan. Dengan adanya kontrol ini, risiko keamanan dapat dikelola dengan baik dan sistem dapat beroperasi dalam kondisi yang lebih aman.";
        break;
      default:
        resultKontrol7 = "null";
        break;
    } // kontrol 8
    switch (true) {
      case kontrol8 == 0:
        resultKontrol8 =
          "### Umpan balik Keamanan komunikasi dan operasi(Tidak Layak)\n\n Kontrol ini tidak terlaksana dengan baik, mengakibatkan potensi kerentanannya dalam perlindungan informasi saat diproses, disimpan, dan ditransmisikan. Kelemahan dalam implementasi kontrol ini dapat menyebabkan pelanggaran keamanan dan risiko serius terhadap informasi sensitif.";
        break;
      case kontrol8 == 1 || kontrol8 <= 7:
        resultKontrol8 =
          "### Umpan balik Keamanan komunikasi dan operasi(Memenuhi Kerangka Dasar)\n\n Kontrol ini telah dipenuhi secara dasar dengan beberapa upaya untuk melindungi informasi saat diproses, disimpan, dan ditransmisikan. Namun, masih ada ruang untuk peningkatan dalam implementasi, pemantauan, dan pemeliharaan kontrol untuk mencapai tingkat keamanan yang lebih tinggi.";
        break;
      case kontrol8 == 8 || kontrol8 <= 15:
        resultKontrol8 =
          "### Umpan balik Keamanan komunikasi dan operasi(Cukup Baik)\n\n Kontrol ini telah diimplementasikan secara memadai dengan tindakan yang efektif dalam melindungi informasi saat diproses, disimpan, dan ditransmisikan. Upaya yang cukup baik telah dilakukan untuk mengurangi risiko keamanan, namun ada beberapa aspek yang dapat diperbaiki untuk memastikan keamanan yang lebih kuat.";
        break;
      case kontrol8 == 16 || kontrol8 <= 21:
        resultKontrol8 =
          "### Umpan balik Keamanan komunikasi dan operasi(Baik)\n\n Kontrol ini telah diimplementasikan dengan sangat baik dan efisien. Informasi saat diproses, disimpan, dan ditransmisikan dilindungi secara efektif dengan tindakan pencegahan dan pengamanan yang tepat. Organisasi telah mencapai tingkat keamanan yang sesuai dengan standar industri dan dapat diandalkan dalam melindungi informasi sensitif.";
        break;
      default:
        resultKontrol8 = "null";
        break;
        0;
    } // kontrol 9
    switch (true) {
      case kontrol9 == 0:
        resultKontrol9 =
          "### Umpan balik Pengendalian akses sistem informasi(Tidak Layak)\n\n Kontrol keamanan ini tidak diimplementasikan atau hanya terdapat upaya yang minim dalam mencegah akses yang tidak sah atau tidak pantas ke sistem informasi. Kebijakan dan mekanisme pengendalian akses belum disusun atau belum dijalankan dengan baik, meninggalkan celah bagi potensi ancaman keamanan yang dapat mengakibatkan akses yang tidak sah ke informasi kritis.";
        break;
      case kontrol9 == 1 || kontrol9 <= 7:
        resultKontrol9 =
          "### Umpan balik Pengendalian akses sistem informasi(Memenuhi Kerangka Dasar)\n\n Kontrol keamanan ini sebagian besar telah diimplementasikan dengan mengacu pada kerangka dasar kebijakan dan mekanisme pengendalian akses. Namun, beberapa area mungkin masih perlu perbaikan atau pembaruan untuk menutup celah keamanan yang mungkin ada.";
        break;
      case kontrol9 == 8 || kontrol9 <= 15:
        resultKontrol9 =
          "### Umpan balik Pengendalian akses sistem informasi(Cukup Baik)\n\n Kontrol keamanan ini secara substansial telah diterapkan dan sesuai dengan kebijakan dan mekanisme pengendalian akses.Pihak yang berwenang secara aktif mengawasi dan melacak aktivitas akses, dan tindakan pencegahan lanjutan dilakukan secara proaktif untuk mengatasi potensi masalah keamanan.";
        break;
      case kontrol9 == 16 || kontrol9 <= 21:
        resultKontrol9 =
          "### Umpan balik Pengendalian akses sistem informasi(Baik)\n\n Kontrol keamanan ini telah diimplementasikan secara menyeluruh, efektif, dan efisien.";
        break;
      default:
        resultKontrol9 = "null";
        break;
    } // kontrol 10
    switch (true) {
      case kontrol10 == 0:
        resultKontrol10 =
          "### Umpan balik Perolehan, pengembangan, dan pemeliharaan sistem informasi(Tidak Layak)\n\n Kontrol keamanan ini tidak diterapkan sepenuhnya dalam siklus hidup pengembangan sistem informasi, menyebabkan risiko potensial terhadap keamanan informasi dan kemungkinan terjadinya celah keamanan. Organisasi perlu segera memperhatikan dan mengatasi kekurangan dalam mengintegrasikan aspek keamanan dalam seluruh tahapan pengembangan sistem informasi.";
        break;
      case kontrol10 == 1 || kontrol10 <= 7:
        resultKontrol10 =
          "### Umpan balik Perolehan, pengembangan, dan pemeliharaan sistem informasi(Memenuhi Kerangka Dasar)\n\n Organisasi telah menciptakan kerangka dasar untuk mengintegrasikan keamanan dalam siklus hidup pengembangan sistem informasi. Namun, penerapan dan kepatuhan terhadap kontrol ini mungkin belum konsisten di seluruh proses pengembangan. Perlu dilakukan evaluasi lebih lanjut dan perbaikan untuk memastikan penerapan yang konsisten dan efektif.";
        break;
      case kontrol10 == 8 || kontrol10 <= 15:
        resultKontrol10 =
          "### Umpan balik Perolehan, pengembangan, dan pemeliharaan sistem informasi(Cukup Baik)\n\n Organisasi telah berhasil mengintegrasikan aspek keamanan dalam sebagian besar tahapan pengembangan, namun beberapa bagian mungkin masih terlalu lemah atau kurang terdefinisi dengan baik.";
        break;
      case kontrol10 == 16 || kontrol10 <= 21:
        resultKontrol10 =
          "### Umpan balik Perolehan, pengembangan, dan pemeliharaan sistem informasi(Baik)\n\n Organisasi telah berhasil mengintegrasikan keamanan secara holistik dalam seluruh siklus hidup pengembangan sistem informasi.";
        break;
      default:
        resultKontrol10 = "null";
        break;
    } // kontrol 11
    switch (true) {
      case kontrol11 == 0:
        resultKontrol11 =
          "### Umpan balik Pengelolaan ketidaksesuaian(Tidak Layak)\n\n Organisasi tidak memiliki prosedur yang tepat untuk menangani insiden keamanan, sehingga dapat menyebabkan eskalasi masalah dan meningkatkan risiko keamanan keseluruhan. Selain itu, juga tidak ada rencana tindakan yang jelas untuk mengurangi dampak dari insiden keamanan yang terjadi.";
        break;
      case kontrol11 == 1 || kontrol11 <= 7:
        resultKontrol11 =
          "### Umpan balik Pengelolaan ketidaksesuaian(Memenuhi Kerangka Dasar)\n\n Organisasi memiliki beberapa prosedur dan kebijakan yang relevan untuk mengidentifikasi, mengelola, dan menangani insiden keamanan dan pelanggaran keamanan yang terjadi. Namun, beberapa aspek mungkin belum sepenuhnya tertutupi atau terdokumentasi dengan jelas. Reaksi terhadap insiden keamanan mungkin terkadang kurang terkoordinasi, dan analisis akar penyebab pelanggaran keamanan mungkin perlu ditingkatkan.";
        break;
      case kontrol11 == 8 || kontrol11 <= 15:
        resultKontrol11 =
          "### Umpan balik Pengelolaan ketidaksesuaian(Cukup Baik)\n\n Organisasi secara aktif menerapkan kebijakan dan prosedur yang efektif untuk mengidentifikasi, mengelola, dan menangani insiden keamanan serta pelanggaran keamanan yang terjadi. Tim keamanan sering melakukan analisis akar penyebab insiden untuk mengurangi kemungkinan terulangnya peristiwa serupa di masa depan. Namun, ada ruang untuk meningkatkan reaksi terhadap insiden keamanan yang lebih cepat dan lebih terkoordinasi serta untuk memperbaiki laporan dan dokumentasi insiden.";
        break;
      case kontrol11 == 16 || kontrol11 <= 21:
        resultKontrol11 =
          "### Umpan balik Pengelolaan ketidaksesuaian(Baik)\n\n Organisasi telah berhasil menerapkan kontrol keamanan ini dengan sangat baik.";
        break;
      default:
        resultKontrol11 = "null";
        break;
    } // kontrol 12
    switch (true) {
      case kontrol12 == 0:
        resultKontrol12 =
          "### Umpan balik Aspek keamanan pada hubungan bisnis(Tidak Layak)\n\n Organisasi tidak memiliki kebijakan formal atau prosedur yang mengatur perlindungan informasi saat menjalin hubungan bisnis dengan pihak eksternal. Ini dapat menyebabkan kebocoran data, risiko pencurian informasi, atau ketidakmampuan untuk mengidentifikasi ancaman keamanan yang mungkin timbul dari keterlibatan pihak eksternal.";
        break;
      case kontrol12 == 1 || kontrol12 <= 7:
        resultKontrol12 =
          "### Umpan balik Aspek keamanan pada hubungan bisnis(Memenuhi Kerangka Dasar)\n\n Organisasi telah mengadopsi kebijakan formal yang mengatur dan melindungi informasi selama berhubungan bisnis dengan pihak eksternal. Selain itu, kebijakan ini harus mencakup penilaian risiko, kontrak kerahasiaan, dan pembatasan akses informasi yang tepat. Meskipun demikian, implementasi dan pemantauan dapat ditingkatkan untuk memastikan keamanan informasi yang lebih kuat.";
        break;
      case kontrol12 == 8 || kontrol12 <= 15:
        resultKontrol12 =
          "### Umpan balik Aspek keamanan pada hubungan bisnis(Cukup Baik)\n\n Organisasi memiliki kebijakan yang jelas dan komprehensif yang melindungi informasi selama berhubungan bisnis dengan pihak eksternal. Selain itu, kebijakan ini telah diimplementasikan secara efektif dan diikuti oleh seluruh anggota organisasi. Pemantauan dan penilaian risiko secara berkala juga dilakukan untuk memastikan kebijakan tetap relevan dan efektif menghadapi ancaman keamanan yang terus berkembang.";
        break;
      case kontrol12 == 16 || kontrol12 <= 21:
        resultKontrol12 =
          "### Umpan balik Aspek keamanan pada hubungan bisnis(Baik)\n\n Organisasi memiliki kebijakan yang kuat, sistematis, dan dijalankan secara konsisten untuk melindungi informasi selama menjalin hubungan bisnis dengan pihak eksternal.";
        break;
      default:
        resultKontrol12 = "null";
        break;
    } // kontrol 13
    switch (true) {
      case kontrol13 == 0:
        resultKontrol13 =
          "### Umpan balik Kepatuhan terhadap standar(Tidak Layak)\n\n Organisasi belum memiliki prosedur formal untuk mengidentifikasi dan memastikan kepatuhan dengan persyaratan hukum, regulasi, dan standar industri yang berlaku. Kebijakan yang ada tidak mencakup panduan khusus mengenai pemenuhan persyaratan hukum terkini.";
        break;
      case kontrol13 == 1 || kontrol13 <= 7:
        resultKontrol13 =
          "### Umpan balik Kepatuhan terhadap standar(Memenuhi Kerangka Dasar)\n\n Organisasi memiliki kerangka dasar untuk memastikan kepatuhan dengan persyaratan hukum, regulasi, dan standar industri. Namun, belum ada langkah-langkah rinci yang ditetapkan untuk menerapkan persyaratan ini ke dalam operasi sehari-hari. Beberapa dokumen kebijakan telah disusun, tetapi belum ada proses yang jelas untuk mengidentifikasi dan meninjau perubahan hukum atau regulasi yang relevan secara teratur.";
        break;
      case kontrol13 == 8 || kontrol13 <= 15:
        resultKontrol13 =
          "### Umpan balik Kepatuhan terhadap standar(Cukup Baik)\n\n Organisasi telah menetapkan kebijakan dan prosedur formal untuk memastikan kepatuhan dengan persyaratan hukum, regulasi, dan standar industri yang berlaku. Ada tim khusus atau personil yang ditugaskan untuk memantau perubahan hukum yang relevan dan memastikan kebijakan internal selaras dengan perubahan tersebut. Namun, belum ada langkah-langkah konkret yang dilakukan untuk mengukur efektivitas kepatuhan secara reguler atau mengevaluasi risiko kepatuhan.";
        break;
      case kontrol13 == 16 || kontrol13 <= 21:
        resultKontrol13 =
          "### Umpan balik Kepatuhan terhadap standar(Baik)\n\n Organisasi telah mengadopsi pendekatan sistematis untuk memastikan kepatuhan dengan persyaratan hukum, regulasi, dan standar industri yang berlaku.";
        break;
      default:
        resultKontrol13 = "null";
        break;
    } // kontro l4
    switch (true) {
      case kontrol14 == 0:
        resultKontrol14 =
          "### Umpan balik Audit keamanan informasi(Tidak Layak)\n\n Organisasi tidak memiliki proses audit keamanan informasi yang terstruktur dan terjadwal. Tidak ada upaya yang jelas untuk mengevaluasi secara teratur efektivitas kontrol keamanan informasi. Karena tidak ada audit yang dilakukan, potensi risiko dan kerentanannya tidak teridentifikasi secara sistematis, meninggalkan organisasi rentan terhadap ancaman keamanan yang tidak terdeteksi.";
        break;
      case kontrol14 == 1 || kontrol14 <= 7:
        resultKontrol14 =
          "### Umpan balik Audit keamanan informasi(Memenuhi Kerangka Dasar)\n\n Organisasi telah menetapkan proses audit keamanan informasi yang dasar dan terjadwal. Audit dilakukan sesuai dengan jadwal tertentu, tetapi mungkin tidak selalu komprehensif atau mendalam. Meskipun telah ada upaya untuk memenuhi kerangka dasar ISO 27002, proses audit masih membutuhkan peningkatan agar menjadi lebih komprehensif dan efektif.";
        break;
      case kontrol14 == 8 || kontrol14 <= 15:
        resultKontrol14 =
          "### Umpan balik Audit keamanan informasi(Cukup Baik)\n\n Organisasi secara teratur melakukan audit keamanan informasi sesuai dengan kerangka dasar ISO 27002. Proses audit terjadwal dan mencakup sebagian besar kontrol keamanan informasi yang relevan. Meskipun audit telah dilakukan dengan baik, masih ada ruang untuk meningkatkan ketelitian dan mendalamnya evaluasi agar menghadapi ancaman keamanan yang semakin kompleks.";
        break;
      case kontrol14 == 16 || kontrol14 <= 21:
        resultKontrol14 =
          "### Umpan balik Audit keamanan informasi(Baik)\n\n Organisasi secara konsisten dan teratur melakukan audit keamanan informasi sesuai dengan standar ISO 27002.";
        break;
      default:
        resultKontrol14 = "null";
        break;
    }

    // total skor
    switch (true) {
      case total == 0 || total <= 50:
        level = "Risiko Tinggi";
        colorLevel = "error";
        rekomendasi = `===Hasil Analisa===\n\nRisiko sangat serius bagi keamanan informasi organisasi Anda. Jika risiko ini terwujud, dampaknya bisa sangat merugikan organisasi dan menyebabkan kerugian besar. Tindakan mitigasi yang kuat diperlukan untuk mengurangi risiko ini.\n\n ${resultKontrol1} \n\n ${resultKontrol2} \n\n ${resultKontrol3} \n\n ${resultKontrol4} \n\n ${resultKontrol5} \n\n ${resultKontrol6} \n\n ${resultKontrol7} \n\n ${resultKontrol8} \n\n ${resultKontrol9} \n\n ${resultKontrol10} \n\n ${resultKontrol11} \n\n ${resultKontrol12} \n\n ${resultKontrol13} \n\n ${resultKontrol14}`;
        break;
      case total == 51 || total <= 99:
        level = "Risiko Sedang";
        colorLevel = "warning";
        rekomendasi = `===Hasil Analisa===\n\nRisiko menunjukkan ancaman yang memiliki dampak moderat terhadap keamanan informasi organisasi Anda. Meskipun tidak seberat risiko tinggi, tetap perlu tindakan pencegahan dan pengendalian untuk mengurangi kemungkinan terjadinya risiko ini.\n\n ${resultKontrol1} \n\n ${resultKontrol2} \n\n ${resultKontrol3} \n\n ${resultKontrol4} \n\n ${resultKontrol5} \n\n ${resultKontrol6} \n\n ${resultKontrol7} \n\n ${resultKontrol8} \n\n ${resultKontrol9} \n\n ${resultKontrol10} \n\n ${resultKontrol11} \n\n ${resultKontrol12} \n\n ${resultKontrol13} \n\n ${resultKontrol14}`;
        break;
      case total == 100 || total <= 199:
        level = "Risiko Rendah";
        colorLevel = "primary";
        rekomendasi = `===Hasil Analisa===\n\nRisiko memiliki dampak minimal atau terbatas terhadap keamanan informasi organisasi Anda. Risiko ini masih perlu diawasi dan diantisipasi, tetapi dapat dihadapi dengan kontrol yang memadai.\n\n ${resultKontrol1} \n\n ${resultKontrol2} \n\n ${resultKontrol3} \n\n ${resultKontrol4} \n\n ${resultKontrol5} \n\n ${resultKontrol6} \n\n ${resultKontrol7} \n\n ${resultKontrol8} \n\n ${resultKontrol9} \n\n ${resultKontrol10} \n\n ${resultKontrol11} \n\n ${resultKontrol12} \n\n ${resultKontrol13} \n\n ${resultKontrol14}`;
        break;
      case total == 200 || total <= 294:
        level = "Risiko Sangat Rendah";
        colorLevel = "success";
        rekomendasi = `===Hasil Analisa===\n\nRisiko sangat rendah, hampir tidak memiliki dampak signifikan terhadap keamanan informasi organisasi Anda. Risiko ini umumnya dapat ditangani dengan kontrol sederhana dan penerimaan risiko.\n\n ${resultKontrol1} \n\n ${resultKontrol2} \n\n ${resultKontrol3} \n\n ${resultKontrol4} \n\n ${resultKontrol5} \n\n ${resultKontrol6} \n\n ${resultKontrol7} \n\n ${resultKontrol8} \n\n ${resultKontrol9} \n\n ${resultKontrol10} \n\n ${resultKontrol11} \n\n ${resultKontrol12} \n\n ${resultKontrol13} \n\n ${resultKontrol14}`;
        break;
      default:
        level = "Risiko Tinggi";
        colorLevel = "error";
        rekomendasi = `===Hasil Analisa===\n\nRisiko sangat serius bagi keamanan informasi organisasi Anda. Jika risiko ini terwujud, dampaknya bisa sangat merugikan organisasi dan menyebabkan kerugian besar. Tindakan mitigasi yang kuat diperlukan untuk mengurangi risiko ini.\n\n ${resultKontrol1} \n\n ${resultKontrol2} \n\n ${resultKontrol3} \n\n ${resultKontrol4} \n\n ${resultKontrol5} \n\n ${resultKontrol6} \n\n ${resultKontrol7} \n\n ${resultKontrol8} \n\n ${resultKontrol9} \n\n ${resultKontrol10} \n\n ${resultKontrol11} \n\n ${resultKontrol12} \n\n ${resultKontrol13} \n\n ${resultKontrol14}`;
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

  const assessment1 = [
    "null",
    "Apakah organisasi telah mengembangkan kebijakan keamanan informasi yang sesuai dengan kebutuhan dan persyaratan yang dijelaskan dalam ISO 27002?",
    "Bagaimana kebijakan keamanan informasi organisasi dikembangkan agar sesuai dengan karakteristik, risiko, dan kebutuhan unik organisasi?",
    "Apakah kebijakan keamanan informasi yang telah dikembangkan oleh organisasi terkait dan sejalan dengan kebijakan lainnya yang ada?",
    "Sejauh mana kebijakan keamanan informasi telah diterapkan secara konsisten di seluruh organisasi?",
    "Bagaimana organisasi memantau dan mengukur kepatuhan terhadap kebijakan keamanan informasi yang telah dikembangkan?",
    "Apakah dilakukan audit internal terhadap implementasi, kepatuhan, dan efektivitas kebijakan keamanan informasi?",
    "Bagaimana tinjauan manajemen dilakukan untuk memastikan kebijakan keamanan informasi tetap relevan dan sesuai dengan perubahan lingkungan bisnis dan kebutuhan organisasi?,",
  ];
  const assessment2 = [
    "null",
    "Apakah organisasi memiliki struktur organisasi yang ditetapkan secara jelas untuk mengelola dan bertanggung jawab atas keamanan informasi?",
    "Apakah struktur organisasi keamanan informasi dirancang dan diimplementasikan dengan baik dalam organisasi?",
    "Apakah peran dan tanggung jawab dalam pengelolaan keamanan informasi telah ditetapkan dengan jelas?",
    "Apakah ada unit atau departemen khusus yang fokus pada keamanan informasi dan memiliki kewenangan yang memadai di dalam organisasi?",
    "Apakah terdapat kolaborasi yang baik antara tim keamanan informasi dan unit lain dalam organisasi, seperti manajemen senior, departemen TI, dan bagian operasional?",
    "Apakah organisasi memiliki proses dan mekanisme yang efektif untuk melaporkan, menangani, dan mengelola insiden keamanan informasi?",
    "Apakah personel yang ditugaskan untuk mengelola keamanan informasi memiliki pengetahuan, keterampilan, dan pelatihan yang diperlukan untuk melaksanakan tugas mereka?",
  ];
  const assessment3 = [
    "null",
    "Apakah organisasi memiliki proses yang ditetapkan untuk mengidentifikasi, mengklasifikasikan, dan mengelola aset informasi yang dimiliki?",
    "Apakah ada kebijakan dan prosedur yang jelas untuk melindungi aset informasi organisasi, termasuk tindakan pengamanan yang tepat?",
    "Apakah aset informasi organisasi telah diidentifikasi dengan jelas, termasuk kepemilikan dan tanggung jawab atas aset tersebut?",
    "Apakah organisasi memiliki langkah-langkah untuk memastikan perlindungan aset informasi dari ancaman dan risiko yang ada?",
    "Apakah ada prosedur yang ditetapkan untuk memelihara dan memantau kondisi serta keamanan aset informasi organisasi?",
    "Apakah terdapat kebijakan atau prosedur yang mengatur pemindahan, penghapusan, atau pemusnahan aset informasi yang tidak lagi diperlukan atau relevan?",
    "Apakah organisasi memiliki mekanisme untuk mendeteksi, melaporkan, dan menangani kehilangan atau penyalahgunaan aset informasi?",
  ];
  const assessment4 = [
    "null",
    "Apakah organisasi memiliki program atau kebijakan yang secara khusus dirancang untuk meningkatkan kesadaran keamanan informasi di kalangan karyawan?",
    "Apakah karyawan menerima pelatihan keamanan informasi yang tepat dan berkala, termasuk penekanan pada praktik keamanan yang relevan dengan tugas dan tanggung jawab mereka?",
    "Apakah terdapat kebijakan atau prosedur yang memastikan bahwa karyawan memahami dan mematuhi praktik keamanan informasi yang telah ditetapkan?",
    "Apakah organisasi memiliki mekanisme untuk melibatkan karyawan dalam identifikasi, penilaian, dan pengurangan risiko keamanan informasi?",
    "Apakah terdapat insentif atau penghargaan yang diberikan kepada karyawan yang berkontribusi secara positif dalam praktik keamanan informasi?",
    "Apakah organisasi memiliki prosedur yang efektif untuk mengelola perubahan peran, mutasi, atau pemutusan hubungan kerja dengan karyawan dalam konteks keamanan informasi?",
    "Apakah terdapat mekanisme untuk melaporkan pelanggaran keamanan informasi dan apakah karyawan merasa nyaman melaporkannya?",
  ];
  const assessment5 = [
    "null",
    "Apakah organisasi memiliki kebijakan dan prosedur yang jelas terkait dengan kontrol akses fisik dan logis untuk melindungi informasi yang dimiliki?",
    "Apakah terdapat pengaturan fisik yang memadai, seperti penguncian pintu, pengawasan area terbatas, dan penggunaan kartu akses, untuk mencegah akses fisik yang tidak sah ke ruang dan fasilitas yang mengandung informasi sensitif?",
    "Apakah terdapat mekanisme untuk mengelola dan mengontrol hak akses pengguna terhadap sistem informasi yang berbasis logis?",
    "Apakah prosedur autentikasi yang kuat, seperti penggunaan kata sandi yang kompleks, multi-faktor, atau biometrik, diterapkan untuk mengamankan akses logis terhadap informasi?",
    "Apakah organisasi melakukan pengawasan dan pemantauan terhadap aktivitas akses fisik dan logis untuk mendeteksi dan mengatasi upaya akses yang tidak sah?",
    "Apakah ada kebijakan dan prosedur yang ditetapkan untuk mengelola perubahan terkait hak akses fisik dan logis, termasuk pengangkatan hak akses yang tidak lagi diperlukan?",
    "Apakah organisasi memiliki proses untuk melakukan audit terhadap kontrol akses fisik dan logis secara berkala guna memastikan kepatuhan dan keefektifan implementasinya?",
  ];
  const assessment6 = [
    "null",
    "Apakah organisasi telah mengembangkan rencana pemulihan bencana yang memadai untuk mengatasi gangguan layanan yang mungkin terjadi?",
    "Apakah proses identifikasi risiko dan analisis dampak telah dilakukan untuk menyusun rencana pemulihan bencana yang tepat dan relevan?",
    "Apakah rencana pemulihan bencana mencakup langkah-langkah yang jelas untuk memulihkan layanan dengan cepat dan efisien setelah terjadinya gangguan?",
    "Apakah ada mekanisme untuk menguji dan melatih rencana pemulihan bencana secara berkala guna memastikan keandalan dan kesiapan saat diimplementasikan?",
    "Apakah rencana pemulihan bencana diperbarui secara teratur sesuai dengan perubahan yang terjadi dalam infrastruktur teknologi dan kebutuhan organisasi?",
    "Apakah peran dan tanggung jawab individu atau tim yang bertanggung jawab dalam pelaksanaan rencana pemulihan bencana telah ditetapkan dengan jelas?",
    "Apakah ada mekanisme pelaporan dan evaluasi setelah terjadinya gangguan yang memungkinkan organisasi untuk mengidentifikasi pelajaran dan melakukan perbaikan berkelanjutan pada rencana pemulihan bencana?",
  ];
  const assessment7 = [
    "null",
    "Apakah organisasi memiliki proses pemantauan yang efektif untuk mengawasi operasi keamanan dan mendeteksi potensi ancaman atau pelanggaran keamanan?",
    "Apakah ada jadwal dan prosedur pemeliharaan yang ditetapkan untuk memastikan keberlanjutan dan kinerja optimal sistem keamanan?",
    "Apakah sistem keamanan organisasi dilindungi secara memadai dari serangan dan gangguan dengan menggunakan teknologi dan solusi keamanan yang sesuai?",
    "Apakah telah ditetapkan kebijakan dan prosedur untuk menjaga kerahasiaan, integritas, dan ketersediaan data dan sistem?",
    "Apakah organisasi memiliki prosedur pemulihan bencana yang memadai untuk mengatasi kerusakan atau gangguan yang dapat terjadi pada sistem keamanan operasional?",
    "Apakah dilakukan penilaian risiko secara berkala terhadap sistem keamanan operasional guna mengidentifikasi ancaman baru dan memastikan langkah-langkah perlindungan yang relevan?",
    "Apakah organisasi memiliki mekanisme pelaporan dan penanganan insiden yang efektif untuk mengatasi dan merespons kejadian keamanan yang mungkin terjadi?",
  ];

  const assessment8 = [
    "null",
    "Apakah ada kebijakan dan prosedur yang telah ditetapkan untuk melindungi informasi saat diproses, disimpan, dan ditransmisikan?",
    "Apakah dilakukan enkripsi untuk melindungi kerahasiaan dan integritas informasi yang diproses, disimpan, atau ditransmisikan melalui jaringan atau media lainnya?",
    "Apakah ada mekanisme pengelolaan kunci yang aman untuk mendukung implementasi enkripsi dan menghindari penggunaan kunci yang lemah atau tidak aman?",
    "Apakah terdapat pemantauan dan pengendalian yang efektif untuk melindungi informasi saat diproses, seperti kontrol akses, pemisahan tugas, dan pembatasan hak akses?",
    "Apakah langkah-langkah keamanan teknis telah diimplementasikan untuk melindungi informasi saat disimpan, seperti penggunaan firewall, antivirus, dan mekanisme keamanan lainnya?",
    "Apakah ada kebijakan dan prosedur yang mengatur penggunaan perangkat seluler, perangkat USB, dan media penyimpanan lainnya untuk mencegah kebocoran atau penyalahgunaan informasi?",
    "Apakah ada langkah-langkah perlindungan yang efektif untuk melindungi informasi saat ditransmisikan melalui jaringan, seperti penggunaan VPN, protokol keamanan, atau tautan aman?",
  ];

  const assessment9 = [
    "null",
    "Apakah ada kebijakan dan prosedur yang jelas untuk mengelola akses ke sistem informasi?",
    "Apakah kebijakan dan prosedur tersebut dikomunikasikan kepada semua pengguna sistem informasi?",
    "Apakah ada proses untuk memverifikasi identitas pengguna sebelum mereka diberikan akses ke sistem informasi?",
    "Apakah ada proses untuk membatasi akses pengguna ke data dan sistem yang mereka butuhkan untuk melakukan pekerjaan mereka?",
    "Apakah ada proses untuk melacak akses pengguna ke sistem informasi dan data?",
    "Apakah ada proses untuk menanggapi akses yang tidak sah atau tidak pantas ke sistem informasi?",
    "Apakah ada proses untuk memulihkan sistem informasi dari akses yang tidak sah atau tidak pantas?",
  ];

  const assessment10 = [
    "null",
    "Apakah ada kebijakan dan prosedur yang jelas untuk integrasi keamanan dalam siklus hidup pengembangan sistem informasi?",
    "Apakah kebijakan dan prosedur tersebut dikomunikasikan kepada semua pihak yang terlibat dalam pengembangan sistem informasi?",
    "Apakah ada proses untuk mengidentifikasi dan mengevaluasi risiko keamanan pada sistem informasi yang sedang dikembangkan?",
    "Apakah ada proses untuk mengurangi risiko keamanan pada sistem informasi yang sedang dikembangkan?",
    "Apakah ada proses untuk menguji keamanan sistem informasi yang sedang dikembangkan?",
    "Apakah ada proses untuk mendokumentasikan keamanan sistem informasi yang sedang dikembangkan?",
    "Apakah ada proses untuk memelihara keamanan sistem informasi yang telah dikembangkan?",
  ];

  const assessment11 = [
    "null",
    "Apakah organisasi memiliki kebijakan dan prosedur yang ditetapkan untuk mengelola insiden keamanan dan pelanggaran keamanan yang terjadi?",
    "Apakah terdapat mekanisme pelaporan yang efektif untuk melaporkan insiden keamanan dan pelanggaran keamanan kepada pihak yang berwenang?",
    "Apakah organisasi memiliki tim atau personil yang ditugaskan secara khusus untuk menangani dan merespons insiden keamanan dengan cepat dan efektif?",
    "Apakah ada proses investigasi yang ditetapkan untuk menganalisis penyebab dan dampak insiden keamanan serta untuk mengambil tindakan yang sesuai?",
    "Apakah dilakukan dokumentasi dan pelaporan yang tepat terkait dengan insiden keamanan dan langkah-langkah yang diambil untuk menanganinya?",
    "Apakah organisasi melakukan pelatihan dan kesadaran kepada karyawan terkait dengan pelaporan insiden keamanan dan pentingnya kerjasama dalam penanganannya?",
    "Apakah terdapat prosedur pemulihan setelah terjadinya insiden keamanan untuk mengembalikan sistem dan data ke keadaan yang aman dan operasional?",
  ];

  const assessment12 = [
    "null",
    "Apakah organisasi memiliki kebijakan dan prosedur yang mengatur keamanan informasi saat menjalin hubungan bisnis dengan pihak eksternal?",
    "Apakah dilakukan evaluasi risiko terkait dengan hubungan bisnis dengan pihak eksternal untuk memastikan perlindungan informasi dan kepatuhan terhadap standar keamanan yang berlaku?",
    "Apakah terdapat perjanjian kerahasiaan atau kontrak keamanan yang ditetapkan dengan pihak eksternal untuk melindungi informasi rahasia atau sensitif?",
    "Apakah ada mekanisme pengawasan dan pemantauan yang efektif untuk mengontrol akses dan penggunaan informasi oleh pihak eksternal?",
    "Apakah terdapat proses pengendalian untuk memastikan bahwa informasi yang dibagikan kepada pihak eksternal hanya sesuai dengan kebutuhan bisnis dan sesuai dengan tingkat keamanan yang telah ditentukan?",
    "Apakah dilakukan pemantauan terhadap kepatuhan pihak eksternal terhadap persyaratan keamanan informasi yang telah ditetapkan?",
    "Apakah organisasi memiliki mekanisme untuk menangani pelanggaran keamanan yang dilakukan oleh pihak eksternal dan mengambil tindakan yang sesuai?",
  ];

  const assessment13 = [
    null,
    "Apakah organisasi memiliki proses yang ditetapkan untuk memastikan kepatuhan terhadap persyaratan hukum yang berlaku terkait dengan keamanan informasi?",
    "Apakah dilakukan evaluasi terhadap regulasi dan persyaratan industri yang berlaku untuk memastikan kepatuhan dan implementasi yang tepat?",
    "Apakah ada tim atau personil yang ditugaskan secara khusus untuk memantau dan mengelola kepatuhan terhadap persyaratan hukum, regulasi, dan standar industri yang relevan?",
    "Apakah terdapat kebijakan dan prosedur yang telah ditetapkan untuk mengelola perubahan dalam persyaratan hukum atau regulasi terkait keamanan informasi?",
    "Apakah dilakukan audit internal secara berkala untuk mengevaluasi tingkat kepatuhan organisasi terhadap persyaratan hukum, regulasi, dan standar industri yang berlaku?",
    "Apakah terdapat proses pelaporan yang efektif untuk melaporkan pelanggaran hukum, regulasi, atau persyaratan industri terkait keamanan informasi?",
    "Apakah organisasi memiliki mekanisme pemantauan dan peninjauan yang sistematis untuk memastikan bahwa kepatuhan dengan persyaratan hukum dan regulasi terus dipatuhi?",
  ];

  const assessment14 = [
    null,
    "Apakah organisasi melakukan audit keamanan informasi secara teratur untuk mengevaluasi efektivitas kontrol keamanan yang telah diimplementasikan?",
    "Apakah dilakukan penjadwalan audit keamanan informasi yang mencakup seluruh aspek sistem dan kebijakan keamanan yang ada?",
    "Apakah ada tim atau personel yang bertanggung jawab secara khusus dalam melaksanakan audit keamanan informasi di organisasi?",
    "Apakah terdapat metode dan prosedur audit yang telah ditetapkan untuk memastikan konsistensi dan obyektivitas dalam pelaksanaan audit keamanan informasi?",
    "Apakah hasil dari audit keamanan informasi dikomunikasikan secara efektif kepada pihak yang berwenang dan pihak-pihak yang terkait?",
    "Apakah organisasi telah mengambil langkah-langkah untuk menindaklanjuti rekomendasi atau temuan dari audit keamanan informasi yang telah dilakukan sebelumnya?",
    "Apakah dilakukan pemantauan dan pengukuran terhadap tindak lanjut yang diambil sebagai hasil dari audit keamanan informasi untuk memastikan implementasi yang efektif?",
  ];

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
                <span>{assessment1[1]}</span>
              </div>
              <select onChange={(e) => setRisk11(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment1[2]}</span>
              </div>
              <select onChange={(e) => setRisk12(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment1[3]}</span>
              </div>
              <select onChange={(e) => setRisk13(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment1[4]}</span>
              </div>
              <select onChange={(e) => setRisk14(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment1[5]}</span>
              </div>
              <select onChange={(e) => setRisk15(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment1[6]}</span>
              </div>
              <select onChange={(e) => setRisk16(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment1[7]}</span>
              </div>
              <select onChange={(e) => setRisk17(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
          </div>
          {/* kontrol keamanan 2 */}
          <div className={styles.parameter}>
            <b>Organisasi keamanan informasi</b>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment2[1]}</span>
              </div>
              <select onChange={(e) => setRisk21(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment2[2]}</span>
              </div>
              <select onChange={(e) => setRisk22(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment2[3]}</span>
              </div>
              <select onChange={(e) => setRisk23(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment2[4]}</span>
              </div>
              <select onChange={(e) => setRisk24(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment2[5]}</span>
              </div>
              <select onChange={(e) => setRisk25(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment2[6]}</span>
              </div>
              <select onChange={(e) => setRisk26(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment2[7]}</span>
              </div>
              <select onChange={(e) => setRisk27(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
          </div>
          {/* kontrol keamanan 3 */}
          <div className={styles.parameter}>
            <b>Manajemen aset</b>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment3[1]}</span>
              </div>
              <select onChange={(e) => setRisk31(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment3[2]}</span>
              </div>
              <select onChange={(e) => setRisk32(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment3[3]}</span>
              </div>
              <select onChange={(e) => setRisk33(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment3[4]}</span>
              </div>
              <select onChange={(e) => setRisk34(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment3[5]}</span>
              </div>
              <select onChange={(e) => setRisk35(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment3[6]}</span>
              </div>
              <select onChange={(e) => setRisk36(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment3[7]}</span>
              </div>
              <select onChange={(e) => setRisk27(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
          </div>
          {/* kontrol keamanan 4 */}
          <div className={styles.parameter}>
            <b>Keamanan sumber daya manusia</b>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment4[1]}</span>
              </div>
              <select onChange={(e) => setRisk41(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment4[2]}</span>
              </div>
              <select onChange={(e) => setRisk42(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment4[3]}</span>
              </div>
              <select onChange={(e) => setRisk43(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment4[4]}</span>
              </div>
              <select onChange={(e) => setRisk44(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment4[5]}</span>
              </div>
              <select onChange={(e) => setRisk45(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment4[6]}</span>
              </div>
              <select onChange={(e) => setRisk46(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment4[7]}</span>
              </div>
              <select onChange={(e) => setRisk47(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
          </div>
          {/* kontrol keamanan 5 */}
          <div className={styles.parameter}>
            <b>Akses kontrol</b>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment5[1]}</span>
              </div>
              <select onChange={(e) => setRisk51(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment5[2]}</span>
              </div>
              <select onChange={(e) => setRisk52(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment5[3]}</span>
              </div>
              <select onChange={(e) => setRisk53(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment5[4]}</span>
              </div>
              <select onChange={(e) => setRisk54(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment5[5]}</span>
              </div>
              <select onChange={(e) => setRisk55(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment5[6]}</span>
              </div>
              <select onChange={(e) => setRisk56(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment5[7]}</span>
              </div>
              <select onChange={(e) => setRisk57(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
          </div>
          {/* kontrol keamanan 6 */}
          <div className={styles.parameter}>
            <b>Perencanaan dan pemulihan bencana</b>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment6[1]}</span>
              </div>
              <select onChange={(e) => setRisk61(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment6[2]}</span>
              </div>
              <select onChange={(e) => setRisk62(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment6[3]}</span>
              </div>
              <select onChange={(e) => setRisk63(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment6[4]}</span>
              </div>
              <select onChange={(e) => setRisk64(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment6[5]}</span>
              </div>
              <select onChange={(e) => setRisk65(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment6[6]}</span>
              </div>
              <select onChange={(e) => setRisk66(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment6[7]}</span>
              </div>
              <select onChange={(e) => setRisk67(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
          </div>
          {/* kontrol keamanan 7 */}
          <div className={styles.parameter}>
            <b>Manajemen keamanan operasional</b>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment7[1]}</span>
              </div>
              <select onChange={(e) => setRisk71(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment7[2]}</span>
              </div>
              <select onChange={(e) => setRisk72(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment7[3]}</span>
              </div>
              <select onChange={(e) => setRisk73(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment7[4]}</span>
              </div>
              <select onChange={(e) => setRisk74(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment7[5]}</span>
              </div>
              <select onChange={(e) => setRisk75(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment7[6]}</span>
              </div>
              <select onChange={(e) => setRisk76(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment7[7]}</span>
              </div>
              <select onChange={(e) => setRisk77(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
          </div>
          {/* kontrol keamanan 8 */}
          <div className={styles.parameter}>
            <b>Keamanan komunikasi dan operasi</b>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment8[1]}</span>
              </div>
              <select onChange={(e) => setRisk81(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment8[2]}</span>
              </div>
              <select onChange={(e) => setRisk82(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment8[3]}</span>
              </div>
              <select onChange={(e) => setRisk83(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment8[4]}</span>
              </div>
              <select onChange={(e) => setRisk84(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment8[5]}</span>
              </div>
              <select onChange={(e) => setRisk85(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment8[6]}</span>
              </div>
              <select onChange={(e) => setRisk86(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment8[7]}</span>
              </div>
              <select onChange={(e) => setRisk87(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
          </div>
          {/* kontrol keamanan 9 */}
          <div className={styles.parameter}>
            <b>Pengendalian akses sistem informasi</b>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment9[1]}</span>
              </div>
              <select onChange={(e) => setRisk91(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment9[2]}</span>
              </div>
              <select onChange={(e) => setRisk92(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment9[3]}</span>
              </div>
              <select onChange={(e) => setRisk93(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment9[4]}</span>
              </div>
              <select onChange={(e) => setRisk94(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment9[5]}</span>
              </div>
              <select onChange={(e) => setRisk95(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment9[6]}</span>
              </div>
              <select onChange={(e) => setRisk96(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment9[7]}</span>
              </div>
              <select onChange={(e) => setRisk97(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
          </div>
          {/* kontrol keamanan 10 */}
          <div className={styles.parameter}>
            <b>Perolehan, pengembangan, dan pemeliharaan sistem informasi</b>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment10[1]}</span>
              </div>
              <select onChange={(e) => setRisk101(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment10[2]}</span>
              </div>
              <select onChange={(e) => setRisk102(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment10[3]}</span>
              </div>
              <select onChange={(e) => setRisk103(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment10[4]}</span>
              </div>
              <select onChange={(e) => setRisk104(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment10[5]}</span>
              </div>
              <select onChange={(e) => setRisk105(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment10[6]}</span>
              </div>
              <select onChange={(e) => setRisk106(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment10[7]}</span>
              </div>
              <select onChange={(e) => setRisk107(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
          </div>
          {/* kontrol keamanan 11 */}
          <div className={styles.parameter}>
            <b>Pengelolaan ketidaksesuaian</b>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment11[1]}</span>
              </div>
              <select onChange={(e) => setRisk111(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment11[2]}</span>
              </div>
              <select onChange={(e) => setRisk112(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment11[3]}</span>
              </div>
              <select onChange={(e) => setRisk113(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment11[4]}</span>
              </div>
              <select onChange={(e) => setRisk114(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment11[5]}</span>
              </div>
              <select onChange={(e) => setRisk115(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment11[6]}</span>
              </div>
              <select onChange={(e) => setRisk116(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment11[7]}</span>
              </div>
              <select onChange={(e) => setRisk117(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
          </div>
          {/* kontrol keamanan 12 */}
          <div className={styles.parameter}>
            <b>Aspek keamanan pada hubungan bisnis</b>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment12[1]}</span>
              </div>
              <select onChange={(e) => setRisk121(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment12[2]}</span>
              </div>
              <select onChange={(e) => setRisk122(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment12[3]}</span>
              </div>
              <select onChange={(e) => setRisk123(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment12[4]}</span>
              </div>
              <select onChange={(e) => setRisk124(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment12[5]}</span>
              </div>
              <select onChange={(e) => setRisk125(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment12[6]}</span>
              </div>
              <select onChange={(e) => setRisk126(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment12[7]}</span>
              </div>
              <select onChange={(e) => setRisk127(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
          </div>
          {/* kontrol keamanan 13 */}
          <div className={styles.parameter}>
            <b>Kepatuhan terhadap standar</b>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment13[1]}</span>
              </div>
              <select onChange={(e) => setRisk131(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment13[2]}</span>
              </div>
              <select onChange={(e) => setRisk132(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment13[3]}</span>
              </div>
              <select onChange={(e) => setRisk133(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment13[4]}</span>
              </div>
              <select onChange={(e) => setRisk134(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment13[5]}</span>
              </div>
              <select onChange={(e) => setRisk135(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment13[6]}</span>
              </div>
              <select onChange={(e) => setRisk136(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment13[7]}</span>
              </div>
              <select onChange={(e) => setRisk137(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
          </div>
          {/* kontrol keamanan 14 */}
          <div className={styles.parameter}>
            <b>Audit keamanan informasi</b>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment14[1]}</span>
              </div>
              <select onChange={(e) => setRisk141(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment14[2]}</span>
              </div>
              <select onChange={(e) => setRisk142(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment14[3]}</span>
              </div>
              <select onChange={(e) => setRisk143(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment14[4]}</span>
              </div>
              <select onChange={(e) => setRisk144(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment14[5]}</span>
              </div>
              <select onChange={(e) => setRisk145(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment14[6]}</span>
              </div>
              <select onChange={(e) => setRisk146(parseInt(e.target.value))}>
                <OptionAssessment />
              </select>
            </div>
            <div className={styles.ul}>
              <div className={styles.ulItem}>
                <li />
                <span>{assessment14[7]}</span>
              </div>
              <select onChange={(e) => setRisk147(parseInt(e.target.value))}>
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
                    <div className={`${styles[nilai.colorlevel]}`}>{nilai.level}</div>
                  </td>
                  <td style={{ whiteSpace: "pre-line" }}>
                    <p>{nilai.rekomendasi}</p>
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
