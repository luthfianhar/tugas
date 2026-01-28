import { useState } from "react";

function DaftarNama() {
  const [inputValue, setInputValue] = useState("");
  const [listNama, setListNama] = useState([]);

  const tambahNama = () => {
    if (!inputValue) return;

    setListNama([...listNama, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <h3>Input Nama</h3>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Ketik nama..."
      />

      <button onClick={tambahNama}>
        Tambah Nama
      </button>

      <table border="1" style={{ marginTop: "15px" }}>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
          </tr>
        </thead>
        <tbody>
          {listNama.map((nama, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{nama}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DaftarNama;
