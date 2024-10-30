// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-2xl font-bold">Placement Management</Link>
        <div>
          <Link to="/students" className="mx-2">Students</Link>
          <Link to="/companies" className="mx-2">Companies</Link>
          <Link to="/admin" className="mx-2">Admin</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
