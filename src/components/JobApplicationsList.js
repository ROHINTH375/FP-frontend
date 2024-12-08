import React, { useState, useEffect } from 'react';
import axios from 'axios';
import apiClient from '../utils/apiClient';

const JobApplicationsList = () => {
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await apiClient.get('/applications');
        setApplications(response.data);
      } catch (err) {
        setError('Failed to fetch applications.');
      }
    };
    fetchApplications();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Your Applications</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-200 bg-white rounded-lg shadow-lg">
          <thead className="bg-gradient-to-r from-gray-800 to-gray-600 text-white">
            <tr>
              <th className="py-2 px-4 text-left border-b border-gray-200">Job Title</th>
              <th className="py-2 px-4 text-left border-b border-gray-200">Status</th>
              <th className="py-2 px-4 text-left border-b border-gray-200">Description</th>
            </tr>
          </thead>
          <tbody>
            {applications.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center py-4 text-gray-600">
                  No applications found.
                </td>
              </tr>
            ) : (
              applications.map((application) => (
                <tr
                  key={application._id}
                  className="odd:bg-gray-100 even:bg-gray-200 hover:bg-gray-300"
                >
                  <td className="py-2 px-4 text-gray-800">{application.title}</td>
                  <td
                    className={`py-2 px-4 font-semibold ${
                      application.status === 'Selected'
                        ? 'text-green-500'
                        : application.status === 'Rejected'
                        ? 'text-red-500'
                        : 'text-yellow-500'
                    }`}
                  >
                    {application.status}
                  </td>
                  <td className="py-2 px-4 text-gray-800">{application.description}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobApplicationsList;
