// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ role }) => {
  // Role can be 'admin', 'student', or 'company' to render role-specific options
  return (
    <aside className="w-1/5 bg-gray-800 text-white p-4 flex flex-col min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {role === "admin"
          ? "Admin Dashboard"
          : role === "student"
          ? "Student Dashboard"
          : "Company Dashboard"}
      </h2>
      <nav className="flex flex-col space-y-4">
        {role === "admin" && (
          <>
            <Link to="/dashboard-admin" className="hover:bg-gray-700 p-2 rounded">
              Admin Home
            </Link>
            <Link to="/manage-students" className="hover:bg-gray-700 p-2 rounded">
              Manage Students
            </Link>
            <Link to="/manage-companies" className="hover:bg-gray-700 p-2 rounded">
              Manage Companies
            </Link>
            <Link to="/placement-drives" className="hover:bg-gray-700 p-2 rounded">
              Placement Drives
            </Link>
          </>
        )}
        {role === "student" && (
          <>
            <Link to="/dashboard-student" className="hover:bg-gray-700 p-2 rounded">
              Student Home
            </Link>
            <Link to="/apply" className="hover:bg-gray-700 p-2 rounded">
              Apply for Jobs
            </Link>
            <Link to="/application-status" className="hover:bg-gray-700 p-2 rounded">
              Application Status
            </Link>
            <Link to="/interview-schedule" className="hover:bg-gray-700 p-2 rounded">
              Interview Schedule
            </Link>
          </>
        )}
        {role === "company" && (
          <>
            <Link to="/dashboard-company" className="hover:bg-gray-700 p-2 rounded">
              Company Home
            </Link>
            <Link to="/post-job" className="hover:bg-gray-700 p-2 rounded">
              Post Job Openings
            </Link>
            <Link to="/view-applications" className="hover:bg-gray-700 p-2 rounded">
              View Applications
            </Link>
          </>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
