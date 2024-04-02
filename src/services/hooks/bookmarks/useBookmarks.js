import { useInfiniteQuery } from "@tanstack/react-query";
import getBookmarks from "@/services/api/bookmarks/getBookmarks";

export const useBookmarks = () => {
  return useInfiniteQuery({
    queryKey: ["bookmarks"],
    queryFn: getBookmarks,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.prevOffset + 1 > lastPage.total) {
        return "false";
      }
      return lastPage.prevOffset + 1;
    },
  });
};
