// import React from "react";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children, allowedRoles }) => {
//   const token = localStorage.getItem('token');
//   const userRole = localStorage.getItem('userRole');

//   // Check if the user is authenticated and has the right role
//   if (!token || !allowedRoles.includes(userRole)) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;

// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ children }) => {
//   const token = localStorage.getItem('token');
//   return token ? children : <Navigate to="/login" />;
// };

// export default ProtectedRoute;

