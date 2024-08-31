import axios from "axios";
import axiosRetry from "axios-retry";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

axiosRetry(api, {
  retries: 3,
  retryDelay: axiosRetry.exponentialDelay,
});

export default api;
