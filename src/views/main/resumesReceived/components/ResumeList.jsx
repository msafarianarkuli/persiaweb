import ResumeCard from "./ResumeCard";
import { useResumes } from "@/services/hooks/resumes/useResumes";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useResumeStore } from "@/store/resumeStore";

function ResumeList({ onOpen }) {
  const router = useRouter();
  const page = useResumeStore((state) => state.page);
  const { data, isSuccess, refetch } = useResumes(page);
  useEffect(() => {
    if (isSuccess) {
      router.push(`?resume_id=${data?.data?.[0]?.id}`);
      refetch();
    }
  }, [isSuccess]);

  return data?.data?.map((item, index) => (
    <ResumeCard
      key={item.id}
      title={item.full_name + " | " + item.advertise.job_title}
      last={data?.data?.length - 1 === index}
      onOpen={onOpen}
      item={item}
    />
  ));
}

export default ResumeList;
