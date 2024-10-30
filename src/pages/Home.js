// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [connectionStatus, setConnectionStatus] = useState('');

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/test'); // Adjust URL as needed
        setConnectionStatus(response.data.message || 'Backend connected successfully!');
      } catch (error) {
        setConnectionStatus('Failed to connect to backend');
        console.error("Error connecting to backend:", error);
      }
    };

    checkConnection();
  }, []);

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Welcome to the College Placement Management System</h1>
      <p className="text-lg">{connectionStatus || 'Checking backend connection...'}</p>
    </div>
  );
};

export default Home;
