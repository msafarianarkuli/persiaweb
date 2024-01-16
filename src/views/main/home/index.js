import H1 from "@/components/ui/heading/H1";
import Container from "./components/Container";
import { ads } from "@/utils/fakeData";

const Home = () => {
  return (
    <main>
      <H1>آگهی‌های شغلی استخدام و کاریابی</H1>
      <Container items={ads} />
    </main>
  );
};

export default Home;
