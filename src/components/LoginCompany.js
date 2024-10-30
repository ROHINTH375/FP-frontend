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
import React, { useState } from 'react';
import axios from 'axios';

const LoginCompany = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login-company', formData);
      setMessage(response.data.message || 'Login successful!');
    } catch (error) {
      setMessage('Login failed. Please check your credentials.');
    }
  };
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">Company Login</h1>
            <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
         <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
         <button type="submit">Login</button>
       </form>
       <p>{message}</p>
        </div>
    );
};

export default LoginCompany;