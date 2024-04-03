import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import getAdvertises from "../../api/advertises/getAdvertises";

export const useAdvertisements = ({ province_id, category_id, search }) => {
  return useInfiniteQuery({
    queryKey: ["advertises", province_id, category_id, search],
    queryFn: ({ pageParam = 1 }) =>
      getAdvertises({ province_id, category_id, search, pageParam }),
    getNextPageParam: (lastPage) => {
      if (lastPage.prevOffset + 1 > lastPage.total) {
        return null;
      }
      return lastPage.prevOffset + 1;
    },
  });
};
