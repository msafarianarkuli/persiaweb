"use client";
import H1 from "@/components/ui/heading/H1";
import Container from "../home/components/Container";
import { useMyAdvertisements } from "@/services/hooks/advertises/useMyAdvertisements";
import { AdCard } from "@/components";

function MyAdvertisements() {
  const { data } = useMyAdvertisements();
  console.log(data);
  const handleDelete = () => {};
  return (
    <main>
      <H1 className='mt-6'>آگهی‌های من</H1>
      {/* <Container items={data?.data} /> */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 py-8 px-2 md:px-0'>
        {data?.data?.map((item) => (
          <AdCard
            item={item}
            key={item?.id}
            bg='bg-white'
            del={false}
            onDel={() => handleDelete(item.id)}
          />
        ))}
      </div>
    </main>
  );
}

export default MyAdvertisements;
