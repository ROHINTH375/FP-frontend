import React from 'react';
import axios from 'axios';

function ApplyJobButton({ jobId, studentId }) {
    const handleApply = async () => {
        try {
            const token = localStorage.getItem('token'); // Ensure the token is stored after login
      if (!token) {
        alert('You are not logged in. Please log in to apply for a job.');
        return;
      }
          const response = await axios.post(
            'https://fp-backend-6.onrender.com/api/applications/apply',
            {
                jobId,
                studentId,
                resume: 'https://example.com/sample-resume.pdf', // Update as per real implementation
                coverLetter: 'Excited to apply for this role.', 
            },
            {
              headers: { Authorization: `Bearer ${token}` }
            }
          );
          alert('Application submitted successfully!');
        } catch (error) {
          console.error('Error applying for job:', error.response.data.message || error.message);
        }
      };

    return <button onClick={handleApply} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700" >Apply for Job</button>;
}

export default ApplyJobButton;
