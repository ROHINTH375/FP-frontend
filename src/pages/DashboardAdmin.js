// src/pages/DashboardAdmin.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function DashboardAdmin() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-1/5 bg-gray-800 text-white p-4 flex flex-col">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Dashboard</h2>
        <nav className="flex flex-col space-y-4">
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
