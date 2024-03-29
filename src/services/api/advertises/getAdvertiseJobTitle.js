import Http from "@/services/HttpConfig";

const getAdvertiseJobTitle = async () => {
  const data = await Http.get(`advertises/job-titles/list`);
  return data?.data?.data;
};

export default getAdvertiseJobTitle;
