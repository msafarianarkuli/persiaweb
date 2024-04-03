import Http from "@/services/HttpConfig";

const getAdvertises = async ({
  province_id,
  category_id,
  search,
  pageParam = 1,
}) => {
  const data = await Http.get(
    `advertises?page=${pageParam}${
      province_id ? `&province_id=${province_id}` : ""
    }${category_id ? `&category_id=${category_id}` : ""}${
      search ? `&search=${search}` : ""
    }`
  );
  return { ...data?.data?.data, prevOffset: pageParam };
};

export default getAdvertises;
