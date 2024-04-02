"use client";
import H1 from "@/components/ui/heading/H1";
import Container from "../home/components/Container";
import InfiniteScroll from "react-infinite-scroll-component";

import { useMyAdvertisements } from "@/services/hooks/advertises/useMyAdvertisements";
import { AdCard } from "@/components";

function MyAdvertisements() {
  const { data, fetchNextPage, hasNextPage } = useMyAdvertisements();
  const ads = data?.pages.reduce((acc, page) => {
    return [...acc, ...page?.data];
  }, []);
  const handleDelete = () => {};
  return (
    <main>
      <H1 className='mt-6'>آگهی‌های من</H1>
      <InfiniteScroll
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 py-8 px-2 md:px-0'
        dataLength={ads ? ads.length : 0}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={hasNextPage ? <h4>Loading...</h4> : null}>
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
}

export default MyAdvertisements;
