// // src/components/CompanyList.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const CompanyList = () => {
//   const [companies, setCompanies] = useState([]);
//   const [selectedCompany, setSelectedCompany] = useState(null);

//   useEffect(() => {
//     const fetchCompanies = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/companies');
//         setCompanies(response.data);
//       } catch (error) {
//         console.error('Error fetching companies', error);
//       }
//     };

//     fetchCompanies();
//   }, []);

//   const handleApply = (company) => {
//     setSelectedCompany(company);
//   };

//   return (
//     // <ul>
//     //   {companies.map((company) => (
//     //     <li key={company._id} className="border p-4 my-2">
//     //       <h2 className="text-xl font-bold">{company.name}</h2>
//     //       <p>Email: {company.email}</p>
//     //       <p>Job Openings: {company.jobOpenings.length}</p>
//     //     </li>
//     //   ))}
//     // </ul>
//     <div>
//       <h3>Registered Companies</h3>
//       <ul>
//         {companies.map((company) => (
//           <li key={company._id}>
//             {company.name} - {company.email}
//             <button onClick={() => handleApply(company)}>Apply for Job</button>
//           </li>
//         ))}
//       </ul>
//       {selectedCompany && <ApplyJob company={selectedCompany} />}
//     </div>
//   );
// };

// export default CompanyList;
// src/components/CompanyList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ApplyJob from './ApplyJob';
// import api from '../api';

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      const response = await axios.get('https://fp-backend-6.onrender.com/companies');
      setCompanies(response.data);
    };
    fetchCompanies();
  }, []);

  const handleApply = (company) => {
    setSelectedCompany(company);
  };

  return (
    <div>
      <h3>Registered Companies</h3>
      <ul>
        {companies.map((company) => (
          <li key={company._id}>
            {company.name} - {company.email}
            <button onClick={() => handleApply(company)}>Apply for Job</button>
          </li>
        ))}
      </ul>
      {selectedCompany && <ApplyJob company={selectedCompany} />}
    </div>
  );
};

export default CompanyList;
