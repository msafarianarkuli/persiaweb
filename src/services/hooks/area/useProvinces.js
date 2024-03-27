import { useQuery } from "@tanstack/react-query";
import getProvinces from "@/services/api/area/getProvinces";

export const useProvinces = ({ search }) => {
  return useQuery({
    queryKey: ["provinces", search],
    queryFn: () => getProvinces({ search }),
  });
};

export const useSelectProvinces = () => {
  return useQuery({
    queryKey: ["provinces"],
    queryFn: () => getProvinces({ search: null }),
    select: (data) => {
      return data.data?.map((province) => ({
        value: province.id,
        label: province.title,
      }));
    },
  });
};
