import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  (config) => {
    // The global configuration should be added here.
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) console.error("Error response:", error.response);
    else if (error.request) console.error("Error request:", error.request);
    else console.error("Error message:", error.message);

    return Promise.reject(error);
  }
);

export default api;
