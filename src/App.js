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
import StudentLogin from "./components/StudentLogin";
import LoginCompany from "./components/LoginCompany"; // Import the LoginCompany component
// import StudentDashboard from "./components/StudentDashboard";
import StudentDashboard from './pages/StudentDashboard';
import {
  registerCompany,
  registerStudent,
  loginStudent,
  loginCompany,
} from "./api";
import { UserProvider } from "./context/UserContext";
import AdminLogin from './components/AdminLogin';
import DashboardAdmin from './pages/DashboardAdmin'
import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <UserProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/companies" element={<Companies />} />
              <Route path="/students" element={<Students />} />
              <Route path="/admin" element={<Admin />} />

              <Route path="/admin-login" element={<AdminLogin />} />
              <Route path="/dashboard-admin" element={<DashboardAdmin />} />
              {/* <Route path="/register-company" element={<CompanyRegister />} />
            <Route path="/register-student" element={<StudentRegister />} />
            <Route path="/student-login" element={<StudentLogin />} />
            <Route path="/login-company" element={<LoginCompany />} /> */}

              <Route
                path="/register-company"
                element={<CompanyRegister registerCompany={registerCompany} />}
              />
              <Route
                path="/register-student"
                element={<StudentRegister registerStudent={registerStudent} />}
              />
              <Route
                path="/login-student"
                element={<StudentLogin loginStudent={loginStudent} />}
              />
              <Route
                path="/login-company"
                element={<LoginCompany loginCompany={loginCompany} />}
              />
              <Route path="/dashboard-student" element={<StudentDashboard />} />
            </Routes>
          </main>
          <Footer />
          <ToastContainer /> {/* Toast notifications */}
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
