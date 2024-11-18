// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const RegisterStudent = () => {
// //   const [studentData, setStudentData] = useState({
// //     name: '',
// //     email: '',
// //     password: '',
// //     course: '',
// //     year: ''
// //   });

// //   const handleChange = (e) => {
// //     setStudentData({ ...studentData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault(); // Prevent form refresh

// //     try {
// //       const response = await axios.post('http://localhost:5000/api/students', studentData);
// //       console.log(response.data);
// //       alert('Student registered successfully');
// //     } catch (error) {
// //       console.error('Error:', error.response?.data || error.message);
// //       alert('Error registering student: ' + (error.response?.data.message || error.message));
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <input type="text" name="name" value={studentData.name} onChange={handleChange} placeholder="Name" required />
// //       <input type="email" name="email" value={studentData.email} onChange={handleChange} placeholder="Email" required />
// //       <input type="password" name="password" value={studentData.password} onChange={handleChange} placeholder="Password" required />
// //       <input type="text" name="course" value={studentData.course} onChange={handleChange} placeholder="Course" required />
// //       <input type="text" name="year" value={studentData.year} onChange={handleChange} placeholder="Year" required />
// //       <button type="submit">Register Student</button>
// //     </form>
// //   );
// // };

// // export default RegisterStudent;

// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const RegisterStudent = () => {
// //   const [studentData, setStudentData] = useState({
// //     name: '',
// //     email: '',
// //     password: '',
// //     course: '',
// //     year: '',
// //   });

// //   const handleChange = (e) => {
// //     setStudentData({
// //       ...studentData,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault(); // Prevent form refresh
// //     try {
// //       const response = await axios.post('http://localhost:5000/students', studentData);
// //       console.log(response.data); // Log response from backend
// //       alert('Student registered successfully');
// //     } catch (error) {
// //       console.error('Error:', error.response?.data || error.message); // Log any errors
// //       alert('Error registering student: ' + (error.response?.data.message || error.message));
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <div>
// //         <label>Name:</label>
// //         <input
// //           type="text"
// //           name="name"
// //           value={studentData.name}
// //           onChange={handleChange}
// //           required
// //         />
// //       </div>
// //       <div>
// //         <label>Email:</label>
// //         <input
// //           type="email"
// //           name="email"
// //           value={studentData.email}
// //           onChange={handleChange}
// //           required
// //         />
// //       </div>
// //       <div>
// //         <label>Password:</label>
// //         <input
// //           type="password"
// //           name="password"
// //           value={studentData.password}
// //           onChange={handleChange}
// //           required
// //         />
// //       </div>
// //       <div>
// //         <label>Course:</label>
// //         <input
// //           type="text"
// //           name="course"
// //           value={studentData.course}
// //           onChange={handleChange}
// //           required
// //         />
// //       </div>
// //       <div>
// //         <label>Year:</label>
// //         <input
// //           type="text"
// //           name="year"
// //           value={studentData.year}
// //           onChange={handleChange}
// //           required
// //         />
// //       </div>
// //       <button type="submit">Register</button>
// //     </form>
// //   );
// // };

// // export default RegisterStudent;


// // StudentRegister.js
// // import React, { useState } from 'react';
// // import axios from 'axios';

// // function StudentRegister() {
// //     const [formData, setFormData] = useState({
// //         name: '',
// //         email: '',
// //         password: '',
// //         department: '',
// //         year: ''
// //     });

