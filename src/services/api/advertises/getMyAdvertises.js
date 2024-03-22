import Http from "@/services/HttpConfig";

const getMyAdvertises = async () => {
  const data = await Http.get("advertises/my/list");
  return data?.data?.data;
};

export default getMyAdvertises;
