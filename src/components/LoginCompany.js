// // src/components/LoginCompany.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const LoginCompany = () => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/login-company', formData);
//       setMessage(response.data.message || 'Login successful!');
//     } catch (error) {
//       setMessage('Login failed. Please check your credentials.');
//     }
//   };

//   return (
//     <div>
//       <h3>Login Company</h3>
//       <form onSubmit={handleSubmit}>
//         <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
//         <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
//         <button type="submit">Login</button>
//       </form>
//       <p>{message}</p>
//     </div>
//   );
// };

// export default LoginCompany;


// import React from 'react';
// import React, { useState } from 'react';
// import axios from 'axios';

// const LoginCompany = () => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/login-company', formData);
//       setMessage(response.data.message || 'Login successful!');
//     } catch (error) {
//       setMessage('Login failed. Please check your credentials.');
//     }
//   };
//     return (
//         <div className="flex flex-col items-center">
//             <h1 className="text-2xl font-bold mb-4">Company Login</h1>
//             <form onSubmit={handleSubmit}>
//           <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
//          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
//          <button type="submit">Login</button>
//        </form>
//        <p>{message}</p>
//         </div>
//     );
// };

// export default LoginCompany;

// src/components/LoginCompany.js
import React, { useState } from 'react';
import { loginCompany } from '../api';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

function LoginCompany() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginCompany(loginData);
      console.log('Backend response:', response.data); // Log response to check for companyId
      toast.success('Login successful');
      
      // Use the companyId from response
      const companyId = response.data.companyId;
      if (companyId) {
        navigate(`/dashboard-company/${companyId}`);
      } else {
        console.error("companyId is missing in response");
        toast.error("Unable to redirect to dashboard. Please try again.");
      }
    } catch (error) {
      console.error('Error logging in company:', error);
      toast.error('Error logging in company');
    }
  };
  

  return (
    // <form onSubmit={handleSubmit}>
    //   <input type="email" name="email" placeholder="Email" onChange={handleChange} />
    //   <input type="password" name="password" placeholder="Password" onChange={handleChange} />
    //   <button type="submit">Login</button>
    // </form>
    <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Company Login</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={loginData.email}
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
                        value={loginData.password}
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
                        Login
                    </button>
                </div>
            </form>
        </div>
  );
}

export default LoginCompany;
