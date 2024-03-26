import Http from "@/services/HttpConfig";

const getResumes = async () => {
  const data = await Http.get(`resumes`);
  return data?.data?.data;
};

export default getResumes;
