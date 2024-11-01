// // src/api.js
// import axios from 'axios';
// // import api from '../api.js'; // Ensure the correct relative path

// // const fetchCompanies = async () => {
// //     try {
// //         const response = await api.get('/api/companies');
// //         return response.data;
// //     } catch (error) {
// //         console.error("Error fetching companies:", error);
// //         throw error;
// //     }
// // };

// // Create an Axios instance with the base URL of your backend API
// const instance = axios.create({
//     baseURL: 'http://localhost:5000'
//   });

// // export const registerStudent = (data) => instance.post('/auth/register/student', data);
// // export const loginStudent = (data) => instance.post('/auth/login/student', data);
// // export const registerCompany = (data) => instance.post('/auth/register/company', data);
// // export const loginCompany = (data) => instance.post('/auth/login/company', data);

// // export default api;

// import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'http://localhost:5000/api'
// });

// export const registerStudent = (data) => instance.post('/auth/register/student', data);
// export const loginStudent = (data) => instance.post('/auth/login/student', data);
// export const registerCompany = (data) => instance.post('/auth/register/company', data);
// export const loginCompany = (data) => instance.post('/auth/login/company', data);

// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Adjust the URL as needed

// Student API calls
export const registerStudent = async (studentData) => {
  try {
    // const response = await axios.post(`${API_URL}/students/register`, studentData);
    // return response.data;
    return await axios.post(`${API_URL}/register-student`, studentData);
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const loginStudent = async (loginData) => {
  try {
    // const response = await axios.post(`${API_URL}/students/login`, credentials);
    // return response.data;
    return await axios.post(`${API_URL}/login-student`, loginData);
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

// Company API calls
export const registerCompany = async (companyData) => {
  try {
    // const response = await axios.post(`${API_URL}/companies/register`, companyData);
    // return response.data;
    return await axios.post(`${API_URL}/register-company`, companyData);
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const loginCompany = async (loginData) => {
  try {
    // const response = await axios.post(`${API_URL}/companies/login`, credentials);
    // return response.data;
    return await axios.post(`${API_URL}/login-company`, loginData);
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const registerAdmin = async (adminData) => {
  try {
    // const response = await axios.post(`${API_URL}/companies/register`, companyData);
    // return response.data;
    return await axios.post(`${API_URL}/register-admin`, adminData);
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};


export const loginAdmin = async (loginData) => {
  try {
    // const response = await axios.post(`${API_URL}/companies/register`, companyData);
    // return response.data;
    return await axios.post(`${API_URL}/login-admin`, loginData);
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

// Function to fetch student data
export const getStudentData = async () => {
    return axios.get(`${API_URL}/api/students/me`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    });
};

