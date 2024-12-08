import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecruitmentStatusTracking = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch the application statuses from the backend (example API endpoint)
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('https://fp-backend-6.onrender.com/api/applications');  // Modify with correct API URL
        setApplications(response.data);
      } catch (error) {
        console.error("Error fetching applications", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  const updateStatus = async (applicationId, newStatus) => {
    try {
      await axios.put(`https://fp-backend-6.onrender.com/api/applications/${applicationId}`, { status: newStatus }); // Updated URL
      alert('Status updated successfully!');
      window.location.reload();
    } catch (error) {
      console.error('Error updating status', error);
      alert('Failed to update status.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Recruitment Status Tracking</h1>

      {/* Table to display the status of applications */}
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2">Student ID</th>
            <th className="border px-4 py-2">Job Title</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application) => (
            <tr key={application._id}>
              <td className="border px-4 py-2">{application.studentId}</td>
              <td className="border px-4 py-2">{application.jobId.title}</td>
              <td className="border px-4 py-2">{application.status}</td>
              <td className="border px-4 py-2">
                {/* Optionally, provide buttons to update the status */}
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                  onClick={() => updateStatus(application._id, 'reviewed')}
                >
                  Set Reviewed
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                  onClick={() => updateStatus(application._id, 'rejected')}
                >
                  Set Rejected
                </button>
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded ml-2"
                  onClick={() => updateStatus(application._id, 'selected')}
                >
                  Set Selected
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// const updateStatus = async (applicationId, newStatus) => {
//   try {
//     const response = await axios.put(`/api/applications/${applicationId}`, { status: newStatus });
//     alert("Status updated successfully!");
//     window.location.reload();  // Refresh page to reflect updated status
//   } catch (error) {
//     console.error("Error updating status", error);
//     alert("Failed to update status.");
//   }
// };

export default RecruitmentStatusTracking;
