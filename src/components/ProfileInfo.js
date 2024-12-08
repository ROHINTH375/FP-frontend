import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import apiRequest from '../services/apiService';
import { toast } from 'react-toastify';
const ProfileInfo = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/user/profile`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Pass token if needed
          },
        });
        setUserProfile(response.data);
      } catch (err) {
        console.error('Error fetching user data:', err);
        setError('Failed to fetch user data. Please try again.');
      }
    };

    fetchUserData();
  }, []);

  if (error) return <p>{error}</p>;
  if (!userProfile) return <p>Loading profile...</p>;

  return (
    <div className="profile-info">
      <h1>{userProfile.name}</h1>
      <p>{userProfile.email}</p>
      {/* Add additional user fields */}
    </div>
  );
};

export default ProfileInfo;
