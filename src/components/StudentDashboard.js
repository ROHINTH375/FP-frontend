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


// // src/pages/StudentDashboard.js
// import React, { useState } from 'react';
// import { useUser } from '../context/UserContext';

// function StudentDashboard() {
//   const { user, setUser } = useUser();
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState(user || {});

//   const handleEditToggle = () => {
//     setIsEditing(!isEditing);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSave = () => {
//     setUser(formData); // Update the context with new data
//     setIsEditing(false);
//     // Ideally, send updated data to backend here as well
//   };

//   return (
//     <div className="dashboard">
//       <h2>Student Dashboard</h2>
//       <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
//         <img
//           src="/path/to/icon.png"
//           alt="Profile Icon"
//           style={{ width: '40px', cursor: 'pointer' }}
//           onClick={handleEditToggle}
//         />
//       </div>
//       {isEditing ? (
//         <div>
//           <h3>Edit Profile</h3>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//           <button onClick={handleSave}>Save</button>
//         </div>
//       ) : (
//         <div>
//           <p>Name: {user?.name}</p>
//           <p>Email: {user?.email}</p>
//           {/* Assuming the password is masked or managed securely */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default StudentDashboard;
