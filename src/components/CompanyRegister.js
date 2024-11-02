// import React, { useState } from 'react';
// import axios from 'axios';

// const CompanyRegister = () => {
//   const [companyData, setCompanyData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     jobOpenings: []
//   });

//   const handleChange = (e) => {
//     setCompanyData({ ...companyData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/companies', companyData);
//       console.log(response.data);
//       alert('Company registered successfully');
//     } catch (error) {
//       console.error(error);
//       alert('Error registering company');
//     }
//   };

//   return (
//     <div>
//       <h2>Register Company</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Company Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={companyData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={companyData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={companyData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Register Company</button>
//       </form>
//     </div>
//   );
// };

// export default CompanyRegister;
// src/components/RegisterCompany.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const CompanyRegister = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3000/register-company', formData);
//       setMessage(response.data.message || 'Company registered successfully!');
//     } catch (error) {
//       setMessage('Registration failed. Please try again.');
//     }
//   };

  

//   return (
//     <div className="flex flex-col items-center">
//             <h1 className="text-2xl font-bold mb-4">Company Registration</h1>
//             <form onSubmit={handleSubmit} className="space-y-4">
//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Company Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="border p-2"
//                 />
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Company Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="border p-2"
//                 />
//                 <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     required
//                     className="border p-2"
//                 />
//                 <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Register</button>
//             </form>
//             {message && <p className="text-red-500 mt-2">{message}</p>}
//         </div>
//   );
// };

// export default CompanyRegister;

// import React, { useState } from 'react';
// import axios from 'axios';

// const CompanyRegister = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//     });
//     const [message, setMessage] = useState("");

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:5000/api/register-company', formData);
//             setMessage(response.data.message);
//         } catch (error) {
//             console.error("Error registering company:", error);
//             setMessage("Registration failed. Please try again.");
//         }
//     };

//     return (
//         <div>
//             <h2>Register as a Company</h2>
//             {message && <p>{message}</p>}
//             <form onSubmit={handleSubmit}>
//                 <input type="text" name="name" placeholder="Company Name" value={formData.name} onChange={handleChange} required />
//                 <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//                 <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
//                 <button type="submit">Register</button>
//             </form>
//         </div>
//     );
// };

// export default CompanyRegister;

// src/components/CompanyRegister.js
import React, { useState } from 'react';
import { registerCompany } from '../api';
import { toast } from "react-toastify";

function CompanyRegister() {
  const [companyData, setCompanyData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setCompanyData({ ...companyData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerCompany(companyData);
      console.log('Company registered:', response.data);
      toast.success("Company registered successfully!");
      // Add navigation or success message here
    } catch (error) {
      console.error('Error registering company:', error);
      toast.error("Error registering company.");
    }
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <input type="text" name="name" placeholder="Company Name" onChange={handleChange} />
    //   <input type="email" name="email" placeholder="Email" onChange={handleChange} />
    //   <input type="password" name="password" placeholder="Password" onChange={handleChange} />
    //   <button type="submit">Register</button>
    // </form>

    <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Company Registration</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">
                        Company Name
                    </label>
                    <input
                        type="text"
                        name="companyName"
                        value={companyData.companyName}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={companyData.email}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={companyData.password}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={companyData.confirmPassword}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
  );
}

export default CompanyRegister;
