// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import Companies from './pages/Companies';
// import Students from './pages/Students';
// import Admin from './pages/Admin';  // Create a similar page for Admin

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/companies" element={<Companies />} />
//         <Route path="/students" element={<Students />} />
//         <Route path="/admin" element={<Admin />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Companies from "./pages/Companies";
import Students from "./pages/Students";
import Admin from "./pages/Admin";
import CompanyRegister from "./components/CompanyRegister";
import StudentRegister from "./components/StudentRegister";
import StudentLogin from './components/StudentLogin';
import LoginCompany from "./components/LoginCompany"; // Import the LoginCompany component

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/students" element={<Students />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/register-company" element={<CompanyRegister />} />
            <Route path="/register-student" element={<StudentRegister />} />
            <Route path="/student-login" element={<StudentLogin />} />
            <Route path="/login-company" element={<LoginCompany />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
