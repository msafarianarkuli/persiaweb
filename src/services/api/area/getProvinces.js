import Http from "@/services/HttpConfig";
import { API } from "@/services/const";

const getProvinces = async ({ search }) => {
  const data = await Http.get(
    `${API.PROVINCES}${search ? `?search=${search}` : ""}?no_page=1`
  );
  return data?.data;
};

export default getProvinces;
