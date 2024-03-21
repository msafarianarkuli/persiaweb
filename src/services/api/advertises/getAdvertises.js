import Http from "@/services/HttpConfig";

const getAdvertises = async () => {
  const data = await Http.get("advertises");
  return data?.data?.data;
};

export default getAdvertises;
