import React from "react";
import styles from "@/styles/pakar.module.css";
const OptionAssessment = () => {
  return (
    <>
      <option value="0" className={styles["red"]}>
        &#10060;Tidak Dilakukan
      </option>
      <option value="1" className={styles["yellow"]}>
        &#128209;Dalam Perencanaan
      </option>
      <option value="2" className={styles["green"]}>
        &#10004;Diterapkan Sebagian
      </option>
      <option value="3" className={styles["blue"]}>
        &#9989;Diterapkan Menyeluruh
      </option>
    </>
  );
};

export default OptionAssessment;
