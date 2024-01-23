import { resumes } from "@/utils/fakeData";
import ResumeCard from "./ResumeCard";

function ResumeList({ onOpen }) {
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
