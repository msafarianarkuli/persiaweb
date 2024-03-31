import Http from "@/services/HttpConfig";

const getSetting = async (search) => {
  const data = await Http.get(`settings/${search}`);
  return data?.data?.data;
};

export default getSetting;
