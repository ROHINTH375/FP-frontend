import React, { useState } from 'react';
import axios from 'axios';
import apiClient from '../utils/apiClient'; 
import { toast } from 'react-toastify';
const PlacementDriveForm = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [companies, setCompanies] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const placementDriveData = {
      title,
      date,
      companiesParticipating: companies.split(',').map((id) => id.trim()), // Convert string to array
    };

    try {
      await apiClient.post('/placement-drives', placementDriveData);
      setMessage('Placement Drive Created Successfully!');
      toast.success('Placement Drive Created Successfully!');
      setTitle('');
      setDate('');
      setCompanies('');
    } catch (error) {
      console.error('Error:', error.message);
      toast.error('Failed to create placement drive.');
      setMessage('Failed to create placement drive.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg border-4 border-purple-500">
        <h1 className="text-3xl font-bold text-center mb-6 text-purple-700">
          Create Placement Drive
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="title"
            >
              Title:
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="date"
            >
              Date:
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="companies"
            >
              Companies Participating (comma-separated IDs):
            </label>
            <input
              type="text"
              id="companies"
              value={companies}
              onChange={(e) => setCompanies(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300"
          >
            Create Placement Drive
          </button>
        </form>
        {message && (
          <p
            className={`mt-4 text-center font-medium ${
              message.includes('Successfully')
                ? 'text-green-600'
                : 'text-red-600'
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default PlacementDriveForm;
