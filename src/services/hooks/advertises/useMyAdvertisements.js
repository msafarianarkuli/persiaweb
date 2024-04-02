import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import getMyAdvertises from "@/services/api/advertises/getMyAdvertises";

export const useMyAdvertisements = () => {
  return useInfiniteQuery({
    queryKey: ["advertises/my/list"],
    queryFn: getMyAdvertises,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.prevOffset + 1 > lastPage.total) {
        return "false";
      }
      return lastPage.prevOffset + 1;
    },
  });
};
