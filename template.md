const [level, setLevel] = useState("");

  const [hasil, setHasil] = useState([
    {
      nama: "",
      hasil: "",
      level: "",
      rekomendasi: "",
    },
  ]);

  const kirim = () => {
    // cek input user kosong
    if (aspek === "") {
      setModalError(true);
      return;
    }
    // kalkulasi nilai risk
    let total = 3;
    // let total = (risk1 + risk2 + risk3 + risk4) / 4;

    switch (total) {
      case 1:
        setLevel("High Risk");
        break
      case 2:
        setLevel("Medium Risk");
        break
      case 3:
        setLevel("Low Risk");
        break
      case 4:
        setLevel("Very Low Risk");
        break
      default:
        setLevel("High Risk");
        break
    }

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