import React, { useState } from 'react';

const JobApplicationForm = ({ onApply }) => {
    const [studentId, setStudentId] = useState('');
    const [jobId, setJobId] = useState('');
    const [resume, setResume] = useState('');
    const [coverLetter, setCoverLetter] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!studentId || !jobId || !resume) {
            setError('Please fill in all required fields.');
            return;
        }

        const result = await onApply(studentId, jobId, resume, coverLetter);
        if (result.error) {
            setError(result.error);
        } else {
            setSuccess('Application submitted successfully!');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-3xl font-bold mb-4">Apply for Job</h2>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}

            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Student ID"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                
                required
            />
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Job ID"
                value={jobId}
                onChange={(e) => setJobId(e.target.value)}
                required
            />
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="url"
                placeholder="Resume Link"
                value={resume}
                onChange={(e) => setResume(e.target.value)}
                required
            />
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Cover Letter (optional)"
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
            />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Apply</button>
        </form>
    );
};

export default JobApplicationForm;
