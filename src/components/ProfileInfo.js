// components/ProfileInfo.js
import React from 'react';

function ProfileInfo() {
  return (
    <div className="profile-info">
      <img src="profile-icon-url" alt="Profile Icon" /> {/* Replace with dynamic profile image */}
      <h2>Student Name</h2>
      <p>Email: student@example.com</p>
      <p>Password: ********</p> {/* Add edit functionality as needed */}
    </div>
  );
}

export default ProfileInfo;
