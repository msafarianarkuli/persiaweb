"use client";
import toast from "react-hot-toast";
import H1 from "@/components/ui/heading/H1";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useBookmarks } from "@/services/hooks/bookmarks/useBookmarks";
import { AdCard } from "@/components";
import deleteBookmark from "@/services/api/bookmarks/deleteBookmark";

function Bookmarks() {
  const { data } = useBookmarks();
  const queryClient = useQueryClient();

  const { mutate, data: bookmark } = useMutation({
    mutationKey: ["deleteBookmark"],
    mutationFn: deleteBookmark,
    onSuccess: (data) => {
      queryClient.invalidateQueries("bookmarks");
      toast(data?.data);
    },
  });

  const handleDelete = (id) => {
    mutate(id);
  };

  return (
    <main>
      <H1 className='mt-6 ms-2'>نشان شده‌ها</H1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 py-8 px-2 md:px-0'>
        {data?.data?.map((item) => (
          <AdCard
            item={item?.advertise}
            key={item.id}
            bg='bg-white'
            del={true}
            onDel={() => handleDelete(item.id)}
          />
        ))}
      </div>
    </main>
  );
}

export default Bookmarks;
