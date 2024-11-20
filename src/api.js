
// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Adjust the URL as needed

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Get token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Add token to headers
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
// Student API calls
export const registerStudent = async (studentData) => {
  try {
    // const response = await axios.post(`${API_URL}/students/register`, studentData);
    // return response.data;
    const response = await axios.post('http://localhost:5000/api/auth/register-student', studentData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const getNewAccessToken = async () => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    const response = await axios.post('/refresh-token', { refreshToken });
    const newToken = response.data.token;
    localStorage.setItem('authToken', newToken); // Update stored access token
    return newToken;
  } catch (error) {
    console.error('Unable to refresh token', error);
    throw error;
  }
};

export const apiRequest = async (url, options = {}) => {
  const token = localStorage.getItem('authToken');

  // Set up headers with Authorization token if available
  options.headers = {
    Authorization: `Bearer ${token}`,
    ...options.headers,
  };

  try {
    // Attempt the API request
    const response = await api(url, options);
    return response.data;
  } catch (error) {
    // If token expired, attempt to refresh token and retry request
    if (error.response && error.response.status === 401 && error.response.data.message === 'jwt expired') {
      try {
        const newToken = await getNewAccessToken();
        options.headers.Authorization = `Bearer ${newToken}`;
        const response = await api(url, options);
        return response.data;
      } catch (refreshError) {
        // Handle case where refresh token is also invalid
        console.error('Token refresh failed', refreshError);
        throw refreshError;
      }
    }
    throw error; // Rethrow any other errors
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

export const loginCompany = async (companyData) => {
  return await axios.post('http://localhost:5000/api/auth/login-company', companyData);
};

// Register function
export const registerAdmin = async (data) => {
  return await axios.post(`${API_URL}/register-admin`, data);
};


export const loginAdmin = async (data) => {
  return await axios.post(`${API_URL}/admin-login`, data);
};


export const getStudentData = async () => {
  try {
      const response = await axios.get('http://localhost:5000/api/student/dashboard');
      return response.data;
  } catch (error) {
      console.error('Error fetching student data:', error);
      throw error;
  }
};

// Schedule interview API function
export const scheduleInterview = async (interviewData) => {
  try {
    const response = await axios.post('http://localhost:5000/api/interviews/schedule', interviewData);
    return response;
  } catch (error) {
    console.error('Error in scheduleInterview API:', error);
    throw error;
  }
};

export const fetchAnalyticsReports = async () => {
  const token = localStorage.getItem('token'); // Ensure token is added
  const response = await axios.get('http://localhost:5000/api/analytics/reports', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};