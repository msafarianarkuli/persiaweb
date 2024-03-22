import Http from "@/services/HttpConfig";

const getAdvertise = async (slug) => {
  const data = await Http.get(`advertises/${slug}`);
  return data?.data?.data;
};

export default getAdvertise;
