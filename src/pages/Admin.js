// src/pages/Admin.js
import React from 'react';
import { Link } from 'react-router-dom';
const Admin = () => {
  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"start", alignItems:"center", fontFamily:"monospace", backgroundImage:`url(https://www.bootstrapdash.com/blog/wp-content/uploads/2017/05/bootstrap-admin-templates.jpg)`, height:"100vh", width:"100%", backgroundSize:"cover", backgroundPosition: "center"}}>
      <h1 className="text-3xl font-bold" style={{display:"flex", justifyContent:"center", alignItems:"center", fontFamily:"monospace", fontSize:"30px", padding:"20px 0px 20px 0px"}}>Welcom to Admin Panel!</h1>
      <Link to="/admin-login">
        <button style={{fontSize:"20px", color:"Background"}}>Login as Admin</button>
      </Link>
      <p style={{padding:"10px", fontSize:"15px", color:"lightgray"}}>Manage students, companies, and job placements from here.</p>
    </div>
  );
};

export default Admin;
