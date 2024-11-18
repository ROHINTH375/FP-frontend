// src/pages/DashboardAdmin.js
// import React from 'react';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import AcademicRecords from '../components/AcademicRecords';
import Sidebar from "../components/Sidebar";

function DashboardAdmin() {
  const navigate = useNavigate();
  // States for dashboard stats
  const [totalStudents, setTotalStudents] = useState(0);
  const [totalCompanies, setTotalCompanies] = useState(0);
  const [totalApplications, setTotalApplications] = useState(0);
  const [showAcademicRecords, setShowAcademicRecords] = useState(false);

  // States for Placement Drives
  const [placementDrives, setPlacementDrives] = useState([]);

  // States for Recruitment Stats
  const [recruitmentStats, setRecruitmentStats] = useState({
    studentsPlaced: 0,
    interviewsConducted: 0,
    offersMade: 0,
  });

  // Fetch dashboard stats, placement drives, and recruitment stats on mount
  useEffect(() => {
    fetchDashboardStats();
    fetchPlacementDrives();
    fetchRecruitmentStats();
  }, []);

  // Fetch Admin Dashboard Stats
  const fetchDashboardStats = async () => {
    try {
      const studentsResponse = await axios.get("/api/students");
      const companiesResponse = await axios.get("/api/companies");
      const applicationsResponse = await axios.get("/api/applications");

      setTotalStudents(studentsResponse.data.length);
      setTotalCompanies(companiesResponse.data.length);
      setTotalApplications(applicationsResponse.data.length);
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
    }
  };

  // Fetch Placement Drives
  const fetchPlacementDrives = async () => {
    try {
      const response = await axios.get("/api/placement-drives");
      setPlacementDrives(response.data);
    } catch (error) {
      console.error("Error fetching placement drives:", error);
    }
  };

  // Fetch Recruitment Stats
  const fetchRecruitmentStats = async () => {
    try {
      const response = await axios.get("/api/recruitment-stats");
      setRecruitmentStats(response.data);
    } catch (error) {
      console.error("Error fetching recruitment stats:", error);
    }
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar role="admin" />
      <aside className="w-1/5 bg-gray-800 text-white p-4 flex flex-col">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Dashboard</h2>
        <nav className="flex flex-col space-y-4">
        <button
            onClick={() => handleNavigate("/manage-students")}
            className="p-2 hover:bg-gray-700 rounded-lg"
          >
            Manage Students
          </button>
          <nav className="flex flex-col space-y-4">
          <button
            onClick={() => setShowAcademicRecords(true)}
            className="p-2 hover:bg-gray-700 rounded-lg"
          >
            View Academic Records
          </button>
          <main className="flex-1 p-6">
        {showAcademicRecords ? (
          <AcademicRecords isAdmin />
        ) : (
          <p className="text-center text-gray-500">Select an option from the sidebar.</p>
        )}
      </main>
          {/* Other Sidebar Buttons */}
        </nav>
          <button
            onClick={() => handleNavigate("/manage-companies")}
            className="p-2 hover:bg-gray-700 rounded-lg"
          >
            Manage Companies
          </button>
          <button
            onClick={() => handleNavigate("/placement-drives")}
            className="p-2 hover:bg-gray-700 rounded-lg"
          >
            Placement Drives
          </button>
          <button
            onClick={() => handleNavigate("/recruitment-stats")}
            className="p-2 hover:bg-gray-700 rounded-lg"
          >
            Recruitment Stats
          </button>
          <button
            onClick={() => handleNavigate("/settings")}
            className="p-2 hover:bg-gray-700 rounded-lg"
          >
            Settings
          </button>
          <button
            onClick={() => handleNavigate('/create-page')}
            className="p-2 hover:bg-gray-700 rounded-lg"
          >
            Create New Page
          </button>
          <button
            onClick={() => handleNavigate('/manage-content')}
            className="p-2 hover:bg-gray-700 rounded-lg"
          >
            Manage Content
          </button>
          <button
            onClick={() => handleNavigate('/user-management')}
            className="p-2 hover:bg-gray-700 rounded-lg"
          >
            User Management
          </button>
          <button
    onClick={() => handleNavigate('/placement-drives')}
    className="p-2 hover:bg-gray-700 rounded-lg"
  >
    Placement Drives
  </button>
  <button
    onClick={() => handleNavigate('/admin-recruitment-dashboard')}
    className="p-2 hover:bg-gray-700 rounded-lg"
  >
    Recruitment Dashboard
  </button>
  <button
    onClick={() => handleNavigate('/manage-placement-drives')}
    className="p-2 hover:bg-gray-700 rounded-lg"
  >
    Manage Placement Drives
  </button>
          <button
            onClick={() => handleNavigate('/settings')}
            className="p-2 hover:bg-gray-700 rounded-lg"
          >
            Settings
          </button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold">Welcome, Admin!</h2>
          <button className="bg-red-500 text-white p-2 rounded-lg" onClick={() => handleNavigate('/logout')}>
            Logout
          </button>
        </div>

        {/* Dashboard Overview Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Total Students</h3>
            <p className="text-3xl font-bold">{totalStudents}</p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Total Companies</h3>
            <p className="text-3xl font-bold">{totalCompanies}</p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Total Applications</h3>
            <p className="text-3xl font-bold">{totalApplications}</p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Total Users</h3>
            <p className="text-3xl font-bold">124</p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Total Posts</h3>
            <p className="text-3xl font-bold">56</p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-xl font-semibold mb-2">New Comments</h3>
            <p className="text-3xl font-bold">89</p>
          </div>
        </div>

        {/* Placement Drives Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Placement Drives</h3>
          <div className="bg-white shadow rounded-lg p-4">
            <ul>
              {placementDrives.map((drive) => (
                <li key={drive.id} className="mb-2 border-b pb-2">
                  <h4 className="text-lg font-semibold">{drive.name}</h4>
                  <p>Date: {new Date(drive.date).toLocaleDateString()}</p>
                  <p>Companies: {drive.companies.join(", ")}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Recruitment Stats Section */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">Recruitment Stats</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 shadow rounded-lg">
              <h4 className="text-lg font-semibold">Students Placed</h4>
              <p className="text-3xl font-bold">{recruitmentStats.studentsPlaced}</p>
            </div>
            <div className="bg-white p-6 shadow rounded-lg">
              <h4 className="text-lg font-semibold">Interviews Conducted</h4>
              <p className="text-3xl font-bold">{recruitmentStats.interviewsConducted}</p>
            </div>
            <div className="bg-white p-6 shadow rounded-lg">
              <h4 className="text-lg font-semibold">Offers Made</h4>
              <p className="text-3xl font-bold">{recruitmentStats.offersMade}</p>
            </div>
          </div>
        </section>

        {/* Content Management Section */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">Recent Activity</h3>
          <div className="bg-white shadow rounded-lg p-4">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="p-2 border-b">Date</th>
                  <th className="p-2 border-b">Activity</th>
                  <th className="p-2 border-b">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border-b">2024-11-01</td>
                  <td className="p-2 border-b">New User Registration</td>
                  <td className="p-2 border-b text-green-600 font-semibold">Completed</td>
                </tr>
                <tr>
                  <td className="p-2 border-b">2024-10-29</td>
                  <td className="p-2 border-b">New Post Approval</td>
                  <td className="p-2 border-b text-yellow-600 font-semibold">Pending</td>
                </tr>
                <tr>
                  <td className="p-2 border-b">2024-10-28</td>
                  <td className="p-2 border-b">Content Deletion</td>
                  <td className="p-2 border-b text-red-600 font-semibold">Rejected</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default DashboardAdmin;
