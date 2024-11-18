import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Bar, Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    ArcElement,
  } from 'chart.js';
  
  ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    ArcElement
  );

function AdminRecruitmentDashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('/api/recruitment-stats');
        setStats(response.data);
      } catch (error) {
        console.error('Error fetching recruitment stats:', error);
      }
    };

    fetchStats();
  }, []);

  if (!stats) return <p>Loading recruitment stats...</p>;

  const barChartData = {
    labels: ['Total Students', 'Applications', 'Placed', 'Offers Accepted'],
    datasets: [
      {
        label: 'Recruitment Stats',
        data: [stats.totalStudents, stats.totalApplications, stats.totalPlaced, stats.totalOffersAccepted],
        backgroundColor: ['#3498db', '#2ecc71', '#e74c3c', '#f1c40f'],
      },
    ],
  };

  const pieChartData = {
    labels: ['Placement Rate', 'Offer Acceptance Rate'],
    datasets: [
      {
        data: [stats.successRate, stats.offerAcceptanceRate],
        backgroundColor: ['#3498db', '#e74c3c'],
      },
    ],
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Recruitment Dashboard</h1>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-lg font-semibold">Total Students</h2>
          <p className="text-3xl font-bold">{stats.totalStudents}</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-lg font-semibold">Applications</h2>
          <p className="text-3xl font-bold">{stats.totalApplications}</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-lg font-semibold">Students Placed</h2>
          <p className="text-3xl font-bold">{stats.totalPlaced}</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-lg font-semibold">Offers Accepted</h2>
          <p className="text-3xl font-bold">{stats.totalOffersAccepted}</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-lg font-semibold">Placement Success Rate</h2>
          <p className="text-3xl font-bold">{stats.successRate}%</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-lg font-semibold">Offer Acceptance Rate</h2>
          <p className="text-3xl font-bold">{stats.offerAcceptanceRate}%</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Recruitment Overview</h2>
          <Bar data={barChartData} />
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Rates Overview</h2>
          <Pie data={pieChartData} />
        </div>
      </div>
    </div>
  );
}

export default AdminRecruitmentDashboard;
