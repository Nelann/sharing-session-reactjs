import { useState } from "react";
import studentsJOSN from "../../data/students.json";
import AddStudent from "../AddStudent";

const Home = () => {
  const [students, setStudents] = useState(studentsJOSN);

  const handleAddStudent = (name) => {
    const newStudent = {
      id: crypto.randomUUID(),
      name,
      graduated: false,
    };

    setStudents([newStudent, ...students]);
  };

  const handleDeleteStudent = (id) => {
    const deletedStudent = students.filter((student) => student.id !== id);
    setStudents(deletedStudent);
  };

  const handleDeleteAll = () => {
    setStudents([]);
  };

  return (
    <div>
      <AddStudent onAddStudent={handleAddStudent} />
      <h1>Data Students: </h1>
      <ul>
        {students.map((student) => {
          return (
            <li key={student.id}>
              {student.name}
              <button onClick={() => handleDeleteStudent(student.id)}>X</button>
            </li>
          );
        })}
      </ul>
      <button onClick={handleDeleteAll}>Delete All</button>
    </div>
  );
};

export default Home;
