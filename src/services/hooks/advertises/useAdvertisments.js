import { useQuery } from "@tanstack/react-query";
import getAdvertises from "../../api/advertises/getAdvertises";

export const useAdvertisements = ({ province_id, category_id, search }) => {
  return useQuery({
    queryKey: ["advertises", province_id, category_id, search],
    queryFn: () => getAdvertises({ province_id, category_id, search }),
  });
};
