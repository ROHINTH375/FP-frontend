
// src/api.js
import axios from 'axios';

// const API_URL = 'https://fp-backend-6.onrender.com'; // Adjust the URL as needed

// const api = axios.create({
//   baseURL: 'https://fp-backend-6.onrender.com',
// });

const API_URL = 'https://fp-backend-6.onrender.com';
const api = axios.create({
  baseURL: API_URL,
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
    const response = await axios.post('https://fp-backend-6.onrender.com/api/auth/register-student', studentData);
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
    const response = await axios.post(`${API_URL}/api/auth/register-company`, companyData, {
      headers: { "Content-Type": "application/json" },
    });
    return response;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const loginCompany = async (loginData) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/login-company`, loginData, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
// Register Admin
export const registerAdmin = async (adminData) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/register-admin`, adminData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Login Admin
export const loginAdmin = async (adminData) => {
  const response = await axios.post(`${API_URL}/api/auth/admin-login`, adminData);
  return response.data;
};


export const getStudentData = async () => {
  try {
      const response = await axios.get('https://fp-backend-6.onrender.com/api/student/dashboard');
      return response.data;
  } catch (error) {
      console.error('Error fetching student data:', error);
      throw error;
  }
};

// Schedule interview API function
export const scheduleInterview = async (interviewData) => {
  try {
    const response = await axios.post('https://fp-backend-6.onrender.com/api/interviews/schedule', interviewData);
    return response;
  } catch (error) {
    console.error('Error in scheduleInterview API:', error);
    throw error;
  }
};

export const fetchAnalyticsReports = async () => {
  const token = localStorage.getItem('token'); // Ensure token is added
  const response = await axios.get('https://fp-backend-6.onrender.com/api/analytics/reports', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const fetchApplicationsForJob = async (jobId) => {
  try {
    const response = await api.get(`/api/applications/job/${jobId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching applications for job:', error);
    throw error;
  }
};


export const fetchCompanies = () => api.get('/companies');
export const applyForJob = (data) => api.post('/api/applications/apply', data);
// Add more endpoints as needed