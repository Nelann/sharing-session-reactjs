import PropTypes from "prop-types";
import { useState } from "react";

const AddStudent = ({ onAddStudent }) => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    /**
     * Supaya si form gak reloading
     * */
    event.preventDefault();

    onAddStudent(name);
    setName("");
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button>Add Student</button>
      </form>
    </>
  );
};

AddStudent.propTypes = {
  onAddStudent: PropTypes.func,
};

export default AddStudent;
