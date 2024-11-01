// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Companies = () => {
//   const [companies, setCompanies] = useState([]);

//   useEffect(() => {
//     const fetchCompanies = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/companies');
//         setCompanies(response.data);
//       } catch (error) {
//         console.error('Error fetching companies', error);
//       }
//     };

//     fetchCompanies();
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold mb-4">Companies</h1>
//       <ul className="space-y-4">
//         {companies.map((company) => (
//           <li key={company._id} className="border p-4 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold">{company.name}</h2>
//             <p>Email: {company.email}</p>
//             <p>Job Openings: {company.jobOpenings.length}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Companies;
// src/pages/Companies.js
// import React from 'react';
// import CompanyRegister from '../components/CompanyRegister';
// import LoginCompany from '../components/LoginCompany';
// import CompanyList from '../components/CompanyList';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Companies = () => {
//   const [companies, setCompanies] = useState([]);
//     const [error, setError] = useState('');

//     const fetchCompanies = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/companies');
//             setCompanies(response.data);
//         } catch (error) {
//             setError("Failed to fetch companies. Please try again.");
//         }
//     };

//     useEffect(() => {
//         fetchCompanies();
//     }, []);
//   return (
//     <div>
//             <h1>Companies</h1>
//             {error && <p>{error}</p>}
//             <ul>
//                 {companies.map(company => (
//                     <li key={company._id}>{company.name}</li>
//                 ))}
//             </ul>
//         </div>
//   );
// };

// export default Companies;


// import React from 'react';
// import { Link } from 'react-router-dom';

// const Companies = () => {
//     return (
//         <div className="flex flex-col items-center">
//             <h1 className="text-2xl font-bold mb-4">Companies Page</h1>
//             <div className="flex space-x-4">
//                 {/* Button to navigate to the login page */}
//                 <Link to="/login-company">
//                     <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
//                 </Link>
//                 {/* Button to navigate to the register page */}
//                 <Link to="/register-company">
//                     <button className="bg-green-500 text-white px-4 py-2 rounded">Register</button>
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default Companies;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';


// function Companies() {
//   const navigate = useNavigate();
//   const [companies, setCompanies] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     // Fetch registered companies when the component mounts
//     const fetchCompanies = async () => {
//       try {
//         const response = await axios.get('/companies'); // Ensure the endpoint is correct
//         setCompanies(response.data); // Store the fetched companies in state
//       } catch (err) {
//         console.error("Error fetching companies:", err);
//         setError("Failed to load companies. Please try again.");
//       }
//     };

//     fetchCompanies();
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-xl font-bold mb-4">Company Portal</h2>
//       <button 
//         onClick={() => navigate('/register-company')}
//         className="btn btn-primary mr-2"
//       >
//         Register Company
//       </button>
//       <button 
//         onClick={() => navigate('/login-company')}
//         className="btn btn-secondary"
//       >
//         Login Company
//       </button>

//       {error && <p className="text-red-500">{error}</p>} {/* Display error message */}

//       <h3 className="text-lg font-semibold mt-6">Registered Companies</h3>
//       {companies.length > 0 ? (
//         <ul className="mt-2">
//           {companies.map((company) => (
//             <li key={company._id} className="border p-2 mb-2 rounded">
//               <h4 className="font-bold">{company.name}</h4>
//               <p>{company.description}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No companies registered yet.</p>
//       )}
      
//     </div>
//   );
// }

// export default Companies;


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Companies() {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch registered companies when the component mounts
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('/companies'); // Ensure the endpoint is correct
        setCompanies(response.data); // Store the fetched companies in state
      } catch (err) {
        console.error("Error fetching companies:", err);
        setError("Failed to load companies. Please try again.");
      }
    };

    fetchCompanies();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Company Portal</h2>
      <button 
        onClick={() => navigate('/register-company')}
        className="btn btn-primary mr-2"
      >
        Register Company
      </button>
      <button 
        onClick={() => navigate('/login-company')}
        className="btn btn-secondary"
      >
        Login Company
      </button>

      {error && <p className="text-red-500">{error}</p>} {/* Display error message */}

      <h3 className="text-lg font-semibold mt-6">Registered Companies</h3>
      {companies.length > 0 ? (
        <ul className="mt-2">
          {companies.map((company) => (
            <li key={company._id} className="border p-2 mb-2 rounded">
              <h4 className="font-bold">{company.name}</h4>
              <p>{company.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No companies registered yet.</p>
      )}
    </div>
  );
}

export default Companies;