import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const RecruitmentStats = () => {
  const [formData, setFormData] = useState({ jobId: '', studentId: '', status: '' });
  const { jobId, studentId, status } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!jobId || !studentId || !status) {
      toast.error('All fields are required.');
      return;
    }

    try {
      const response = await axios.post('/api/recruitment-stats', formData);
      toast.success(response.data.message || 'Recruitment stats submitted successfully.');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to submit recruitment stats.');
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Submit Recruitment Stats</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="jobId"
          placeholder="Job ID"
          value={jobId}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="studentId"
          placeholder="Student ID"
          value={studentId}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="status"
          placeholder="Status"
          value={status}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RecruitmentStats;
