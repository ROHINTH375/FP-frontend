// // DashboardAdmin.js
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// function DashboardAdmin() {
//   const [pages, setPages] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch existing content/pages
//     const fetchPages = async () => {
//       const response = await axios.get('http://localhost:5000/api/pages');
//       setPages(response.data);
//     };
//     fetchPages();
//   }, []);

//   const handleCreatePage = () => navigate('/dashboard-admin/create-page'); // Redirect to create page form
//   const handleEditPage = (id) => navigate(`/dashboard-admin/edit-page/${id}`); // Redirect to edit form

//   return (
//     <div>
//       <h2>Admin Dashboard</h2>
//       <button onClick={handleCreatePage}>Create New Page</button>
//       <ul>
//         {pages.map((page) => (
//           <li key={page._id}>
//             <h3>{page.title}</h3>
//             <button onClick={() => handleEditPage(page._id)}>Edit</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default DashboardAdmin;


// export const DashboardAdmin = () => {
//   return <div>Dashboard Admin</div>;
// };
