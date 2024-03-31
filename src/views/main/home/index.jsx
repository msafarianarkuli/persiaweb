"use client";
import Container from "./components/Container";
import { H3 } from "@/components";

import { useAdvertisements } from "@/services/hooks/advertises/useAdvertisments";
import { useSetting } from "@/services/hooks/setting/useSetting";
import { useCommonStore } from "@/store/commonStore";

const Home = () => {
  const province = useCommonStore((state) => state.province);
  const category = useCommonStore((state) => state.category);
  const search = useCommonStore((state) => state.search);
  const { data: website_title } = useSetting("website_title");

  const { data } = useAdvertisements({
    province_id: province.id,
    category_id: category.id,
    search,
  });

  return (
    <main>
      <H3 className='ms-2'>{website_title?.value}</H3>
      <Container items={data?.data} />
    </main>
  );
};

export default Home;
