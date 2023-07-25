import styles from "@/styles/pakar.module.css";
import { useState, useEffect } from "react";
import Head from "next/head";
import { Button, Input, Modal, Text, Avatar } from "@nextui-org/react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, firebase } from "@/utils/firebase";
import OptionAssessment from "@/components/OptionAssessment";
import {
  assessment1,
  assessment2,
  assessment3,
  assessment4,
  assessment5,
  assessment6,
  assessment7,
  assessment8,
  assessment9,
  assessment10,
  assessment11,
  assessment12,
  assessment13,
  assessment14,
} from "@/components/Assessment";

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
      const snapshot = await userCollectionRef.where("email", "==", emailUser).get();

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
    // cek user login
    if (user == null) {
      alert("Login terlebih dahulu, sebelum analisa keseluruhan");
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
    } // kontrol l4
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
      alert("Assessment Berhasil Dianalisis");
      dataUser();
    } catch (error) {
      console.error("Error adding element to Firestore:", error);
    }
  };

  const [aspek, setAspek] = useState("");

  const [risk11, setRisk11] = useState<number>(0);
  const [risk12, setRisk12] = useState<number>(0);
  const [risk13, setRisk13] = useState<number>(0);
  const [risk14, setRisk14] = useState<number>(0);
  const [risk15, setRisk15] = useState<number>(0);
  const [risk16, setRisk16] = useState<number>(0);
  const [risk17, setRisk17] = useState<number>(0);
  const riskSetters1 = [setRisk11, setRisk12, setRisk13, setRisk14, setRisk15, setRisk16, setRisk17];

  const [risk21, setRisk21] = useState<number>(0);
  const [risk22, setRisk22] = useState<number>(0);
  const [risk23, setRisk23] = useState<number>(0);
  const [risk24, setRisk24] = useState<number>(0);
  const [risk25, setRisk25] = useState<number>(0);
  const [risk26, setRisk26] = useState<number>(0);
  const [risk27, setRisk27] = useState<number>(0);
  const riskSetters2 = [setRisk21, setRisk22, setRisk23, setRisk24, setRisk25, setRisk26, setRisk27];

  const [risk31, setRisk31] = useState<number>(0);
  const [risk32, setRisk32] = useState<number>(0);
  const [risk33, setRisk33] = useState<number>(0);
  const [risk34, setRisk34] = useState<number>(0);
  const [risk35, setRisk35] = useState<number>(0);
  const [risk36, setRisk36] = useState<number>(0);
  const [risk37, setRisk37] = useState<number>(0);
  const riskSetters3 = [setRisk31, setRisk32, setRisk33, setRisk34, setRisk35, setRisk36, setRisk37];

  const [risk41, setRisk41] = useState<number>(0);
  const [risk42, setRisk42] = useState<number>(0);
  const [risk43, setRisk43] = useState<number>(0);
  const [risk44, setRisk44] = useState<number>(0);
  const [risk45, setRisk45] = useState<number>(0);
  const [risk46, setRisk46] = useState<number>(0);
  const [risk47, setRisk47] = useState<number>(0);
  const riskSetters4 = [setRisk41, setRisk42, setRisk43, setRisk44, setRisk45, setRisk46, setRisk47];

  const [risk51, setRisk51] = useState<number>(0);
  const [risk52, setRisk52] = useState<number>(0);
  const [risk53, setRisk53] = useState<number>(0);
  const [risk54, setRisk54] = useState<number>(0);
  const [risk55, setRisk55] = useState<number>(0);
  const [risk56, setRisk56] = useState<number>(0);
  const [risk57, setRisk57] = useState<number>(0);
  const riskSetters5 = [setRisk51, setRisk52, setRisk53, setRisk54, setRisk55, setRisk56, setRisk57];

  const [risk61, setRisk61] = useState<number>(0);
  const [risk62, setRisk62] = useState<number>(0);
  const [risk63, setRisk63] = useState<number>(0);
  const [risk64, setRisk64] = useState<number>(0);
  const [risk65, setRisk65] = useState<number>(0);
  const [risk66, setRisk66] = useState<number>(0);
  const [risk67, setRisk67] = useState<number>(0);
  const riskSetters6 = [setRisk61, setRisk62, setRisk63, setRisk64, setRisk65, setRisk66, setRisk67];

  const [risk71, setRisk71] = useState<number>(0);
  const [risk72, setRisk72] = useState<number>(0);
  const [risk73, setRisk73] = useState<number>(0);
  const [risk74, setRisk74] = useState<number>(0);
  const [risk75, setRisk75] = useState<number>(0);
  const [risk76, setRisk76] = useState<number>(0);
  const [risk77, setRisk77] = useState<number>(0);
  const riskSetters7 = [setRisk71, setRisk72, setRisk73, setRisk74, setRisk75, setRisk76, setRisk77];

  const [risk81, setRisk81] = useState<number>(0);
  const [risk82, setRisk82] = useState<number>(0);
  const [risk83, setRisk83] = useState<number>(0);
  const [risk84, setRisk84] = useState<number>(0);
  const [risk85, setRisk85] = useState<number>(0);
  const [risk86, setRisk86] = useState<number>(0);
  const [risk87, setRisk87] = useState<number>(0);
  const riskSetters8 = [setRisk81, setRisk82, setRisk83, setRisk84, setRisk85, setRisk86, setRisk87];

  const [risk91, setRisk91] = useState<number>(0);
  const [risk92, setRisk92] = useState<number>(0);
  const [risk93, setRisk93] = useState<number>(0);
  const [risk94, setRisk94] = useState<number>(0);
  const [risk95, setRisk95] = useState<number>(0);
  const [risk96, setRisk96] = useState<number>(0);
  const [risk97, setRisk97] = useState<number>(0);
  const riskSetters9 = [setRisk91, setRisk92, setRisk93, setRisk94, setRisk95, setRisk96, setRisk97];

  const [risk101, setRisk101] = useState<number>(0);
  const [risk102, setRisk102] = useState<number>(0);
  const [risk103, setRisk103] = useState<number>(0);
  const [risk104, setRisk104] = useState<number>(0);
  const [risk105, setRisk105] = useState<number>(0);
  const [risk106, setRisk106] = useState<number>(0);
  const [risk107, setRisk107] = useState<number>(0);
  const riskSetters10 = [setRisk101, setRisk102, setRisk103, setRisk104, setRisk105, setRisk106, setRisk107];

  const [risk111, setRisk111] = useState<number>(0);
  const [risk112, setRisk112] = useState<number>(0);
  const [risk113, setRisk113] = useState<number>(0);
  const [risk114, setRisk114] = useState<number>(0);
  const [risk115, setRisk115] = useState<number>(0);
  const [risk116, setRisk116] = useState<number>(0);
  const [risk117, setRisk117] = useState<number>(0);
  const riskSetters11 = [setRisk111, setRisk112, setRisk113, setRisk114, setRisk115, setRisk116, setRisk117];

  const [risk121, setRisk121] = useState<number>(0);
  const [risk122, setRisk122] = useState<number>(0);
  const [risk123, setRisk123] = useState<number>(0);
  const [risk124, setRisk124] = useState<number>(0);
  const [risk125, setRisk125] = useState<number>(0);
  const [risk126, setRisk126] = useState<number>(0);
  const [risk127, setRisk127] = useState<number>(0);
  const riskSetters12 = [setRisk121, setRisk122, setRisk123, setRisk124, setRisk125, setRisk126, setRisk127];

  const [risk131, setRisk131] = useState<number>(0);
  const [risk132, setRisk132] = useState<number>(0);
  const [risk133, setRisk133] = useState<number>(0);
  const [risk134, setRisk134] = useState<number>(0);
  const [risk135, setRisk135] = useState<number>(0);
  const [risk136, setRisk136] = useState<number>(0);
  const [risk137, setRisk137] = useState<number>(0);
  const riskSetters13 = [setRisk131, setRisk132, setRisk133, setRisk134, setRisk135, setRisk136, setRisk137];

  const [risk141, setRisk141] = useState<number>(0);
  const [risk142, setRisk142] = useState<number>(0);
  const [risk143, setRisk143] = useState<number>(0);
  const [risk144, setRisk144] = useState<number>(0);
  const [risk145, setRisk145] = useState<number>(0);
  const [risk146, setRisk146] = useState<number>(0);
  const [risk147, setRisk147] = useState<number>(0);
  const riskSetters14 = [setRisk141, setRisk142, setRisk143, setRisk144, setRisk145, setRisk146, setRisk147];

  const initialHasilKontrol = {
    nama: "",
    kontrolKeamanan: "",
    hasil: "",
    kategori: "",
    skor: "",
  };

  const [hasilKontrol1, setHasilKontrol1] = useState([initialHasilKontrol]);
  const [hasilKontrol2, setHasilKontrol2] = useState([initialHasilKontrol]);
  const [hasilKontrol3, setHasilKontrol3] = useState([initialHasilKontrol]);
  const [hasilKontrol4, setHasilKontrol4] = useState([initialHasilKontrol]);
  const [hasilKontrol5, setHasilKontrol5] = useState([initialHasilKontrol]);
  const [hasilKontrol6, setHasilKontrol6] = useState([initialHasilKontrol]);
  const [hasilKontrol7, setHasilKontrol7] = useState([initialHasilKontrol]);
  const [hasilKontrol8, setHasilKontrol8] = useState([initialHasilKontrol]);
  const [hasilKontrol9, setHasilKontrol9] = useState([initialHasilKontrol]);
  const [hasilKontrol10, setHasilKontrol10] = useState([initialHasilKontrol]);
  const [hasilKontrol11, setHasilKontrol11] = useState([initialHasilKontrol]);
  const [hasilKontrol12, setHasilKontrol12] = useState([initialHasilKontrol]);
  const [hasilKontrol13, setHasilKontrol13] = useState([initialHasilKontrol]);
  const [hasilKontrol14, setHasilKontrol14] = useState([initialHasilKontrol]);

  // function analisa kontrol 1
  const analisaKontrol1 = () => {
    let kontrol1 = risk11 + risk12 + risk13 + risk14 + risk15 + risk16 + risk17;
    let hasilKontrol1: any, kategori: any;
    // kontrol 1
    switch (true) {
      case kontrol1 == 0:
        kategori = "Risiko Tinggi";
        hasilKontrol1 =
          "### Umpan balik Kebijakan keamanan informasi ini (Tidak Layak)\n\n Kontrol keamanan informasi ini tidak memenuhi standar ISO 27002 dan menghadirkan risiko serius bagi organisasi. Organisasi perlu melakukan evaluasi mendalam dan memperbaiki kontrol ini untuk memastikan kepatuhan dan perlindungan yang lebih baik terhadap informasi.";
        break;
      case kontrol1 == 1 || kontrol1 <= 7:
        kategori = "Risiko Sedang";
        hasilKontrol1 =
          "### Umpan balik Kontrol Kebijakan keamanan informasi ini (Memenuhi Kerangka Dasar)\n\n Kontrol ini memenuhi beberapa elemen dasar dari ISO 27002, tetapi masih memerlukan banyak perbaikan untuk mencapai tingkat kepatuhan yang lebih baik. Organisasi perlu mengidentifikasi area yang perlu diperbaiki dan meningkatkan detail serta ketepatan kebijakan.";
        break;
      case kontrol1 == 8 || kontrol1 <= 15:
        kategori = "Risiko Rendah";
        hasilKontrol1 =
          "### Umpan balik Kontrol Umpan balik Kebijakan keamanan informasi ini (Cukup Baik)\n\n Kontrol keamanan informasi ini cukup memenuhi persyaratan dasar ISO 27002 dan mencakup banyak elemen yang diperlukan. Organisasi perlu melakukan evaluasi rutin dan memperbaiki kebijakan sesuai dengan perubahan lingkungan dan ancaman keamanan.";
        break;
      case kontrol1 == 16 || kontrol1 <= 21:
        kategori = "Risiko Sangat Rendah";
        hasilKontrol1 =
          "### Umpan balik Kontrol Kebijakan keamanan informasi ini (Baik)\n\n Kontrol keamanan informasi ini sepenuhnya mematuhi standar ISO 27002 dan menunjukkan keunggulan dalam penerapan kebijakan keamanan informasi.";
        break;
      default:
        hasilKontrol1 = "null";
        break;
    }

    const updatedHasilKontrol1 = [...hasilKontrol1];

    updatedHasilKontrol1[0] = {
      nama: "Nama aspek: " + aspek,
      kontrolKeamanan: "Kontrol Keamanan: Kebijakan keamanan informasi",
      hasil: hasilKontrol1,
      kategori: "Tingkat Risiko: " + kategori,
      skor: " skor: " + kontrol1.toString(),
    };

    setHasilKontrol1(updatedHasilKontrol1);
  };

  // function analisa kontrol 2
  const analisaKontrol2 = () => {
    let kontrol2 = risk21 + risk22 + risk23 + risk24 + risk25 + risk26 + risk27;
    let hasilKontrol2: any, kategori: any;
    // kontrol 2
    switch (true) {
      case kontrol2 == 0:
        kategori = "Risiko Tinggi";
        hasilKontrol2 =
          "### Umpan balik Organisasi keamanan informasi(Tidak Layak)\n\n Kontrol ini belum diterapkan atau diterapkan secara sangat tidak memadai dalam organisasi keamanan informasi. Kekurangan dalam implementasi dapat menyebabkan risiko keamanan yang tinggi dan rentan terhadap ancaman internal dan eksternal.";
        break;
      case kontrol2 == 1 || kontrol2 <= 7:
        kategori = "Risiko Sedang";
        hasilKontrol2 =
          "### Umpan balik Organisasi keamanan informasi(Memenuhi Kerangka Dasar)\n\n Kontrol ini telah diimplementasikan secara dasar, namun ada beberapa kelemahan atau celah keamanan yang perlu diperbaiki. Implementasi kontrol ini mungkin belum konsisten dan tidak sepenuhnya mengikuti panduan yang ditetapkan oleh ISO 27002.";
        break;
      case kontrol2 == 8 || kontrol2 <= 15:
        kategori = "Risiko Rendah";
        hasilKontrol2 =
          "### Umpan balik Organisasi keamanan informasi(Cukup Baik)\n\n Kontrol ini telah diimplementasikan dengan baik dan sebagian besar aspek keamanannya telah diterapkan secara memadai. Namun, mungkin masih ada beberapa area yang dapat ditingkatkan untuk meningkatkan keamanan secara keseluruhan.";
        break;
      case kontrol2 == 16 || kontrol2 <= 21:
        kategori = "Risiko Sangat Rendah";
        hasilKontrol2 =
          "### Umpan balik Organisasi keamanan informasi(Baik)\n\n Kontrol ini telah diimplementasikan dengan sangat baik dan mencapai standar keamanan informasi yang diinginkan sesuai dengan ISO 27002.";
        break;
      default:
        hasilKontrol2 = "null";
        break;
    }

    const updatedHasilKontrol2 = [...hasilKontrol2];

    updatedHasilKontrol2[0] = {
      nama: "Nama aspek: " + aspek,
      kontrolKeamanan: "Kontrol Keamanan: Organisasi keamanan informasi",
      hasil: hasilKontrol2,
      kategori: "Tingkat Risiko: " + kategori,
      skor: " skor: " + kontrol2.toString(),
    };

    setHasilKontrol2(updatedHasilKontrol2);
  };

  // function analisa kontrol 3
  const analisaKontrol3 = () => {
    let kontrol3 = risk31 + risk32 + risk33 + risk34 + risk35 + risk36 + risk37;
    let hasilKontrol3: any, kategori: any;
    // kontrol 3
    switch (true) {
      case kontrol3 == 0:
        kategori = "Risiko Tinggi";
        hasilKontrol3 =
          "### Umpan balik Manajemen aset(Tidak Layak)\n\n Kontrol keamanan ini tidak dipatuhi atau diabaikan sepenuhnya. Risiko kehilangan, kebocoran, atau penyalahgunaan aset informasi sangat tinggi, dan organisasi tidak mengambil tindakan yang memadai untuk mengatasi masalah ini.";
        break;
      case kontrol3 == 1 || kontrol3 <= 7:
        kategori = "Risiko Sedang";
        hasilKontrol3 =
          "### Umpan balik Manajemen aset(Memenuhi Kerangka Dasar)\n\n Organisasi memiliki kerangka dasar untuk mengelola aset informasi, namun implementasinya masih terbatas. Beberapa aset mungkin sudah terlindungi, tetapi masih ada area yang rentan dan memerlukan perhatian lebih.";
        break;
      case kontrol3 == 8 || kontrol3 <= 15:
        kategori = "Risiko Rendah";
        hasilKontrol3 =
          "### Umpan balik Manajemen aset(Cukup Baik)\n\n Kontrol keamanan ini telah diimplementasikan dengan cukup baik oleh organisasi. Organisasi juga telah melaksanakan tindakan pemeliharaan rutin untuk memastikan aset tetap relevan dan aman dari ancaman yang mungkin timbul.";
        break;
      case kontrol3 == 16 || kontrol3 <= 21:
        kategori = "Risiko Sangat Rendah";
        hasilKontrol3 =
          "### Umpan balik Manajemen aset(Baik)\n\n Organisasi telah mencapai tingkat keunggulan dalam mengelola aset informasi.";
        break;
      default:
        hasilKontrol3 = "null";
        break;
    }

    const updatedHasilKontrol3 = [...hasilKontrol3];

    updatedHasilKontrol3[0] = {
      nama: "Nama aspek: " + aspek,
      kontrolKeamanan: "Kontrol Keamanan: Manajemen aset",
      hasil: hasilKontrol3,
      kategori: "Tingkat Risiko: " + kategori,
      skor: " skor: " + kontrol3.toString(),
    };

    setHasilKontrol3(updatedHasilKontrol3);
  };

  // function analisa kontrol 4
  const analisaKontrol4 = () => {
    let kontrol4 = risk41 + risk42 + risk43 + risk44 + risk45 + risk46 + risk47;
    let hasilKontrol4: any, kategori: any;
    // kontrol 4
    switch (true) {
      case kontrol4 == 0:
        kategori = "Risiko Tinggi";
        hasilKontrol4 =
          "### Umpan balik Keamanan sumber daya manusia(Tidak Layak)\n\n Tidak ada upaya untuk memberikan pelatihan dan kesadaran keamanan yang memadai kepada karyawan.";
        break;
      case kontrol4 == 1 || kontrol4 <= 7:
        kategori = "Risiko Sedang";
        hasilKontrol4 =
          "### Umpan balik Keamanan sumber daya manusia(Memenuhi Kerangka Dasar)\n\n Sebagian besar karyawan memiliki kesadaran tentang pentingnya keamanan informasi dan terlibat dalam beberapa praktik keamanan. Meskipun ada kesadaran, keterlibatan aktif dalam mengidentifikasi dan melaporkan insiden keamanan masih perlu ditingkatkan.";
        break;
      case kontrol4 == 8 || kontrol4 <= 15:
        kategori = "Risiko Rendah";
        hasilKontrol4 =
          "### Umpan balik Keamanan sumber daya manusia(Cukup Baik)\n\n Karyawan secara umum memiliki pemahaman yang baik tentang pentingnya keamanan informasi dan terlibat secara aktif dalam praktik keamanan. Karyawan cenderung melaporkan insiden keamanan dan bekerja sama dalam mengidentifikasi dan mengurangi risiko keamanan.";
        break;
      case kontrol4 == 16 || kontrol4 <= 21:
        kategori = "Risiko Sangat Rendah";
        hasilKontrol4 =
          "### Umpan balik Keamanan sumber daya manusia(Baik)\n\n Karyawan memiliki kesadaran yang tinggi tentang pentingnya keamanan informasi dan secara proaktif terlibat dalam menjalankan praktik keamanan.";
        break;
      default:
        hasilKontrol4 = "null";
        break;
    }

    const updatedHasilKontrol4 = [...hasilKontrol4];

    updatedHasilKontrol4[0] = {
      nama: "Nama aspek: " + aspek,
      kontrolKeamanan: "Kontrol Keamanan: Keamanan sumber daya manusia",
      hasil: hasilKontrol4,
      kategori: "Tingkat Risiko: " + kategori,
      skor: " skor: " + kontrol4.toString(),
    };

    setHasilKontrol4(updatedHasilKontrol4);
  };

  // function analisa kontrol 5
  const analisaKontrol5 = () => {
    let kontrol5 = risk51 + risk52 + risk53 + risk54 + risk55 + risk56 + risk57;
    let hasilKontrol5: any, kategori: any;
    // kontrol 5
    switch (true) {
      case kontrol5 == 0:
        kategori = "Risiko Tinggi";
        hasilKontrol5 =
          "### Umpan balik Akses kontrol(Tidak Layak)\n\n Kontrol keamanan ini tidak diimplementasikan atau diabaikan sepenuhnya. Tidak ada upaya yang dilakukan untuk melindungi informasi dari akses yang tidak sah, baik secara fisik maupun logis. Kondisi ini meningkatkan risiko kebocoran data dan potensi kehilangan informasi yang sangat sensitif.";
        break;
      case kontrol5 == 1 || kontrol5 <= 7:
        kategori = "Risiko Sedang";
        hasilKontrol5 =
          "### Umpan balik Akses kontrol(Memenuhi Kerangka Dasar)\n\n Kontrol keamanan ini ada, tetapi implementasinya masih sangat terbatas dan belum sepenuhnya sesuai dengan standar ISO 27002. Beberapa upaya telah dilakukan untuk menerapkan kontrol akses fisik dan logis, namun masih ada kelemahan dan celah yang dapat dieksploitasi oleh pihak yang tidak sah.";
        break;
      case kontrol5 == 8 || kontrol5 <= 15:
        kategori = "Risiko Rendah";
        hasilKontrol5 =
          "### Umpan balik Akses kontrol(Cukup Baik)\n\n Penerapan kontrol akses fisik dan logis telah mencapai tingkat yang cukup baik sesuai dengan ISO 27002. Upaya yang serius telah dilakukan untuk melindungi informasi dari akses yang tidak sah. Namun, masih ada beberapa area yang perlu ditingkatkan untuk mencapai tingkat keamanan yang optimal.";
        break;
      case kontrol5 == 16 || kontrol5 <= 21:
        kategori = "Risiko Sangat Rendah";
        hasilKontrol5 =
          "### Umpan balik Akses kontrol(Baik)\n\n Kontrol keamanan ini diimplementasikan dengan sangat baik sesuai dengan standar ISO 27002. Semua persyaratan untuk menerapkan kontrol akses fisik dan logis telah dipenuhi dengan benar. Informasi sensitif dan kritis telah terlindungi dengan efektif dari akses yang tidak sah, baik dari segi fisik maupun logis. Sistem keamanan ini dianggap kuat dan handal.";
        break;
      default:
        hasilKontrol5 = "null";
        break;
    }

    const updatedHasilKontrol5 = [...hasilKontrol5];

    updatedHasilKontrol5[0] = {
      nama: "Nama aspek: " + aspek,
      kontrolKeamanan: "Kontrol Keamanan: Akses kontrol",
      hasil: hasilKontrol5,
      kategori: "Tingkat Risiko: " + kategori,
      skor: " skor: " + kontrol5.toString(),
    };

    setHasilKontrol5(updatedHasilKontrol5);
  };

  // function analisa kontrol 6
  const analisaKontrol6 = () => {
    let kontrol6 = risk61 + risk62 + risk63 + risk64 + risk65 + risk66 + risk67;
    let hasilKontrol6: any, kategori: any;
    // kontrol 6
    switch (true) {
      case kontrol6 == 0:
        kategori = "Risiko Tinggi";
        hasilKontrol6 =
          "### Umpan balik Perencanaan dan pemulihan bencana(Tidak Layak)\n\n Organisasi ini tidak memiliki rencana pemulihan bencana yang jelas dan terstruktur untuk mengatasi gangguan layanan. Kurangnya perencanaan ini dapat menyebabkan ketidakmampuan untuk memulihkan layanan dengan efisien, menyebabkan kerugian yang signifikan bagi bisnis dan pelanggan.";
        break;
      case kontrol6 == 1 || kontrol6 <= 7:
        kategori = "Risiko Sedang";
        hasilKontrol6 =
          "### Umpan balik Perencanaan dan pemulihan bencana(Memenuhi Kerangka Dasar)\n\n Organisasi ini telah mengambil langkah awal dalam mengembangkan rencana pemulihan bencana. Mereka telah mengidentifikasi beberapa risiko potensial dan mulai menyusun rencana dasar untuk mengatasi gangguan layanan. Namun, rencana ini mungkin masih perlu diperbaiki dan diperinci agar lebih efektif. ";
        break;
      case kontrol6 == 8 || kontrol6 <= 15:
        kategori = "Risiko Rendah";
        hasilKontrol6 =
          "### Umpan balik Perencanaan dan pemulihan bencana(Cukup Baik)\n\n Organisasi ini telah berhasil mengembangkan dan mengimplementasikan rencana pemulihan bencana yang memadai. Rencana pemulihan ini juga telah diuji secara berkala dan telah melibatkan seluruh tim terkait. Meskipun ada ruang untuk peningkatan dan perbaikan, rencana pemulihan ini memberikan fondasi yang solid untuk menghadapi bencana dan meminimalkan dampaknya.";
        break;
      case kontrol6 == 16 || kontrol6 <= 21:
        kategori = "Risiko Sangat Rendah";
        hasilKontrol6 =
          "### Umpan balik Perencanaan dan pemulihan bencana(Baik)\n\n Organisasi ini memiliki rencana pemulihan bencana yang sangat baik dan teruji. Rencana ini mencakup langkah-langkah yang rinci dan jelas untuk mengatasi berbagai jenis bencana dan gangguan layanan.";
        break;
      default:
        hasilKontrol6 = "null";
        break;
    }

    const updatedHasilKontrol6 = [...hasilKontrol6];

    updatedHasilKontrol6[0] = {
      nama: "Nama aspek: " + aspek,
      kontrolKeamanan: "Kontrol Keamanan: Perencanaan dan pemulihan bencana",
      hasil: hasilKontrol6,
      kategori: "Tingkat Risiko: " + kategori,
      skor: " skor: " + kontrol6.toString(),
    };

    setHasilKontrol6(updatedHasilKontrol6);
  };

  // function analisa kontrol 7
  const analisaKontrol7 = () => {
    let kontrol7 = risk71 + risk72 + risk73 + risk74 + risk75 + risk76 + risk77;
    let hasilKontrol7: any, kategori: any;
    // kontrol 7
    switch (true) {
      case kontrol7 == 0:
        kategori = "Risiko Tinggi";
        hasilKontrol7 =
          "### Umpan balik Manajemen keamanan operasional(Tidak Layak)\n\n Kontrol ini tidak memenuhi kerangka dasar yang diperlukan untuk memastikan operasi keamanan yang efektif. Pemantauan, pemeliharaan, dan perlindungan sistem tidak dilaksanakan dengan cukup, meninggalkan celah dalam keamanan dan berisiko untuk menghadapi ancaman keamanan.";
        break;
      case kontrol7 == 1 || kontrol7 <= 7:
        kategori = "Risiko Sedang";
        hasilKontrol7 =
          "### Umpan balik Manajemen keamanan operasional(Memenuhi Kerangka Dasar)\n\n Kontrol ini memenuhi kerangka dasar untuk memastikan operasi keamanan yang efektif melalui pemantauan, pemeliharaan, dan perlindungan sistem. Namun, masih ada beberapa aspek yang perlu diperbaiki untuk mencapai tingkat keamanan yang optimal.";
        break;
      case kontrol7 == 8 || kontrol7 <= 15:
        kategori = "Risiko Rendah";
        hasilKontrol7 =
          "### Umpan balik Manajemen keamanan operasional(Cukup Baik)\n\n Kontrol ini cukup baik dalam memastikan operasi keamanan yang efektif melalui pemantauan, pemeliharaan, dan perlindungan sistem. Sebagian besar kebutuhan keamanan terpenuhi, tetapi ada beberapa ruang untuk peningkatan dan penyesuaian untuk menghadapi perkembangan ancaman keamanan yang lebih baru.";
        break;
      case kontrol7 == 16 || kontrol7 <= 21:
        kategori = "Risiko Sangat Rendah";
        hasilKontrol7 =
          "### Umpan balik Manajemen keamanan operasional(Baik)\n\n Kontrol telah diimplementasikan dengan baik dan mencakup aspek-aspek penting yang diperlukan untuk melindungi sistem dari ancaman keamanan. Dengan adanya kontrol ini, risiko keamanan dapat dikelola dengan baik dan sistem dapat beroperasi dalam kondisi yang lebih aman.";
        break;
      default:
        hasilKontrol7 = "null";
        break;
    }

    const updatedHasilKontrol7 = [...hasilKontrol7];

    updatedHasilKontrol7[0] = {
      nama: "Nama aspek: " + aspek,
      kontrolKeamanan: "Kontrol Keamanan: Manajemen keamanan operasional",
      hasil: hasilKontrol7,
      kategori: "Tingkat Risiko: " + kategori,
      skor: " skor: " + kontrol7.toString(),
    };

    setHasilKontrol7(updatedHasilKontrol7);
  };

  // function analisa kontrol 8
  const analisaKontrol8 = () => {
    let kontrol8 = risk81 + risk82 + risk83 + risk84 + risk85 + risk86 + risk87;
    let hasilKontrol8: any, kategori: any;
    // kontrol 8
    switch (true) {
      case kontrol8 == 0:
        kategori = "Risiko Tinggi";
        hasilKontrol8 =
          "### Umpan balik Keamanan komunikasi dan operasi(Tidak Layak)\n\n Kontrol ini tidak terlaksana dengan baik, mengakibatkan potensi kerentanannya dalam perlindungan informasi saat diproses, disimpan, dan ditransmisikan. Kelemahan dalam implementasi kontrol ini dapat menyebabkan pelanggaran keamanan dan risiko serius terhadap informasi sensitif.";
        break;
      case kontrol8 == 1 || kontrol8 <= 7:
        kategori = "Risiko Sedang";
        hasilKontrol8 =
          "### Umpan balik Keamanan komunikasi dan operasi(Memenuhi Kerangka Dasar)\n\n Kontrol ini telah dipenuhi secara dasar dengan beberapa upaya untuk melindungi informasi saat diproses, disimpan, dan ditransmisikan. Namun, masih ada ruang untuk peningkatan dalam implementasi, pemantauan, dan pemeliharaan kontrol untuk mencapai tingkat keamanan yang lebih tinggi.";
        break;
      case kontrol8 == 8 || kontrol8 <= 15:
        kategori = "Risiko Rendah";
        hasilKontrol8 =
          "### Umpan balik Keamanan komunikasi dan operasi(Cukup Baik)\n\n Kontrol ini telah diimplementasikan secara memadai dengan tindakan yang efektif dalam melindungi informasi saat diproses, disimpan, dan ditransmisikan. Upaya yang cukup baik telah dilakukan untuk mengurangi risiko keamanan, namun ada beberapa aspek yang dapat diperbaiki untuk memastikan keamanan yang lebih kuat.";
        break;
      case kontrol8 == 16 || kontrol8 <= 21:
        kategori = "Risiko Sangat Rendah";
        hasilKontrol8 =
          "### Umpan balik Keamanan komunikasi dan operasi(Baik)\n\n Kontrol ini telah diimplementasikan dengan sangat baik dan efisien. Informasi saat diproses, disimpan, dan ditransmisikan dilindungi secara efektif dengan tindakan pencegahan dan pengamanan yang tepat. Organisasi telah mencapai tingkat keamanan yang sesuai dengan standar industri dan dapat diandalkan dalam melindungi informasi sensitif.";
        break;
      default:
        hasilKontrol8 = "null";
        break;
        0;
    }

    const updatedHasilKontrol8 = [...hasilKontrol8];

    updatedHasilKontrol8[0] = {
      nama: "Nama aspek: " + aspek,
      kontrolKeamanan: "Kontrol Keamanan: Keamanan komunikasi dan operasi",
      hasil: hasilKontrol8,
      kategori: "Tingkat Risiko: " + kategori,
      skor: " skor: " + kontrol8.toString(),
    };

    setHasilKontrol8(updatedHasilKontrol8);
  };

  // function analisa kontrol 9
  const analisaKontrol9 = () => {
    let kontrol9 = risk91 + risk92 + risk93 + risk94 + risk95 + risk96 + risk97;
    let hasilKontrol9: any, kategori: any;
    // kontrol 9
    switch (true) {
      case kontrol9 == 0:
        kategori = "Risiko Tinggi";
        hasilKontrol9 =
          "### Umpan balik Pengendalian akses sistem informasi(Tidak Layak)\n\n Kontrol keamanan ini tidak diimplementasikan atau hanya terdapat upaya yang minim dalam mencegah akses yang tidak sah atau tidak pantas ke sistem informasi. Kebijakan dan mekanisme pengendalian akses belum disusun atau belum dijalankan dengan baik, meninggalkan celah bagi potensi ancaman keamanan yang dapat mengakibatkan akses yang tidak sah ke informasi kritis.";
        break;
      case kontrol9 == 1 || kontrol9 <= 7:
        kategori = "Risiko Sedang";
        hasilKontrol9 =
          "### Umpan balik Pengendalian akses sistem informasi(Memenuhi Kerangka Dasar)\n\n Kontrol keamanan ini sebagian besar telah diimplementasikan dengan mengacu pada kerangka dasar kebijakan dan mekanisme pengendalian akses. Namun, beberapa area mungkin masih perlu perbaikan atau pembaruan untuk menutup celah keamanan yang mungkin ada.";
        break;
      case kontrol9 == 8 || kontrol9 <= 15:
        kategori = "Risiko Rendah";
        hasilKontrol9 =
          "### Umpan balik Pengendalian akses sistem informasi(Cukup Baik)\n\n Kontrol keamanan ini secara substansial telah diterapkan dan sesuai dengan kebijakan dan mekanisme pengendalian akses.Pihak yang berwenang secara aktif mengawasi dan melacak aktivitas akses, dan tindakan pencegahan lanjutan dilakukan secara proaktif untuk mengatasi potensi masalah keamanan.";
        break;
      case kontrol9 == 16 || kontrol9 <= 21:
        kategori = "Risiko Sangat Rendah";
        hasilKontrol9 =
          "### Umpan balik Pengendalian akses sistem informasi(Baik)\n\n Kontrol keamanan ini telah diimplementasikan secara menyeluruh, efektif, dan efisien.";
        break;
      default:
        hasilKontrol9 = "null";
        break;
    }

    const updatedHasilKontrol9 = [...hasilKontrol9];

    updatedHasilKontrol9[0] = {
      nama: "Nama aspek: " + aspek,
      kontrolKeamanan: "Kontrol Keamanan: Pengendalian akses sistem informasi",
      hasil: hasilKontrol9,
      kategori: "Tingkat Risiko: " + kategori,
      skor: " skor: " + kontrol9.toString(),
    };

    setHasilKontrol9(updatedHasilKontrol9);
  };

  // function analisa kontrol 10
  const analisaKontrol10 = () => {
    let kontrol10 = risk101 + risk102 + risk103 + risk104 + risk105 + risk106 + risk107;
    let hasilKontrol10: any, kategori: any;
    // kontrol 10
    switch (true) {
      case kontrol10 == 0:
        kategori = "Risiko Tinggi";
        hasilKontrol10 =
          "### Umpan balik Perolehan, pengembangan, dan pemeliharaan sistem informasi(Tidak Layak)\n\n Kontrol keamanan ini tidak diterapkan sepenuhnya dalam siklus hidup pengembangan sistem informasi, menyebabkan risiko potensial terhadap keamanan informasi dan kemungkinan terjadinya celah keamanan. Organisasi perlu segera memperhatikan dan mengatasi kekurangan dalam mengintegrasikan aspek keamanan dalam seluruh tahapan pengembangan sistem informasi.";
        break;
      case kontrol10 == 1 || kontrol10 <= 7:
        kategori = "Risiko Sedang";
        hasilKontrol10 =
          "### Umpan balik Perolehan, pengembangan, dan pemeliharaan sistem informasi(Memenuhi Kerangka Dasar)\n\n Organisasi telah menciptakan kerangka dasar untuk mengintegrasikan keamanan dalam siklus hidup pengembangan sistem informasi. Namun, penerapan dan kepatuhan terhadap kontrol ini mungkin belum konsisten di seluruh proses pengembangan. Perlu dilakukan evaluasi lebih lanjut dan perbaikan untuk memastikan penerapan yang konsisten dan efektif.";
        break;
      case kontrol10 == 8 || kontrol10 <= 15:
        kategori = "Risiko Rendah";
        hasilKontrol10 =
          "### Umpan balik Perolehan, pengembangan, dan pemeliharaan sistem informasi(Cukup Baik)\n\n Organisasi telah berhasil mengintegrasikan aspek keamanan dalam sebagian besar tahapan pengembangan, namun beberapa bagian mungkin masih terlalu lemah atau kurang terdefinisi dengan baik.";
        break;
      case kontrol10 == 16 || kontrol10 <= 21:
        kategori = "Risiko Sangat Rendah";
        hasilKontrol10 =
          "### Umpan balik Perolehan, pengembangan, dan pemeliharaan sistem informasi(Baik)\n\n Organisasi telah berhasil mengintegrasikan keamanan secara holistik dalam seluruh siklus hidup pengembangan sistem informasi.";
        break;
      default:
        hasilKontrol10 = "null";
        break;
    }

    const updatedHasilKontrol10 = [...hasilKontrol10];

    updatedHasilKontrol10[0] = {
      nama: "Nama aspek: " + aspek,
      kontrolKeamanan: "Kontrol Keamanan: Perolehan, pengembangan, dan pemeliharaan sistem informasi",
      hasil: hasilKontrol10,
      kategori: "Tingkat Risiko: " + kategori,
      skor: " skor: " + kontrol10.toString(),
    };

    setHasilKontrol10(updatedHasilKontrol10);
  };

  // function analisa kontrol 11
  const analisaKontrol11 = () => {
    let kontrol11 = risk111 + risk112 + risk113 + risk114 + risk115 + risk116 + risk117;
    let hasilKontrol11: any, kategori: any;
    // kontrol 11
    switch (true) {
      case kontrol11 == 0:
        kategori = "Risiko Tinggi";
        hasilKontrol11 =
          "### Umpan balik Pengelolaan ketidaksesuaian(Tidak Layak)\n\n Organisasi tidak memiliki prosedur yang tepat untuk menangani insiden keamanan, sehingga dapat menyebabkan eskalasi masalah dan meningkatkan risiko keamanan keseluruhan. Selain itu, juga tidak ada rencana tindakan yang jelas untuk mengurangi dampak dari insiden keamanan yang terjadi.";
        break;
      case kontrol11 == 1 || kontrol11 <= 7:
        kategori = "Risiko Sedang";
        hasilKontrol11 =
          "### Umpan balik Pengelolaan ketidaksesuaian(Memenuhi Kerangka Dasar)\n\n Organisasi memiliki beberapa prosedur dan kebijakan yang relevan untuk mengidentifikasi, mengelola, dan menangani insiden keamanan dan pelanggaran keamanan yang terjadi. Namun, beberapa aspek mungkin belum sepenuhnya tertutupi atau terdokumentasi dengan jelas. Reaksi terhadap insiden keamanan mungkin terkadang kurang terkoordinasi, dan analisis akar penyebab pelanggaran keamanan mungkin perlu ditingkatkan.";
        break;
      case kontrol11 == 8 || kontrol11 <= 15:
        kategori = "Risiko Rendah";
        hasilKontrol11 =
          "### Umpan balik Pengelolaan ketidaksesuaian(Cukup Baik)\n\n Organisasi secara aktif menerapkan kebijakan dan prosedur yang efektif untuk mengidentifikasi, mengelola, dan menangani insiden keamanan serta pelanggaran keamanan yang terjadi. Tim keamanan sering melakukan analisis akar penyebab insiden untuk mengurangi kemungkinan terulangnya peristiwa serupa di masa depan. Namun, ada ruang untuk meningkatkan reaksi terhadap insiden keamanan yang lebih cepat dan lebih terkoordinasi serta untuk memperbaiki laporan dan dokumentasi insiden.";
        break;
      case kontrol11 == 16 || kontrol11 <= 21:
        kategori = "Risiko Sangat Rendah";
        hasilKontrol11 =
          "### Umpan balik Pengelolaan ketidaksesuaian(Baik)\n\n Organisasi telah berhasil menerapkan kontrol keamanan ini dengan sangat baik.";
        break;
      default:
        hasilKontrol11 = "null";
        break;
    }

    const updatedHasilKontrol11 = [...hasilKontrol11];

    updatedHasilKontrol11[0] = {
      nama: "Nama aspek: " + aspek,
      kontrolKeamanan: "Kontrol Keamanan: Pengelolaan ketidaksesuaian",
      hasil: hasilKontrol11,
      kategori: "Tingkat Risiko: " + kategori,
      skor: " skor: " + kontrol11.toString(),
    };

    setHasilKontrol11(updatedHasilKontrol11);
  };

  // function analisa kontrol 12
  const analisaKontrol12 = () => {
    let kontrol12 = risk121 + risk122 + risk123 + risk124 + risk125 + risk126 + risk127;
    let hasilKontrol12: any, kategori: any;
    // kontrol 12
    switch (true) {
      case kontrol12 == 0:
        kategori = "Risiko Tinggi";
        hasilKontrol12 =
          "### Umpan balik Aspek keamanan pada hubungan bisnis(Tidak Layak)\n\n Organisasi tidak memiliki kebijakan formal atau prosedur yang mengatur perlindungan informasi saat menjalin hubungan bisnis dengan pihak eksternal. Ini dapat menyebabkan kebocoran data, risiko pencurian informasi, atau ketidakmampuan untuk mengidentifikasi ancaman keamanan yang mungkin timbul dari keterlibatan pihak eksternal.";
        break;
      case kontrol12 == 1 || kontrol12 <= 7:
        kategori = "Risiko Sedang";
        hasilKontrol12 =
          "### Umpan balik Aspek keamanan pada hubungan bisnis(Memenuhi Kerangka Dasar)\n\n Organisasi telah mengadopsi kebijakan formal yang mengatur dan melindungi informasi selama berhubungan bisnis dengan pihak eksternal. Selain itu, kebijakan ini harus mencakup penilaian risiko, kontrak kerahasiaan, dan pembatasan akses informasi yang tepat. Meskipun demikian, implementasi dan pemantauan dapat ditingkatkan untuk memastikan keamanan informasi yang lebih kuat.";
        break;
      case kontrol12 == 8 || kontrol12 <= 15:
        kategori = "Risiko Rendah";
        hasilKontrol12 =
          "### Umpan balik Aspek keamanan pada hubungan bisnis(Cukup Baik)\n\n Organisasi memiliki kebijakan yang jelas dan komprehensif yang melindungi informasi selama berhubungan bisnis dengan pihak eksternal. Selain itu, kebijakan ini telah diimplementasikan secara efektif dan diikuti oleh seluruh anggota organisasi. Pemantauan dan penilaian risiko secara berkala juga dilakukan untuk memastikan kebijakan tetap relevan dan efektif menghadapi ancaman keamanan yang terus berkembang.";
        break;
      case kontrol12 == 16 || kontrol12 <= 21:
        kategori = "Risiko Sangat Rendah";
        hasilKontrol12 =
          "### Umpan balik Aspek keamanan pada hubungan bisnis(Baik)\n\n Organisasi memiliki kebijakan yang kuat, sistematis, dan dijalankan secara konsisten untuk melindungi informasi selama menjalin hubungan bisnis dengan pihak eksternal.";
        break;
      default:
        hasilKontrol12 = "null";
        break;
    }

    const updatedHasilKontrol12 = [...hasilKontrol12];

    updatedHasilKontrol12[0] = {
      nama: "Nama aspek: " + aspek,
      kontrolKeamanan: "Kontrol Keamanan: Aspek keamanan pada hubungan bisnis",
      hasil: hasilKontrol12,
      kategori: "Tingkat Risiko: " + kategori,
      skor: " skor: " + kontrol12.toString(),
    };

    setHasilKontrol12(updatedHasilKontrol12);
  };

  // function analisa kontrol 13
  const analisaKontrol13 = () => {
    let kontrol13 = risk131 + risk132 + risk133 + risk134 + risk135 + risk136 + risk137;
    let hasilKontrol13: any, kategori: any;
    // kontrol 13
    switch (true) {
      case kontrol13 == 0:
        kategori = "Risiko Tinggi";
        hasilKontrol13 =
          "### Umpan balik Kepatuhan terhadap standar(Tidak Layak)\n\n Organisasi belum memiliki prosedur formal untuk mengidentifikasi dan memastikan kepatuhan dengan persyaratan hukum, regulasi, dan standar industri yang berlaku. Kebijakan yang ada tidak mencakup panduan khusus mengenai pemenuhan persyaratan hukum terkini.";
        break;
      case kontrol13 == 1 || kontrol13 <= 7:
        kategori = "Risiko Sedang";
        hasilKontrol13 =
          "### Umpan balik Kepatuhan terhadap standar(Memenuhi Kerangka Dasar)\n\n Organisasi memiliki kerangka dasar untuk memastikan kepatuhan dengan persyaratan hukum, regulasi, dan standar industri. Namun, belum ada langkah-langkah rinci yang ditetapkan untuk menerapkan persyaratan ini ke dalam operasi sehari-hari. Beberapa dokumen kebijakan telah disusun, tetapi belum ada proses yang jelas untuk mengidentifikasi dan meninjau perubahan hukum atau regulasi yang relevan secara teratur.";
        break;
      case kontrol13 == 8 || kontrol13 <= 15:
        kategori = "Risiko Rendah";
        hasilKontrol13 =
          "### Umpan balik Kepatuhan terhadap standar(Cukup Baik)\n\n Organisasi telah menetapkan kebijakan dan prosedur formal untuk memastikan kepatuhan dengan persyaratan hukum, regulasi, dan standar industri yang berlaku. Ada tim khusus atau personil yang ditugaskan untuk memantau perubahan hukum yang relevan dan memastikan kebijakan internal selaras dengan perubahan tersebut. Namun, belum ada langkah-langkah konkret yang dilakukan untuk mengukur efektivitas kepatuhan secara reguler atau mengevaluasi risiko kepatuhan.";
        break;
      case kontrol13 == 16 || kontrol13 <= 21:
        kategori = "Risiko Sangat Rendah";
        hasilKontrol13 =
          "### Umpan balik Kepatuhan terhadap standar(Baik)\n\n Organisasi telah mengadopsi pendekatan sistematis untuk memastikan kepatuhan dengan persyaratan hukum, regulasi, dan standar industri yang berlaku.";
        break;
      default:
        hasilKontrol13 = "null";
        break;
    }

    const updatedHasilKontrol13 = [...hasilKontrol13];

    updatedHasilKontrol13[0] = {
      nama: "Nama aspek: " + aspek,
      kontrolKeamanan: "Kontrol Keamanan: Kepatuhan terhadap standar",
      hasil: hasilKontrol13,
      kategori: "Tingkat Risiko: " + kategori,
      skor: " skor: " + kontrol13.toString(),
    };

    setHasilKontrol13(updatedHasilKontrol13);
  };

  // function analisa kontrol 14
  const analisaKontrol14 = () => {
    let kontrol14 = risk141 + risk142 + risk143 + risk144 + risk145 + risk146 + risk147;
    let hasilKontrol14: any, kategori: any;
    // kontrol l4
    switch (true) {
      case kontrol14 == 0:
        kategori = "Risiko Tinggi";
        hasilKontrol14 =
          "### Umpan balik Audit keamanan informasi(Tidak Layak)\n\n Organisasi tidak memiliki proses audit keamanan informasi yang terstruktur dan terjadwal. Tidak ada upaya yang jelas untuk mengevaluasi secara teratur efektivitas kontrol keamanan informasi. Karena tidak ada audit yang dilakukan, potensi risiko dan kerentanannya tidak teridentifikasi secara sistematis, meninggalkan organisasi rentan terhadap ancaman keamanan yang tidak terdeteksi.";
        break;
      case kontrol14 == 1 || kontrol14 <= 7:
        kategori = "Risiko Sedang";
        hasilKontrol14 =
          "### Umpan balik Audit keamanan informasi(Memenuhi Kerangka Dasar)\n\n Organisasi telah menetapkan proses audit keamanan informasi yang dasar dan terjadwal. Audit dilakukan sesuai dengan jadwal tertentu, tetapi mungkin tidak selalu komprehensif atau mendalam. Meskipun telah ada upaya untuk memenuhi kerangka dasar ISO 27002, proses audit masih membutuhkan peningkatan agar menjadi lebih komprehensif dan efektif.";
        break;
      case kontrol14 == 8 || kontrol14 <= 15:
        kategori = "Risiko Rendah";
        hasilKontrol14 =
          "### Umpan balik Audit keamanan informasi(Cukup Baik)\n\n Organisasi secara teratur melakukan audit keamanan informasi sesuai dengan kerangka dasar ISO 27002. Proses audit terjadwal dan mencakup sebagian besar kontrol keamanan informasi yang relevan. Meskipun audit telah dilakukan dengan baik, masih ada ruang untuk meningkatkan ketelitian dan mendalamnya evaluasi agar menghadapi ancaman keamanan yang semakin kompleks.";
        break;
      case kontrol14 == 16 || kontrol14 <= 21:
        kategori = "Risiko Sangat Rendah";
        hasilKontrol14 =
          "### Umpan balik Audit keamanan informasi(Baik)\n\n Organisasi secara konsisten dan teratur melakukan audit keamanan informasi sesuai dengan standar ISO 27002.";
        break;
      default:
        hasilKontrol14 = "null";
        break;
    }

    const updatedHasilKontrol14 = [...hasilKontrol14];

    updatedHasilKontrol14[0] = {
      nama: "Nama aspek: " + aspek,
      kontrolKeamanan: "Kontrol Keamanan: Audit keamanan informasi",
      hasil: hasilKontrol14,
      kategori: "Tingkat Risiko: " + kategori,
      skor: " skor: " + kontrol14.toString(),
    };

    setHasilKontrol14(updatedHasilKontrol14);
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
          {/* Kontrol keamanan 1 Kebijakan keamanan informasi*/}
          <div className={styles.parameter}>
            <b>1. Kebijakan keamanan informasi</b>
            {Array.from({ length: 7 }, (_, index) => (
              <div className={styles.ul} key={index}>
                <div className={styles.ulItem}>
                  <li />
                  <span>{assessment1[index + 1]}</span>
                </div>
                <select onChange={(e) => riskSetters1[index](parseInt(e.target.value))}>
                  <OptionAssessment />
                </select>
              </div>
            ))}
          </div>
          <Button onClick={analisaKontrol1}>Analisa Kontrol Kebijakan Keamanan Informasi</Button>

          <div className={styles.hasil}>
            {hasilKontrol1.map((item, index) => (
              <div key={index}>
                <h2>{item.nama}</h2>
                <p>{item.skor}</p>
                <p>{item.kontrolKeamanan}</p>
                <p>{item.kategori}</p>
                <p>{item.hasil}</p>
              </div>
            ))}
          </div>

          {/* kontrol keamanan 2 Organisasi keamanan informasi */}
          <div className={styles.parameter}>
            <b>2. Organisasi keamanan informasi</b>
            {Array.from({ length: 7 }, (_, index) => (
              <div className={styles.ul} key={index}>
                <div className={styles.ulItem}>
                  <li />
                  <span>{assessment2[index + 1]}</span>
                </div>
                <select onChange={(e) => riskSetters2[index](parseInt(e.target.value))}>
                  <OptionAssessment />
                </select>
              </div>
            ))}
          </div>
          <Button onClick={analisaKontrol2}>Analisa Kontrol Organisasi Keamanan Informasi</Button>
          <div className={styles.hasil}>
            {hasilKontrol2.map((item, index) => (
              <div key={index}>
                <h2>{item.nama}</h2>
                <p>{item.skor}</p>
                <p>{item.kontrolKeamanan}</p>
                <p>{item.kategori}</p>
                <p>{item.hasil}</p>
              </div>
            ))}
          </div>

          {/* kontrol keamanan 3 Manajemen aset*/}
          <div className={styles.parameter}>
            <b>3. Manajemen aset</b>
            {Array.from({ length: 7 }, (_, index) => (
              <div className={styles.ul} key={index}>
                <div className={styles.ulItem}>
                  <li />
                  <span>{assessment3[index + 1]}</span>
                </div>
                <select onChange={(e) => riskSetters3[index](parseInt(e.target.value))}>
                  <OptionAssessment />
                </select>
              </div>
            ))}
          </div>
          <Button onClick={analisaKontrol3}>Analisa Kontrol Manajemen aset</Button>
          <div className={styles.hasil}>
            {hasilKontrol3.map((item, index) => (
              <div key={index}>
                <h2>{item.nama}</h2>
                <p>{item.skor}</p>
                <p>{item.kontrolKeamanan}</p>
                <p>{item.kategori}</p>
                <p>{item.hasil}</p>
              </div>
            ))}
          </div>

          {/* kontrol keamanan 4 Keamanan sumber daya manusia*/}
          <div className={styles.parameter}>
            <b>Keamanan sumber daya manusia</b>
            {Array.from({ length: 7 }, (_, index) => (
              <div className={styles.ul} key={index}>
                <div className={styles.ulItem}>
                  <li />
                  <span>{assessment4[index + 1]}</span>
                </div>
                <select onChange={(e) => riskSetters2[index](parseInt(e.target.value))}>
                  <OptionAssessment />
                </select>
              </div>
            ))}
          </div>
          <Button onClick={analisaKontrol4}>Analisa kontrol Keamanan sumber daya manusia</Button>
          <div className={styles.hasil}>
            {hasilKontrol4.map((item, index) => (
              <div key={index}>
                <h2>{item.nama}</h2>
                <p>{item.skor}</p>
                <p>{item.kontrolKeamanan}</p>
                <p>{item.kategori}</p>
                <p>{item.hasil}</p>
              </div>
            ))}
          </div>
          {/* kontrol keamanan 5 Akses kontrol*/}
          <div className={styles.parameter}>
            <b>Akses kontrol</b>
            {Array.from({ length: 7 }, (_, index) => (
              <div className={styles.ul} key={index}>
                <div className={styles.ulItem}>
                  <li />
                  <span>{assessment5[index + 1]}</span>
                </div>
                <select onChange={(e) => riskSetters5[index](parseInt(e.target.value))}>
                  <OptionAssessment />
                </select>
              </div>
            ))}
          </div>
          <Button onClick={analisaKontrol5}>Analisa kontrol Akses kontrol</Button>
          <div className={styles.hasil}>
            {hasilKontrol5.map((item, index) => (
              <div key={index}>
                <h2>{item.nama}</h2>
                <p>{item.skor}</p>
                <p>{item.kontrolKeamanan}</p>
                <p>{item.kategori}</p>
                <p>{item.hasil}</p>
              </div>
            ))}
          </div>
          {/* kontrol keamanan 6 Perencanaan dan pemulihan bencana*/}
          <div className={styles.parameter}>
            <b>Perencanaan dan pemulihan bencana</b>
            {Array.from({ length: 7 }, (_, index) => (
              <div className={styles.ul} key={index}>
                <div className={styles.ulItem}>
                  <li />
                  <span>{assessment6[index + 1]}</span>
                </div>
                <select onChange={(e) => riskSetters6[index](parseInt(e.target.value))}>
                  <OptionAssessment />
                </select>
              </div>
            ))}
          </div>
          <Button onClick={analisaKontrol6}>Analisa kontrol Perencanaan dan pemulihan bencana</Button>
          <div className={styles.hasil}>
            {hasilKontrol6.map((item, index) => (
              <div key={index}>
                <h2>{item.nama}</h2>
                <p>{item.skor}</p>
                <p>{item.kontrolKeamanan}</p>
                <p>{item.kategori}</p>
                <p>{item.hasil}</p>
              </div>
            ))}
          </div>
          {/* kontrol keamanan 7 Manajemen keamanan operasional*/}
          <div className={styles.parameter}>
            <b>Manajemen keamanan operasional</b>
            {Array.from({ length: 7 }, (_, index) => (
              <div className={styles.ul} key={index}>
                <div className={styles.ulItem}>
                  <li />
                  <span>{assessment7[index + 1]}</span>
                </div>
                <select onChange={(e) => riskSetters7[index](parseInt(e.target.value))}>
                  <OptionAssessment />
                </select>
              </div>
            ))}
          </div>
          <Button onClick={analisaKontrol7}>Analisa kontrol Manajemen keamanan operasional</Button>
          <div className={styles.hasil}>
            {hasilKontrol7.map((item, index) => (
              <div key={index}>
                <h2>{item.nama}</h2>
                <p>{item.skor}</p>
                <p>{item.kontrolKeamanan}</p>
                <p>{item.kategori}</p>
                <p>{item.hasil}</p>
              </div>
            ))}
          </div>
          {/* kontrol keamanan 8 Keamanan komunikasi dan operasi*/}
          <div className={styles.parameter}>
            <b>Keamanan komunikasi dan operasi</b>
            {Array.from({ length: 7 }, (_, index) => (
              <div className={styles.ul} key={index}>
                <div className={styles.ulItem}>
                  <li />
                  <span>{assessment8[index + 1]}</span>
                </div>
                <select onChange={(e) => riskSetters8[index](parseInt(e.target.value))}>
                  <OptionAssessment />
                </select>
              </div>
            ))}
          </div>
          <Button onClick={analisaKontrol8}>Analisa kontrol Keamanan komunikasi dan operasi</Button>
          <div className={styles.hasil}>
            {hasilKontrol8.map((item, index) => (
              <div key={index}>
                <h2>{item.nama}</h2>
                <p>{item.skor}</p>
                <p>{item.kontrolKeamanan}</p>
                <p>{item.kategori}</p>
                <p>{item.hasil}</p>
              </div>
            ))}
          </div>
          {/* kontrol keamanan 9 Pengendalian akses sistem informasi*/}
          <div className={styles.parameter}>
            <b>Pengendalian akses sistem informasi</b>
            {Array.from({ length: 7 }, (_, index) => (
              <div className={styles.ul} key={index}>
                <div className={styles.ulItem}>
                  <li />
                  <span>{assessment9[index + 1]}</span>
                </div>
                <select onChange={(e) => riskSetters9[index](parseInt(e.target.value))}>
                  <OptionAssessment />
                </select>
              </div>
            ))}
          </div>
          <Button onClick={analisaKontrol9}>Analisa kontrol Pengendalian akses sistem informasi</Button>
          <div className={styles.hasil}>
            {hasilKontrol9.map((item, index) => (
              <div key={index}>
                <h2>{item.nama}</h2>
                <p>{item.skor}</p>
                <p>{item.kontrolKeamanan}</p>
                <p>{item.kategori}</p>
                <p>{item.hasil}</p>
              </div>
            ))}
          </div>
          {/* kontrol keamanan 10 Perolehan, pengembangan, dan pemeliharaan sistem informasi*/}
          <div className={styles.parameter}>
            <b>Perolehan, pengembangan, dan pemeliharaan sistem informasi</b>
            {Array.from({ length: 7 }, (_, index) => (
              <div className={styles.ul} key={index}>
                <div className={styles.ulItem}>
                  <li />
                  <span>{assessment10[index + 1]}</span>
                </div>
                <select onChange={(e) => riskSetters10[index](parseInt(e.target.value))}>
                  <OptionAssessment />
                </select>
              </div>
            ))}
          </div>
          <Button onClick={analisaKontrol10}>Analisa kontrol pemeliharaan sistem informasi</Button>
          <div className={styles.hasil}>
            {hasilKontrol10.map((item, index) => (
              <div key={index}>
                <h2>{item.nama}</h2>
                <p>{item.skor}</p>
                <p>{item.kontrolKeamanan}</p>
                <p>{item.kategori}</p>
                <p>{item.hasil}</p>
              </div>
            ))}
          </div>
          {/* kontrol keamanan 11 Pengelolaan ketidaksesuaian*/}
          <div className={styles.parameter}>
            <b>Pengelolaan ketidaksesuaian</b>
            {Array.from({ length: 7 }, (_, index) => (
              <div className={styles.ul} key={index}>
                <div className={styles.ulItem}>
                  <li />
                  <span>{assessment11[index + 1]}</span>
                </div>
                <select onChange={(e) => riskSetters11[index](parseInt(e.target.value))}>
                  <OptionAssessment />
                </select>
              </div>
            ))}
          </div>
          <Button onClick={analisaKontrol11}>Analisa kontrol Pengelolaan ketidaksesuaian</Button>
          <div className={styles.hasil}>
            {hasilKontrol11.map((item, index) => (
              <div key={index}>
                <h2>{item.nama}</h2>
                <p>{item.skor}</p>
                <p>{item.kontrolKeamanan}</p>
                <p>{item.kategori}</p>
                <p>{item.hasil}</p>
              </div>
            ))}
          </div>
          {/* kontrol keamanan 12 Aspek keamanan pada hubungan bisnis*/}
          <div className={styles.parameter}>
            <b>Aspek keamanan pada hubungan bisnis</b>
            {Array.from({ length: 7 }, (_, index) => (
              <div className={styles.ul} key={index}>
                <div className={styles.ulItem}>
                  <li />
                  <span>{assessment12[index + 1]}</span>
                </div>
                <select onChange={(e) => riskSetters12[index](parseInt(e.target.value))}>
                  <OptionAssessment />
                </select>
              </div>
            ))}
          </div>
          <Button onClick={analisaKontrol12}>Analisa kontrol Aspek keamanan pada hubungan bisnis</Button>
          <div className={styles.hasil}>
            {hasilKontrol12.map((item, index) => (
              <div key={index}>
                <h2>{item.nama}</h2>
                <p>{item.skor}</p>
                <p>{item.kontrolKeamanan}</p>
                <p>{item.kategori}</p>
                <p>{item.hasil}</p>
              </div>
            ))}
          </div>
          {/* kontrol keamanan 13 Kepatuhan terhadap standar*/}
          <div className={styles.parameter}>
            <b>Kepatuhan terhadap standar</b>
            {Array.from({ length: 7 }, (_, index) => (
              <div className={styles.ul} key={index}>
                <div className={styles.ulItem}>
                  <li />
                  <span>{assessment13[index + 1]}</span>
                </div>
                <select onChange={(e) => riskSetters13[index](parseInt(e.target.value))}>
                  <OptionAssessment />
                </select>
              </div>
            ))}
          </div>
          <Button onClick={analisaKontrol13}>Analisa kontrol Kepatuhan terhadap standa</Button>
          <div className={styles.hasil}>
            {hasilKontrol13.map((item, index) => (
              <div key={index}>
                <h2>{item.nama}</h2>
                <p>{item.skor}</p>
                <p>{item.kontrolKeamanan}</p>
                <p>{item.kategori}</p>
                <p>{item.hasil}</p>
              </div>
            ))}
          </div>
          {/* kontrol keamanan 14 Audit keamanan informasi*/}
          <div className={styles.parameter}>
            <b>Audit keamanan informasi</b>
            {Array.from({ length: 7 }, (_, index) => (
              <div className={styles.ul} key={index}>
                <div className={styles.ulItem}>
                  <li />
                  <span>{assessment14[index + 1]}</span>
                </div>
                <select onChange={(e) => riskSetters14[index](parseInt(e.target.value))}>
                  <OptionAssessment />
                </select>
              </div>
            ))}
          </div>
        </div>
        <Button onClick={analisaKontrol14}>Analisa kontrol Audit keamanan informasi</Button>
        <div className={styles.hasil}>
          {hasilKontrol14.map((item, index) => (
            <div key={index}>
              <h2>{item.nama}</h2>
              <p>{item.skor}</p>
              <p>{item.kontrolKeamanan}</p>
              <p>{item.kategori}</p>
              <p>{item.hasil}</p>
            </div>
          ))}
        </div>

        {/* button action */}
        <Button color="primary" auto onClick={handleAdd}>
          Analisa Keseluruhan
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
                  <td className={styles.skor}>{hasil}</td>
                  <td className={styles.skor}>
                    <div className={styles[userData.hasilMap.colorLevel[index]]}>{userData.hasilMap.level[index]}</div>
                  </td>
                  <td>
                    <p style={{ whiteSpace: "pre-line" }}>{userData.hasilMap.rekomendasi[index]}</p>
                  </td>
                  <td>
                    <Button color="error" auto onPress={() => handleDelete(index)}>
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
