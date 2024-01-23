import H1 from "@/components/ui/heading/H1";
import AdRegistrationForm from "./components/AdRegistrationForm";
import Container from "@/components/ui/containers/Container";

function AdvertisementRegistration(props) {
  return (
    <Container className='bg-white my-6'>
      <H1 className='text-center'>ثبت آگهی استخدام</H1>
      <AdRegistrationForm />
    </Container>
  );
}

export default AdvertisementRegistration;
