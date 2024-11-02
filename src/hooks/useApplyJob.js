import { useState } from 'react';

const useApplyJob = () => {
    const [loading, setLoading] = useState(false);

    const applyForJob = async (studentId, jobId, resume, coverLetter) => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:5000/api/applications/apply', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ studentId, jobId, resume, coverLetter })
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || 'Error applying for job');
            }
            return data; // return success response
        } catch (error) {
            console.error('Error applying for job:', error);
            return { error: error.message }; // return error response
        } finally {
            setLoading(false);
        }
    };

    return { applyForJob, loading };
};

export default useApplyJob;
