import Container from "@/components/ui/containers/Container";
import H1 from "@/components/ui/heading/H1";
import VerifyForm from "./components/VerifyForm";

function Verify() {
  return (
    <Container className='bg-white mt-32 text-center'>
      <div className='max-w-sm mx-auto'>
        <H1 className='mb-8'>صحت سنجی شماره تماس</H1>
        <VerifyForm />
      </div>
    </Container>
  );
}

export default Verify;
