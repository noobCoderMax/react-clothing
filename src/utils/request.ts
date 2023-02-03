import axios from "axios";

const request = axios.create({
  baseURL: "",
  timeout: 5000,
});

request.interceptors.request.use();

request.interceptors.response.use();

export default request;
