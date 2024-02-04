import AdCard from "@/components/common/AdCard";

function Container({ items, bg }) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-8 py-8 px-2 md:px-0'>
      {items.map((item) => (
        <AdCard item={item} key={item.id} bg={bg} />
      ))}
    </div>
  );
}

export default Container;
