import axios, { InternalAxiosRequestConfig, AxiosError } from 'axios';

export const http = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL as string,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

http.interceptors.request.use(
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

export const handleError = (error: AxiosError) => {
  if (error.response) {
    const errorMessage =
      error.response.data && typeof error.response.data === 'object' && 'message' in error.response.data
        ? String(error.response.data.message)
        : '알 수 없는 오류가 발생했습니다.';
    throw new Error(errorMessage);
  } else if (error.request) {
    throw new Error('서버 오류');
  } else {
    throw new Error('요청 중 오류가 발생했습니다.');
  }
};
