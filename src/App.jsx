import { useImmerReducer } from "use-immer";
import { studentReducer } from "./reducer/studentReducer";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import { useState } from "react";

export default function App() {
  const [students, dispatch] = useImmerReducer(studentReducer, []);
  const [editingStudent, setEditingStudent] = useState(null);

  function handleSubmit(data) {
    dispatch({
      type: editingStudent ? "EDIT_DATA" : "ADD_DATA",
      payload: data,
    });
    setEditingStudent(null);
  }

  function handleDelete(id) {
    dispatch({ type: "DELETE_DATA", payload: id });
  }

  function handleEdit(student) {
    setEditingStudent(student);
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Manajemen Data Siswa
      </h1>

      <StudentForm
        onSubmit={handleSubmit}
        editingStudent={editingStudent}
      />

      <StudentTable
        students={students}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
}
