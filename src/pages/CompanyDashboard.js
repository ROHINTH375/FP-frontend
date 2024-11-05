// // src/pages/CompanyDashboard.js
// import React from 'react';
// import PostJobForm from '../components/PostJobForm';
// import ManageApplications from '../components/ManageApplications';

// function CompanyDashboard({ companyId, jobId }) {
//     return (
//         <div className="company-dashboard bg-gray-100 p-8 min-h-screen">
//             <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Company Dashboard</h1>
//             <PostJobForm companyId={companyId} />
//             <ManageApplications jobId={jobId} />
//         </div>
//     );
// }

// export default CompanyDashboard;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CompanyDashboard() {
  const { companyId } = useParams();
  const [companyInfo, setCompanyInfo] = useState(null);

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/companies/${companyId}`);
        setCompanyInfo(response.data);
      } catch (error) {
        console.error('Error fetching company info:', error);
      }
    };

    fetchCompanyInfo();
  }, [companyId]);

  if (!companyInfo) return <p>Loading company dashboard...</p>;

  return (
    <div>
      <h2>Welcome, {companyInfo.name}</h2>
      <p>Company ID: {companyId}</p>
      {/* Render more company-specific details here */}
    </div>
  );
}

export default CompanyDashboard;
