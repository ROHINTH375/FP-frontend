// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // function StudentDashboard() {
// //   const [dashboardData, setDashboardData] = useState(null);

// //   useEffect(() => {
// //     const fetchDashboardData = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:5000/dashboard-student', {
// //           headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
// //         });
// //         setDashboardData(response.data);
// //       } catch (error) {
// //         console.error("Error fetching dashboard data", error);
// //       }
// //     };

// //     fetchDashboardData();
// //   }, []);

// //   if (!dashboardData) return <div>Loading...</div>;

// //   const { student, applications, jobOpenings } = dashboardData;

// //   return (
// //     <div className="dashboard">
// //       <div className="profile">
// //         <img src={student.image || '/default-profile.png'} alt="Profile" />
// //         <h3>{student.name}</h3>
// //         <p>Email: {student.email}</p>
// //       </div>

// //       <div className="applications">
// //         <h3>Applications</h3>
// //         <ul>
// //           {applications.map((app) => (
// //             <li key={app._id}>
// //               Company: {app.companyId.name}, Status: {app.status}
// //             </li>
// //           ))}
// //         </ul>
// //       </div>

// //       <div className="job-openings">
// //         <h3>Job Openings</h3>
// //         <ul>
// //           {jobOpenings.map((company) => (
// //             <li key={company._id}>
// //               {company.name}:
// //               <ul>
// //                 {company.jobOpenings.map((job) => (
// //                   <li key={job.id}>{job.title} - {job.description}</li>
// //                 ))}
// //               </ul>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // }

// // export default StudentDashboard;

// // // src/pages/StudentDashboard.js
// // // import React, { useState } from 'react';
// // // import { useUser } from '../context/UserContext';

// // // function StudentDashboard() {
// // //   const { user, setUser } = useUser();
// // //   const [isEditing, setIsEditing] = useState(false);
// // //   const [formData, setFormData] = useState(user || {});

// // //   const handleEditToggle = () => {
// // //     setIsEditing(!isEditing);
// // //   };

// // //   const handleChange = (e) => {
// // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // //   };

// // //   const handleSave = () => {
// // //     setUser(formData); // Update the context with new data
// // //     setIsEditing(false);
// // //     // Ideally, send updated data to backend here as well
// // //   };

// // //   return (
// // //     <div className="dashboard">
// // //       <h2>Student Dashboard</h2>
// // //       <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
// // //         <img
// // //           src="/path/to/icon.png"
// // //           alt="Profile Icon"
// // //           style={{ width: '40px', cursor: 'pointer' }}
// // //           onClick={handleEditToggle}
// // //         />
// // //       </div>
// // //       {isEditing ? (
// // //         <div>
// // //           <h3>Edit Profile</h3>
// // //           <input
// // //             type="text"
// // //             name="name"
// // //             value={formData.name}
// // //             onChange={handleChange}
// // //           />
// // //           <input
// // //             type="email"
// // //             name="email"
// // //             value={formData.email}
// // //             onChange={handleChange}
// // //           />
// // //           <input
// // //             type="password"
// // //             name="password"
// // //             value={formData.password}
// // //             onChange={handleChange}
// // //           />
// // //           <button onClick={handleSave}>Save</button>
// // //         </div>
// // //       ) : (
// // //         <div>
// // //           <p>Name: {user?.name}</p>
// // //           <p>Email: {user?.email}</p>
// // //           {/* Assuming the password is masked or managed securely */}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // export default StudentDashboard;
// // StudentDashboard.js
// import React, { useEffect, useState } from 'react';
// import { getStudentData } from '../api';

// function StudentDashboard() {
//     const [studentData, setStudentData] = useState(null);

//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 const data = await getStudentData();
//                 setStudentData(data);
//             } catch (error) {
//                 console.error("Error fetching student data", error);
//             }
//         }
//         fetchData();
//     }, []);

//     if (!studentData) {
//         return <p>Loading...</p>;
//     }

