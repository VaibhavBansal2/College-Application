import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Student from './components/Student'
import Department from './components/Department'
import Faculty from './components/Faculty'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/student" element={<Student />} />
        <Route path="/department" element={<Department />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/" element={<Navigate to="/Student" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;