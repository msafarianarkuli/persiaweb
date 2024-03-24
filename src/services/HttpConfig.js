import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "https://ja.p65.ir/api/";

const Http = axios.create({ baseURL });

Http.interceptors.request.use((config) => {
  config.headers.Authorization = "Bearer " + Cookies.get("token");
  config.headers.Accept = "application/json";
  config.headers["Content-Type"] = "application/json";

  return config;
});

export default Http;
