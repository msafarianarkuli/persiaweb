import { meta } from "@/utils/meta";
import Home from "@/views/main/home";

export const metadata = {
  title: meta.main.title,
  description: meta.main.description,
};

const HomePage = () => {
  return <Home />;
};

export default HomePage;
