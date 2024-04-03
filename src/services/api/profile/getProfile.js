import Http from "@/services/HttpConfig";

const getProfile = async () => {
  const data = await Http.get(`profile`);
  return data?.data?.data;
};

export default getProfile;
