import React from 'react';
import { Link } from 'react-router-dom';
import JobApplicationForm from '../components/JobApplicationForm';
import JobApplicationsList from '../components/JobApplicationsList';

const Page = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">College Placement Management</h1>
      
      {/* Example Link to another page */}
      <Link to="/profile" className="text-blue-500">Go to Profile</Link>
      <Link to="/recruitment-status" className="text-blue-500">
        Go to Recruitment Status Tracking
      </Link>
      <JobApplicationForm />
      <JobApplicationsList />
    </div>
  );
};

export default Page;
