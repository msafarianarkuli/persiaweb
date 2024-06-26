import H1 from "@/components/ui/heading/H1";
import ResumeForm from "./components/ResumeForm";
import Container from "@/components/ui/containers/Container";

function MyResume() {
  return (
    <Container className='bg-white my-6 text-center md:px-[170px]'>
      <H1>رزومه من</H1>
      <ResumeForm />
    </Container>
  );
}

export default MyResume;
