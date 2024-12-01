import axios from 'axios';
import { ACCESS_TOKEN } from '@/constants';
import Cookies from 'js-cookie';

// Create an instance of Axios
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/",
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Axios instance for requests requiring authentication
const authApiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add an interceptor to attach tokens to authenticated requests
authApiClient.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem(ACCESS_TOKEN);
    const token = Cookies.get(ACCESS_TOKEN)

    console.log("token", Cookies.get(ACCESS_TOKEN));
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { apiClient, authApiClient };