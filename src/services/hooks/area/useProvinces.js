import { useQuery } from "@tanstack/react-query";
import getProvinces from "@/services/api/area/getProvinces";

const useProvinces = ({ search }) => {
  return useQuery({
    queryKey: ["provinces", search],
    queryFn: () => getProvinces({ search }),
  });
};

export default useProvinces;
