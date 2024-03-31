import { useQuery } from "@tanstack/react-query";
import getSetting from "@/services/api/setting/setting";

export const useSetting = (key) => {
  return useQuery({
    queryKey: ["setting", key],
    queryFn: () => getSetting(key),
  });
};
