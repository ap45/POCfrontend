// src/apiService.js
const API_URL = "http://localhost:8000/api";  // Update to your Django API URL

export const fetchStudents = async () => {
  const response = await fetch(`${API_URL}/students/`);  // Ensure trailing slash
  if (!response.ok) {
    throw new Error("Failed to fetch students");  // Add error handling
  }
  return await response.json();
};

export const createStudent = async (student) => {
  const response = await fetch(`${API_URL}/students/`, {  // Ensure trailing slash
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student)
  });
  if (!response.ok) {
    throw new Error("Failed to create student");  // Add error handling
  }
  return await response.json();
};

export const fetchCourses = async () => {
  const response = await fetch(`${API_URL}/courses/`);  // Ensure trailing slash
  if (!response.ok) {
    throw new Error("Failed to fetch courses");  // Add error handling
  }
  return await response.json();
};

export const createCourse = async (course) => {
  const response = await fetch(`${API_URL}/courses/`, {  // Ensure trailing slash
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(course)
  });
  if (!response.ok) {
    throw new Error("Failed to create course");  // Add error handling
  }
  return await response.json();
};

export const enrollInCourse = async (studentId, courseId) => {
  const response = await fetch(`${API_URL}/enroll/`, {  // Adjust this to your enroll API endpoint
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ student_id: studentId, course_id: courseId })  // Ensure correct body format
  });
  
  if (!response.ok) {
    throw new Error("Failed to enroll student in course");  // Add error handling
  }
};
