import { useQuery } from "@tanstack/react-query";
import getResumes from "@/services/api/resumes/getResumes";

export const useResumes = () => {
  return useQuery({
    queryKey: ["resumes"],
    queryFn: () => getResumes(),
  });
};
