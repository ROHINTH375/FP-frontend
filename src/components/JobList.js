import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const JobList = ({ studentId }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('https://fp-backend-6.onrender.com/api/jobs');
        console.log('Jobs API Response:', response.data); // Debug API response
    if (Array.isArray(response.data)) {
      setJobs(response.data);
    } else {
      setError('Invalid response format. Expected an array.');
    }
        setJobs(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setError('Failed to fetch jobs. Please try again later.');
        setLoading(false);
      }finally {
        setLoading(false); // Stop loading once the request completes
      }
    };

    fetchJobs();
  }, []);

  // const handleApply = async (jobId) => {
  //   try {
  //     const token = localStorage.getItem('token'); // Ensure the user is logged in
  //     if (!token) {
  //       toast.error('You need to log in to apply for jobs.');
  //       return;
  //     }

  //     const response = await axios.post(
  //       'https://fp-backend-6.onrender.com/api/applications/apply',
  //       { jobId, studentId },
  //       { headers: { Authorization: `Bearer ${token}` } }
  //     );

  //     toast.success('Application submitted successfully!');
  //     console.log('Application Response:', response.data);
  //   } catch (error) {
  //     console.error('Error applying for job:', error);
  //     toast.error(error.response?.data?.error || 'Failed to apply for job.');
  //   }
  // };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-blue-500 text-lg">Loading jobs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500 text-lg">No jobs available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Available Jobs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-bold text-blue-600">{job.title}</h2>
            <p className="text-gray-700 mb-2">
              <strong>Company:</strong> {job.companyName || "N/A"}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Location:</strong> {job.location || "Remote"}
            </p>
            <p className="text-gray-600">
              <strong>Description:</strong> {job.description}
            </p>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
              onClick={() => handleApply(job._id)}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Function to handle job application
const handleApply = (jobId) => {
  console.log(`Applying for job with ID: ${jobId}`);
  // Redirect to the job application page or call an API to apply for the job
  window.location.href = `/apply/${jobId}`;
};


export default JobList;
