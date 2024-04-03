import Http from "@/services/HttpConfig";

const editResume = async ({ id, obj }) => {
  const data = await Http.patch(`resumes/${id}`, obj);
  return data?.data?.data;
};

export default editResume;
