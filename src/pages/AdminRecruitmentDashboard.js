// src/pages/AdminRecruitmentDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import PageWrapper from './PageWrapper';

const AdminRecruitmentDashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('https://fp-backend-6.onrender.com/api/analytics/recruitment-stats');
        setStats(response.data);
      } catch (error) {
        console.error('Error fetching recruitment stats:', error);
      }
    };

    fetchStats();
  }, []);

  if (!stats) {
    return <p>Loading recruitment stats...</p>;
  }

  const data = {
    labels: ['Total Applications', 'Selected', 'Rejected'],
    datasets: [
      {
        data: [stats.totalApplications, stats.selected, stats.rejected],
        backgroundColor: ['#36A2EB', '#4BC0C0', '#FF6384'],
      },
    ],
  };

  return (
    <PageWrapper>
      <h2 className="text-2xl font-bold mb-4">Recruitment Dashboard</h2>
      <div className="max-w-lg mx-auto">
        <Pie data={data} />
      </div>
    </PageWrapper>
  );
};

export default AdminRecruitmentDashboard;
