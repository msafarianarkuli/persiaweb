import Http from "@/services/HttpConfig";

const deleteBookmark = async (id) => {
  const data = await Http.delete(`advertises/bookmarks/${id}`);
  return data?.data;
};

export default deleteBookmark;
