import H1 from "@/components/ui/heading/H1";
import Container from "../../home/components/Container";
import { ads } from "@/utils/fakeData";

function SimilarAds() {
  return (
    <div className='mt-14'>
      <H1 className='text-center'>آگهی های مشابه</H1>
      <Container items={ads} bg='bg-[#F8F8F8]' />
    </div>
  );
}

export default SimilarAds;