//     return (
//         <div className="student-dashboard p-8">
//             <h1>Student Dashboard</h1>
//             <div className="profile-header flex justify-between items-center">
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
//             <div className="progress-section mt-8">
//                 <h2>Placement Progress</h2>
//                 <div className="flex gap-4 mt-4">
//                     <div className={`circle ${studentData.progress >= 1 ? "completed" : ""}`}>Preboot Camp</div>
//                     <div className={`circle ${studentData.progress >= 2 ? "completed" : ""}`}>Mainboot Camp</div>
//                     <div className={`circle ${studentData.progress >= 3 ? "completed" : ""}`}>Certificate</div>
//                     <div className={`circle ${studentData.progress >= 4 ? "completed" : ""}`}>Placed</div>
//                 </div>
//             </div>
//             <div className="stats mt-8 grid grid-cols-3 gap-4">
//                 <div className="stat-card">
//                     <h3>Attendance</h3>
//                     <p>{studentData.attendance}%</p>
//                 </div>
//                 <div className="stat-card">
//                     <h3>Tasks Submitted</h3>
//                     <p>{studentData.tasksSubmitted}%</p>
//                 </div>
//                 <div className="stat-card">
//                     <h3>Quiz Submitted</h3>
//                     <p>{studentData.quizzesSubmitted}%</p>
//                 </div>
//             </div>
//             <div className="job-applications mt-8">
//                 <h2>Applied Jobs</h2>
//                 <ul>
//                     {studentData.appliedJobs.map((job, index) => (
//                         <li key={index} className="job-item">
//                             <h3>{job.company}</h3>
//                             <p>Position: {job.position}</p>
//                             <p>Status: {job.status}</p>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
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
//     const [userDetails, setUserDetails] = useState(null);

//     useEffect(() => {
//         // Retrieve login details from local storage
//     const storedUserDetails = localStorage.getItem('userDetails');
//     if (storedUserDetails) {
//       setUserDetails(JSON.parse(storedUserDetails));
//     }
//   }, [])

//     if (!studentData) {
//         return <p>Loading...</p>; // Show loading message if data is not yet available
//     }

//     return (
//         <div className="student-dashboard bg-gray-50 p-8 min-h-screen">
//             <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Student Dashboard</h1>

//             <div className="max-w-5xl mx-auto space-y-6">
//                 {/* Profile Info Section */}
//                 <div className="flex items-center bg-white shadow rounded-lg p-6 mb-8">
//                     <ProfileInfo studentData={studentData} />
//                 </div>

//                 {/* Placement Progress Section */}
//                 <div className="bg-white shadow rounded-lg p-6 mb-8">
//                     <h2 className="text-xl font-semibold text-blue-600 mb-4">Placement Progress</h2>
//                     <PlacementStatus progress={studentData.progress} />
//                 </div>

//                 {/* Statistics Section */}
//                 <div className="bg-white shadow rounded-lg p-6 mb-8">
//                     <h2 className="text-xl font-semibold text-blue-600 mb-4">Performance</h2>
//                     <div className="flex justify-around">
//                         <div className="text-center">
//                             <p className="text-blue-600 font-bold text-2xl">{studentData.attendance}%</p>
//                             <p className="text-gray-500">Attendance</p>
//                         </div>
//                         <div className="text-center">
//                             <p className="text-blue-600 font-bold text-2xl">{studentData.tasksSubmitted}%</p>
//                             <p className="text-gray-500">Tasks Submitted</p>
//                         </div>
//                         <div className="text-center">
//                             <p className="text-blue-600 font-bold text-2xl">{studentData.quizzesSubmitted}%</p>
//                             <p className="text-gray-500">Quizzes Submitted</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Application Section */}
//                 <div className="bg-white shadow rounded-lg p-6 mb-8">
//                     <h2 className="text-xl font-semibold text-blue-600 mb-4">Your Applications</h2>
//                     <ApplyJobButton jobId="12345" studentId={studentId} />
//                     <ApplicationStatus studentId={studentId} />
//                 </div>

//                 {/* Interview Scheduling Section */}
//                 <div className="bg-white shadow rounded-lg p-6 mb-8">
//                     <h2 className="text-xl font-semibold text-blue-600 mb-4">Scheduled Interviews</h2>
//                     <StudentInterviews studentId={studentId} />
//                     <ScheduleInterview studentId={studentId} />
//                 </div>
//             </div>

//             {message && <p className="text-center text-red-500">{message}</p>}
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
//     const [userDetails, setUserDetails] = useState(null);

//     useEffect(() => {
//         // Retrieve login details from local storage
//     const storedUserDetails = localStorage.getItem('userDetails');
//     if (storedUserDetails) {
//       setUserDetails(JSON.parse(storedUserDetails));
//     }
//   }, [])

//     if (!studentData) {
//         return <p>Loading...</p>; // Show loading message if data is not yet available
//     }

//     return (
//         <div className="student-dashboard bg-gray-50 p-8 min-h-screen">
//             <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Student Dashboard</h1>

//             <div className="max-w-5xl mx-auto space-y-6">
//                 {/* Profile Info Section */}
//                 <div className="flex items-center bg-white shadow rounded-lg p-6 mb-8">
//                     <ProfileInfo studentData={studentData} />
//                 </div>

//                 {/* Placement Progress Section */}
//                 <div className="bg-white shadow rounded-lg p-6 mb-8">
//                     <h2 className="text-xl font-semibold text-blue-600 mb-4">Placement Progress</h2>
//                     <PlacementStatus progress={studentData.progress} />
//                 </div>

