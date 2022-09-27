import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

//testing locally backend will run on 5000
export default axios.create({
  baseURL: BASE_URL,
});

//to refresh tokens in background
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
