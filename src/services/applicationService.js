import axios from 'axios';

const API_URL = 'http://localhost:5000/api/applications';

export const createApplication = async (applicationData) => {
    try {
        const response = await axios.post(API_URL, applicationData);
        return response.data;
    } catch (error) {
        throw new Error('Error creating application: ' + error.message);
    }
};

export const getApplicationsByJobId = async (jobId) => {
    try {
        const response = await axios.get(`${API_URL}/job/${jobId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching applications: ' + error.message);
    }
};
