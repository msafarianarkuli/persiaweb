import { useQuery } from "@tanstack/react-query";
import getResumePdf from "@/services/api/resumes/getResumePdf";

export const useResumePdf = (id) => {
  return useQuery({
    queryKey: ["resumePdf", id],
    queryFn: () => getResumePdf(id),
  });
};
