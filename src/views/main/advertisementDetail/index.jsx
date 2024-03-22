"use client";
import Container from "@/components/ui/containers/Container";
import AdSummary from "./components/AdSummary";
import CardContainer from "./components/CardContainer";
import AdActions from "./components/AdActions";
import SimilarAds from "./components/SimilarAds";
import { useAdvertisement } from "@/services/hooks/advertises/useAdvertisment";
import { usePathname } from "next/navigation";

function AdvertisementDetail() {
  const path = usePathname();
  const slug = path.split("/")[2];
  const { data } = useAdvertisement(slug);
  console.log(data);
  return (
    <Container className='bg-white my-6 md:px-28'>
      <AdSummary data={data?.object} />
      <CardContainer className='mt-8 mb-16' data={data?.object} />
      <AdActions data={data?.object} />
      <SimilarAds data={data?.related_advertises} />
    </Container>
  );
}

export default AdvertisementDetail;
