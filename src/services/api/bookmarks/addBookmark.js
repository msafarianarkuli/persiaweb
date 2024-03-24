import Http from "@/services/HttpConfig";

const addBookmark = async (id) => {
  const data = await Http.post("advertises/bookmarks", id);
  return data?.data?.data;
};

export default addBookmark;
