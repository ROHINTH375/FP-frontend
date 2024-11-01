// src/components/StudentList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/students');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students', error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <ul>
      {students.map((student) => (
        <li key={student._id} className="border p-4 my-2">
          <h2 className="text-xl font-bold">{student.name}</h2>
          <p>Email: {student.email}</p>
          <p>Applied Jobs: {student.appliedJobs.length}</p>
        </li>
      ))}
    </ul>
  );
};

export default StudentList;
