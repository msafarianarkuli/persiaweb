import { meta } from "@/utils/meta";
import Bookmarks from "@/views/main/bookmarks";

export const metadata = {
  title: meta.bookmarks.title,
  description: meta.bookmarks.description,
};

function BookmarksPage() {
  return <Bookmarks />;
}

export default BookmarksPage;
