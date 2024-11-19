// // src/components/ScheduleInterview.js
// import React, { useState } from 'react';
// import axios from 'axios';

// function ScheduleInterview({ jobId, studentId, companyId }) {
//   const [date, setDate] = useState('');
//   const [format, setFormat] = useState('virtual');
//   const [zoomLink, setZoomLink] = useState('');

//   const handleSchedule = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/interviews/schedule', {
//         studentId,
//         companyId,
//         jobId,
//         interviewDate: date,
//         interviewFormat: format,
//         zoomLink: format === 'virtual' ? zoomLink : null
//       });
//       alert("Interview scheduled successfully!");
//     } catch (error) {
//       console.error("Error scheduling interview:", error);
//       alert("Error scheduling interview.");
//     }
//   };

//   return (
//     <div>
//       <h3>Schedule Interview</h3>
//       <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} />
//       <select value={format} onChange={(e) => setFormat(e.target.value)}>
//         <option value="virtual">Virtual</option>
//         <option value="in-person">In-person</option>
//       </select>
//       {format === 'virtual' && (
//         <input type="text" placeholder="Zoom Link" value={zoomLink} onChange={(e) => setZoomLink(e.target.value)} />
//       )}
//       <button onClick={handleSchedule}>Schedule Interview</button>
//     </div>
//   );
// }

// export default ScheduleInterview;

import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ScheduleInterview = ({ jobId, studentId }) => {
  const [formData, setFormData] = useState({
    interviewDate: '',
    format: 'virtual',
    zoomLink: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSchedule = async (e) => {
    e.preventDefault();
  
    try {
      const token = localStorage.getItem('token'); // Ensure token is stored in localStorage
      if (!token) {
        console.error("No token found. Please log in.");
        toast.error('You are not authenticated. Please log in.');
        return;
      }
  
      const response = await axios.post(
        'http://localhost:5000/api/interviews/schedule',
        { ...formData, jobId, studentId }, // Pass all required fields
        {
          headers: { Authorization: `Bearer ${token}` }, // Include the token
        }
      );
  
      toast.success('Interview scheduled successfully!');
      console.log(response.data);
    } catch (error) {
      console.error('Error scheduling interview:', error);
      toast.error(error.response?.data?.message || 'Failed to schedule interview.');
    }
  };

  return (
    <form onSubmit={handleSchedule} className="bg-white shadow rounded p-4">
      <h2 className="text-lg font-bold mb-4">Schedule Interview</h2>

      <label className="block mb-2">
        Interview Date:
        <input
          type="datetime-local"
          name="interviewDate"
          value={formData.interviewDate}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </label>

      <label className="block mb-2">
        Format:
        <select
          name="format"
          value={formData.format}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="virtual">Virtual</option>
          <option value="in-person">In-Person</option>
        </select>
      </label>

      {formData.format === 'virtual' && (
        <label className="block mb-2">
          Zoom Link:
          <input
            type="text"
            name="zoomLink"
            value={formData.zoomLink}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </label>
      )}

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Schedule
      </button>
    </form>
  );
};

export default ScheduleInterview;
