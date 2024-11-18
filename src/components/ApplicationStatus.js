import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ApplicationStatus({ studentId }) {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        const fetchApplications = async () => {
            try {
              const response = await axios.get(`/api/applications/${studentId}`);
              setApplications(response.data);
            } catch (error) {
              console.error('Error fetching applications:', error);
            }
          };
      
          fetchApplications();
        }, [studentId]);

    return (
        <div>
            <h2>Your Applications</h2>
            <ul>
                {applications.map((app) => (
                    <li key={app._id}>
                        Job: {app.jobId.title} - Status: {app.status}
                    </li>
                ))}
            </ul>
            <ul>
      {applications.map((app) => (
        <li key={app._id}>
          {app.jobId.title} - {app.status}
        </li>
      ))}
    </ul>
        </div>
    );
}

export default ApplicationStatus;
