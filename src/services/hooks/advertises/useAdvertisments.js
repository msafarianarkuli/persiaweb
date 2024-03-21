import { useQuery } from "@tanstack/react-query";
import getAdvertises from "../../api/advertises/getAdvertises";

export const useAdvertisements = () => {
  return useQuery({
    queryKey: ["advertises"],
    queryFn: getAdvertises,
  });
};
