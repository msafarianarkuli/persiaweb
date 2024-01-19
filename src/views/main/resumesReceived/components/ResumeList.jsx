import { resumes } from "@/utils/fakeData";
import ResumeCard from "./ResumeCard";

function ResumeList() {
  return resumes.map((item) => <ResumeCard key={item.id} title={item.title} />);
}

export default ResumeList;
