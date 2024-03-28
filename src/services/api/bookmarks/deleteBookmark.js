import Http from "@/services/HttpConfig";

const deleteBookmark = async (id) => {
  const data = await Http.delete(`advertises/bookmarkss/${id}`);
  return data?.data;
};

export default deleteBookmark;
