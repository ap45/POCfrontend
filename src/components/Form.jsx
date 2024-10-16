import { useState, useEffect } from 'react';

const Form = () => {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({ name: '', age: '' });

  useEffect(() => {
    fetch('http://localhost:8080/api/students')
      .then(response => response.json())
      .then(data => setStudents(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/api/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        setStudents([...students, data]);
        setFormData({ name: '', age: '' });
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Name"
        />
        <input
          type="number"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          placeholder="Age"
        />
        <button type="submit">Add Student</button>
      </form>

      <h3>Students Enrolled</h3>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.name} - {student.age}
          </li>
        ))}
      </ul>
    </div>
  );
};
//added changes

export default Form;
