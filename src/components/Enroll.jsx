// src/components/Enroll.js
import React, { useState, useEffect } from 'react';
import { fetchStudents, fetchCourses, enrollInCourse } from '../service/apiService';

const Enroll = () => {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState();
  const [selectedCourse, setSelectedCourse] = useState();

  useEffect(() => {
    loadStudentsAndCourses();
  }, []);

  const loadStudentsAndCourses = async () => {
    const studentData = await fetchStudents();
    console.log(studentData);
    const courseData = await fetchCourses();
    setStudents(studentData);
    setCourses(courseData);
  };

  const handleEnroll = async () => {
    try {
      if (selectedStudent && selectedCourse) {
        await enrollInCourse(selectedStudent, selectedCourse);
        alert("Student enrolled successfully!");
      } else {
        alert("Please select both a student and a course");
      }
    } catch (error) {
      alert("Failed to enroll student: " + error.message);
    }
  };
  

  return (
    <div>
      <h1>Enroll in Course</h1>
      <div>
        <label>Select Student</label>
        <select value={selectedStudent} onChange={(e) => {
          setSelectedStudent(e.target.value)}}>
          <option value="">Select</option>
          {students.map(student => (
            <option key={student.stude_id} value={student.student_id}>{student.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Select Course</label>
        <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
          <option value="">Select</option>
          {courses.map(course => (
            <option key={course.course_id} value={course.course_id}>{course.course_name}</option>
          ))}
        </select>
      </div>
      <button onClick={handleEnroll}>Enroll</button>
    </div>
  );
};

export default Enroll;
