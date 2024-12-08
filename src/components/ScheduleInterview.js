import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ScheduleInterview = ({ jobId, studentId }) => {
  const [formData, setFormData] = useState({
    interviewDate: '',
    format: 'virtual',
    zoomLink: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const token = localStorage.getItem('token'); // Ensure token is stored in localStorage
      if (!token) {
        console.error("No token found. Please log in.");
        toast.error('You are not authenticated. Please log in.');
        return;
      }
  
      await axios.post(
        '/api/interviews/schedule',
        { ...formData, jobId, studentId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success('Interview scheduled successfully.');
    } catch (error) {
      console.error('Error scheduling interview:', error);
      toast.error(error.response?.data?.message || 'Failed to schedule interview.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">Schedule Interview</h2>
      <label className="block mb-2">
        Interview Date:
        <input
          type="datetime-local"
          name="interviewDate"
          value={formData.interviewDate}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </label>
      <label className="block mb-2">
        Format:
        <select
          name="format"
          value={formData.format}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="virtual">Virtual</option>
          <option value="in-person">In-Person</option>
        </select>
      </label>
      {formData.format === 'virtual' && (
        <label className="block mb-2">
          Zoom Link:
          <input
            type="url"
            name="zoomLink"
            value={formData.zoomLink}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </label>
      )}
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Schedule Interview
      </button>
    </form>
  );
};

export default ScheduleInterview;
