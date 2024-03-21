import { useQuery } from "@tanstack/react-query";
import getCategories from "@/services/api/categories/getCategories";

const useCategories = ({ search }) => {
  return useQuery({
    queryKey: ["categories", search],
    queryFn: () => getCategories({ search }),
  });
};

export default useCategories;
