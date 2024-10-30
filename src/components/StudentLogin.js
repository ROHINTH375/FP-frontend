// StudentLogin.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StudentLogin() {
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [applications, setApplications] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/students/login', loginData);
            if (response.data.success) {
                setIsLoggedIn(true);
                fetchApplications();
            } else {
                alert("Login failed. Please check your credentials.");
            }
        } catch (error) {
            console.error("Error logging in:", error);
            alert("Login failed. Please try again.");
        }
    };

    const fetchApplications = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/students/applications');
            setApplications(response.data);
        } catch (error) {
            console.error("Error fetching applications:", error);
        }
    };

    useEffect(() => {
        if (isLoggedIn) {
            fetchApplications();
        }
    }, [isLoggedIn]);

    return (
        <div>
            {!isLoggedIn ? (
                <form onSubmit={handleLogin}>
                    <h2>Login</h2>
                    <label>Email</label>
                    <input type="email" name="email" value={loginData.email} onChange={handleChange} required />
                    
                    <label>Password</label>
                    <input type="password" name="password" value={loginData.password} onChange={handleChange} required />
                    
                    <button type="submit">Login</button>
                </form>
            ) : (
                <div>
                    <h2>Your Job Applications</h2>
                    <ul>
                        {applications.map((app, index) => (
                            <li key={index}>
                                {app.jobTitle} - Status: {app.status}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default StudentLogin;
