export default function StudentTable({ students, onDelete, onEdit }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-slate-200">
          <tr>
            <th className="p-3">Nama</th>
            <th className="p-3">Umur</th>
            <th className="p-3">Kelas</th>
            <th className="p-3 text-center">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr
              key={student.id}
              className="border-b hover:bg-slate-50 transition"
            >
              <td className="p-3">{student.nama}</td>
              <td className="p-3">{student.umur}</td>
              <td className="p-3">{student.kelas}</td>
              <td className="p-3 flex justify-center gap-2">
                <button
                  onClick={() => onEdit(student)}
                  className="bg-yellow-400 px-3 py-1 rounded-md hover:bg-yellow-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(student.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
