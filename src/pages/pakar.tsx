import styles from "@/styles/pakar.module.css";
import { useState } from "react";
export default function Pakar() {
  const [risk1, setRisk1] = useState("");
  const [risk2, setRisk2] = useState("");
  const [risk3, setRisk3] = useState("");
  const [risk4, setRisk4] = useState("");

  const kirim = () => {
    while (risk1 === "high") {
      alert("value 20");
      return;
    }
  };

  return (
    <main className={styles.main}>
      <h1>Sistem Pakar</h1>
      <div className={styles.form}>
        <span>Form</span>
        <input type="text" placeholder="Aspek Keamanan" />
        <div>
          <span>parameter 1</span>
          <select id="risk" onChange={(e) => setRisk1(e.target.value)}>
            <option value="high">High Risk</option>
            <option value="medium">Medium Risk</option>
            <option value="low">Low Risk</option>
            <option value="very-low">Very Low Risk</option>
          </select>
        </div>
        <div>
          <span>parameter 1</span>
          <select id="risk" onChange={(e) => setRisk2(e.target.value)}>
            <option value="high">High Risk</option>
            <option value="medium">Medium Risk</option>
            <option value="low">Low Risk</option>
            <option value="very-low">Very Low Risk</option>
          </select>
        </div>
        <div>
          <span>parameter 1</span>
          <select id="risk" onChange={(e) => setRisk3(e.target.value)}>
            <option value="high">High Risk</option>
            <option value="medium">Medium Risk</option>
            <option value="low">Low Risk</option>
            <option value="very-low">Very Low Risk</option>
          </select>
        </div>
        <div>
          <span>parameter 1</span>
          <select id="risk" onChange={(e) => setRisk4(e.target.value)}>
            <option value="high">High Risk</option>
            <option value="medium">Medium Risk</option>
            <option value="low">Low Risk</option>
            <option value="very-low">Very Low Risk</option>
          </select>
        </div>
      </div>
      <button onClick={kirim}>kirim</button>
    </main>
  );
}
