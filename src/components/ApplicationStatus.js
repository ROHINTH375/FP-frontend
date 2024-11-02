import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ApplicationStatus({ studentId }) {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        // Sample data for testing
        const sampleApplications = [
            { _id: '1', jobId: { title: 'Software Developer' }, status: 'Applied' },
            { _id: '2', jobId: { title: 'Data Analyst' }, status: 'Reviewed' },
            { _id: '3', jobId: { title: 'Product Manager' }, status: 'Selected' },
            { _id: '4', jobId: { title: 'UX Designer' }, status: 'Waiting List' },
        ];

        setApplications(sampleApplications); // Set hardcoded data here
    }, []);

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
        </div>
    );
}

export default ApplicationStatus;
