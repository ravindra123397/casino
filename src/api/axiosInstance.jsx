// import axios from "axios";

// const BASE_URL = import.meta.env.VITE_BASE_URL;
// const TIMEOUT = Number(import.meta.env.VITE_TIMEOUT) || 10000;

// export const axiosInstance = axios.create({
//   baseURL: BASE_URL,
//   timeout: TIMEOUT,
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
// });

// const authExcludedPaths = ["/api/admin/login"];

// /* REQUEST */
// axiosInstance.interceptors.request.use((config) => {
//   const isExcluded = authExcludedPaths.some((path) =>
//     config.url?.includes(path)
//   );

//   if (!isExcluded) {
//     const token =
//         localStorage.getItem("adminToken") ||
//         localStorage.getItem("tokenId");

//         console.log("🔐 ADMIN TOKEN:", token);
//     // console.log("👤 USER TOKEN:", userToken);
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//   }
//   return config;
// });

// /* RESPONSE */
// axiosInstance.interceptors.response.use(
//   (res) => res,
//   (error) => {
//     if (error.response?.status === 401) {
//       localStorage.clear();
//       window.location.replace("/login");
//     }
//     return Promise.reject(error);
//   }
// );



import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const authExcludedPaths = ["/api/admin/login"];

/* ================= REQUEST ================= */
axiosInstance.interceptors.request.use(
  (config) => {
    const skipAuth = authExcludedPaths.some(
      (path) => config.url && config.url.includes(path)
    );

    if (!skipAuth) {
      const token = localStorage.getItem("tokenId");

      if (token) {
        config.headers.Authorization = `Bearer ${token.trim()}`;
        console.log("✅ TOKEN SENT:", token);
      } else {
        console.warn("❌ NO TOKEN FOUND");
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/* ================= RESPONSE ================= */
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("❌ API ERROR:", error.response?.data || error.message);

    if (error.response?.status === 401) {
      localStorage.clear();
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);
