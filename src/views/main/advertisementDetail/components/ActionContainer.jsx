"use client";
import { FaBookmark } from "react-icons/fa";
import { BsFillClipboard2CheckFill } from "react-icons/bs";
import ActionCard from "./ActionCard";
import { useRouter } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import addBookmark from "@/services/api/bookmarks/addBookmark";
import toast from "react-hot-toast";
import getProfile from "@/services/api/profile/getProfile";
import { useResume } from "@/services/hooks/resumes/useResume";
import addResume from "@/services/api/resumes/addResume";
function ActionContainer({ data }) {
  const router = useRouter();

  const { data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  const { data: resume } = useResume(profile?.id);

  const { mutate: sendResume } = useMutation({
    mutationKey: ["addResume"],
    mutationFn: addResume,
    onSuccess: (data) => {
      toast.success(data?.message);
    },
  });

  const { mutate } = useMutation({
    mutationKey: ["addBookmark"],
    mutationFn: addBookmark,
    onSuccess: () => {
      toast("آگهی با موفقیت نشان شد");
    },
  });

  const handleSendResume = () => {
    resume
      ? sendResume({ ...resume, resume_id: data.id })
      : router.push("/my-resume");
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
