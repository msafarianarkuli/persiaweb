import { useQuery, useQueryClient } from "@tanstack/react-query";
import getCategories from "@/services/api/categories/getCategories";

export const useCategories = ({ search }) => {
  return useQuery({
    queryKey: ["categories", search],
    queryFn: () => getCategories({ search }),
  });
};

export const useSelectCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories({ search: null }),
    select: (data) => {
      return data.data?.map((cat) => ({
        value: cat.id,
        label: cat.title,
      }));
    },
  });
};
