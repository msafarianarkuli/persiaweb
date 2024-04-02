import Http from "@/services/HttpConfig";

const getResumes = async (page) => {
  const data = await Http.get(`resumes?page=${page}`);
  return data?.data?.data;
};

export default getResumes;
