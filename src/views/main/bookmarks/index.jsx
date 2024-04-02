"use client";
import toast from "react-hot-toast";
import InfiniteScroll from "react-infinite-scroll-component";
import H1 from "@/components/ui/heading/H1";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useBookmarks } from "@/services/hooks/bookmarks/useBookmarks";
import { AdCard } from "@/components";
import deleteBookmark from "@/services/api/bookmarks/deleteBookmark";

function Bookmarks() {
  const { data, fetchNextPage, hasNextPage } = useBookmarks();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["deleteBookmark"],
    mutationFn: deleteBookmark,
    onMutate: async (deletedBookmark) => {
      queryClient.setQueryData(["bookmarks"], (oldData) => {
        const filteredBookmarks = oldData?.data?.filter(
          (bookmark) => bookmark.id !== deletedBookmark
        );
        return {
          data: filteredBookmarks,
        };
      });

      return deletedBookmark;
    },
    onError: (err, deletedBookmark) => {
      queryClient.setQueryData(["bookmarks"], (oldData) => {
        const prevBookmarks = queryClient.getQueryData(["bookmarks"]);
        return prevBookmarks;
      });
      toast.error("حذف آگهی نشان شده با مشکل مواجه شد");
    },
    onSettled: (deletedBookmark) => {
      queryClient.invalidateQueries(["bookmarks"]);
      toast.success("آگهی نشان شده با موفقیت حذف شد");
    },
  });
  const bookmarks = data?.pages.reduce((acc, page) => {
    return [...acc, ...page?.data];
  }, []);
  console.log(hasNextPage);

  const handleDelete = (id) => {
    mutate(id);
  };

  return (
    <main>
      <H1 className='mt-6 ms-2'>نشان شده‌ها</H1>
      <InfiniteScroll
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 py-8 px-2 md:px-0'
        dataLength={bookmarks ? bookmarks.length : 0}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={hasNextPage ? <h4>Loading...</h4> : null}>
        {bookmarks?.map((item) => (
          <AdCard
            item={item?.advertise}
            key={item.id}
            bg='bg-white'
            del={true}
            onDel={() => handleDelete(item.id)}
          />
        ))}
      </InfiniteScroll>
    </main>
  );
}

export default Bookmarks;