// //     const handleChange = (e) => {
// //         setFormData({
// //             ...formData,
// //             [e.target.name]: e.target.value
// //         });
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         try {
// //             const response = await axios.post('/register-student', formData);
// //             alert(response.data.message || "Registration successful");
// //         } catch (error) {
// //           console.error("Error registering student:", error?.response?.data || error.message);

// //             alert("Registration failed. Please try again.");
// //         }
        
// //     };
    
// //     return (
// //         <form onSubmit={handleSubmit}>
// //             <h2>Register</h2>
// //             <label>Name</label>
// //             <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            
// //             <label>Email</label>
// //             <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            
// //             <label>Password</label>
// //             <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            
// //             <label>Department</label>
// //             <select name="Department" value={formData.Department} onChange={handleChange} required>
// //                 <option value="">Select Year</option>
// //                 <option value="1">MEHANICAL</option>
// //                 <option value="2">ECE</option>
// //                 <option value="3">EEE</option>
// //                 <option value="4">IT</option>
// //             </select>
            
// //             <label>Year</label>
// //             <select name="year" value={formData.year} onChange={handleChange} required>
// //                 <option value="">Select Year</option>
// //                 <option value="1">1st Year</option>
// //                 <option value="2">2nd Year</option>
// //                 <option value="3">3rd Year</option>
// //                 <option value="4">4th Year</option>
// //             </select>
            
// //             <button type="submit">Register</button>
// //         </form>
// //     );
// // }

// // export default StudentRegister;
// // StudentRegister.js
// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const StudentRegister = () => {
// //     const [formData, setFormData] = useState({
// //         name: '',
// //         email: '',
// //         password: '',
// //         department: '',
// //         year: '',
// //     });
// //     const [message, setMessage] = useState("");

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setFormData({ ...formData, [name]: value });
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         try {
// //             const response = await axios.post('http://localhost:3000/register-student', formData);
// //             setMessage(response.data.message);
// //         } catch (error) {
// //             console.error("Error registering student:", error);
// //             setMessage("Registration failed. Please try again.");
// //         }
// //     };

// //     return (
// //         <div>
// //             <h2>Register as a Student</h2>
// //             {message && <p>{message}</p>}
// //             <form onSubmit={handleSubmit}>
// //                 <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
// //                 <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
// //                 <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
// //                 <input type="text" name="department" placeholder="Department" value={formData.department} onChange={handleChange} required />
// //                 <select name="year" value={formData.year} onChange={handleChange} required>
// //                     <option value="">Select Year</option>
// //                     <option value="1">1st Year</option>
// //                     <option value="2">2nd Year</option>
// //                     <option value="3">3rd Year</option>
// //                     <option value="4">4th Year</option>
// //                 </select>
// //                 <button type="submit">Register</button>
// //             </form>
// //         </div>
// //     );
// // };

// // export default StudentRegister;

// import React, { useState } from 'react';
// import { registerStudent } from '../api';
// import { toast } from "react-toastify";


// // const StudentRegister = () => {
//     // const [formData, setFormData] = useState({
//     //     name: '',
//     //     email: '',
//     //     password: '',
//     //     department: '',
//     //     year: '',
//     // });
//     // const [message, setMessage] = useState("");

//     // const handleChange = (e) => {
//     //     const { name, value } = e.target;
//     //     setFormData({ ...formData, [name]: value });
//     // };

//     // // Ensure this function is declared as async
//     // const handleSubmit = async (e) => {
//     //     e.preventDefault();
//     //     try {
//     //         // Await inside an async function
//     //         const response = await axios.post('http://localhost:5000/api/register-student', formData);
//     //         setMessage(response.data.message);
//     //     } catch (error) {
//     //         console.error("Error registering student:", error);
//     //         setMessage("Registration failed. Please try again.");
//     //     }
//     // };

// //     function StudentRegister() {
// //         const [formData, setFormData] = useState({ name: '', email: '', password: '' });
      
// //         const handleSubmit = async (e) => {
// //           e.preventDefault();
// //           try {
// //             await registerStudent(formData);
// //             alert('Registration successful');
// //           } catch (error) {
// //             console.error(error);
// //             alert('Error during registration');
// //           }
// //         };

// //     return (
// //         // <div>
// //         //     <h2>Register as a Student</h2>
// //         //     {message && <p>{message}</p>}
// //         //     <form onSubmit={handleSubmit}>
// //         //         <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
// //         //         <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
// //         //         <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
// //         //         <input type="text" name="department" placeholder="Department" value={formData.department} onChange={handleChange} required />
// //         //         <select name="year" value={formData.year} onChange={handleChange} required>
// //         //             <option value="">Select Year</option>
// //         //             <option value="1">1st Year</option>
// //         //             <option value="2">2nd Year</option>
// //         //             <option value="3">3rd Year</option>
// //         //             <option value="4">4th Year</option>
// //         //         </select>
// //         //         <button type="submit">Register</button>
// //         //     </form>
// //         // </div>

// //         <form onSubmit={handleSubmit}>
// //       <input type="text" placeholder="Name" onChange={(e) => setFormData({...formData, name: e.target.value})} />
// //       <input type="email" placeholder="Email" onChange={(e) => setFormData({...formData, email: e.target.value})} />
// //       <input type="password" placeholder="Password" onChange={(e) => setFormData({...formData, password: e.target.value})} />
// //       <button type="submit">Register</button>
// //     </form>
// //     );
// // };

// // export default StudentRegister;

// function StudentRegister() {
//   const [studentData, setStudentData] = useState({ name: '', email: '', password: '' });

//   const handleChange = (e) => {
//     setStudentData({ ...studentData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await registerStudent(studentData);
//       console.log('Student registered:', response.data);
//       toast.success("Student registered successfully!");
//       // Add navigation or success message here
//     } catch (error) {
//       console.error('Error registering student:', error);
//       toast.error("Error registering student.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//       <input type="text" name="name" placeholder="Name" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
//       <input type="email" name="email" placeholder="Email" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
//       <input type="password" name="password" placeholder="Password" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
//       <input
//                         type="password"
//                         name="confirmPassword"
//                         value={studentData.confirmPassword}
//                         onChange={handleChange}
//                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         required
//                     />
//       <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</button>
//     </form>
//   );
// }

// export default StudentRegister;

// import React, { useState } from 'react';
// import { registerStudent } from '../api';
// import { toast } from 'react-toastify';

// function StudentRegister() {
//   const [studentData, setStudentData] = useState({
//     firstname: '',
//     lastname: '',
//     address: '',
//     department: '',
//     yearFrom: '',
//     yearTo: '',
//     district: '',
//     pincode: '',
//     phoneNumber: '',
//     whatsappNumber: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     skills: '',
//     resume: null,
//   });

//   const handleChange = (e) => {
//     if (e.target.name === 'resume') {
//       setStudentData({ ...studentData, resume: e.target.files[0] });
//     } else {
//       setStudentData({ ...studentData, [e.target.name]: e.target.value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     for (let key in studentData) {
//       formData.append(key, studentData[key]);
//     }
//     try {
//       const response = await registerStudent(studentData);
//       console.log('Student registered:', response.data);
//       toast.success("Student registered successfully!");
//     } catch (error) {
//       console.error('Error registering student:', error);
//       if (error.response) {
//         // If the server responded with an error
//         console.error('Response error:', error.response.data);
//         toast.error(`Error registering student: ${error.response.data.message}`);
//       } else if (error.request) {
//         // If the request was made but no response was received
//         console.error('Request error:', error.request);
//         toast.error("No response from server.");
//       } else {
//         // Something else went wrong
//         console.error('Error message:', error.message);
//         toast.error(`Error registering student: ${error.message}`);
//       }
//     }
//   };
  

//   return (
//     <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//       {/* Name Fields */}
//       <input
//         type="text"
//         name="firstname"
//         value={studentData.firstname}
//         onChange={handleChange}
//         placeholder="First Name"
//         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//       />
//       <input
//         type="text"
//         name="lastname"
//         value={studentData.lastname}
//         onChange={handleChange}
//         placeholder="Last Name"
//         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//       />
      
//       {/* Address */}
//       <input
//         type="text"
//         name="address"
//         value={studentData.address}
//         onChange={handleChange}
//         placeholder="Address"
//         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//       />
      
//       {/* Department, Year */}
//       <select
//         name="department"
//         value={studentData.department}
//         onChange={handleChange}
//         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//       >
//         <option value="">Select Department</option>
//         <option value="CSE">Computer Science Engineering</option>
//         <option value="ECE">Electronics and Communication Engineering</option>
//         <option value="ME">Mechanical Engineering</option>
//         <option value="EE">Electrical Engineering</option>
//       </select>

//       <input
//         type="text"
//         name="yearFrom"
//         value={studentData.yearFrom}
//         onChange={handleChange}
//         placeholder="Year From"
//         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//       />
//       <input
//         type="text"
//         name="yearTo"
//         value={studentData.yearTo}
//         onChange={handleChange}
//         placeholder="Year To"
//         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//       />
      
//       {/* District and Pincode */}
//       <select
//         name="district"
//         value={studentData.district}
//         onChange={handleChange}
//         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//       >
//         <option value="">Select District</option>
//         <option value="Bangalore">Bangalore</option>
//         <option value="Chennai">Chennai</option>
//         <option value="Mumbai">Mumbai</option>
//         <option value="Delhi">Delhi</option>
//       </select>
      
//       <input
//         type="text"
//         name="pincode"
//         value={studentData.pincode}
//         onChange={handleChange}
//         placeholder="Pincode"
//         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//       />
      
//       {/* Phone and WhatsApp Numbers */}
//       <input
//         type="text"
//         name="phoneNumber"
//         value={studentData.phoneNumber}
//         onChange={handleChange}
//         placeholder="Phone Number (+91)"
//         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//       />
//       <input
//         type="text"
//         name="whatsappNumber"
//         value={studentData.whatsappNumber}
//         onChange={handleChange}
//         placeholder="WhatsApp Number (+91)"
//         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//       />
      
//       {/* Email, Password Fields */}
//       <input
//         type="email"
//         name="email"
//         value={studentData.email}
//         onChange={handleChange}
//         placeholder="Email"
//         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//       />
//       <input
//         type="password"
//         name="password"
//         value={studentData.password}
//         onChange={handleChange}
//         placeholder="Password"
//         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//       />
//       <input
//         type="password"
//         name="confirmPassword"
//         value={studentData.confirmPassword}
//         onChange={handleChange}
//         placeholder="Confirm Password"
//         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//       />
      
//       {/* Skills */}
//       <input
//         type="text"
//         name="skills"
//         value={studentData.skills}
//         onChange={handleChange}
//         placeholder="Skills"
//         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//       />
      
//       <button
//         type="submit"
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//       >
//         Register
//       </button>
//     </form>
//   );
// }

// export default StudentRegister;
import React, { useState } from 'react';
// import axios from 'axios';
import { toast } from 'react-toastify';
import { registerStudent } from '../api';

function StudentRegister() {
  const [studentData, setStudentData] = useState({
    firstname: '',
    lastname: '',
    address: '',
    department: '',
    yearFrom: '',
    yearTo: '',
    district: '',
    pincode: '',
    phoneNumber: '',
    whatsappNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    skills: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (studentData.password !== studentData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      // const response = await axios.post('http://localhost:5000/api/auth/register-student', studentData);
      // // const response = await registerStudent(studentData);
      
      // toast.success("Student registered successfully!");
      // console.log('Student registered:', response.data);
      const response = await registerStudent(studentData);
      toast.success('Student registered successfully!');
      console.log('Student registered:', response.data);

      // Clear the form
      setStudentData({
        firstname: '',
        lastname: '',
        address: '',
        department: '',
        yearFrom: '',
        yearTo: '',
        district: '',
        pincode: '',
        phoneNumber: '',
        whatsappNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
        skills: '',
      });
    } catch (error) {
      console.error('Error registering student:', error);
      toast.error(error.response?.data?.message || "Error registering student.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-xl font-bold mb-4">Student Registration</h2>

      {/* First Name and Last Name */}
      <input
        type="text"
        name="firstname"
        value={studentData.firstname}
        onChange={handleChange}
        placeholder="First Name"
        className="block w-full p-2 mb-4 border rounded"
        required
      />
      <input
        type="text"
        name="lastname"
        value={studentData.lastname}
        onChange={handleChange}
        placeholder="Last Name"
        className="block w-full p-2 mb-4 border rounded"
        required
      />

      {/* Address */}
      <input
        type="text"
        name="address"
        value={studentData.address}
        onChange={handleChange}
        placeholder="Address"
        className="block w-full p-2 mb-4 border rounded"
        required
      />

      {/* Department and Year */}
      <select
        name="department"
        value={studentData.department}
        onChange={handleChange}
        className="block w-full p-2 mb-4 border rounded"
        required
      >
        <option value="">Select Department</option>
        <option value="CSE">Computer Science Engineering</option>
        <option value="ECE">Electronics and Communication Engineering</option>
        <option value="ME">Mechanical Engineering</option>
        <option value="EE">Electrical Engineering</option>
      </select>
      <input
        type="text"
        name="yearFrom"
        value={studentData.yearFrom}
        onChange={handleChange}
        placeholder="Year From"
        className="block w-full p-2 mb-4 border rounded"
        required
      />
      <input
        type="text"
        name="yearTo"
        value={studentData.yearTo}
        onChange={handleChange}
        placeholder="Year To"
        className="block w-full p-2 mb-4 border rounded"
        required
      />

      {/* District and Pincode */}
      <select
        name="district"
        value={studentData.district}
        onChange={handleChange}
        className="block w-full p-2 mb-4 border rounded"
        required
      >
        <option value="">Select District</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Chennai">Chennai</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Delhi">Delhi</option>
      </select>
      <input
        type="text"
        name="pincode"
        value={studentData.pincode}
        onChange={handleChange}
        placeholder="Pincode"
        className="block w-full p-2 mb-4 border rounded"
        required
      />

      {/* Phone and WhatsApp Numbers */}
      <input
        type="text"
        name="phoneNumber"
        value={studentData.phoneNumber}
        onChange={handleChange}
        placeholder="Phone Number (+91)"
        className="block w-full p-2 mb-4 border rounded"
        required
      />
      <input
        type="text"
        name="whatsappNumber"
        value={studentData.whatsappNumber}
        onChange={handleChange}
        placeholder="WhatsApp Number (+91)"
        className="block w-full p-2 mb-4 border rounded"
      />

      {/* Email, Password, and Skills */}
      <input
        type="email"
        name="email"
        value={studentData.email}
        onChange={handleChange}
        placeholder="Email"
        className="block w-full p-2 mb-4 border rounded"
        required
      />
      <input
        type="password"
        name="password"
        value={studentData.password}
        onChange={handleChange}
        placeholder="Password"
        className="block w-full p-2 mb-4 border rounded"
        required
      />
      <input
        type="password"
        name="confirmPassword"
        value={studentData.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm Password"
        className="block w-full p-2 mb-4 border rounded"
        required
      />
      <input
        type="text"
        name="skills"
        value={studentData.skills}
        onChange={handleChange}
        placeholder="Skills"
        className="block w-full p-2 mb-4 border rounded"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        
      >
        Register
      </button>
    </form>
  );
}

export default StudentRegister;

