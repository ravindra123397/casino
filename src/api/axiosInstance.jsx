import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const TIMEOUT = Number(import.meta.env.VITE_TIMEOUT) || 10000;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const authExcludedPaths = ["/api/admin/login"];

/* REQUEST */
axiosInstance.interceptors.request.use((config) => {
  const isExcluded = authExcludedPaths.some((path) =>
    config.url?.includes(path)
  );

  if (!isExcluded) {
    const token = localStorage.getItem("tokenId");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

/* RESPONSE */
axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.clear();
      window.location.replace("/login");
    }
    return Promise.reject(error);
  }
);
