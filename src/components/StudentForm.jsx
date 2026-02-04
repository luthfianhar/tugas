import { useState } from "react";

export default function StudentForm({ onSubmit, editingStudent }) {
  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState("");
  const [kelas, setKelas] = useState("");

  // isi ulang form saat edit
  useState(() => {
    if (editingStudent) {
      setNama(editingStudent.nama);
      setUmur(editingStudent.umur);
      setKelas(editingStudent.kelas);
    }
  }, [editingStudent]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!nama || !umur || !kelas) return;

    onSubmit({
      id: editingStudent ? editingStudent.id : Date.now(),
      nama,
      umur,
      kelas,
    });

    setNama("");
    setUmur("");
    setKelas("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md mb-6"
    >
      <h2 className="text-xl font-semibold mb-4">
        {editingStudent ? "Edit Data Siswa" : "Tambah Data Siswa"}
      </h2>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <input
          type="text"
          placeholder="Nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          placeholder="Umur"
          value={umur}
          onChange={(e) => setUmur(e.target.value)}
          className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Kelas"
          value={kelas}
          onChange={(e) => setKelas(e.target.value)}
          className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
        {editingStudent ? "Update" : "Submit"}
      </button>
    </form>
  );
}
