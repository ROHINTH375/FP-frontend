// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AcademicRecords = ({ studentId, isAdmin }) => {
//   const [academicRecords, setAcademicRecords] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [errorMessage, setErrorMessage] = useState('');

//   useEffect(() => {
//     const fetchAcademicRecords = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const url = isAdmin
//           ? `http://localhost:5000/api/academic-records`
//           : `http://localhost:5000/api/academic-records/${studentId}`;
//         const response = await axios.get(url, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setAcademicRecords(response.data);
//         setLoading(false);
//       } catch (error) {
//         setErrorMessage('Error fetching academic records.');
//         console.error('Error fetching academic records:', error);
//         setLoading(false);
//       }
//     };

//     if (studentId || isAdmin) fetchAcademicRecords();
//   }, [studentId, isAdmin]);

//   if (loading) return <p>Loading academic records...</p>;
//   if (errorMessage) return <p className="text-red-500">{errorMessage}</p>;

//   return (
//     <div className="academic-records bg-white shadow-lg rounded-lg p-6 mb-8">
//       <h2 className="text-xl font-semibold text-blue-600 mb-4">Academic Records</h2>
//       {academicRecords && academicRecords.length ? (
//         <ul>
//           {academicRecords.map((record, index) => (
//             <li key={index} className="mb-4">
//               <p><strong>Student Name:</strong> {record.studentName}</p>
//               <p><strong>Grades:</strong> {record.grades}</p>
//               <p><strong>Achievements:</strong> {record.achievements.join(', ')}</p>
//               {record.transcriptLink && (
//                 <p>
//                   <a
//                     href={record.transcriptLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-500"
//                   >
//                     View Transcript
//                   </a>
//                 </p>
//               )}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No academic records found.</p>
//       )}
//     </div>
//   );
// };

// export default AcademicRecords;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AcademicRecords = ({ studentId }) => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/students/${studentId}/academic-records`)
      .then(response => {
        console.log('Academic Records:', response.data);
        setRecords(response.data);
      })
      .catch(error => console.error('Error fetching academic records:', error));
  }, [studentId]);

  return (
    <div>
      <h3>Academic Records</h3>
      <ul>
        {records.map(record => (
          <li key={record.id}>{record.subject}: {record.grade}</li>
        ))}
      </ul>
    </div>
  );
};

export default AcademicRecords;
