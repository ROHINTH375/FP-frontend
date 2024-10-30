// src/api.js
import axios from 'axios';
import api from '../api'; // Ensure the correct relative path

const fetchCompanies = async () => {
    try {
        const response = await api.get('/api/companies');
        return response.data;
    } catch (error) {
        console.error("Error fetching companies:", error);
        throw error;
    }
};

// Create an Axios instance with the base URL of your backend API
const api = axios.create({
    baseURL: 'http://localhost:5000' // Update this URL if your backend server has a different address
});

export default api;
