"use client";
import H1 from "@/components/ui/heading/H1";
import Container from "../home/components/Container";
import { useMyAdvertisements } from "@/services/hooks/advertises/useMyAdvertisements";

function MyAdvertisements() {
  const { data } = useMyAdvertisements();
  return (
    <main>
      <H1 className='mt-6'>آگهی‌های من</H1>
      <Container items={data?.data} />
    </main>
  );
}

export default MyAdvertisements;
