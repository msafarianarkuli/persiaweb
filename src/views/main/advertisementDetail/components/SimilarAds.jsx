import H1 from "@/components/ui/heading/H1";
import Container from "../../home/components/Container";

function SimilarAds({ data }) {
  return (
    <div className='mt-14'>
      <H1 className='text-center'>آگهی‌های مشابه</H1>
      <Container items={data} bg='bg-[#F8F8F8]' />
    </div>
  );
}

export default SimilarAds;
