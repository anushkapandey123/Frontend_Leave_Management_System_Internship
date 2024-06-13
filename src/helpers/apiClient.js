import axios from 'axios';
 
// Create an Axios instance
const apiClient = axios.create({
    baseURL: 'http://localhost:8080', // Update with your backend base URL
});
 
// Add a request interceptor to include the token in the headers
apiClient.interceptors.request.use(
    config => {
        const token = localStorage.getItem('jwtToken'); // Retrieve the token from local storage
        if (token) {
            // config.headers.Authorization = `Bearer ${token}`; // Set the Authorization header
            config.headers.Authorization = "Bearer " + token;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
 
export default apiClient;