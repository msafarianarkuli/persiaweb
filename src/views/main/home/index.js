import AdCard from "../../../components/common/AdCard";

const items = [
  { id: 1, title: "آشپز", description: "کارخانه فولاد" },
  { id: 2, title: "آشپز", description: "کارخانه فولاد" },
  { id: 3, title: "آشپز", description: "کارخانه فولاد" },
  { id: 4, title: "آشپز", description: "کارخانه فولاد" },
  { id: 5, title: "آشپز", description: "کارخانه فولاد" },
  { id: 6, tsitle: "آشپز", description: "کارخانه فولاد" },
  { id: 7, title: "آشپز", description: "کارخانه فولاد" },
];

const Home = () => {
  return (
    <main>
      <h1 className='text-3xl text-primary-blue font-semibold pt-8'>
        آگهی‌های شغلی استخدام و کاریابی
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-8 py-8'>
        {items.map((item) => (
          <AdCard item={item} key={item.id} />
        ))}
      </div>
    </main>
  );
};

export default Home;
