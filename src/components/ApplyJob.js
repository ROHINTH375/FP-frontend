// src/components/ApplyJob.js
import React, { useState } from 'react';
import axios from 'axios';

const ApplyJob = ({ company }) => {
  const [applicationData, setApplicationData] = useState({ studentName: '', position: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setApplicationData({ ...applicationData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/api/companies/${company._id}/apply`, applicationData);
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
    </div>
  );
};

export default ApplyJob;
