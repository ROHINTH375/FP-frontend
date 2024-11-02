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

import React, { useEffect, useState } from 'react';
import { getStudentData } from '../api';
import ProfileInfo from '../components/ProfileInfo';
import PlacementStatus from '../components/PlacementStatus';

function StudentDashboard() {
    const [studentData, setStudentData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getStudentData();
                setStudentData(response.data); // Set the fetched data
            } catch (error) {
                console.error("Error fetching student data:", error);
            }
        }
        fetchData();
    }, []);

    if (!studentData) {
        return <p>Loading...</p>; // Show loading message if data is not yet available
    }

    return (
        <div className="student-dashboard p-8">
            <h1>Student Dashboard</h1>
            
            {/* Profile Information */}
            <ProfileInfo 
                name={studentData.name}
                email={studentData.email}
                profileImage={studentData.profileImage}
            />

            {/* Placement Status */}
            <PlacementStatus 
                progress={studentData.progress}
                attendance={studentData.attendance}
                tasksSubmitted={studentData.tasksSubmitted}
                quizzesSubmitted={studentData.quizzesSubmitted}
            />
        </div>
    );
}

export default StudentDashboard;

