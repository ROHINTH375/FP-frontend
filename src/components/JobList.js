import React from 'react';
import { useNavigate } from 'react-router-dom';

const JobList = ({ jobs }) => {
  const navigate = useNavigate();

  const handleReviewApplications = (jobId) => {
    navigate(`/job/${jobId}/review-applications`);
  };

  return (
    <div>
      <h1>Job Listings</h1>
      {jobs.map((job) => (
        <div key={job._id} className="job-item">
          <h2>{job.title}</h2>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => handleReviewApplications(job._id)}
          >
            Review Applications
          </button>
        </div>
      ))}
    </div>
  );
};

export default JobList;
