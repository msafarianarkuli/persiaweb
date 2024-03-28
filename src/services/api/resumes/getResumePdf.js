import Http from "@/services/HttpConfig";

const getResumePdf = async (id) => {
  const data = await Http.get(`resumes/download/${id}`);
  return data?.data?.data;
};

export default getResumePdf;
