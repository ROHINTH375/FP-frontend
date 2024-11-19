// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { getStudentData } from '../api'; // API function to get student data
// import ProfileInfo from '../components/ProfileInfo'; // Component for profile information
// import PlacementStatus from '../components/PlacementStatus'; // Component for placement status

// function StudentDashboard() {
//     const [studentData, setStudentData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const navigate = useNavigate();

//     // Fetch student data after successful login
//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 const response = await getStudentData();
//                 setStudentData(response.data);
//             } catch (error) {
//                 console.error("Error fetching student data", error);
//                 // Optionally redirect to login if there's an error
//                 navigate('/dashboard-student');
//             } finally {
//                 setLoading(false);
//             }
//         }
//         fetchData();
//     }, [navigate]);

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     return (
//         <div className="student-dashboard p-8">
//             <h1>Student Dashboard</h1>

//             {/* Profile and Placement Components */}
//             {studentData && (
//                 <>
//                     <ProfileInfo data={studentData} /> {/* Display profile information */}
//                     <PlacementStatus data={studentData} /> {/* Display placement status */}
//                 </>
//             )}

//             <div className="profile-header flex justify-between items-center mt-8">
//                 <div>
//                     <h1>Welcome, {studentData.name}</h1>
//                     <p>{studentData.email}</p>
//                 </div>
//                 <img
//                     src={studentData.profileImage || "default-profile.png"}
//                     alt="Profile"
//                     className="w-16 h-16 rounded-full"
//                 />
//             </div>

//             {/* Placement Progress Section */}
//             <div className="progress-section mt-8">
//                 <h2>Placement Progress</h2>
//                 <div className="flex gap-4 mt-4">
//                     <div className="step">
//                         <div className={`circle ${studentData.progress >= 1 ? "completed" : ""}`}>Placed Camp</div>
//                     </div>
//                     <div className="step">
//                         <div className={`circle ${studentData.progress >= 2 ? "completed" : ""}`}></div>
//                     </div>
//                     <div className="step">
//                         <div className={`circle ${studentData.progress >= 3 ? "completed" : ""}`}>Certificate</div>
//                     </div>
//                     <div className="step">
//                         <div className={`circle ${studentData.progress >= 4 ? "completed" : ""}`}>Placed</div>
//                     </div>
//                 </div>
//             </div>

//             {/* Stats Section */}
//             <div className="stats mt-8 grid grid-cols-3 gap-4">
//                 <div className="stat-card p-4 border rounded-lg shadow-md">
//                     <h3>Attendance</h3>
//                     <p>{studentData.attendance || 0}%</p>
//                 </div>
//                 <div className="stat-card p-4 border rounded-lg shadow-md">
//                     <h3>Tasks Submitted</h3>
//                     <p>{studentData.tasksSubmitted || 0}%</p>
//                 </div>
//                 <div className="stat-card p-4 border rounded-lg shadow-md">
//                     <h3>Quiz Submitted</h3>
//                     <p>{studentData.quizzesSubmitted || 0}%</p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default StudentDashboard;


// import React, { useEffect, useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// import { getStudentData } from '../api'; // API function to get student data
// // import ProfileInfo from '../components/ProfileInfo'; // Example: a component for profile information
// // import PlacementStatus from '../components/PlacementStatus'; // Example: a component for placement status

// // // function StudentDashboard() {
// // //     const [studentData, setStudentData] = useState(null);
// // //     // const navigate = useNavigate();

// // //     // Fetch student data after successful login
// // //     useEffect(() => {
// // //         async function fetchData() {
// // //             try {
// // //                 const response = await getStudentData();
// // //                 setStudentData(response.data);
// // //             } catch (error) {
// // //                 console.error("Error fetching student data", error);
// // //             }
// // //         }
// // //         fetchData();
// // //     }, []);

// // //     // Show loading message while data is being fetched
// // //     if (!studentData) {
// // //         return <p>Loading...</p>;
// // //     }

// // //     return (
// // //         <div className="student-dashboard p-8">
// // //             <h1>Student Dashboard</h1>
// // //             <ProfileInfo /> {/* This could show profile image, name, email, etc. */}
// // //             <PlacementStatus /> {/* This could show placement status, application status, etc. */}
// // //             <div className="profile-header flex justify-between items-center">
// // //                 <div>
// // //                     <h1>Welcome, {studentData.name || "Student"}</h1>
// // //                     <p>{studentData.email || "No email provided"}</p>
// // //                 </div>
// // //                 <img
// // //                     src={studentData.profileImage || "default-profile.png"}
// // //                     alt="Profile"
// // //                     className="w-16 h-16 rounded-full"
// // //                 />
// // //             </div>
// // //             <div className="progress-section mt-8">
// // //                 <h2>Placement Progress</h2>
// // //                 <div className="flex gap-4 mt-4">
// // //                     <div className="step">
// // //                         <div className={`circle ${studentData.progress >= 1 ? "completed" : ""}`}>application received </div>
// // //                     </div>
// // //                     <div className="step">
// // //                         <div className={`circle ${studentData.progress >= 2 ? "completed" : ""}`}>application submitted</div>
// // //                     </div>
// // //                     <div className="step">
// // //                         <div className={`circle ${studentData.progress >= 3 ? "completed" : ""}`}>Certificate</div>
// // //                     </div>
// // //                     <div className="step">
// // //                         <div className={`circle ${studentData.progress >= 4 ? "completed" : ""}`}>Placed</div>
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //             <div className="stats mt-8 grid grid-cols-3 gap-4">
// // //                 <div className="stat-card">
// // //                     <h3>Attendance</h3>
// // //                     <p>{studentData.attendance || 0}%</p>
// // //                 </div>
// // //                 <div className="stat-card">
// // //                     <h3>Tasks Submitted</h3>
// // //                     <p>{studentData.tasksSubmitted || 0}%</p>
// // //                 </div>
// // //                 <div className="stat-card">
// // //                     <h3>Quiz Submitted</h3>
// // //                     <p>{studentData.quizzesSubmitted || 0}%</p>
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // }

// // // export default StudentDashboard;
// // import React, { useEffect, useState } from 'react';
// // import { getStudentData } from '../api';

// function StudentDashboard() {
//     const [studentData, setStudentData] = useState(null);

//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 const response = await getStudentData();
//                 setStudentData(response.data); // Store fetched data in state
//             } catch (error) {
//                 console.error("Error fetching student data:", error);
//             }
//         }
//         fetchData();
//     }, []);

//     if (!studentData) {
//         return <p>Loading...</p>;
//     }

//     return (
//         <div>
//             <h1>Welcome, {studentData.name}</h1>
//             <p>Email: {studentData.email}</p>
//             <img src={studentData.profileImage} alt="Profile" />
//             <p>Progress: {studentData.progress}</p>
//             <p>Attendance: {studentData.attendance}%</p>
//             <p>Tasks Submitted: {studentData.tasksSubmitted}%</p>
//             <p>Quizzes Submitted: {studentData.quizzesSubmitted}%</p>
//         </div>
//     );
// }

// export default StudentDashboard;


// import React, { useEffect, useState } from 'react';
// import { getStudentData } from '../api';
// import ProfileInfo from '../components/ProfileInfo';
// import PlacementStatus from '../components/PlacementStatus';

// function StudentDashboard() {
//     const [studentData, setStudentData] = useState(null);

//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 const response = await getStudentData();
//                 setStudentData(response.data); // Set the fetched data
//             } catch (error) {
//                 console.error("Error fetching student data:", error);
//             }
//         }
//         fetchData();
//     }, []);

//     if (!studentData) {
//         return <p>Loading...</p>; // Show loading message if data is not yet available
//     }

//     return (
//         <div className="student-dashboard p-8">
//             <h1>Student Dashboard</h1>
            
//             {/* Profile Information */}
//             <ProfileInfo 
//                 name={studentData.name}
//                 email={studentData.email}
//                 profileImage={studentData.profileImage}
//             />

//             {/* Placement Status */}
//             <PlacementStatus 
//                 progress={studentData.progress}
//                 attendance={studentData.attendance}
//                 tasksSubmitted={studentData.tasksSubmitted}
//                 quizzesSubmitted={studentData.quizzesSubmitted}
//             />
//         </div>
//     );
// }

// export default StudentDashboard;


// pages/StudentDashboard.js

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import ProfileInfo from '../components/ProfileInfo';
// import PlacementStatus from '../components/PlacementStatus';
// import ApplyJobButton from '../components/ApplyJobButton';
// import ApplicationStatus from '../components/ApplicationStatus';
// import StudentInterviews from '../components/StudentInterviews';
// import ScheduleInterview from '../components/ScheduleInterview';
// import { useNavigate } from 'react-router-dom';
// function StudentDashboard({ studentId }) {
//     const [studentData, setStudentData] = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//     const token = localStorage.getItem('token'); // Get JWT token from localStorage

//     axios.get('http://localhost:5000/api/student/dashboard-student', {
//       headers: { Authorization: `Bearer ${token}` },
//     })
//     .then(response => setStudentData(response.data))
//     .catch(error => console.error('Error fetching student data', error));
//   }, []);

//     if (!studentData) {
//         return <p className="text-center text-xl text-gray-500 mt-10">Loading...</p>;
//     }



//     return (
//         <div className="student-dashboard bg-gray-100 p-8 min-h-screen">
//             <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Student Dashboard</h1>
//             <ProfileInfo studentData={studentData} />
//             <div>
//             <div className="student-dashboard bg-gray-100 p-8 min-h-screen">
//       <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
//         Student Dashboard
//       </h1>

//       {/* Add Apply for Jobs Section */}
//       <div className="bg-white shadow-lg rounded-lg p-6 mb-8 max-w-4xl mx-auto">
//         <h2 className="text-xl font-semibold text-blue-600 mb-4">
//           Apply for Jobs
//         </h2>
//         <button
//           className="bg-blue-600 text-white px-4 py-2 rounded"
//           onClick={() => navigate('/apply')}
//         >
//           Go to Job Application Page
//         </button>
//       </div>
//     </div>
//             <div className="bg-white shadow-lg rounded-lg p-6 mb-8 max-w-4xl mx-auto">
//                 <h2 className="text-xl font-semibold text-blue-600 mb-4">Placement Progress</h2>
//                 <div className="flex gap-4 justify-around">
//                     {["Applied job", "Application Viewed", "Application Selected", "Placed"].map((stage, index) => (
//                         <div key={index} className="text-center">
//                             <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${studentData.progress > index ? "bg-blue-500" : "bg-gray-300"}`}>
//                                 {index + 1}
//                             </div>
//                             <p className="text-gray-700 mt-2">{stage}</p>
//                         </div>
//                     ))}
//                 </div>
                
//             </div>
//             <div></div>
//             <PlacementStatus progress={studentData.progress} /></div>
//             <div className="stats">
//                 <h3>Attendance: {studentData.attendance}%</h3>
//                 <h3>Tasks Submitted: {studentData.tasksSubmitted}%</h3>
//                 <h3>Quizzes Submitted: {studentData.quizzesSubmitted}%</h3>
//             </div>

//             <div>
//             <h1>Welcome to Student Dashboard</h1>
//             <ApplyJobButton jobId="12345" studentId={studentId} />
//             <div className="bg-white shadow-lg rounded-lg p-6 mb-8 max-w-4xl mx-auto">
//                 <h2 className="text-xl font-semibold text-blue-600 mb-4">Manage Applications</h2>
//                 <ApplyJobButton jobId="12345" studentId={studentId} />
//                 <ApplicationStatus studentId={studentId} />
//             </div>
//         </div>

//         <div className="bg-white shadow-lg rounded-lg p-6 mb-8 max-w-4xl mx-auto">
//                 <h2 className="text-xl font-semibold text-blue-600 mb-4">Scheduled Interviews</h2>
//                 <StudentInterviews studentId={studentId} />
//             </div>

//             <div className="student-dashboard bg-gray-100 p-8 min-h-screen">
//             {/* Other dashboard components */}
//             <ScheduleInterview studentId={studentId} />
//         </div>
//         </div>
//     );
// }

// export default StudentDashboard;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import AcademicRecords from '../components/AcademicRecords';
// import ProfileInfo from '../components/ProfileInfo';
// import PlacementStatus from '../components/PlacementStatus';
// import ApplyJobButton from '../components/ApplyJobButton';
// import ApplicationStatus from '../components/ApplicationStatus';
// import StudentInterviews from '../components/StudentInterviews';
// import ScheduleInterview from '../components/ScheduleInterview';
// import { useNavigate } from 'react-router-dom';

// function StudentDashboard({ studentId }) {
//   const [studentData, setStudentData] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     console.log('Token:', token); // Log the token
//     console.log('Student ID in AcademicRecords:', studentId);

//     axios
//       .get('http://localhost:5000/api/student/dashboard-student', {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((response) => {
//         console.log('API Response:', response.data); // Log the API response
//         setStudentData(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching student data:', error);
//       });
//   }, [studentId]);

//   if (!studentData) {
//     return (
//       <div className="text-center text-xl text-gray-500 mt-10">
//         <p>Loading student data...</p>
//         <p>If this persists, please check your network or contact support.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="student-dashboard bg-gray-100 p-8 min-h-screen">
//       <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
//         Student Dashboard
//       </h1>

//       {/* Academic Records */}
//       <AcademicRecords studentId={studentId} />

//       {/* Profile Info */}
//       <ProfileInfo studentData={studentData} />

//       {/* Placement Progress */}
//       <PlacementStatus progress={studentData.progress} />

//       {/* Application Status */}
//       <ApplicationStatus studentId={studentId} />

//       {/* Scheduled Interviews */}
//       <StudentInterviews studentId={studentId} />

//       {/* Schedule Interview */}
//       <ScheduleInterview studentId={studentId} />

//       {/* Apply for Jobs */}
//       <div className="bg-white shadow-lg rounded-lg p-6 mb-8 max-w-4xl mx-auto">
//         <h2 className="text-xl font-semibold text-blue-600 mb-4">Apply for Jobs</h2>
//         <ApplyJobButton jobId="12345" studentId={studentId} />
//       </div>
//     </div>
//   );
// }

// export default StudentDashboard;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import AcademicRecords from '../components/AcademicRecords';
// import ProfileInfo from '../components/ProfileInfo';
// import PlacementStatus from '../components/PlacementStatus';
// import ApplyJobButton from '../components/ApplyJobButton';
// import ApplicationStatus from '../components/ApplicationStatus';
// import StudentInterviews from '../components/StudentInterviews';
// import ScheduleInterview from '../components/ScheduleInterview';
// import { useNavigate } from 'react-router-dom';

// function StudentDashboard({ studentId }) {
//   const [studentData, setStudentData] = useState(null);
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token'); // Get JWT token from localStorage
//     console.log('Token:', token);

//     axios
//       .get('http://localhost:5000/api/student/dashboard-student', {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((response) => {
//         console.log('API Response:', response.data);
//         setStudentData(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching student data:', error);
//         setErrorMessage('Unable to load student data.');
//       });
//   }, []);

//   if (errorMessage) {
//     return (
//       <div className="text-center text-red-500">
//         <p>{errorMessage}</p>
//         <p>Please try again later.</p>
//       </div>
//     );
//   }

//   if (!studentData) {
//     return (
//       <div className="text-center text-gray-500 mt-10">
//         <p>Loading student data...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="student-dashboard bg-gray-100 p-8 min-h-screen">
//       <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
//         Student Dashboard
//       </h1>

//       {/* Academic Records */}
//       <AcademicRecords studentId={studentId} />

//       {/* Profile Info */}
//       <ProfileInfo studentData={studentData} />

//       {/* Placement Progress */}
//       <PlacementStatus progress={studentData.progress} />

//       {/* Application Status */}
//       <ApplicationStatus studentId={studentId} />

//       {/* Scheduled Interviews */}
//       <StudentInterviews studentId={studentId} />

//       {/* Schedule Interview */}
//       <ScheduleInterview studentId={studentId} />

//       {/* Apply for Jobs */}
//       <div className="bg-white shadow-lg rounded-lg p-6 mb-8 max-w-4xl mx-auto">
//         <h2 className="text-xl font-semibold text-blue-600 mb-4">Apply for Jobs</h2>
//         <ApplyJobButton jobId="12345" studentId={studentId} />
//       </div>
//     </div>
//   );
// }

// export default StudentDashboard;

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
      <ul>
        {applications.map((app) => (
          <li key={app._id} className="border p-2 mb-2 rounded">
            <p>Job Title: {app.jobId?.jobTitle}</p>
            <p>Status: {app.status}</p>
          </li>
        ))}
      </ul>

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
