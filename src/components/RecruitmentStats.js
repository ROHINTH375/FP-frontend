import React, { useEffect } from 'react';

function RecruitmentStats() {
    const [jobId, setJobId] = useState('');
    const [studentId, setStudentId] = useState('');
    const [status, setStatus] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!jobId || !studentId || !status) {
            setErrorMessage('All fields are required.');
            return;
        }

        try {
            const response = await fetch('/api/recruitment-stats', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ jobId, studentId, status }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccessMessage(data.message);
                setErrorMessage('');
            } else {
                setErrorMessage(data.error || 'Something went wrong');
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('Error occurred while sending data.');
        }
    };

    return (
        <div>
            <h1>Submit Recruitment Stats</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Job ID"
                    value={jobId}
                    onChange={(e) => setJobId(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Student ID"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    required
                />
                <button type="submit">Submit</button>
            </form>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        </div>
    );
}

export default RecruitmentStats;
