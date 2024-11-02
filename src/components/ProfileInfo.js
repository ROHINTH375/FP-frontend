// components/ProfileInfo.js
import React from 'react';

function ProfileInfo() {
  return (
    <div className="profile-info">
      <img src="profile-icon-url" alt="Profile Icon" className="w-20 h-20 rounded-full border-2 border-blue-500" /> {/* Replace with dynamic profile image */}
      <h2 className="text-2xl font-semibold text-gray-800" >Student Name</h2>
      <p className="text-gray-600">Email: student@example.com</p>
      <p className="text-gray-600">Password: ********</p> {/* Add edit functionality as needed */}
    </div>
  );
}

export default ProfileInfo;
