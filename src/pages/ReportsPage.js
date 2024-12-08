import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const ReportsPage = () => {
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await axios.get('https://fp-backend-6.onrender.com/api/analytics/reports');
        setAnalytics(response.data);
      } catch (error) {
        console.error('Error fetching analytics data:', error);
      }
    };

    fetchAnalytics();
  }, []);

  if (!analytics) {
    return <p>Loading analytics...</p>;
  }

  // Data for Charts
  const barChartData = {
    labels: ['Total Students', 'Applications', 'Interviews', 'Hired'],
    datasets: [
      {
        label: 'Placement Metrics',
        data: [
          analytics.totalStudents,
          analytics.totalApplications,
          analytics.interviewsConducted,
          analytics.hiredStudents,
        ],
        backgroundColor: ['#4CAF50', '#2196F3', '#FFC107', '#FF5722'],
      },
    ],
  };

  const pieChartData = {
    labels: ['Hiring Rate (%)', 'Application Rate (%)'],
    datasets: [
      {
        data: [analytics.hiringRate, analytics.applicationRate],
        backgroundColor: ['#4CAF50', '#FFC107'],
      },
    ],
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Reports and Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bar Chart */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Placement Metrics</h2>
          <Bar data={barChartData} />
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Rates Analysis</h2>
          <Pie data={pieChartData} />
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
