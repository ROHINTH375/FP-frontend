// import React, { useEffect, useState } from 'react';
// import api from '../api'; // Axios instance with interceptors
// import { toast } from 'react-toastify';
// import PostJobForm from '../components/JobPostForm'; // Create a separate JobPostForm component
// import { fetchAnalyticsReports } from '../api'; 


// const CompanyDashboard = () => {
//   const [dashboardData, setDashboardData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [showJobPostForm, setShowJobPostForm] = useState(false);
//   const [analyticsData, setAnalyticsData] = useState(null);

//   useEffect(() => {

    
//     const fetchDashboardData = async () => {
//       try {
//         const response = await api.get('/company/dashboard-company'); // API call with token
//         console.log('Dashboard Data:', response.data);
//         const data = await fetchAnalyticsReports();
//         setAnalyticsData(data);
//         setDashboardData(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching company dashboard:', error);
//         toast.error('Failed to load dashboard data.');
//         setLoading(false);
//       }
//     };

//     fetchDashboardData();
//   }, []);

//   const handlePostJob = () => {
//     setShowJobPostForm(true); // Show the JobPostForm modal
//   };

//   const handleReviewApplications = async (jobId) => {
//     try {
//       const response = await api.get(`/company/job-applications/${jobId}`);
//       console.log(`Applications for Job ID ${jobId}:`, response.data);
//       toast.info('Fetching applications...');
//     } catch (error) {
//       console.error('Error fetching applications:', error);
//       toast.error('Failed to fetch applications.');
//     }
//   };

//   if (loading) {
//     return <p>Loading company dashboard...</p>;
//   }

//   if (!dashboardData) {
//     return <p>No data available.</p>;
//   }
//   if (!analyticsData) return <p>No data available for analytics.</p>;
//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Company Dashboard</h1>

//       {/* Job Post Button */}
//       <button
//         onClick={handlePostJob}
//         className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
//       >
//         Post a Job
//       </button>

//       {/* JobPostForm Component */}
//       {showJobPostForm && (
//         <div className="modal bg-gray-100 p-4 rounded shadow-lg">
//           <PostJobForm onClose={() => setShowJobPostForm(false)} />
//         </div>
//       )}

//       {/* Job Postings Section */}
//       <div>
//         <h2 className="text-xl font-bold mb-4">Job Postings</h2>
//         {dashboardData.jobs.length === 0 ? (
//           <p>No job postings available. Click "Post a Job" to add one.</p>
//         ) : (
//           dashboardData.jobs.map((job) => (
//             <div
//               key={job._id}
//               className="bg-gray-100 p-4 rounded shadow mb-4 flex justify-between items-center"
//             >
//               <div>
//                 <h3 className="text-lg font-bold">{job.jobTitle}</h3>
//                 <p>{job.jobDescription}</p>
//                 <p>Applications: {job.applications.length}</p>
//               </div>
//               <button
//                 onClick={() => handleReviewApplications(job._id)}
//                 className="bg-green-500 text-white py-2 px-4 rounded"
//               >
//                 Review Applications
//               </button>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default CompanyDashboard;


import React, { useEffect, useState } from 'react';
import api from '../api'; // Axios instance with interceptors
import { toast } from 'react-toastify';
import PostJobForm from '../components/JobPostForm'; // Create a separate JobPostForm component
import { fetchAnalyticsReports } from '../api'; // Add the analytics API call
import { Pie } from 'react-chartjs-2'; // For graphical representation

const CompanyDashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [analyticsData, setAnalyticsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showJobPostForm, setShowJobPostForm] = useState(false);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await api.get('/company/dashboard-company'); // API call with token
        console.log('Dashboard Data:', response.data);
        setDashboardData(response.data);
      } catch (error) {
        console.error('Error fetching company dashboard:', error);
        toast.error('Failed to load dashboard data.');
      }
    };

    const fetchAnalytics = async () => {
      try {
        const analytics = await fetchAnalyticsReports();
        console.log('Analytics Data:', analytics);
        setAnalyticsData(analytics);
      } catch (error) {
        console.error('Error fetching analytics:', error);
        toast.error('Failed to load analytics data.');
      }
    };

    fetchDashboardData();
    fetchAnalytics();
    setLoading(false);
  }, []);

  const handlePostJob = () => {
    setShowJobPostForm(true); // Show the JobPostForm modal
  };

  const handleReviewApplications = async (jobId) => {
    try {
      const response = await api.get(`/company/job-applications/${jobId}`);
      console.log(`Applications for Job ID ${jobId}:`, response.data);
      toast.info('Fetching applications...');
    } catch (error) {
      console.error('Error fetching applications:', error);
      toast.error('Failed to fetch applications.');
    }
  };

  if (loading) {
    return <p>Loading company dashboard...</p>;
  }

  if (!dashboardData || !analyticsData) {
    return <p>No data available.</p>;
  }

  // Prepare data for Pie Chart
  const chartData = {
    labels: ['Hired Students', 'Total Students'],
    datasets: [
      {
        data: [analyticsData.hiredStudents, analyticsData.totalStudents],
        backgroundColor: ['#4caf50', '#f44336'],
        borderColor: ['#4caf50', '#f44336'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Company Dashboard</h1>

      {/* Job Post Button */}
      <button
        onClick={handlePostJob}
        className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
      >
        Post a Job
      </button>

      {/* JobPostForm Component */}
      {showJobPostForm && (
        <div className="modal bg-gray-100 p-4 rounded shadow-lg">
          <PostJobForm onClose={() => setShowJobPostForm(false)} />
        </div>
      )}

      {/* Job Postings Section */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Job Postings</h2>
        {dashboardData.jobs.length === 0 ? (
          <p>No job postings available. Click "Post a Job" to add one.</p>
        ) : (
          dashboardData.jobs.map((job) => (
            <div
              key={job._id}
              className="bg-gray-100 p-4 rounded shadow mb-4 flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-bold">{job.jobTitle}</h3>
                <p>{job.jobDescription}</p>
                <p>Applications: {job.applications.length}</p>
              </div>
              <button
                onClick={() => handleReviewApplications(job._id)}
                className="bg-green-500 text-white py-2 px-4 rounded"
              >
                Review Applications
              </button>
            </div>
          ))
        )}
      </div>

      {/* Analytics Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Analytical Reports</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="text-center">
            <h3 className="text-lg font-bold">Hiring Rate</h3>
            <Pie data={chartData} />
          </div>
          <div>
            <ul className="space-y-2">
              <li>Total Students: {analyticsData.totalStudents}</li>
              <li>Total Applications: {analyticsData.totalApplications}</li>
              <li>Interviews Conducted: {analyticsData.interviewsConducted}</li>
              <li>Hired Students: {analyticsData.hiredStudents}</li>
              <li>Hiring Rate: {analyticsData.hiringRate}%</li>
              <li>Application Rate: {analyticsData.applicationRate}%</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
