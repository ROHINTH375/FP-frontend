// src/pages/ManageCompanies.js
import React, { useState, useEffect } from 'react';
import PageWrapper from './PageWrapper';

const ManageCompanies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch('https://fp-backend-6.onrender.com/api/companies');
        const data = await response.json();
        setCompanies(data);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <PageWrapper>
      <h2 className="text-2xl font-bold mb-4">Manage Companies</h2>
      <table className="w-full bg-white rounded-lg shadow">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="py-2 px-4">Company Name</th>
            <th className="py-2 px-4">Email</th>
          </tr>
        </thead>
        <tbody>
          {/* {companies.map((company) => (
            <tr key={company._id} className="border-t">
              <td className="py-2 px-4">{company.name}</td>
              <td className="py-2 px-4">{company.email}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </PageWrapper>
  );
};

export default ManageCompanies;
