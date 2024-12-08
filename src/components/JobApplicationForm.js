// src/components/JobApplicationForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const JobApplicationForm = ({ jobId, studentId }) => {
  const [formData, setFormData] = useState({
    resume: '',
    coverLetter: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.coverLetter || !formData.resume) {
      toast.error('Please provide both a cover letter and a resume.');
      return;
    }

    const applicationData = {
      studentId,
      jobId,
      coverLetter: formData.coverLetter,
      resume: formData.resume,
    };

    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('You must be logged in to apply.');
        setLoading(false);
        return;
      }

      // Make the API request
      const response = await axios.post(
        'https://fp-backend-6.onrender.com/api/applications/apply',
        applicationData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      // Handle success response
      toast.success('Application submitted successfully!');
      console.log('Response:', response.data);
    } catch (error) {
      // Handle error response
      console.error('Error applying for the job:', error.response?.data || error.message);
      toast.error(error.response?.data?.error || 'Failed to submit the application.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Apply for Job</h2>

      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Resume (PDF, DOCX)</label>
        <input
          type="file"
          name="resume"
          onChange={handleFileChange}
          className="w-full mt-2 p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Cover Letter</label>
        <textarea
          name="coverLetter"
          value={formData.coverLetter}
          onChange={handleChange}
          placeholder="Write your cover letter here..."
          className="w-full mt-2 p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          rows={4}
        />
      </div>

     <button
        type="submit"
        className={`w-full py-3 text-white font-bold rounded ${
          loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
        }`}
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Submit Application'}
      </button>
    </form>
  );
};

export default JobApplicationForm;
