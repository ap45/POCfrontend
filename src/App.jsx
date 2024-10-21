import './App.css';
import Form from './components/CourseList';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import StudentList from './components/StudentList';
import CourseList from './components/CourseList';
import Enroll from './components/Enroll';

function App() {
  return (
    <Router>
      <div>
        <div>
          Yo! Welcome to the APP, just a basic APP, so enjoy
        </div>
        <nav>
          <ul>
            <li><Link to="/students">Students</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/enroll">Enroll</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/students" element={<StudentList />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/enroll" element={<Enroll />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
