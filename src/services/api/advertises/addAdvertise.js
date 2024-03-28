import Http from "@/services/HttpConfig";

const addAdvertise = async (obj) => {
  const data = await Http.post("advertises", obj);
  return data?.data;
};

export default addAdvertise;
