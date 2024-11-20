import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AcademicRecords from '../components/AcademicRecords';
import ProfileInfo from '../components/ProfileInfo';
import PlacementStatus from '../components/PlacementStatus';
import ApplyJobButton from '../components/ApplyJobButton';
import ApplicationStatus from '../components/ApplicationStatus';
import StudentInterviews from '../components/StudentInterviews';
import ScheduleInterview from '../components/ScheduleInterview';
import { useNavigate } from 'react-router-dom';
import Sidebar from "../components/Sidebar";
import JobApplicationForm from '../components/JobApplicationForm';

function StudentDashboard({ studentId }) {
  const [applications, setApplications] = useState([]);
  const [studentData, setStudentData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token'); // Get JWT token from localStorage
    console.log('Token:', token);

    axios
      .get('http://localhost:5000/api/student/dashboard-student', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log('API Response:', response.data);
        setStudentData(response.data);
        setApplications(response.data);
      })
      .catch((error) => {
        console.error('Error fetching student data:', error);
        setErrorMessage('Unable to load student data.');
      });
  }, []);

  if (errorMessage) {
    return (
      <div className="text-center text-red-500">
        <p>{errorMessage}</p>
        <p>Please try again later.</p>
      </div>
    );
  }

  if (!studentData) {
    return (
      <div className="text-center text-gray-500 mt-10">
        <p>Loading student data...</p>
      </div>
    );
  }

  return (
    <div className="student-dashboard bg-gray-100 p-8 min-h-screen">
      <Sidebar role="student" />
      <main className="flex-1 p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
        Student Dashboard
      </h1>

      {/* Academic Records */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">Academic Records</h2>
        <AcademicRecords studentId={studentId} />
      </div>
      <div className="mb-8">
        <JobApplicationForm jobId="64b7d2c034bcd7c" />
      </div>

      <h2 className="text-lg font-bold mb-2">My Applications</h2>
      {/* <ul>
        {applications.map((app) => (
          <li key={app._id} className="border p-2 mb-2 rounded">
            <p>Job Title: {app.jobId?.jobTitle}</p>
            <p>Status: {app.status}</p>
          </li>
        ))}
      </ul> */}

      {/* Profile Info */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">Profile Info</h2>
        <ProfileInfo studentData={studentData} />
      </div>

      {/* Placement Progress */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">Placement Progress</h2>
        <PlacementStatus progress={studentData.progress} />
      </div>

      {/* Application Status */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">Application Status</h2>
        <ApplicationStatus studentId={studentId} />
      </div>

      {/* Scheduled Interviews */}
      <div className="bg-white shadow rounded p-4">
  <StudentInterviews studentId="your-student-id" />
</div>
<div className="bg-white shadow rounded p-4">
  <ScheduleInterview jobId="your-job-id" studentId="your-student-id" />
</div>

      {/* Apply for Jobs */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">Apply for Jobs</h2>
        <ApplyJobButton jobId="12345" studentId={studentId} />
      </div>
      </main>
    </div>
    
  );
}

export default StudentDashboard;