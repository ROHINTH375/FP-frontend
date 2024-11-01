// // // src/pages/Students.js
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const Students = () => {
// //   const [students, setStudents] = useState([]);

// //   useEffect(() => {
// //     const fetchStudents = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:5000/api/students');
// //         setStudents(response.data);
// //       } catch (error) {
// //         console.error('Error fetching students', error);
// //       }
// //     };

// //     fetchStudents();
// //   }, []);

// //   return (
// //     <div className="container mx-auto py-8">
// //       <h1 className="text-3xl font-bold mb-6">Students</h1>
// //       <ul className="space-y-4">
// //         {students.map((student) => (
// //           <li key={student._id} className="border p-4 rounded-lg shadow-md">
// //             <h2 className="text-xl font-semibold">{student.name}</h2>
// //             <p>Email: {student.email}</p>
// //             <p>Applied Jobs: {student.appliedJobs.length}</p>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default Students;

// import React, { useState } from 'react';
// import axios from 'axios';

// const StudentPage = () => {
//   const [studentData, setStudentData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const [loginData, setLoginData] = useState({
//     email: '',
//     password: '',
//   });

//   // Handle registration form data changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setStudentData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   // Handle login form data changes
//   const handleLoginInputChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   // Register student function
//   const registerStudents = async (e) => {
//     e.preventDefault(); // Prevent form default action
//     try {
//       const response = await axios.post('http://localhost:5000/api/students/register', studentData);
//       console.log('Student Registered:', response.data);
//       alert('Registration successful!');
//     } catch (error) {
//       console.error('Error registering student:', error);
//       alert('Registration failed.');
//     }
//   };

//   // Student login function
//   const studentLogin = async (e) => {
//     e.preventDefault(); // Prevent form default action
//     try {
//       const response = await axios.post('http://localhost:5000/api/students/login', loginData);
//       console.log('Login successful:', response.data);
//       alert('Login successful!');
//     } catch (error) {
//       console.error('Error logging in student:', error);
//       alert('Login failed.');
//     }
//   };

//   return (
//     <div className='justify-center flex px-0.5 bg-green-300'>
//       {/* Student Registration Form */}
//       <h2 className="px-1">Register Student   : </h2>
//       <form onSubmit={registerStudents}>
//         <div className="p-1.5">
//           <label>Name :</label>
//           <input
//             type="text"
//             name="name"
//             value={studentData.name}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="p-1.5">
//           <label>Email    :</label>
//           <input
//             type="email"
//             name="email"
//             value={studentData.email}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label className="p-1.5">Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={studentData.password}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <button type="submit" className='bg-red-500 p-1'>Register</button>
//       </form>

//       {/* Student Login Form */}
//       <h2 className="px-1">Student Login  : </h2>
//       <form onSubmit={studentLogin}>
//         <div className="p-1.5">
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={loginData.email}
//             onChange={handleLoginInputChange}
//             required
//           />
//         </div>
//         <div className="p-1.5">
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={loginData.password}
//             onChange={handleLoginInputChange}
//             required
//           />
//         </div>
//         <button type="submit" className='bg-red-500 p-1'>Login</button>
//       </form>
//     </div>
//   );
// };

// export default StudentPage;

// src/pages/StudentPage.js
// import React, { useState } from "react";
// import axios from "axios";

// const StudentPage = () => {
//   const [studentData, setStudentData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const [loginData, setLoginData] = useState({
//     email: "",
//     password: "",
//   });

//   // Handle registration form data changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setStudentData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   // Handle login form data changes
//   const handleLoginInputChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   // Register student function
//   const registerStudents = async (e) => {
//     e.preventDefault(); // Prevent form default action
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/students/register",
//         studentData
//       );
//       console.log("Student Registered:", response.data);
//       alert("Registration successful!");
//     } catch (error) {
//       console.error("Error registering student:", error);
//       alert("Registration failed.");
//     }
//   };

//   // Student login function
//   const studentLogin = async (e) => {
//     e.preventDefault(); // Prevent form default action
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/students/login",
//         loginData
//       );
//       console.log("Login successful:", response.data);
//       alert("Login successful!");
//     } catch (error) {
//       console.error("Error logging in student:", error);
//       alert("Login failed.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center bg-gradient-to-r">
//         <div className="container mx-auto p-4 bg-gradient-to-r">
//           <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
//             {/* Student Registration Form */}
//             <h2 className="text-2xl font-semibold text-center mb-6">
//               Register Student
//             </h2>
//             <form onSubmit={registerStudents} className="space-y-4">
//               <div>
//                 <label className="block font-medium text-gray-700">Name:</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={studentData.name}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 />
//               </div>
//               <div>
//                 <label className="block font-medium text-gray-700">
//                   Email:
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={studentData.email}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 />
//               </div>
//               <div>
//                 <label className="block font-medium text-gray-700">
//                   Password:
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   value={studentData.password}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
//               >
//                 Register
//               </button>
//             </form>
//           </div>

//           <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
//             {/* Student Login Form */}
//             <h2 className="text-2xl font-semibold text-center mb-6">
//               Student Login
//             </h2>
//             <form onSubmit={studentLogin} className="space-y-4">
//               <div>
//                 <label className="block font-medium text-gray-700">
//                   Email:
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={loginData.email}
//                   onChange={handleLoginInputChange}
//                   required
//                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 />
//               </div>
//               <div>
//                 <label className="block font-medium text-gray-700">
//                   Password:
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   value={loginData.password}
//                   onChange={handleLoginInputChange}
//                   required
//                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
//               >
//                 Login
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentPage;

import React from 'react';
import { useNavigate } from 'react-router-dom';

function StudentPage() {
  const navigate = useNavigate();

  

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4 ">Student Portal</h2>
      <button 
        onClick={() => navigate('/register-student')}
        className="btn btn-primary mr-2"
      >
        Register Student
      </button>
      <button 
        onClick={() => navigate('/login-student')}
        className="btn btn-secondary"
      >
        Login Student
      </button>
    </div>
  );
}

export default StudentPage;

