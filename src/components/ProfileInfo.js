import React, { useEffect, useState } from 'react';
import axios from 'axios';
import apiRequest from '../services/apiService';
function ProfileInfo() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    otherDetails: {}, // Store other specific data if needed
  });
  const token = localStorage.getItem('token'); 

  useEffect(() => {
    // Replace '/api/user/profile' with your actual endpoint for retrieving user data
    const fetchUserData = async () => {
      try {
        // Assuming token is stored in localStorage
        const data = await apiRequest('/user/profile');
        const response = await axios.get('http://localhost:5000/api/user/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        // setUserData({
        //   name: response.data.name,
        //   email: response.data.email,
        //   password: response.data.password,
        //   otherDetails: response.data.otherDetails,
        // });
        setUserData(response.data);
        setUserData(data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [token]);

  if (!userData) return <p>Loading...</p>;

  return (
    <div className="profile-info container mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Profile Information</h2>
      <div className="info-item mb-2">
        <strong>Name:</strong> {userData.name}
      </div>
      <div className="info-item mb-2">
        <strong>Email:</strong> {userData.email}
      </div>
      <div className="info-item mb-2">
        <strong>Password:</strong> {userData.password}
      </div>
      <div className="info-item mb-2">
        <strong>Other Details:</strong> 
        <pre>{JSON.stringify(userData.otherDetails, null, 2)}</pre>
      </div>
    </div>
  );
}

export default ProfileInfo;
