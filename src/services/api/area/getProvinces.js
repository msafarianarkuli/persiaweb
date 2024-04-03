import Http from "@/services/HttpConfig";
import { API } from "@/services/const";

const getProvinces = async ({ search }) => {
  const data = await Http.get(
    `${API.PROVINCES}?no_page=1${search ? `&search=${search}` : ""}`
  );
  return data?.data;
};

export default getProvinces;
