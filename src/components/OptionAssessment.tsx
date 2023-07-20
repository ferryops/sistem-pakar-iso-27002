import React from "react";
import styles from "@/styles/pakar.module.css"
const OptionAssessment = () => {
  return (
    <>
      <option value="0" className={styles["red"]}>Tidak Dilakukan</option>
      <option value="1" className={styles["yellow"]}>Dalam Perencanaan</option>
      <option value="2" className={styles["green"]}>Diterapkan Sebagian</option>
      <option value="3" className={styles["blue"]}>Diterapkan Menyeluruh</option>
    </>
  );
};

export default OptionAssessment;
