import axios, { AxiosInstance } from 'axios';

const httpRequest: AxiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json"
  }
});

httpRequest.interceptors.request.use(
  async config => {
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default httpRequest;