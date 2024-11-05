import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CompanyDashboard() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const response = await axios.get('/api/jobs');
            setJobs(response.data);
        } catch (error) {
            console.error("Error fetching jobs", error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header section with background image */}
      <header className="w-full bg-cover bg-center h-64 relative" style={{ backgroundImage: `url('https://source.unsplash.com/random/1600x900/?office,company')` }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-4xl font-bold mb-2">Welcome, {companyName || 'Company'}</h1>
          <p className="text-lg">Your Company Dashboard</p>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto p-4 flex flex-col items-center">
        {/* Dashboard Actions */}
        <section className="w-full max-w-4xl mt-6 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Dashboard Overview</h2>

          {/* Action Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            <div className="bg-blue-500 p-4 rounded-lg text-white text-center shadow hover:bg-blue-600">
              <h3 className="text-lg font-semibold">View Job Postings</h3>
              <p className="mt-2">See all active job roles you've posted.</p>
            </div>
            <div className="bg-green-500 p-4 rounded-lg text-white text-center shadow hover:bg-green-600">
              <h3 className="text-lg font-semibold">Applicants</h3>
              <p className="mt-2">Review applications and manage recruitment status.</p>
            </div>
            <div className="bg-purple-500 p-4 rounded-lg text-white text-center shadow hover:bg-purple-600">
              <h3 className="text-lg font-semibold">Company Profile</h3>
              <p className="mt-2">Update your company details and contact information.</p>
            </div>
            <div className="bg-red-500 p-4 rounded-lg text-white text-center shadow hover:bg-red-600">
              <h3 className="text-lg font-semibold">Statistics</h3>
              <p className="mt-2">View analytics on applicant engagement and job visibility.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
    );
}

export default CompanyDashboard;
