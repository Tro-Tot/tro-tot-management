import axios, { AxiosInstance } from 'axios';

const publicAxiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default publicAxiosInstance;
