import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ManageApplications({ jobId }) {
  const [applications, setApplications] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/jobs/applications/${jobId}`);
        setApplications(response.data);
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };

    fetchApplications();
  }, [jobId]);

  const handleStatusUpdate = async (applicationId, status) => {
    try {
      await axios.put(`http://localhost:5000/api/jobs/applications/${applicationId}`, { status });
      setMessage('Application status updated successfully!');
      setApplications(applications.map(app =>
        app._id === applicationId ? { ...app, status } : app
      ));
    } catch (error) {
      console.error('Error updating application status:', error);
      setMessage('Failed to update application status.');
    }
  };

  return (
    <div>
      <h3>Manage Applications</h3>
      {applications.map((app) => (
        <div key={app._id}>
          <p>Applicant ID: {app.studentId}</p>
          <p>Status: {app.status}</p>
          <button onClick={() => handleStatusUpdate(app._id, 'reviewed')}>Review</button>
          <button onClick={() => handleStatusUpdate(app._id, 'selected')}>Select</button>
          <button onClick={() => handleStatusUpdate(app._id, 'rejected')}>Reject</button>
        </div>
      ))}
      {message && <p>{message}</p>}
    </div>
  );
}

export default ManageApplications;
