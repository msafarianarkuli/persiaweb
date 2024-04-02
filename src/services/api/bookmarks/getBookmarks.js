import Http from "@/services/HttpConfig";

const getBookmarks = async ({ pageParam = 1 }) => {
  const data = await Http.get(`advertises/bookmarks?page=${pageParam}`);
  return { ...data?.data?.data, prevOffset: pageParam };
};

export default getBookmarks;
