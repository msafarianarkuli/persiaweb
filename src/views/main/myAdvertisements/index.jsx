import H1 from "@/components/ui/heading/H1";
import Container from "../home/components/Container";
import { ads } from "@/utils/fakeData";

function MyAdvertisements() {
  return (
    <main>
      <H1 className='mt-6'>آگهی های من</H1>
      <Container items={ads} />
    </main>
  );
}

export default MyAdvertisements;
