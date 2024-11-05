// src/components/StudentInterviews.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function StudentInterviews({ studentId }) {
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/interviews/${studentId}`);
        setInterviews(response.data);
      } catch (error) {
        console.error("Error fetching interviews:", error);
      }
    };

    fetchInterviews();
  }, [studentId]);

  return (
    <div>
      <h3>Scheduled Interviews</h3>
      {interviews.map(interview => (
        <div key={interview._id}>
          <p>Job ID: {interview.jobId.title}</p>
          <p>Company: {interview.companyId.name}</p>
          <p>Date: {new Date(interview.interviewDate).toLocaleString()}</p>
          <p>Format: {interview.interviewFormat}</p>
          {interview.zoomLink && <p>Zoom Link: {interview.zoomLink}</p>}
        </div>
      ))}
    </div>
  );
}

export default StudentInterviews;
