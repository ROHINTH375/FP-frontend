// Students.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Students() {
    const navigate = useNavigate();

    return (
        <div className="student-page">
            <h1>Student Page</h1>
            <button onClick={() => navigate('/student-login')} className="btn btn-primary">
                Login
            </button>
            <button onClick={() => navigate('/student-register')} className="btn btn-secondary">
                Register
            </button>
        </div>
    );
}

export default Students;
