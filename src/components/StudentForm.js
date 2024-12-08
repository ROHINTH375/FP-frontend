import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const StudentForm = ({ student = { name: '', email: '', appliedJobs: [] }, onSubmit }) => {
  const [formData, setFormData] = useState(student);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('https://fp-backend-6.onrender.com/api/students', formData);
      toast.success(response.data.message || 'Student added successfully.');
      if (onSubmit) onSubmit();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit student data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded">
      <h2 className="text-lg font-bold mb-4">Student Form</h2>
      <label className="block mb-2">Student Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="mb-4 p-2 border rounded w-full"
        required
      />
      <label className="block mb-2">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="mb-4 p-2 border rounded w-full"
        required
      />
      <button
        type="submit"
        disabled={loading}
        className={`bg-blue-600 text-white p-2 rounded ${loading ? 'opacity-50' : ''}`}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default StudentForm;
