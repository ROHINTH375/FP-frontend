import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CompanyDashboard() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const response = await axios.get('/api/jobs');
            setJobs(response.data);
        } catch (error) {
            console.error("Error fetching jobs", error);
        }
    };

    return (
        <div>
            <h1>Company Dashboard</h1>
            <section>
                <h2>Job Openings</h2>
                <ul>
                    {jobs.map(job => (
                        <li key={job._id}>
                            {job.jobTitle} - Vacancies: {job.vacancies}
                            {/* Additional job management options */}
                        </li>
                    ))}
                </ul>
            </section>
            {/* Further sections for posting new jobs, viewing applications */}
        </div>
    );
}

export default CompanyDashboard;
