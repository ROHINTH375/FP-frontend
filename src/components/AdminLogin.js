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
      // Redirect to admin dashboard upon successful login
      navigate('/dashboard-admin');
    } catch (error) {
      console.error('Error logging in admin:', error);
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
    <div>
      <h2>{isRegistering ? 'Admin Registration' : 'Admin Login'}</h2>
      {isRegistering ? (
        <form onSubmit={handleRegisterSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChangeRegister}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChangeRegister}
          />
          <button type="submit">Register</button>
          <button
            type="button"
            onClick={() => setIsRegistering(false)}
            style={{ marginLeft: '10px' }}
          >
            Switch to Login
          </button>
        </form>
      ) : (
        <form onSubmit={handleLoginSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChangeLogin}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChangeLogin}
          />
          <button type="submit">Login</button>
          <button
            type="button"
            onClick={() => setIsRegistering(true)}
            style={{ marginLeft: '10px' }}
          >
            Switch to Registration
          </button>
        </form>
      )}
    </div>
  );
}

export default AdminLogin;
