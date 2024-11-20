// components/AcademicRecords.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AcademicRecords = ({ studentId }) => {
  const [academicRecord, setAcademicRecord] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAcademicRecord = async () => {
      try {
        const token = localStorage.getItem('token'); // Get token from localStorage
        const response = await axios.get(`http://localhost:5000/api/academic-records/${studentId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setAcademicRecord(response.data);
      } catch (error) {
        console.error('Error fetching academic record:', error);
        setError('Failed to load academic record.');
      }
    };

    fetchAcademicRecord();
  }, [studentId]);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!academicRecord) {
    return <p>Loading academic records...</p>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Academic Records</h2>
      <h3 className="text-lg font-semibold">Grades:</h3>
      <ul className="mb-4">
        {academicRecord.grades.map((grade, index) => (
          <li key={index}>{`${grade.subject}: ${grade.grade}`}</li>
        ))}
      </ul>
      <h3 className="text-lg font-semibold">Achievements:</h3>
      <ul>
        {academicRecord.achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
      {academicRecord.transcriptUrl && (
        <a
          href={academicRecord.transcriptUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          View Transcript
        </a>
      )}
    </div>
  );
};

export default AcademicRecords;
