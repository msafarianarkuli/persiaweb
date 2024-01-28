import Link from "next/link";
import { FaPlus, FaUser } from "react-icons/fa";
import { AiOutlineIdcard } from "react-icons/ai";
import { LuBellRing } from "react-icons/lu";

function LeftSide() {
  const notif = true;
  return (
    <div className='hidden lg:flex gap-x-4 items-center '>
      <Link href='profile' className='ouline-white-button'>
        <FaUser className='text-lg mb-1' />
        پروفایل
      </Link>
      <Link
        href='advertisement-registration'
        className='primary-button font-medium'>
        <FaPlus /> ثبت آگهی
      </Link>
      <div className='relative'>
        <Link
          href='resumes-received'
          className={`secondary-button font-medium ${
            notif
              ? "border border-red-500 bg-white hover:bg-bg-100 hover:text-text-200"
              : ""
          }`}>
          <AiOutlineIdcard className='text-lg' />
          رزومه های دریافتی
        </Link>
        {notif && (
          <span className='flex justify-center items-center absolute -top-2 -right-2 bg-red-500 text-white w-[20px] h-[20px] rounded-full'>
            <LuBellRing />
          </span>
        )}
      </div>
    </div>
  );
}

export default LeftSide;
