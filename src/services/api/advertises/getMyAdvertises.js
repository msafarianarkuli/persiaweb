import Http from "@/services/HttpConfig";

const getMyAdvertises = async ({ pageParam = 1 }) => {
  const data = await Http.get(`advertises/my/list?page=${pageParam}`);
  return { ...data?.data?.data, prevOffset: pageParam };
};

export default getMyAdvertises;
