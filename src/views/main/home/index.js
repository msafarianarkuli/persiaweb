import AdCard from "../../../components/common/AdCard";

const items = [
  { title: "آشپز", description: "کارخانه فولاد" },
  { title: "آشپز", description: "کارخانه فولاد" },
  { title: "آشپز", description: "کارخانه فولاد" },
  { title: "آشپز", description: "کارخانه فولاد" },
  { title: "آشپز", description: "کارخانه فولاد" },
  { title: "آشپز", description: "کارخانه فولاد" },
  { title: "آشپز", description: "کارخانه فولاد" },
];

const Home = () => {
  return (
    <main>
      <h1 className='text-3xl text-primary-blue font-semibold py-8'>
        آگهی‌های شغلی استخدام و کاریابی
      </h1>
      <div className='grid grid-cols-3 gap-8'>
        {items.map((item) => (
          <AdCard item={item} />
        ))}
      </div>
    </main>
  );
};

export default Home;
