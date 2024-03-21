import axios from "axios";

const baseURL = "https://ja.p65.ir/api/";

const Http = axios.create({ baseURL });

Http.interceptors.request.use((config) => {
  config.headers.Accept = "application/json";
  //   config.headers.Authorization = 'Bearer ' + cookies.get('token');

  config.headers["Content-Type"] = "application/json";

  return config;
});

export default Http;
