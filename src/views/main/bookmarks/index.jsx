"use client";
import H1 from "@/components/ui/heading/H1";
import Container from "../home/components/Container";
import { ads } from "@/utils/fakeData";
import { useBookmarks } from "@/services/hooks/bookmarks/useBookmarks";

function Bookmarks() {
  const { data } = useBookmarks();
  return (
    <main>
      <H1 className='mt-6 ms-2'>نشان شده‌ها</H1>
      <Container items={data?.data} />
    </main>
  );
}

export default Bookmarks;
