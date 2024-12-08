// import React, { useEffect, useState } from 'react';
// import { getApplicationsByJobId } from '../services/applicationService';

// const ApplicationsList = ({ jobId }) => {
//     const [applications, setApplications] = useState([]);

//     useEffect(() => {
//         const fetchApplications = async () => {
//             try {
//                 const result = await getApplicationsByJobId(jobId);
//                 setApplications(result);
//             } catch (error) {
//                 console.error('Error fetching applications: ', error.message);
//             }
//         };

//         fetchApplications();
//     }, [jobId]);

//     return (
//         <div>
//             <h3>Applications for this Job</h3>
//             <ul>
//                 {applications.map((application) => (
//                     <li key={application._id}>
//                         {application.studentId} - {application.status} - {application.title}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default ApplicationsList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApplicationList = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const token = localStorage.getItem('token'); // Get JWT token
        const response = await axios.get('https://fp-backend-6.onrender.com/api/applications', {
          headers: { Authorization: `Bearer ${token}` }, // Include token in headers
        });
        setApplications(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching applications:', error);
        setError('Failed to load applications.');
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  if (loading) {
    return <p>Loading applications...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Job Applications</h2>
      {applications.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="py-2 px-4 text-left bg-blue-500 text-white">Job Title</th>
                <th className="py-2 px-4 text-left bg-blue-500 text-white">Status</th>
                <th className="py-2 px-4 text-left bg-blue-500 text-white">Description</th>
                <th className="py-2 px-4 text-left bg-blue-500 text-white">Applied Date</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((application) => (
                <tr key={application._id} className="border-b">
                  <td className="py-2 px-4">{application.title}</td>
                  <td className="py-2 px-4">{application.status}</td>
                  <td className="py-2 px-4">{application.description}</td>
                  <td className="py-2 px-4">
                    {new Date(application.appliedDate).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ApplicationList;
