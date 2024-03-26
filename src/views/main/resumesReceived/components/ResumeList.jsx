import { resumes } from "@/utils/fakeData";
import ResumeCard from "./ResumeCard";
import { useResumes } from "@/services/hooks/resumes/useResumes";

function ResumeList({ onOpen }) {
  const { data } = useResumes();
  console.log(data);
  return resumes.map((item, index) => (
    <ResumeCard
      key={item.id}
      title={item.title}
      last={resumes.length - 1 === index}
      onOpen={onOpen}
    />
  ));
}

export default ResumeList;
