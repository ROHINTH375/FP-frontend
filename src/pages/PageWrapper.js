// src/pages/PageWrapper.js
import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const PageWrapper = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
};

export default PageWrapper;
