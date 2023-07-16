import styles from "@/styles/pakar.module.css";
import { useState, useEffect } from "react";
import Head from "next/head";
import {
  Table,
  Button,
  Input,
  Modal,
  Row,
  Checkbox,
  Text,
} from "@nextui-org/react";
import { MdOutlineDeleteOutline } from "react-icons/md";

export default function Pakar() {
  const [modalError, setModalError] = useState(false);
  const closeHandler = () => {
    setModalError(false);
    console.log("closed");
  };

  const [aspek, setAspek] = useState("");
  const [risk1, setRisk1] = useState<number>(3);
  const [risk2, setRisk2] = useState<number>(3);
  const [risk3, setRisk3] = useState<number>(3);
  const [risk4, setRisk4] = useState<number>(3);
  const [hasil, setHasil] = useState([
    {
      nama: "",
      hasil: "",
      level: "",
      rekomendasi: "",
    },
  ]);

  const kirim = () => {
    if (aspek === "") {
      setModalError(true);
      return;
    }
    let total = (risk1 + risk2 + risk3 + risk4) / 4;

    let level = "high risk"

    setHasil((prevHasil) => [
      ...prevHasil,
      {
        nama: aspek,
        hasil: total.toString(),
        level: level,
        rekomendasi:
          "lorem ipsum dolor sit amet, consectetur adip   incididunt ut labore et        dolore magna aliqu Lorem ipsum dolor sit amet",
      },
    ]);
    setAspek("");
  };

  const hapus = (index: any) => {
    setHasil(hasil.filter((element, i) => i !== index));
  };

  return (
    <main className={styles.main}>
      <Head>
        <title>Sistem Pakar | Dashboard</title>
      </Head>
      <h1>Sistem Pakar ISO 270002 Dengan Metode Certainty Factor</h1>
      <Input
        clearable
        bordered
        labelPlaceholder="Nama Aspek "
        onChange={(e) => setAspek(e.target.value)}
        fullWidth
        value={aspek}
      />

      {/* div form */}
      <div className={styles.form}>
        {/* Kontrol keamanan 1 */}
        <div className={styles.parameter}>
          <span>Kebijakan keamanan informasi</span>
          <div className={styles.ul}>
            <div className={styles.ulItem}>
              <li />
              <span>
                Kebijakan keamanan informasi telah dikembangkan dan
                dokumentasikan dengan jelas
              </span>
            </div>

            <select onChange={(e) => setRisk1(parseInt(e.target.value))}>
              <option value="1">Ya</option>
              <option value="0">Tidak</option>
            </select>
          </div>
          <div className={styles.ul}>
            <div className={styles.ulItem}>
              <li />
              <span>
                Kebijakan mencakup komitmen manajemen atas keamanan informasi
              </span>
            </div>
            <select onChange={(e) => setRisk1(parseInt(e.target.value))}>
              <option value="1">Ya</option>
              <option value="0">Tidak</option>
            </select>
          </div>
          <div className={styles.ul}>
            <div className={styles.ulItem}>
              <li />
              <span>
                Kebijakan memperhitungkan tujuan organisasi dan kebutuhan bisnis
              </span>
            </div>
            <select onChange={(e) => setRisk1(parseInt(e.target.value))}>
              <option value="1">Ya</option>
              <option value="0">Tidak</option>
            </select>
          </div>
        </div>
        {/* kontrol keamanan 2 */}
        <div className={styles.parameter}>
          <span>Organisasi keamanan informasi</span>
          <div className={styles.ul}>
            <div className={styles.ulItem}>
              <li />
              <span>Lorem</span>
            </div>
            <select onChange={(e) => setRisk1(parseInt(e.target.value))}>
              <option value="1">Ya</option>
              <option value="0">Tidak</option>
            </select>
          </div>
          <div className={styles.ul}>
            <div className={styles.ulItem}>
              <li />
              <span>Lorem</span>
            </div>
            <select onChange={(e) => setRisk1(parseInt(e.target.value))}>
              <option value="1">Ya</option>
              <option value="0">Tidak</option>
            </select>
          </div>
          <div className={styles.ul}>
            <div className={styles.ulItem}>
              <li />
              <span>Lorem</span>
            </div>
            <select onChange={(e) => setRisk1(parseInt(e.target.value))}>
              <option value="1">Ya</option>
              <option value="0">Tidak</option>
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
                <td className={styles.skor}>{nilai.level}</td>
                <td>{nilai.rekomendasi}</td>
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
  );
}
