import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getStudentData } from '../api'; // API function to get student data
import ProfileInfo from '../components/ProfileInfo'; // Component for profile information
import PlacementStatus from '../components/PlacementStatus'; // Component for placement status

function StudentDashboard() {
    const [studentData, setStudentData] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Fetch student data after successful login
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getStudentData();
                setStudentData(response.data);
            } catch (error) {
                console.error("Error fetching student data", error);
                // Optionally redirect to login if there's an error
                navigate('/dashboard-student');
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [navigate]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="student-dashboard p-8">
            <h1>Student Dashboard</h1>

            {/* Profile and Placement Components */}
            {studentData && (
                <>
                    <ProfileInfo data={studentData} /> {/* Display profile information */}
                    <PlacementStatus data={studentData} /> {/* Display placement status */}
                </>
            )}

            <div className="profile-header flex justify-between items-center mt-8">
                <div>
                    <h1>Welcome, {studentData.name}</h1>
                    <p>{studentData.email}</p>
                </div>
                <img
                    src={studentData.profileImage || "default-profile.png"}
                    alt="Profile"
                    className="w-16 h-16 rounded-full"
                />
            </div>

            {/* Placement Progress Section */}
            <div className="progress-section mt-8">
                <h2>Placement Progress</h2>
                <div className="flex gap-4 mt-4">
                    <div className="step">
                        <div className={`circle ${studentData.progress >= 1 ? "completed" : ""}`}>Preboot Camp</div>
                    </div>
                    <div className="step">
                        <div className={`circle ${studentData.progress >= 2 ? "completed" : ""}`}>Mainboot Camp</div>
                    </div>
                    <div className="step">
                        <div className={`circle ${studentData.progress >= 3 ? "completed" : ""}`}>Certificate</div>
                    </div>
                    <div className="step">
                        <div className={`circle ${studentData.progress >= 4 ? "completed" : ""}`}>Placed</div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="stats mt-8 grid grid-cols-3 gap-4">
                <div className="stat-card p-4 border rounded-lg shadow-md">
                    <h3>Attendance</h3>
                    <p>{studentData.attendance || 0}%</p>
                </div>
                <div className="stat-card p-4 border rounded-lg shadow-md">
                    <h3>Tasks Submitted</h3>
                    <p>{studentData.tasksSubmitted || 0}%</p>
                </div>
                <div className="stat-card p-4 border rounded-lg shadow-md">
                    <h3>Quiz Submitted</h3>
                    <p>{studentData.quizzesSubmitted || 0}%</p>
                </div>
            </div>
        </div>
    );
}

export default StudentDashboard;
