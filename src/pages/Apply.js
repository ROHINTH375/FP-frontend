// src/pages/Apply.js

import React, { useState, useEffect } from 'react';
// import ApplyJobForm from '../components/ApplyJobForm';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import JobApplicationForm from '../components/JobApplicationForm';

const Apply = () => {
  const { jobId } = useParams(); // Get jobId from URL params
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch the student data based on the logged-in user
    const fetchStudentData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Please log in to apply for jobs');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get('https://fp-backend-6.onrender.com/api/student/dashboard-student', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setStudentData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching student data:', error);
        setError('Failed to load student data');
        setLoading(false);
      }
    };

    fetchStudentData();
  }, []);

  if (loading) {
    return <p>Loading student data...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="apply-page p-8 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Apply for Job</h1>
      {studentData && (
        <JobApplicationForm jobId={jobId} studentId={studentData._id} />
      )}
    </div>
  );
};

export default Apply;
