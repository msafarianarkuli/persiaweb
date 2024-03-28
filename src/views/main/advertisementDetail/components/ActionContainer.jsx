"use client";
import { FaBookmark } from "react-icons/fa";
import { BsFillClipboard2CheckFill } from "react-icons/bs";
import ActionCard from "./ActionCard";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import addBookmark from "@/services/api/bookmarks/addBookmark";
import toast from "react-hot-toast";
function ActionContainer({ data }) {
  const router = useRouter();
  const { mutate } = useMutation({
    mutationKey: ["deleteBookmark"],
    mutationFn: deleteBookmark,
    onSuccess: () => {
      toast("آگهی با موفقیت حذف شد");
    },
  });
  const handleSendResume = () => {
    // router.push("/my-resume");
  };

  const handleBookmark = () => {
    mutate({ advertise_id: data.id });
  };

  return (
    <div
      className={`flex flex-col gap-y-6 items-center justify-center w-[343px] h-[200px] sticky top-10`}>
      <ActionCard
        Icon={BsFillClipboard2CheckFill}
        title='ارسال رزومه'
        onClick={handleSendResume}
      />
      <ActionCard
        Icon={FaBookmark}
        title='نشان کردن'
        onClick={handleBookmark}
      />
    </div>
  );
}

export default ActionContainer;
