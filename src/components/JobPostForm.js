import React, { useState } from 'react';
import api from '../api';
import { toast } from 'react-toastify';

const PostJobForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    jobDescription: '',
    requirements: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting job data:', {
      jobTitle: formData.jobTitle,
      jobDescription: formData.jobDescription,
      requirements: formData.requirements.split(','),
    });

    try {
      await api.post('/company/post-job', {
        companyId:formData.companyId,
        jobTitle: formData.jobTitle,
        jobDescription: formData.jobDescription,
        requirements: formData.requirements.split(','),
      });
      toast.success('Job posted successfully!');
      onClose();
    } catch (error) {
      console.error('Error posting job:', error);
      toast.error('Failed to post job.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Post a Job</h2>
      <div className="mb-4">
        <label className="block mb-2">Job Title</label>
        <input
          type="text"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Job Description</label>
        <textarea
          name="jobDescription"
          value={formData.jobDescription}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Requirements (comma-separated)</label>
        <input
          type="text"
          name="requirements"
          value={formData.requirements}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Submit
      </button>
      <button
        type="button"
        onClick={onClose}
        className="bg-red-500 text-white py-2 px-4 rounded ml-4"
      >
        Cancel
      </button>
    </form>
  );
};

export default PostJobForm;
