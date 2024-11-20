import React from 'react';
import { Link } from 'react-router-dom';
import JobApplicationForm from '../components/JobApplicationForm';
import JobApplicationsList from '../components/JobApplicationsList';


const Page = () => {
  return (
    // <div className="container mx-auto p-8">
    //   <h1 className="text-3xl font-bold mb-6">College Placement Management</h1>
      
    //   {/* Example Link to another page */}
    //   <Link to="/profile" className="text-blue-500">Go to Profile</Link>
    //   <Link to="/recruitment-status" className="text-blue-500">
    //     Go to Recruitment Status Tracking
    //   </Link>
    //   <JobApplicationForm />
    //   <JobApplicationsList />
    // </div>
    <div className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 min-h-screen p-8">
      <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          College Placement Management
        </h1>

        <div className="flex justify-center gap-6 mb-8">
          <Link
            to="/profile"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors"
          >
            Go to Profile
          </Link>
          <Link
            to="/recruitment-status"
            className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors"
          >
            Go to Recruitment Status Tracking
          </Link>
        </div>

        <div className="mb-8 p-6 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Apply for a Job</h2>
          <JobApplicationForm />
        </div>

        <div className="p-6 bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">Your Job Applications</h2>
          <JobApplicationsList />
        </div>
      </div>
    </div>
  );
};

export default Page;
