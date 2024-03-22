import { useQuery } from "@tanstack/react-query";
import getMyAdvertises from "@/services/api/advertises/getMyAdvertises";

export const useMyAdvertisements = () => {
  return useQuery({
    queryKey: ["advertises/my/list"],
    queryFn: getMyAdvertises,
  });
};
