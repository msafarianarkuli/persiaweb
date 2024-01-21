import H1 from "@/components/ui/heading/H1";
import ResumeForm from "./components/ResumeForm";
import H4 from "@/components/ui/heading/H4";
import Container from "@/components/ui/containers/Container";

function MyResume() {
  return (
    <Container className='bg-white my-6 text-center'>
      <H1>رزومه من</H1>
      <H4>برای آگهی استخدام مهندس برق شرکت ایکس وای زد</H4>
      <ResumeForm />
    </Container>
  );
}

export default MyResume;
