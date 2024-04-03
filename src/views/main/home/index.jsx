"use client";
import InfiniteScroll from "react-infinite-scroll-component";
import { H3 } from "@/components";
import { AdCard } from "@/components";
import { useAdvertisements } from "@/services/hooks/advertises/useAdvertisments";
import { useSetting } from "@/services/hooks/setting/useSetting";
import { useCommonStore } from "@/store/commonStore";

const Home = () => {
  const province = useCommonStore((state) => state.province);
  const category = useCommonStore((state) => state.category);
  const search = useCommonStore((state) => state.search);
  const { data: website_title } = useSetting("website_title");

  const { data, fetchNextPage, hasNextPage } = useAdvertisements({
    province_id: province.id,
    category_id: category.id,
    search,
  });

  console.log(data);

  const ads = data?.pages.reduce((acc, page) => {
    return [...acc, ...page?.data];
  }, []);

  return (
    <main>
      <H3 className='ms-2'>{website_title?.value}</H3>
      <InfiniteScroll
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 py-8 px-2 md:px-0'
        dataLength={ads ? ads.length : 0}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<h4>Loading...</h4>}>
        {ads?.map((item) => (
          <AdCard
            item={item}
            key={item?.id}
            bg='bg-white'
            del={false}
            onDel={() => handleDelete(item.id)}
          />
        ))}
      </InfiniteScroll>
    </main>
  );
};

export default Home;
