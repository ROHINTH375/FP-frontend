// src/components/PostJobForm.js
import React, { useState } from 'react';
import axios from 'axios';

function PostJobForm({ companyId }) {
    const [jobTitle, setJobTitle] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [requirements, setRequirements] = useState('');
    const [message, setMessage] = useState('');

    const handlePostJob = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/jobs/create', {
                companyId,
                jobTitle,
                jobDescription,
                requirements,
            });
            setMessage(response.data.message);
        } catch (error) {
            console.error('Error posting job:', error);
            setMessage('Failed to post job.');
        }
    };

    return (
        <div className="post-job-form bg-white shadow-lg rounded-lg p-6 mb-8 max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Post a Job Opening</h2>
            <form onSubmit={handlePostJob} className="space-y-4">
                <div>
                    <label htmlFor="jobTitle" className="block text-gray-700">Job Title</label>
                    <input
                        type="text"
                        id="jobTitle"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>

                <div>
                    <label htmlFor="jobDescription" className="block text-gray-700">Job Description</label>
                    <textarea
                        id="jobDescription"
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>

                <div>
                    <label htmlFor="requirements" className="block text-gray-700">Requirements</label>
                    <textarea
                        id="requirements"
                        value={requirements}
                        onChange={(e) => setRequirements(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>

                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                    Post Job
                </button>
                {message && <p className="mt-4 text-blue-600">{message}</p>}
            </form>
        </div>
    );
}

export default PostJobForm;
