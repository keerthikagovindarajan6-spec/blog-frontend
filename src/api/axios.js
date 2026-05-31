import axios from "axios";

const API = axios.create({
  baseURL: "https://blog-backend-5-ut7k.onrender.com",
});

export default API;
