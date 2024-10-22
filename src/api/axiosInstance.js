import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://profile.kfp-dental.com/api/', // Base URL for your API
});

// Interceptor to add the token to each request
axiosInstance.interceptors.request.use(
    (config) => {
        // Get the token from local storage
        const token = localStorage.getItem('token'); // Make sure token matches your localStorage key

        if (token) {
            config.headers.token = token;  // No need for 'Bearer', just the token itself
        }
        return config;
    },
    (error) => {
        
        return Promise.reject(error);
    }
);

export default axiosInstance;
