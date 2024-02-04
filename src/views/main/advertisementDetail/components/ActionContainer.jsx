"use client";
import { FaBookmark } from "react-icons/fa";
import { BsFillClipboard2CheckFill } from "react-icons/bs";
import ActionCard from "./ActionCard";
import { useRouter } from "next/navigation";

function ActionContainer() {
  const router = useRouter();

  const handleSendResume = () => {
    router.push("/my-resume");
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
        // onClick={handleSendResume}
      />
    </div>
  );
}

export default ActionContainer;
