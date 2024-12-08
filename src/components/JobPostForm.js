// src/components/PostJobForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import apiClient from '../utils/apiClient';
const PostJobForm = ({ onJobPosted }) => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    jobDescription: '',
    requirements: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage

    try {
      const response = await apiClient.post(
        '/company/post-job',
        {
          jobTitle: formData.jobTitle,
          jobDescription: formData.jobDescription,
          requirements: formData.requirements.split(','),
          companyId: 'your-company-id', // Replace with the logged-in company ID
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success('Job posted successfully!');
      setFormData({ jobTitle: '', jobDescription: '', requirements: '' });
      onJobPosted(response.data.job); // Trigger parent callback
    } catch (error) {
      console.error('Error posting job:', error);
      toast.error('Failed to post job.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Post a Job</h2>
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Job Title</label>
        <input
          type="text"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Job Description</label>
        <textarea
          name="jobDescription"
          value={formData.jobDescription}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Requirements (comma-separated)</label>
        <input
          type="text"
          name="requirements"
          value={formData.requirements}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Post Job
      </button>
    </form>
  );
};

export default PostJobForm;
