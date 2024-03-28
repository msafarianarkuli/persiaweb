import Http from "@/services/HttpConfig";

const getResume = async (id) => {
  const data = await Http.get(`resumes/${id}`);
  return data?.data?.data;
};

export default getResume;
