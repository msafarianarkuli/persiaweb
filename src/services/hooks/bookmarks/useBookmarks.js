import { useQuery } from "@tanstack/react-query";
import getBookmarks from "@/services/api/bookmarks/getBookmarks";

export const useBookmarks = () => {
  return useQuery({
    queryKey: ["bookmarks"],
    queryFn: getBookmarks,
  });
};
