import axios from "axios";
// import { getToken } from "../helpers/token";

const apiUrl = "http://localhost:5237";

export const api = axios.create({
  baseURL: `${apiUrl}/api`
});

// api.interceptors.request.use(config => {
//   const token = getToken();
//   if (token) {
//     config.headers["Authorization"] = "Bearer " + token;
//   }
//   return config;
// }, error => {
//   return Promise.reject(error);
// });