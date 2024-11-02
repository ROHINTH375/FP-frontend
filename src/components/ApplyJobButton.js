import React from 'react';
import axios from 'axios';

function ApplyJobButton({ jobId, studentId }) {
    const handleApply = async () => {
        try {
            await axios.post('/api/applications/apply', { jobId, studentId });
            alert('Application submitted successfully');
        } catch (error) {
            console.error('Error applying for job:', error);
        }
    };

    return <button onClick={handleApply}>Apply for Job</button>;
}

export default ApplyJobButton;
