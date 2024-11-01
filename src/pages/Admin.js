// src/pages/Admin.js
import React from 'react';
import { Link } from 'react-router-dom';
const Admin = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold">Admin Panel</h1>
      <Link to="/admin-login">
        <button>Login as Admin</button>
      </Link>
      <p>Manage students, companies, and job placements from here.</p>
    </div>
  );
};

export default Admin;
