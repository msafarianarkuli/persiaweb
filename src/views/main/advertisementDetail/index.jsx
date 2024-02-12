import Container from "@/components/ui/containers/Container";
import AdSummary from "./components/AdSummary";
import CardContainer from "./components/CardContainer";
import AdActions from "./components/AdActions";
import SimilarAds from "./components/SimilarAds";

function AdvertisementDetail() {
  return (
    <Container className='bg-white my-6 md:px-28'>
      <AdSummary />
      <CardContainer className='mt-8 mb-16' />
      <AdActions />
      <SimilarAds />
    </Container>
  );
}

export default AdvertisementDetail;
