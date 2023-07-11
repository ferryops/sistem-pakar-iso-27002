import styles from "@/styles/dosen.module.css";
import { useRouter } from "next/router";

export default function Dosen() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <h1>Dosen Pembimbing dan Penguji</h1>
      <div className={styles.dosen}>
        <div className={styles.listDosen}>
          <h4>Gunawan, ST.,MT</h4>
          <span>Pembimbing I</span>
          <span>NIDN: </span>
        </div>
        <div className={styles.listDosen}>
          <h4>Wahyu Nur Alimyaningtias, Skom.,Mkom</h4>
          <span>Pembimbing II</span>
          <span>NIDN: </span>
        </div>
        <div className={styles.listDosen}>
          <h4>Isa Rosita, SKom.,MCs</h4>
          <span>Penguji I</span>
          <span>NIDN: </span>
        </div>
        <div className={styles.listDosen}>
          <h4>Yeyen Dwi Atma, SKom.,MKom</h4>
          <span>Penguji II</span>
          <span>NIDN: </span>
        </div>
      </div>
      <div className={styles.backHome}>
        <button onClick={() => router.push("/")}>Home</button>
      </div>
    </main>
  );
}
