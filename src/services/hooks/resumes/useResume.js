import { useQuery } from "@tanstack/react-query";
import getResume from "@/services/api/resumes/getResume";

export const useResume = (id) => {
  return useQuery({
    queryKey: ["resume", id],
    queryFn: () => getResume(id),
  });
};
