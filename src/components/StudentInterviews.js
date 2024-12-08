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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInterviews = async () => {
      const studentId = localStorage.getItem('studentId'); // Ensure studentId exists
      if (!studentId) {
        setError('Student ID not found. Please log in.');
        return;
      }
      try {
        // const token = localStorage.getItem('token');
        const response = await axios.get(
          `https://fp-backend-6.onrender.com/api/interviews/student/${studentId}`,
          // { headers: { Authorization: `Bearer ${token}` } }
        );
        setInterviews(response.data || []);
      } catch (error) {
        console.error('Error fetching interviews:', error);
        setError('Unable to load interviews.');
      } finally {
        setLoading(false);
      }
    };

    fetchInterviews();
  }, [studentId]);

  if (loading) return <p>Loading interviews...</p>;

  return (
    <div>
      <h1>Your Interviews</h1>
      {interviews.length > 0 ? (
        interviews.map((interview) => (
          <div key={interview.id}>
            <h3>{interview.jobTitle}</h3>
            <p>Date: {new Date(interview.date).toLocaleDateString()}</p>
            <p>Status: {interview.status}</p>
          </div>
        ))
      ) : (
        <p>No interviews found.</p>
      )}
    </div>
  );
};

export default StudentInterviews;
