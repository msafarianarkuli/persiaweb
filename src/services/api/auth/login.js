import Http from "@/services/HttpConfig";
import { API } from "@/services/const";

const login = async (obj) => {
  let data = await Http.post("login", obj);
  return data?.data;
};

export default login;
