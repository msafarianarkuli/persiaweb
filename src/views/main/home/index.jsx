"use client";
import Container from "./components/Container";
import { H3 } from "@/components";

import { useAdvertisements } from "@/services/hooks/advertises/useAdvertisments";

const Home = () => {
  const { data } = useAdvertisements();

  return (
    <main>
      <H3 className='ms-2'>آگهی‌های شغلی استخدام و کاریابی</H3>
      <Container items={data?.data} />
    </main>
  );
};

export default Home;
