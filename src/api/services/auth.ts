// src/api/auth.ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

interface AuthResponse {
  token: string;
}

// Placeholder for your token and function to check if the token is expiring
let accessToken: string | null = localStorage.getItem('accessToken'); // Assume you have a way to get the current access token

// Function to check if the token is expiring
const isTokenExpiring = (token: string | null): boolean => {
  // Your logic to check if the token is expiring
  return false; // Replace with actual logic
};

const privateAxiosInstance: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:3000/auth', // Auth API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
privateAxiosInstance.interceptors.request.use(async (config: any) => {
  if (accessToken && isTokenExpiring(accessToken)) {
    try {
      const newAccessToken = await refreshToken();
      accessToken = newAccessToken.token;
      localStorage.setItem('accessToken', newAccessToken.token);
      config.headers.Authorization = `Bearer ${newAccessToken.token}`;
    } catch (error) {
      // Handle refresh token error
      throw error;
    }
  } else if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

// Response Interceptor
privateAxiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log('response', response);
    return response;
  },
  async (error) => {
    console.log('error', error);
    if (error.response && error.response.status === 403) {
      console.log('403 error');
      try {
        const newAccessToken = await refreshToken();
        accessToken = newAccessToken.token;
        localStorage.setItem('accessToken', newAccessToken.token); // Save new token to local storage
        const originalRequest = error.config;
        originalRequest.headers.Authorization = `Bearer ${newAccessToken.token}`;
        return await privateAxiosInstance(originalRequest);
      } catch (error_1) {
        // Handle refresh token error or redirect to login
        throw error_1;
      }
    }
    return Promise.reject(error);
  }
);

export async function refreshToken(): Promise<AuthResponse> {
  try {
    console.log('refreshToken');
    const response = await axios.post(
      'http://localhost:5000/auth/refresh',
      null,
      {
        withCredentials: true,
      }
    );
    console.log('response from refreshapi ', response);
    return response.data; // Assuming response contains the new access token
  } catch (error) {
    console.error('Error refreshing token:', error);
    throw error; // Propagate error to caller
  }
}

export default privateAxiosInstance;
