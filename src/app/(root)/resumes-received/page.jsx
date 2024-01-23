import { meta } from "@/utils/meta";
import ResumesReceived from "@/views/main/resumesReceived";

export const metadata = {
  title: meta.resumeRecieved.title,
  description: meta.resumeRecieved.description,
};

function ResumesReceivedPage() {
  return <ResumesReceived />;
}

export default ResumesReceivedPage;
