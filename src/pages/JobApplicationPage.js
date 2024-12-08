import React from 'react';
import JobApplicationForm from '../components/JobApplicationForm';
// import JobList from '../components/JobList';
import useApplyJob from '../hooks/useApplyJob';

const JobApplicationPage = () => {
    const { applyForJob, loading } = useApplyJob();
    const studentId = localStorage.getItem('studentId'); 

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Job Application</h1>

            {/* <JobList studentId={studentId} />, */}
            <JobApplicationForm onApply={applyForJob} />,
            
            {loading && <p>Submitting your application...</p>}
        </div>
    );
};

export default JobApplicationPage;
