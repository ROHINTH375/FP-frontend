// src/components/AdminLogin.js
import React, { useState } from 'react';
import { loginAdmin, registerAdmin } from '../api'; // Ensure these functions are defined in your api.js
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ email: '', password: '' });
  const [isRegistering, setIsRegistering] = useState(false); // Toggle between login and registration
  const navigate = useNavigate();

  const handleChangeLogin = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleChangeRegister = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginAdmin(loginData);
      console.log('Admin logged in:', response.data);
      navigate('/dashboard-admin'); // Redirect to admin dashboard
    } catch (error) {
      console.error('Error logging in admin:', error.response?.data || error);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerAdmin(registerData);
      console.log('Admin registered:', response.data);
      // Optionally navigate to login after registration
      setIsRegistering(false); // Switch to login after successful registration
    } catch (error) {
      console.error('Error registering admin:', error);
    }
  };

  return (
    // <div>
    //   <h2>{isRegistering ? 'Admin Registration' : 'Admin Login'}</h2>
    //   {isRegistering ? (
    //     <form onSubmit={handleRegisterSubmit}>
    //       <input
    //         type="email"
    //         name="email"
    //         placeholder="Email"
    //         onChange={handleChangeRegister}
    //       />
    //       <input
    //         type="password"
    //         name="password"
    //         placeholder="Password"
    //         onChange={handleChangeRegister}
    //       />
    //       <button type="submit">Register</button>
    //       <button
    //         type="button"
    //         onClick={() => setIsRegistering(false)}
    //         style={{ marginLeft: '10px' }}
    //       >
    //         Switch to Login
    //       </button>
    //     </form>
    //   ) : (
    //     <form onSubmit={handleLoginSubmit}>
    //       <input
    //         type="email"
    //         name="email"
    //         placeholder="Email"
    //         onChange={handleChangeLogin}
    //       />
    //       <input
    //         type="password"
    //         name="password"
    //         placeholder="Password"
    //         onChange={handleChangeLogin}
    //       />
    //       <button type="submit">Login</button>
    //       <button
    //         type="button"
    //         onClick={() => setIsRegistering(true)}
    //         style={{ marginLeft: '10px' }}
    //       >
    //         Switch to Registration
    //       </button>
    //     </form>
    //   )}
    // </div>

    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          {isRegistering ? 'Admin Registration' : 'Admin Login'}
        </h2>
        {isRegistering ? (
          <form onSubmit={handleRegisterSubmit}>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChangeRegister}
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChangeRegister}
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 w-full"
            >
              Register
            </button>
            <button
              type="button"
              onClick={() => setIsRegistering(false)}
              className="mt-4 text-blue-600 underline"
            >
              Switch to Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleLoginSubmit}>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChangeLogin}
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChangeLogin}
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 w-full"
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => setIsRegistering(true)}
              className="mt-4 text-blue-600 underline"
            >
              Switch to Registration
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default AdminLogin;
