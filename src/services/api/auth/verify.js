import Http from "@/services/HttpConfig";
import { API } from "@/services/const";

const verify = async (obj) => {
  let data = await Http.post("verify", obj);
  return data?.data;
};

export default verify;
