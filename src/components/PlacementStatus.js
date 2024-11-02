// // components/PlacementStatus.js
// import React from 'react';

// function PlacementStatus() {
//   return (
//     <div className="placement-status">
//       <h3>Placement Status</h3>
//       <p>Applied to: Company XYZ</p>
//       <p>Job Openings: 3</p>
//       <p>Status: Pending</p>
//       {/* Add more detailed status tracking as needed */}
//     </div>
//   );
// }

// export default PlacementStatus;


// src/components/PlacementStatus.js
import React from 'react';

function PlacementStatus({ studentData }) {
  const { progress, attendance, tasksSubmitted, quizzesSubmitted } = studentData || {};
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Placement Progress</h3>
            <div className="flex gap-4 justify-around">
                <div className={`circle ${progress >= 1 ? "completed" : ""}`}>Applied job</div>
                <div className={`circle ${progress >= 2 ? "completed" : ""}`}>Application Viewed</div>
                <div className={`circle ${progress >= 3 ? "completed" : ""}`}>Application Selected</div>
                <div className={`circle ${progress >= 4 ? "completed" : ""}`}>Placed</div>
            </div>

            <div className="stat-card bg-blue-50 rounded-lg p-4 text-center shadow">
                <div className="stat-card">
                    <h3 className="text-lg font-semibold text-blue-700">Attendance</h3>
                    <p className="text-2xl font-bold text-blue-600">{attendance || 0}%</p>
                </div>
                <div className="stat-card bg-blue-50 rounded-lg p-4 text-center shadow">
                    <h3 className="text-lg font-semibold text-blue-700">Tasks Submitted</h3>
                    <p className="text-2xl font-bold text-blue-600">{tasksSubmitted || 0}%</p>
                </div>
                <div className="stat-card bg-blue-50 rounded-lg p-4 text-center shadow">
                    <h3 className="text-lg font-semibold text-blue-700" >Quizzes Submitted</h3>
                    <p className="text-2xl font-bold text-blue-600">{quizzesSubmitted || 0}%</p>
                </div>
            </div>
        </div>
    );
}

export default PlacementStatus;
