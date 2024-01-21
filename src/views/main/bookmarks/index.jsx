import H1 from "@/components/ui/heading/H1";
import Container from "../home/components/Container";
import { ads } from "@/utils/fakeData";

function Bookmarks() {
  return (
    <main>
      <H1>نشان شده ها</H1>
      <Container items={ads} />
    </main>
  );
}

export default Bookmarks;
