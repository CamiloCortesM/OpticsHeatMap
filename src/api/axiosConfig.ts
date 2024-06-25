import axios, { AxiosInstance } from 'axios';

/**
 * Create an instance of axios with default settings.
 * This instance will be used for making HTTP requests to the API.
 */
export const axiosInstance: AxiosInstance = axios.create({
//   baseURL: 'https://api.flipoeyewear.com/', // Base URL for API requests
  baseURL: 'http://localhost:3005/', // Base URL for API requests
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    'Content-Type': 'application/json', // Content type for requests
    'Accept': 'application/json', // Accepted response format
  },
});