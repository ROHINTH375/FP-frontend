// // src/components/StudentInterviews.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function StudentInterviews({ studentId }) {
//   const [interviews, setInterviews] = useState([]);

//   useEffect(() => {
//     const fetchInterviews = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/interviews/${studentId}`);
//         setInterviews(response.data);
//       } catch (error) {
//         console.error("Error fetching interviews:", error);
//       }
//     };

//     fetchInterviews();
//   }, [studentId]);

//   return (
//     <div>
//       <h3>Scheduled Interviews</h3>
//       {interviews.map(interview => (
//         <div key={interview._id}>
//           <p>Job ID: {interview.jobId.title}</p>
//           <p>Company: {interview.companyId.name}</p>
//           <p>Date: {new Date(interview.interviewDate).toLocaleString()}</p>
//           <p>Format: {interview.interviewFormat}</p>
//           {interview.zoomLink && <p>Zoom Link: {interview.zoomLink}</p>}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default StudentInterviews;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentInterviews = ({ studentId }) => {
  const [interviews, setInterviews] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(
          `http://localhost:5000/api/interviews/student/${studentId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setInterviews(response.data);
      } catch (error) {
        console.error('Error fetching interviews:', error);
        setError('Unable to load interviews.');
      }
    };

    fetchInterviews();
  }, [studentId]);

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Scheduled Interviews</h2>
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {interviews.map((interview) => (
          <li key={interview._id} className="border p-2 mb-2 rounded">
            <p>Job Title: {interview.jobId?.jobTitle}</p>
            <p>Date: {new Date(interview.interviewDate).toLocaleString()}</p>
            <p>Format: {interview.format}</p>
            {interview.zoomLink && <p>Zoom Link: {interview.zoomLink}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentInterviews;
