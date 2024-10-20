// src/components/CourseList.js
import React, { useState, useEffect } from 'react';
import { fetchCourses, createCourse } from '../service/apiService';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState("");

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    const data = await fetchCourses();
    setCourses(data);
  };

  const handleAddCourse = async () => {
    if (courseName) {
      const course_name=courseName
      const newCourse = { course_name };
      await createCourse(newCourse);
      loadCourses();
      setCourseName("");
    }
  };

  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map(course => (
          <li key={course.course_id}>{course.course_name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
        placeholder="Course Name"
      />
      <button onClick={handleAddCourse}>Add Course</button>
    </div>
  );
};

export default CourseList;
