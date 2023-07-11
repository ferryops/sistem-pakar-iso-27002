import styles from "@/styles/pakar.module.css";
import { useState } from "react";
export default function Pakar() {
  const [aspek, setAspek] = useState("");
  const [risk1, setRisk1] = useState<number>(3);
  const [risk2, setRisk2] = useState<number>(3);
  const [risk3, setRisk3] = useState<number>(3);
  const [risk4, setRisk4] = useState<number>(3);
  const [hasil, setHasil] = useState("");
  const [rekomendasi, setRekomendasi] = useState("");

  const kirim = () => {
    let total = (risk1 + risk2 + risk3 + risk4) / 4;
    // switch (total) {
    //   case 1:
    //     setHasil("1");
    //     setRekomendasi("sebaiknya 1");
    //     break;
    //   case 2:
    //     setHasil("2");
    //     setRekomendasi("sebaiknya 1");
    //     break;
    //   case 3:
    //     setHasil("3");
    //     setRekomendasi("sebaiknya 1");
    //     break;
    //   default:
    //     setHasil("4");
    //     setRekomendasi("null");
    // }
    // alert(`${aspek} memiliki nilai risk ${hasil} /n ${rekomendasi}`);

    alert(`${total}`);
  };

  return (
    <main className={styles.main}>
      <h1>Sistem Pakar</h1>
      <div className={styles.form}>
        <span>Form</span>
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
      </div>
      <button onClick={kirim}>kirim</button>
    </main>
  );
}
