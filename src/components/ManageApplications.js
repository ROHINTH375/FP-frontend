// src/components/ManageApplications.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ManageApplications({ jobId }) {
    const [applications, setApplications] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/jobs/applications/${jobId}`);
                setApplications(response.data);
            } catch (error) {
                console.error('Error fetching applications:', error);
            }
        };
        fetchApplications();
    }, [jobId]);

    const handleStatusUpdate = async (applicationId, status) => {
        try {
            await axios.put(`http://localhost:5000/api/jobs/applications/${applicationId}`, { status });
            setMessage('Application status updated successfully!');
            setApplications(applications.map(app =>
                app._id === applicationId ? { ...app, status } : app
            ));
        } catch (error) {
            console.error('Error updating application status:', error);
            setMessage('Failed to update application status.');
        }
    };

    return (
        <div className="manage-applications bg-white shadow-lg rounded-lg p-6 mb-8 max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Manage Applications</h2>
            {applications.map((app) => (
                <div key={app._id} className="application-item p-4 border-b border-gray-200">
                    <p><strong>Applicant ID:</strong> {app.studentId}</p>
                    <p><strong>Status:</strong> {app.status}</p>
                    <div className="flex space-x-4 mt-2">
                        <button
                            onClick={() => handleStatusUpdate(app._id, 'reviewed')}
                            className="px-4 py-1 bg-yellow-500 text-white rounded"
                        >
                            Mark as Reviewed
                        </button>
                        <button
                            onClick={() => handleStatusUpdate(app._id, 'selected')}
                            className="px-4 py-1 bg-green-500 text-white rounded"
                        >
                            Mark as Selected
                        </button>
                        <button
                            onClick={() => handleStatusUpdate(app._id, 'rejected')}
                            className="px-4 py-1 bg-red-500 text-white rounded"
                        >
                            Mark as Rejected
                        </button>
                    </div>
                </div>
            ))}
            {message && <p className="mt-4 text-blue-600">{message}</p>}
        </div>
    );
}

export default ManageApplications;
