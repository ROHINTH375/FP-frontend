// import React, { useState } from 'react';
// import axios from 'axios';

// const RegisterStudent = () => {
//   const [studentData, setStudentData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     course: '',
//     year: ''
//   });

//   const handleChange = (e) => {
//     setStudentData({ ...studentData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent form refresh

//     try {
//       const response = await axios.post('http://localhost:5000/api/students', studentData);
//       console.log(response.data);
//       alert('Student registered successfully');
//     } catch (error) {
//       console.error('Error:', error.response?.data || error.message);
//       alert('Error registering student: ' + (error.response?.data.message || error.message));
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="name" value={studentData.name} onChange={handleChange} placeholder="Name" required />
//       <input type="email" name="email" value={studentData.email} onChange={handleChange} placeholder="Email" required />
//       <input type="password" name="password" value={studentData.password} onChange={handleChange} placeholder="Password" required />
//       <input type="text" name="course" value={studentData.course} onChange={handleChange} placeholder="Course" required />
//       <input type="text" name="year" value={studentData.year} onChange={handleChange} placeholder="Year" required />
//       <button type="submit">Register Student</button>
//     </form>
//   );
// };

// export default RegisterStudent;

// import React, { useState } from 'react';
// import axios from 'axios';

// const RegisterStudent = () => {
//   const [studentData, setStudentData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     course: '',
//     year: '',
//   });

//   const handleChange = (e) => {
//     setStudentData({
//       ...studentData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent form refresh
//     try {
//       const response = await axios.post('http://localhost:5000/students', studentData);
//       console.log(response.data); // Log response from backend
//       alert('Student registered successfully');
//     } catch (error) {
//       console.error('Error:', error.response?.data || error.message); // Log any errors
//       alert('Error registering student: ' + (error.response?.data.message || error.message));
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name:</label>
//         <input
//           type="text"
//           name="name"
//           value={studentData.name}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={studentData.email}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input
//           type="password"
//           name="password"
//           value={studentData.password}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label>Course:</label>
//         <input
//           type="text"
//           name="course"
//           value={studentData.course}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label>Year:</label>
//         <input
//           type="text"
//           name="year"
//           value={studentData.year}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default RegisterStudent;


// StudentRegister.js
// import React, { useState } from 'react';
// import axios from 'axios';

// function StudentRegister() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         department: '',
//         year: ''
//     });

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('/register-student', formData);
//             alert(response.data.message || "Registration successful");
//         } catch (error) {
//           console.error("Error registering student:", error?.response?.data || error.message);

//             alert("Registration failed. Please try again.");
//         }
        
//     };
    
//     return (
//         <form onSubmit={handleSubmit}>
//             <h2>Register</h2>
//             <label>Name</label>
//             <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            
//             <label>Email</label>
//             <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            
//             <label>Password</label>
//             <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            
//             <label>Department</label>
//             <select name="Department" value={formData.Department} onChange={handleChange} required>
//                 <option value="">Select Year</option>
//                 <option value="1">MEHANICAL</option>
//                 <option value="2">ECE</option>
//                 <option value="3">EEE</option>
//                 <option value="4">IT</option>
//             </select>
            
//             <label>Year</label>
//             <select name="year" value={formData.year} onChange={handleChange} required>
//                 <option value="">Select Year</option>
//                 <option value="1">1st Year</option>
//                 <option value="2">2nd Year</option>
//                 <option value="3">3rd Year</option>
//                 <option value="4">4th Year</option>
//             </select>
            
//             <button type="submit">Register</button>
//         </form>
//     );
// }

// export default StudentRegister;
// StudentRegister.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const StudentRegister = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         department: '',
//         year: '',
//     });
//     const [message, setMessage] = useState("");

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:3000/register-student', formData);
//             setMessage(response.data.message);
//         } catch (error) {
//             console.error("Error registering student:", error);
//             setMessage("Registration failed. Please try again.");
//         }
//     };

//     return (
//         <div>
//             <h2>Register as a Student</h2>
//             {message && <p>{message}</p>}
//             <form onSubmit={handleSubmit}>
//                 <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
//                 <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//                 <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
//                 <input type="text" name="department" placeholder="Department" value={formData.department} onChange={handleChange} required />
//                 <select name="year" value={formData.year} onChange={handleChange} required>
//                     <option value="">Select Year</option>
//                     <option value="1">1st Year</option>
//                     <option value="2">2nd Year</option>
//                     <option value="3">3rd Year</option>
//                     <option value="4">4th Year</option>
//                 </select>
//                 <button type="submit">Register</button>
//             </form>
//         </div>
//     );
// };

// export default StudentRegister;

import React, { useState } from 'react';
// import axios from 'axios';
import { registerStudent } from '../api';
import { toast } from "react-toastify";


// const StudentRegister = () => {
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     password: '',
    //     department: '',
    //     year: '',
    // });
    // const [message, setMessage] = useState("");

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    // // Ensure this function is declared as async
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         // Await inside an async function
    //         const response = await axios.post('http://localhost:5000/api/register-student', formData);
    //         setMessage(response.data.message);
    //     } catch (error) {
    //         console.error("Error registering student:", error);
    //         setMessage("Registration failed. Please try again.");
    //     }
    // };

//     function StudentRegister() {
//         const [formData, setFormData] = useState({ name: '', email: '', password: '' });
      
//         const handleSubmit = async (e) => {
//           e.preventDefault();
//           try {
//             await registerStudent(formData);
//             alert('Registration successful');
//           } catch (error) {
//             console.error(error);
//             alert('Error during registration');
//           }
//         };

//     return (
//         // <div>
//         //     <h2>Register as a Student</h2>
//         //     {message && <p>{message}</p>}
//         //     <form onSubmit={handleSubmit}>
//         //         <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
//         //         <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//         //         <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
//         //         <input type="text" name="department" placeholder="Department" value={formData.department} onChange={handleChange} required />
//         //         <select name="year" value={formData.year} onChange={handleChange} required>
//         //             <option value="">Select Year</option>
//         //             <option value="1">1st Year</option>
//         //             <option value="2">2nd Year</option>
//         //             <option value="3">3rd Year</option>
//         //             <option value="4">4th Year</option>
//         //         </select>
//         //         <button type="submit">Register</button>
//         //     </form>
//         // </div>

//         <form onSubmit={handleSubmit}>
//       <input type="text" placeholder="Name" onChange={(e) => setFormData({...formData, name: e.target.value})} />
//       <input type="email" placeholder="Email" onChange={(e) => setFormData({...formData, email: e.target.value})} />
//       <input type="password" placeholder="Password" onChange={(e) => setFormData({...formData, password: e.target.value})} />
//       <button type="submit">Register</button>
//     </form>
//     );
// };

// export default StudentRegister;

function StudentRegister() {
  const [studentData, setStudentData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerStudent(studentData);
      console.log('Student registered:', response.data);
      toast.success("Student registered successfully!");
      // Add navigation or success message here
    } catch (error) {
      console.error('Error registering student:', error);
      toast.error("Error registering student.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
}

export default StudentRegister;
