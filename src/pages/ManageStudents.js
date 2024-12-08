// src/pages/ManageStudents.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageWrapper from './PageWrapper'; // Reuse layout

const ManageStudents = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('https://fp-backend-6.onrender.com/api/students');
        setStudents(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching students:', error);
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) {
    return <p className="text-center text-blue-600">Loading students...</p>;
  }

  return (
    <PageWrapper>
      <h2 className="text-2xl font-bold mb-4">Manage Students</h2>
      {students.length === 0 ? (
        <p>No students available.</p>
      ) : (
        <table className="w-full bg-white rounded-lg shadow">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Department</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id} className="border-t">
                <td className="py-2 px-4">{student.name}</td>
                <td className="py-2 px-4">{student.email}</td>
                <td className="py-2 px-4">{student.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </PageWrapper>
  );
};

export default ManageStudents;
