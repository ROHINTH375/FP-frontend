// src/services/apiService.js
import axios from 'axios';

// Create Axios instance with default settings
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Function to fetch new access token using the refresh token
const getNewAccessToken = async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      const response = await axios.post('/refresh-token', { refreshToken });
      const newToken = response.data.token;
      localStorage.setItem('authToken', newToken);
      return newToken;
    } catch (error) {
      // If token refresh fails, redirect to login and clear localStorage
      console.error('Unable to refresh token', error);
      localStorage.removeItem('authToken');
      localStorage.removeItem('refreshToken');
      window.location.href = '/login'; // Redirect to login
      throw error;
    }
  };

// Main API request function with automatic token handling
const apiRequest = async (url, options = {}) => {
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

export default apiRequest;
