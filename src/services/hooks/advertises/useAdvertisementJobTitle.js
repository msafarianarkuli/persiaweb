import { useQuery } from "@tanstack/react-query";
import getAdvertiseJobTitle from "@/services/api/advertises/getAdvertiseJobTitle";

export const useAdvertisementJobTitle = () => {
  return useQuery({
    queryKey: ["advertisesJobTitle"],
    queryFn: () => getAdvertiseJobTitle(),
    select: (data) => {
      return [
        { value: "first", label: data?.first },
        { value: "second", label: data?.second },
        { value: "third", label: data?.third },
      ];
    },
  });
};
