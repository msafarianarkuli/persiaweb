import { meta } from "@/utils/meta";
import MyResume from "@/views/main/myResume";

export const metadata = {
  title: meta.myResume.title,
  description: meta.myResume.description,
};

function MyResumePage() {
  return <MyResume />;
}

export default MyResumePage;
