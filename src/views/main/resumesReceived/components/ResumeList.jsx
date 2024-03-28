import { resumes } from "@/utils/fakeData";
import ResumeCard from "./ResumeCard";
import { useResumes } from "@/services/hooks/resumes/useResumes";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function ResumeList({ onOpen }) {
  const router = useRouter();
  const { data, isSuccess } = useResumes();

  useEffect(() => {
    if (isSuccess) {
      router.push(`?resume_id=${data?.data?.[0]?.id}`);
    }
  }, [isSuccess]);

  return data?.data?.map((item, index) => (
    <ResumeCard
      key={item.id}
      id={item.id}
      title={item.user.full_name + " | " + item.advertise.job_title}
      last={data?.data?.length - 1 === index}
      onOpen={onOpen}
    />
  ));
}

export default ResumeList;
