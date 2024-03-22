import getAdvertise from "@/services/api/advertises/getAdvertise";
import { useQuery } from "@tanstack/react-query";

export const useAdvertisement = (slug) => {
  return useQuery({
    queryKey: ["advertises", slug],
    queryFn: () => getAdvertise(slug),
  });
};
