// src/utils/apiClient.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://fp-backend-6.onrender.com/api',
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => Promise.reject(error));

export default apiClient;
