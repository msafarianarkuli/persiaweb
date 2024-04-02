import Http from "@/services/HttpConfig";

const getBookmarks = async () => {
  const data = await Http.get("advertises/bookmarks");
  return data?.data?.data;
};

export default getBookmarks;
