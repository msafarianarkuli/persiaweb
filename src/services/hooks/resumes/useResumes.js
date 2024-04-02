import { useQuery } from "@tanstack/react-query";
import getResumes from "@/services/api/resumes/getResumes";

export const useResumes = (page) => {
  return useQuery({
    queryKey: ["resumes", page],
    queryFn: () => getResumes(page),
  });
};
