import Image from "next/image";
import styles from "./page.module.css";
import muliaLogo from "@/img/um.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Selamat datang di sistem pakar Risk Assessment Keamanan Sistem
          Informasi Berdasarkan Iso 270002 Dengan Metode Certainty Factor
        </p>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src={muliaLogo}
          alt="Logo Mulia"
          width={200}
          height={200}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="/pakar"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Coba Sistem <span>-&gt;</span>
          </h2>
          <p>
            Uji coba Sistem Pakar Risk Assessment Keamanan Sistem Informasi
            Berdasarkan Iso 270002 Dengan Metode Certainty Factor
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Tentang Sistem <span>-&gt;</span>
          </h2>
          <p>Pelajari lebih jauh tentang sistem pakar</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Tentang Peneliti <span>-&gt;</span>
          </h2>
          <p>Berisi biodata singkat tentang penliti</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Dosen pembimbing dan Penguji <span>-&gt;</span>
          </h2>
          <p>Berisi biodata singkat dosen pembimbing dan penguji</p>
        </a>
      </div>
    </main>
  );
}
