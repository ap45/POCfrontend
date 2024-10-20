// src/components/StudentList.js
import React, { useState, useEffect } from 'react';
import { fetchStudents, createStudent } from '../service/apiService';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState();

  useEffect(() => {
    loadStudents();
    
  }, []);

  const loadStudents = async () => {
    const data = await fetchStudents();
    setStudents(data);
  };

  const handleAddStudent = async () => {
    if (name) {
      const newStudent = { name, age };
      await createStudent(newStudent);
      loadStudents();
      setName("");
      setAge("");

    }
  };

  return (
    <div>
      <h1>Students</h1>
      <ul>
        {students.map(student => (
          <>
          <li key={student.id}>{student.name} {student.age}</li>
          
          </>
          
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Student Name"
      />
      <input
        type="text"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Student Age"
      />
      <button onClick={handleAddStudent}>Add Student</button>
    </div>
  );
};

export default StudentList;
