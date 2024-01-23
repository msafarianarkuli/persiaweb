import H3 from "@/components/ui/heading/H3";
import Container from "./components/Container";
import { ads } from "@/utils/fakeData";

const Home = () => {
  return (
    <main>
      <H3 className='mt-6 ms-2'>آگهی‌های شغلی استخدام و کاریابی</H3>
      <Container items={ads} />
    </main>
  );
};

export default Home;
