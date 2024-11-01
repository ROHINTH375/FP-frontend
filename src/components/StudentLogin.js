// // StudentLogin.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function StudentLogin() {
//     const [loginData, setLoginData] = useState({ email: '', password: '' });
//     const [applications, setApplications] = useState([]);
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     const handleChange = (e) => {
//         setLoginData({
//             ...loginData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:5000/api/students/login', loginData);
//             if (response.data.success) {
//                 setIsLoggedIn(true);
//                 fetchApplications();
//             } else {
//                 alert("Login failed. Please check your credentials.");
//             }
//         } catch (error) {
//             console.error("Error logging in:", error);
//             alert("Login failed. Please try again.");
//         }
//     };

//     const fetchApplications = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/students/applications');
//             setApplications(response.data);
//         } catch (error) {
//             console.error("Error fetching applications:", error);
//         }
//     };

//     useEffect(() => {
//         if (isLoggedIn) {
//             fetchApplications();
//         }
//     }, [isLoggedIn]);

//     return (
//         <div>
//             {!isLoggedIn ? (
//                 <form onSubmit={handleLogin}>
//                     <h2>Login</h2>
//                     <label>Email</label>
//                     <input type="email" name="email" value={loginData.email} onChange={handleChange} required />
                    
//                     <label>Password</label>
//                     <input type="password" name="password" value={loginData.password} onChange={handleChange} required />
                    
//                     <button type="submit">Login</button>
//                 </form>
//             ) : (
//                 <div>
//                     <h2>Your Job Applications</h2>
//                     <ul>
//                         {applications.map((app, index) => (
//                             <li key={index}>
//                                 {app.jobTitle} - Status: {app.status}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default StudentLogin;

// import React, { useState} from 'react';
// // import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { loginStudent } from '../api';

// const StudentLogin = () => {
//     const [students, setStudents] = useState([]);   // Store list of registered students
//     const [searchQuery, setSearchQuery] = useState(''); // Store search input
//     const [filteredStudents, setFilteredStudents] = useState([]); // Store filtered results
//     const [loginData, setLoginData] = useState({ email: '', password: '' });

//     useEffect(() => {
//         // Fetch registered students when the component mounts
//         const fetchStudents = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5000/api/students'); // Adjust the URL if necessary
//                 setStudents(response.data);
//                 setFilteredStudents(response.data); // Initially display all students
//             } catch (error) {
//                 console.error("Error fetching students:", error);
//             }
//         };

//         fetchStudents();
//     }, []);

//     // Filter students based on search query
//     useEffect(() => {
//         const results = students.filter(student =>
//             student.name.toLowerCase().includes(searchQuery.toLowerCase())
//         );
//         setFilteredStudents(results);
//     }, [searchQuery, students]);

//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-2xl font-bold mb-4">Student Login</h1>
            
//             <input
//                 type="text"
//                 placeholder="Search by name"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="p-2 border border-gray-300 rounded mb-4 w-full"
//             />
            
//             {filteredStudents.length > 0 ? (
//                 <ul className="list-disc pl-5">
//                     {filteredStudents.map((student) => (
//                         <li key={student._id} className="mb-4 border p-4 rounded">
//                             <h2 className="text-xl font-semibold">{student.name}</h2>
//                             <p>Email: {student.email}</p>
//                             <p>Department: {student.department}</p>
//                             <p>Year: {student.year}</p>
//                         </li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>No students found.</p>
//             )}
//         </div>
//     );
// };

// export default StudentLogin;

import React, { useState} from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { loginStudent } from '../api';
import { useUser } from '../context/UserContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function StudentLogin() {
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { setUser } = useUser();
  
    const handleChange = (e) => {
      setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await loginStudent(loginData);
        console.log('Student logged in:', response.data);
        // toast.success("Student logged in successfully!");
        // Show success message
      toast.success('Student logged in successfully!', {
        position: "top-right",
        autoClose: 2000,
      });

       // Redirect to dashboard after a short delay
       setTimeout(() => {
        navigate('/dashboard-student');
      }, 2000);

        // Store JWT token in local storage (optional)
        setUser(response.data.user); // Store user data in context
      localStorage.setItem('token', response.data.token);
         // Redirect to the student dashboard on successful login
      navigate('/dashboard-student');
      } catch (error) {
        console.error('Error logging in student:', error);
        setError('Invalid email or password. Please try again.');
        toast.error("Error logging in student.");
      }
    };
  
    return (
    //   <form onSubmit={handleSubmit}>
    //     <input type="email" name="email" placeholder="Email" onChange={handleChange} />
    //     <input type="password" name="password" placeholder="Password" onChange={handleChange} />
    //     <button type="submit">Login</button>
    //   </form>
    <div>
      <h2>Student Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={loginData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ToastContainer />
    </div>
    );
  }
  
  export default StudentLogin;
