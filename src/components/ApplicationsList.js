import React, { useEffect, useState } from 'react';
import { getApplicationsByJobId } from '../services/applicationService';

const ApplicationsList = ({ jobId }) => {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const result = await getApplicationsByJobId(jobId);
                setApplications(result);
            } catch (error) {
                console.error('Error fetching applications: ', error.message);
            }
        };

        fetchApplications();
    }, [jobId]);

    return (
        <div>
            <h3>Applications for this Job</h3>
            <ul>
                {applications.map((application) => (
                    <li key={application._id}>
                        {application.studentId} - {application.status} - {application.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ApplicationsList;
