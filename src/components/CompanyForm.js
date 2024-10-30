// src/components/CompanyForm.js
import React, { useState } from 'react';
import axios from 'axios';

const CompanyForm = ({ company, onSubmit }) => {
  const [formData, setFormData] = useState(company || { name: '', email: '', password: '', jobOpenings: [] });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/companies', formData);
      onSubmit();
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded">
      <label className="block mb-2">Company Name</label>
      <input 
        type="text" 
        name="name" 
        value={formData.name} 
        onChange={handleChange} 
        className="mb-4 p-2 border rounded w-full" 
      />
      <label className="block mb-2">Email</label>
      <input 
        type="email" 
        name="email" 
        value={formData.email} 
        onChange={handleChange} 
        className="mb-4 p-2 border rounded w-full" 
      />
      <label className="block mb-2">Password</label>
      <input 
        type="password" 
        name="password" 
        value={formData.password} 
        onChange={handleChange} 
        className="mb-4 p-2 border rounded w-full" 
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">Submit</button>
    </form>
  );
};

export default CompanyForm;
