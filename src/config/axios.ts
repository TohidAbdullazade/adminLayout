import axios, { InternalAxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

// Variables
const BASE_URL = process.env.REACT_APP_BASE_URL;

// Admin Interceptor
export const AdminInterceptor = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: Cookies.get("accessToken"),
  },
});

// Admin Interceptor for request
AdminInterceptor.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    config.headers.Authorization = Cookies.get("accessToken");

    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      config.headers["Content-Type"] = "application/json";
    }
    return config;
  }
);

// Admin Interceptor for response
AdminInterceptor.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      Cookies.remove("accessToken");
      window.location.href = "/login";
    } else if (response.status === 400) {
      console.log(response.statusText);
      return Promise.reject(response.statusText);
    };

    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
