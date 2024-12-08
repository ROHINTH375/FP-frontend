import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ApplicationStatus({ studentId }) {
    const [applications, setApplications] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
      const fetchApplications = async () => {
        const studentId = localStorage.getItem('studentId'); // Ensure studentId is stored in localStorage
        if (!studentId) {
          setError('Student ID not found. Please log in.');
          return;
        }
        try {
          const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/applications`, {
            params: { studentId },
          });
          setApplications(response.data);
        } catch (error) {
          console.error('Error fetching applications:', error);
          setError('Failed to fetch applications. Please try again.');
        }
      };
    
      fetchApplications();
    }, []);

    if (error) return <p>{error}</p>;

    return (
      <div>
      <h1>Application Status</h1>
      {applications.length > 0 ? (
        applications.map((app) => (
          <div key={app.id}>
            <h3>{app.jobTitle}</h3>
            <p>Status: {app.status}</p>
          </div>
        ))
      ) : (
        <p>No applications found.</p>
      )}
    </div>
    );
}

export default ApplicationStatus;
