import Container from "@/components/ui/containers/Container";
import ResumeDetail from "./components/ResumeDetail";
import ResumeList from "./components/ResumeList";

function ResumesReceived() {
  return (
    <Container className='bg-white my-6'>
      <div className='grid grid-cols-3 gap-x-6'>
        <Container className='bg-bg-100 col-span-3 lg:col-span-1 pt-0'>
          <ResumeList />
        </Container>
        <Container className='bg-bg-100 col-span-2 hidden lg:block'>
          <ResumeDetail />
        </Container>
      </div>
    </Container>
  );
}

export default ResumesReceived;