//                 {/* Statistics Section */}
//                 <div className="bg-white shadow rounded-lg p-6 mb-8">
//                     <h2 className="text-xl font-semibold text-blue-600 mb-4">Performance</h2>
//                     <div className="flex justify-around">
//                         <div className="text-center">
//                             <p className="text-blue-600 font-bold text-2xl">{studentData.attendance}%</p>
//                             <p className="text-gray-500">Attendance</p>
//                         </div>
//                         <div className="text-center">
//                             <p className="text-blue-600 font-bold text-2xl">{studentData.tasksSubmitted}%</p>
//                             <p className="text-gray-500">Tasks Submitted</p>
//                         </div>
//                         <div className="text-center">
//                             <p className="text-blue-600 font-bold text-2xl">{studentData.quizzesSubmitted}%</p>
//                             <p className="text-gray-500">Quizzes Submitted</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Application Section */}
//                 <div className="bg-white shadow rounded-lg p-6 mb-8">
//                     <h2 className="text-xl font-semibold text-blue-600 mb-4">Your Applications</h2>
//                     <ApplyJobButton jobId="12345" studentId={studentId} />
//                     <ApplicationStatus studentId={studentId} />
//                 </div>

//                 {/* Interview Scheduling Section */}
//                 <div className="bg-white shadow rounded-lg p-6 mb-8">
//                     <h2 className="text-xl font-semibold text-blue-600 mb-4">Scheduled Interviews</h2>
//                     <StudentInterviews studentId={studentId} />
//                     <ScheduleInterview studentId={studentId} />
//                 </div>
//             </div>

//             {message && <p className="text-center text-red-500">{message}</p>}
//         </div>
//     );
// }

// export default StudentDashboard;

import React, { useEffect, useState } from "react";
import { getStudentData } from "../api"; // Ensure this API call is defined and imported correctly
import ProfileInfo from "../components/ProfileInfo";
import PlacementStatus from "../components/PlacementStatus";
import ApplyJobButton from "../components/ApplyJobButton";
import ApplicationStatus from "../components/ApplicationStatus";
import StudentInterviews from "../components/StudentInterviews";
import ScheduleInterview from "../components/ScheduleInterview";
import AcademicRecords from "../components/AcademicRecords";

function StudentDashboard() {
  const [studentData, setStudentData] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Retrieve login details from local storage
    const storedUserDetails = localStorage.getItem("userDetails");
    if (storedUserDetails) {
      const parsedDetails = JSON.parse(storedUserDetails);
      setUserDetails(parsedDetails);

      // Fetch student data using student ID from local storage
      fetchStudentData(parsedDetails.studentId);
    }
  }, []);

  const fetchStudentData = async (studentId) => {
    try {
      const response = await getStudentData(studentId); // Adjust API call if needed
      setStudentData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching student data:", error);
      setErrorMessage("Failed to load student data.");
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>; // Show loading message if data is not yet available
  }

  if (errorMessage) {
    return <p className="text-center text-red-500">{errorMessage}</p>;
  }

  return (
    <div className="student-dashboard bg-gray-50 p-8 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
        Student Dashboard
      </h1>

      <div className="max-w-5xl mx-auto space-y-6">
        {/* Profile Info Section */}
        <div className="flex items-center bg-white shadow rounded-lg p-6 mb-8">
          <ProfileInfo studentData={studentData} />
        </div>

        {/* Placement Progress Section */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">
            Placement Progress
          </h2>
          <PlacementStatus progress={studentData.progress} />
        </div>

        <div className="mb-8">
          <AcademicRecords studentId={studentId} />
        </div>

        {/* Statistics Section */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">
            Performance
          </h2>
          <div className="flex justify-around">
            <div className="text-center">
              <p className="text-blue-600 font-bold text-2xl">
                {studentData.attendance}%
              </p>
              <p className="text-gray-500">Attendance</p>
            </div>
            <div className="text-center">
              <p className="text-blue-600 font-bold text-2xl">
                {studentData.tasksSubmitted}%
              </p>
              <p className="text-gray-500">Tasks Submitted</p>
            </div>
            <div className="text-center">
              <p className="text-blue-600 font-bold text-2xl">
                {studentData.quizzesSubmitted}%
              </p>
              <p className="text-gray-500">Quizzes Submitted</p>
            </div>
          </div>
        </div>

        {/* Application Section */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">
            Your Applications
          </h2>
          <ApplyJobButton jobId="12345" studentId={userDetails?.studentId} />
          <ApplicationStatus studentId={userDetails?.studentId} />
        </div>

        {/* Interview Scheduling Section */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">
            Scheduled Interviews
          </h2>
          <StudentInterviews studentId={userDetails?.studentId} />
          <ScheduleInterview studentId={userDetails?.studentId} />
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
