import styles from "@/styles/about.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import { GrSystem } from "react-icons/gr";
import { PiStudentBold } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { VscDebugStart } from "react-icons/vsc";
import Head from "next/head";

export default function About() {
  const [viewSistem, setViewSistem] = useState(true);
  const [viewPeneliti, setViewPeneliti] = useState(false);
  const [viewDosen, setViewDosen] = useState(false);

  const router = useRouter();

  const clickSistem = () => {
    setViewSistem(true);
    setViewPeneliti(false);
    setViewDosen(false);
  };
  const clickPeneliti = () => {
    setViewPeneliti(true);
    setViewSistem(false);
    setViewDosen(false);
  };
  const clickDosen = () => {
    setViewDosen(true);
    setViewSistem(false);
    setViewPeneliti(false);
  };
  return (
    <>
      <main className={styles.main}>
        <Head>
          <title>Sistem Pakar | About</title>
        </Head>
        <div className={styles.left}>
          <h4 onClick={clickSistem}>
            <GrSystem />
            Tentang Sistem
          </h4>
          <h4 onClick={clickPeneliti}>
            <PiStudentBold />
            Tentang Peneliti
          </h4>
          <h4 onClick={clickDosen}>
            <LiaChalkboardTeacherSolid />
            Pembimbing dan Penguji
          </h4>
          <h3 onClick={() => router.push("/pakar")}>
            <VscDebugStart />
            Coba Sistem
          </h3>
        </div>
        <div className={styles.right}>
          {viewSistem ? (
            <div>
              <h3>Tentang Sistem</h3>
              <p>
                "Sistem pakar Risk Assessment Keamanan Sistem Informasi
                berdasarkan ISO 27002 dengan metode Certainty Factor" adalah
                sebuah sistem pakar yang dirancang untuk mengevaluasi dan
                menganalisis risiko keamanan pada sistem informasi menggunakan
                standar ISO 27002.
              </p>
              <p>
                ISO 27002 adalah standar internasional yang memberikan panduan
                tentang praktik keamanan informasi dalam sebuah organisasi.
                Standar ini mencakup berbagai aspek keamanan, termasuk kebijakan
                keamanan, pengelolaan akses, pengendalian fisik, pengendalian
                keamanan jaringan, dan manajemen risiko keamanan informasi.
              </p>
              <p>
                Metode Certainty Factor (CF) adalah salah satu teknik yang
                digunakan dalam sistem pakar untuk menggambarkan tingkat
                keyakinan dalam mengambil keputusan berdasarkan sejumlah aturan
                yang telah ditentukan. Metode ini memperhitungkan faktor-faktor
                ketidakpastian dalam proses pengambilan keputusan.
              </p>
              <p>
                Sistem ini bertujuan untuk membantu organisasi dalam melakukan
                evaluasi risiko keamanan pada sistem informasi mereka. Sistem
                ini akan menggunakan aturan dan pedoman dari ISO 27002 sebagai
                dasar untuk mengevaluasi kebijakan keamanan, mengidentifikasi
                kerentanan, dan menilai potensi dampak dari serangan atau
                ancaman keamanan.
              </p>
            </div>
          ) : null}
          {viewPeneliti ? (
            <div>
              <h3>Tentang Peneliti</h3>
              <p>
                Nama lengkap saya Denny Hadi Pratama, NIM 1912038, mahasiswa
                program studi Teknologi Informasi, fakultas ilmu komputer,
                Universitas Mulia angkatan 2019, siap lulus
              </p>
            </div>
          ) : null}
          {viewDosen ? (
            <div className={styles.dosen}>
              <h3>Dosen Pembimbing dan Penguji</h3>
              <div className={styles.listDosen}>
                <h4>Gunawan, ST.,MT</h4>
                <span>Pembimbing I</span>
                <span>NIDN: 1122047201 </span>
              </div>
              <div className={styles.listDosen}>
                <h4>Wahyu Nur Alimyaningtias, Skom.,Mkom</h4>
                <span>Pembimbing II</span>
                <span>NIDN: 1103028801</span>
              </div>
              <div className={styles.listDosen}>
                <h4>Isa Rosita, SKom.,MCs</h4>
                <span>Penguji I</span>
                <span>NIDN: 1129048503</span>
              </div>
              <div className={styles.listDosen}>
                <h4>Yeyen Dwi Atma, SKom.,MKom</h4>
                <span>Penguji II</span>
                <span>NIDN: 1123018901</span>
              </div>
            </div>
          ) : null}
        </div>
      </main>
    </>
  );
}
