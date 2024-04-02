import Http from "@/services/HttpConfig";
import { API } from "@/services/const";

const getCategories = async ({ search }) => {
  const data = await Http.get(
    `${API.CATEGORIES}?no_page=1${search ? `&search=${search}` : ""}`
  );
  return data?.data;
};

export default getCategories;
