// src/components/ScheduleInterview.js
import React, { useState } from 'react';
import axios from 'axios';

function ScheduleInterview({ jobId, studentId, companyId }) {
  const [date, setDate] = useState('');
  const [format, setFormat] = useState('virtual');
  const [zoomLink, setZoomLink] = useState('');

  const handleSchedule = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/interviews/schedule', {
        studentId,
        companyId,
        jobId,
        interviewDate: date,
        interviewFormat: format,
        zoomLink: format === 'virtual' ? zoomLink : null
      });
      alert("Interview scheduled successfully!");
    } catch (error) {
      console.error("Error scheduling interview:", error);
      alert("Error scheduling interview.");
    }
  };

  return (
    <div>
      <h3>Schedule Interview</h3>
      <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} />
      <select value={format} onChange={(e) => setFormat(e.target.value)}>
        <option value="virtual">Virtual</option>
        <option value="in-person">In-person</option>
      </select>
      {format === 'virtual' && (
        <input type="text" placeholder="Zoom Link" value={zoomLink} onChange={(e) => setZoomLink(e.target.value)} />
      )}
      <button onClick={handleSchedule}>Schedule Interview</button>
    </div>
  );
}

export default ScheduleInterview;
