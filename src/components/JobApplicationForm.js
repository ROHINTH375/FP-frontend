// import React, { useState } from 'react';

// const JobApplicationForm = ({ onApply }) => {
//     const [studentId, setStudentId] = useState('');
//     const [jobId, setJobId] = useState('');
//     const [resume, setResume] = useState('');
//     const [coverLetter, setCoverLetter] = useState('');
//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');
//         setSuccess('');

//         if (!studentId || !jobId || !resume) {
//             setError('Please fill in all required fields.');
//             return;
//         }

//         const result = await onApply(studentId, jobId, resume, coverLetter);
//         if (result.error) {
//             setError(result.error);
//         } else {
//             setSuccess('Application submitted successfully!');
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//             <h2 className="text-3xl font-bold mb-4">Apply for Job</h2>
//             {error && <p className="error">{error}</p>}
//             {success && <p className="success">{success}</p>}

//             <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 type="text"
//                 placeholder="Student ID"
//                 value={studentId}
//                 onChange={(e) => setStudentId(e.target.value)}
                
//                 required
//             />
//             <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 type="text"
//                 placeholder="Job ID"
//                 value={jobId}
//                 onChange={(e) => setJobId(e.target.value)}
//                 required
//             />
//             <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 type="url"
//                 placeholder="Resume Link"
//                 value={resume}
//                 onChange={(e) => setResume(e.target.value)}
//                 required
//             />
//             <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Cover Letter (optional)"
//                 value={coverLetter}
//                 onChange={(e) => setCoverLetter(e.target.value)}
//             />
//             <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Apply</button>
//         </form>
//     );
// };

// export default JobApplicationForm;

// import React, { useState } from 'react';


// const JobApplicationForm = ({ onApply }) => {
//     const [studentId, setStudentId] = useState('');
//     const [jobId, setJobId] = useState('');
//     const [resume, setResume] = useState('');
//     const [coverLetter, setCoverLetter] = useState('');
//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');
//         setSuccess('');

//         if (!studentId || !jobId || !resume) {
//             setError('Please fill in all required fields.');
//             return;
//         }

//         const result = await onApply(studentId, jobId, resume, coverLetter);
//         if (result.error) {
//             setError(result.error);
//         } else {
//             setSuccess('Application submitted successfully!');
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//             <h2 className="text-3xl font-bold mb-4">Apply for Job</h2>
//             {error && <p className="error">{error}</p>}
//             {success && <p className="success">{success}</p>}

//             <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 type="text"
//                 placeholder="Student ID"
//                 value={studentId}
//                 onChange={(e) => setStudentId(e.target.value)}
                
//                 required
//             />
//             <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 type="text"
//                 placeholder="Job ID"
//                 value={jobId}
//                 onChange={(e) => setJobId(e.target.value)}
//                 required
//             />
//             <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 type="url"
//                 placeholder="Resume Link"
//                 value={resume}
//                 onChange={(e) => setResume(e.target.value)}
//                 required
//             />
//             <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Cover Letter (optional)"
//                 value={coverLetter}
//                 onChange={(e) => setCoverLetter(e.target.value)}
//             />
//             <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Apply</button>
//         </form>
//     );
// };

// export default JobApplicationForm;

import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { createApplication } from '../services/applicationService';

const JobApplicationForm = ({ jobId ,studentId }) => {
  const [formData, setFormData] = useState({
    resume: '',
    coverLetter: '',
  });
  const [status, setStatus] = useState('pending');
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [companyId, setCompanyId] = useState('');
    const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const applicationData = {
      studentId,
      jobId,
      status,
      description,
      title,
      companyId,
      appliedDate: new Date().toISOString(),
  };

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:5000/api/applications',
        { ...formData, jobId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const result = await createApplication(applicationData);
      toast.success('Application submitted successfully!');
      setMessage('Application submitted successfully');
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting application:', error);
      toast.error('Failed to submit application.');
    }
  };

  return (
    // <form onSubmit={handleSubmit} className="bg-white shadow rounded p-4">
    //   <h2 className="text-lg font-bold mb-4">Apply for Job</h2>

    //   <label className="block mb-2">
    //     Cover Letter:
    //     <textarea
    //       name="coverLetter"
    //       value={formData.coverLetter}
    //       onChange={handleChange}
    //       className="w-full p-2 border rounded"
    //       required
    //     />
    //   </label>

    //   <label className="block mb-2">
    //     Resume:
    //     <input
    //       type="file"
    //       name="resume"
    //       onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
    //       className="w-full p-2 border rounded"
    //       required
    //     />
    //   </label>

    //   <button
    //     type="submit"
    //     className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
    //   >
    //     Submit Application
    //   </button>

    //   <div>
    //             <label>Title</label>
    //             <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
    //         </div>
    //         <div>
    //             <label>Description</label>
    //             <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
    //         </div>
    //         <button type="submit">Submit Application</button>
    //         <p>{message}</p>
    // </form>
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg rounded-lg p-6 max-w-lg mx-auto"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Apply for Job</h2>

      <label className="block mb-4">
        <span className="font-semibold">Cover Letter:</span>
        <textarea
          name="coverLetter"
          value={formData.coverLetter}
          onChange={handleChange}
          className="w-full p-3 border rounded text-gray-800"
          placeholder="Write your cover letter here..."
          required
        />
      </label>

      <label className="block mb-4">
        <span className="font-semibold">Resume:</span>
        <input
          type="file"
          name="resume"
          onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
          className="w-full p-2 border rounded text-gray-800"
          required
        />
      </label>

      <div className="mb-4">
        <label className="block mb-2 font-semibold">Job Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded text-gray-800"
          placeholder="Enter job title"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-semibold">Job Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 border rounded text-gray-800"
          placeholder="Enter job description"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold mt-4"
      >
        Submit Application
      </button>

      {message && (
        <p className="mt-4 text-center text-green-200 font-medium">{message}</p>
      )}
    </form>
  );
};

export default JobApplicationForm;

