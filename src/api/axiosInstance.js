import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://fp-backend-6.onrender.com', // Backend URL
});

export default axiosInstance;
