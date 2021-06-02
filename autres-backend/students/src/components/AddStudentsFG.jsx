import React from 'react';
import { useState, useEffect } from 'react';

export default function AddStudents() {
  const [studentName, setStudentName] = useState([]);

  const handleInputChange = (e) => {
    // console.log("i'm in handle");
    // console.log('e.target.value', e.target.value);
    const newName = e.target.value;
    setStudentName([...studentName, newName]);
  };

  return (
    <div>
      <h2>Add Students</h2>
      <label>
        Student name
        <input onChange={handleInputChange} />
      </label>

      <button>Send</button>
    </div>
  );
}
