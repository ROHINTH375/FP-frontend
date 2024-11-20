// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
import StudentDashboard from "./pages/StudentDashboard";

import {
  registerCompany,
  registerStudent,
  loginStudent,
  loginCompany,
} from "./api";
import PlacementDrives from './pages/PlacementDrives';
import { UserProvider } from "./context/UserContext";
import AdminLogin from "./components/AdminLogin";
import DashboardAdmin1 from "./pages/DashboardAdmin";
import { ToastContainer } from "react-toastify";
import JobApplicationPage from './pages/JobApplicationPage';
import CompanyDashboard from './pages/CompanyDashboard';
import ManagePlacementDrives from './pages/ManagePlacementDrives';
import AdminRecruitmentDashboard from './pages/AdminRecruitmentDashboard';
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardAdmin from "./pages/DashboardAdmin";
import PlacementDriveForm from './components/PlacementDriveForm';
// import Page from './pages/Page'; // Home Page or Main Page
import RecruitmentStatusTracking from './pages/RecruitmentStatusTracking'; // The page for recruitment status tracking
import Page from './pages/Page';
import Profile from './components/Profile'; 
function App() {
  // Define authentication checks
  const isAdminLoggedIn = localStorage.getItem("adminToken") ? true : false;
  const isStudentLoggedIn = localStorage.getItem("studentToken") ? true : false;
  return (
    <UserProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <nav>
            <Link to="/apply" className="text-blue-600 hover:underline">
              Apply for a Job
            </Link>
          </nav>
          <main className="flex-grow">
            <Routes>
              
              <Route path="/" element={<Home />} />
              <Route path="/page" element={<Page />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/recruitment-status" element={<RecruitmentStatusTracking/>} /> {/* Recruitment status page */}
              <Route path="/dashboard-admin" element={<DashboardAdmin1 />} />
              <Route
              path="/dashboard-admin"
              element={
                <ProtectedRoute isAuthenticated={isAdminLoggedIn}>
                  <DashboardAdmin />
                </ProtectedRoute>
              }
            />
            {/* <PlacementDriveForm />/placement-drives */}
            <Route path="/placement-drives" element={<PlacementDriveForm />} />

              <Route path="/companies" element={<Companies />} />
              <Route path="/students" element={<Students />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/placement-drives" element={<PlacementDrives />} />
              <Route path="/manage-placement-drives" element={<ManagePlacementDrives />} />

              <Route path="/admin-login" element={<AdminLogin />} />
              <Route path="/admin-recruitment-dashboard" element={<AdminRecruitmentDashboard />} />
              
            <Route path="/apply" element={<JobApplicationPage />} />
              <Route
                path="/register-company"
                element={<CompanyRegister registerCompany={registerCompany} />}
              />
              <Route path="/dashboard-company" element={<CompanyDashboard />} />
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
