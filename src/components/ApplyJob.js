// src/components/ApplyJob.js
import React, { useState } from 'react';
import axios from 'axios';
import JobApplicationForm from './components/JobApplicationForm';

const ApplyJob = ({ company }) => {
  const [applicationData, setApplicationData] = useState({ studentName: '', position: '' });
  const [message, setMessage] = useState('');
  const jobId = '673cbad865b7074e0a8d6dfb'; // Replace with an actual job ID
  const studentId = '673a136394187e0ee1ebc355'; // Replace with an actual student ID

  const handleChange = (e) => {
    setApplicationData({ ...applicationData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`https://fp-backend-6.onrender.com/api/companies/${company._id}/apply`, applicationData);
      setMessage(response.data.message || 'Application submitted successfully!');
    } catch (error) {
      setMessage('Failed to apply. Please try again.');
    }
  };

  return (
    <div>
      <h3>Apply for Job at {company.name}</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="studentName" placeholder="Your Name" onChange={handleChange} required />
        <input type="text" name="position" placeholder="Position" onChange={handleChange} required />
        <button type="submit">Submit Application</button>
      </form>
      <p>{message}</p>
      <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Job Application</h1>
      <JobApplicationForm jobId={jobId} studentId={studentId} />
    </div>
    </div>
  );
};

export default ApplyJob;
