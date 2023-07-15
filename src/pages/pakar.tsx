import styles from "@/styles/pakar.module.css";
import { useState, useEffect } from "react";
import Head from "next/head";
export default function Pakar() {
  const [aspek, setAspek] = useState("");
  const [risk1, setRisk1] = useState<number>(3);
  const [risk2, setRisk2] = useState<number>(3);
  const [risk3, setRisk3] = useState<number>(3);
  const [risk4, setRisk4] = useState<number>(3);
  const [hasil, setHasil] = useState([
    {
      nama: "",
      hasil: "",
      jenisKelamin: "",
    },
  ]);

  const kirim = () => {
    let total = (risk1 + risk2 + risk3 + risk4) / 4;
  
    setHasil((prevHasil) => [
      ...prevHasil,
      {
        nama: aspek,
        hasil: total.toString(),
        jenisKelamin: "",
      },
    ]);
  };

  const hapus = (index: any) => {
    setHasil(hasil.filter((element, i) => i !== index));
  };

  return (
    <main className={styles.main}>
      <Head>
        <title>Sistem Pakar | Dashboard</title>
      </Head>
      <h1>Sistem Pakar</h1>
      <div className={styles.form}>
        <input
          type="text"
          placeholder="Aspek Keamanan"
          onChange={(e) => setAspek(e.target.value)}
        />
        <div>
          <span>parameter 1</span>
          <select
            id="risk"
            onChange={(e) => setRisk1(parseInt(e.target.value))}
          >
            <option value="3">High Risk</option>
            <option value="2">Medium Risk</option>
            <option value="1">Low Risk</option>
            <option value="0">Very Low Risk</option>
          </select>
        </div>
        <div>
          <span>parameter 1</span>
          <select
            id="risk"
            onChange={(e) => setRisk2(parseInt(e.target.value))}
          >
            <option value="3">High Risk</option>
            <option value="2">Medium Risk</option>
            <option value="1">Low Risk</option>
            <option value="0">Very Low Risk</option>
          </select>
        </div>
        <div>
          <span>parameter 1</span>
          <select
            id="risk"
            onChange={(e) => setRisk3(parseInt(e.target.value))}
          >
            <option value="3">High Risk</option>
            <option value="2">Medium Risk</option>
            <option value="1">Low Risk</option>
            <option value="0">Very Low Risk</option>
          </select>
        </div>
        <div>
          <span>parameter 1</span>
          <select
            id="risk"
            onChange={(e) => setRisk4(parseInt(e.target.value))}
          >
            <option value="3">High Risk</option>
            <option value="2">Medium Risk</option>
            <option value="1">Low Risk</option>
            <option value="0">Very Low Risk</option>
          </select>
        </div>
        <button onClick={kirim}>kirim</button>
      </div>
      <ul>
        {hasil.map((nilai, index) => (
          <li key={index}>
            <span>{nilai.nama}</span>
            <span>{nilai.hasil}</span>
            <button onClick={() => hapus(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
