import Link from "next/link";
import { FaPlus, FaUser } from "react-icons/fa";
import { AiOutlineIdcard } from "react-icons/ai";
import { LuBellRing } from "react-icons/lu";
import usePrivateLink from "@/hooks/usePrivateLink";
import { useSession } from "next-auth/react";

function LeftSide() {
  const { status } = useSession();
  const notif = true;
  const profile = usePrivateLink({ link: "/profile" });
  const resumes = usePrivateLink({ link: "/resumes-received" });
  return (
    <div className='hidden lg:flex gap-x-4 items-center '>
      <Link href={profile} className='ouline-white-button'>
        <FaUser className='text-lg mb-1' />
        {status === "authenticated" ? "پروفایل" : "ورود"}
      </Link>
      {status === "authenticated" ? (
        <>
          <Link
            href='/advertisement-registration'
            className='primary-button font-medium'>
            <FaPlus /> ثبت آگهی
          </Link>
          <div className='relative'>
            <Link
              href={resumes}
              className={`secondary-button font-medium ${
                notif
                  ? "border border-red-500 bg-white hover:bg-bg-100 hover:text-text-200"
                  : ""
              }`}>
              <AiOutlineIdcard className='text-lg' />
              رزومه‌های دریافتی
            </Link>
            {notif && (
              <span className='flex justify-center items-center absolute -top-2 -right-2 bg-red-500 text-white w-[20px] h-[20px] rounded-full'>
                <LuBellRing />
              </span>
            )}
          </div>
        </>
      ) : null}
    </div>
  );
}

export default LeftSide;
