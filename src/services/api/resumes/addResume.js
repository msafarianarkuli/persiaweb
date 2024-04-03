import Http from "@/services/HttpConfig";

const addResume = async (obj) => {
  const data = await Http.post("resumes", obj);
  return data?.data?.data;
};

export default addResume;
