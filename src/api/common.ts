import axios, { InternalAxiosRequestConfig, AxiosError } from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL as string,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('Authorization');
    if (token && config.headers) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

export default api;
