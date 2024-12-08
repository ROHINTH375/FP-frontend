import React, { useEffect, useState } from 'react';
import axios from 'axios';
import apiClient from '../utils/apiClient';
import { toast} from 'react-toastify';
const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error("No token found, please log in.");
          toast.error("No token found. Please log in.");
          return;
        }
        const response = await apiClient.get('/user/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserData(response.data);
      } catch (error) {
        if (error.response && error.response.status === 403) {
          toast.error("Access forbidden, please check your login status.");
        } else {
          toast.error("Error fetching profile data.");
        }
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  if (!userData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-gray-600 text-xl">Loading profile data...</p>
      </div>
    );
  }

  return (
//     <div className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 min-h-screen p-8">
//       <div className="container mx-auto bg-white shadow-lg rounded-lg p-8">
//         <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Your Profile</h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Profile Information */}
//           <div className="p-6 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg shadow">
//             <h2 className="text-2xl font-semibold text-blue-700 mb-4">Personal Information</h2>
//             <p className="text-lg">
//               <strong>Name:</strong> {userData.firstname} {userData.lastname}
//             </p>
//             <p className="text-lg">
//               <strong>Email:</strong> {userData.email}
//             </p>
//             <p className="text-lg">
//               <strong>Address:</strong> {userData.address}
//             </p>
//             <p className="text-lg">
//               <strong>Phone:</strong> {userData.phoneNumber}
//             </p>
//           </div>

//           {/* Academic Information */}
//           <div className="p-6 bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg shadow">
//             <h2 className="text-2xl font-semibold text-purple-700 mb-4">Academic Information</h2>
//             <p className="text-lg">
//               <strong>Department:</strong> {userData.department}
//             </p>
//             <p className="text-lg">
//               <strong>Year:</strong> {userData.yearFrom} - {userData.yearTo}
//             </p>
//             <p className="text-lg">
//               <strong>District:</strong> {userData.district}
//             </p>
//           </div>

//           {/* Achievements */}
//           <div className="p-6 bg-gradient-to-r from-green-100 to-green-200 rounded-lg shadow">
//             <h2 className="text-2xl font-semibold text-green-700 mb-4">Achievements</h2>
//             <ul className="list-disc list-inside">
//               {userData.achievements && userData.achievements.length > 0 ? (
//                 userData.achievements.map((achievement, index) => (
//                   <li key={index} className="text-lg">
//                     {achievement}
//                   </li>
//                 ))
//               ) : (
//                 <p className="text-gray-600">No achievements available.</p>
//               )}
//             </ul>
//           </div>

//           {/* Skills */}
//           <div className="p-6 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-lg shadow">
//             <h2 className="text-2xl font-semibold text-yellow-700 mb-4">Skills</h2>
//             <ul className="list-disc list-inside">
//               {userData.skills && userData.skills.length > 0 ? (
//                 userData.skills.map((skill, index) => (
//                   <li key={index} className="text-lg">
//                     {skill}
//                   </li>
//                 ))
//               ) : (
//                 <p className="text-gray-600">No skills available.</p>
//               )}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
<div className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 min-h-screen p-8">
      <div className="container mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Your Profile</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProfileSection title="Personal Information" data={userData} fields={['firstname', 'lastname', 'email', 'address', 'phoneNumber']} />
          <ProfileSection title="Academic Information" data={userData} fields={['department', 'yearFrom', 'yearTo', 'district']} />
          <ProfileSection title="Achievements" data={userData.achievements || []} list />
          <ProfileSection title="Skills" data={userData.skills || []} list />
        </div>
      </div>
    </div>
  );
};

const ProfileSection = ({ title, data, fields, list }) => (
  <div className="p-6 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg shadow">
    <h2 className="text-2xl font-semibold text-blue-700 mb-4">{title}</h2>
    {list ? (
      <ul className="list-disc list-inside">
        {data.length ? data.map((item, index) => <li key={index} className="text-lg">{item}</li>) : <p className="text-gray-600">No data available.</p>}
      </ul>
    ) : (
      fields.map((field, index) => (
        <p key={index} className="text-lg">
          <strong>{field.charAt(0).toUpperCase() + field.slice(1)}:</strong> {data[field]}
        </p>
      ))
    )}
  </div>
);


export default Profile;
