import Http from "@/services/HttpConfig";
import { API } from "@/services/const";

const getCategories = async ({ search }) => {
  const data = await Http.get(
    `${API.CATEGORIES}${search ? `?search=${search}` : ""}?no_page=1`
  );
  return data?.data;
};

export default getCategories;
