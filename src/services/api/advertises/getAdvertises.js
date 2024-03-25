import Http from "@/services/HttpConfig";

const getAdvertises = async ({ province_id, category_id, search }) => {
  const data = await Http.get(
    `advertises?page=1${province_id ? `&province_id=${province_id}` : ""}${
      category_id ? `&category_id=${category_id}` : ""
    }${search ? `&search=${search}` : ""}`
  );
  return data?.data?.data;
};

export default getAdvertises;
