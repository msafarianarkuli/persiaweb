import { FaPlus, FaUser } from "react-icons/fa";
import { AiOutlineIdcard } from "react-icons/ai";
import Link from "next/link";

function LeftSide() {
  return (
    <div className='hidden lg:flex gap-x-4 items-center '>
      <div className='ouline-white-button'>
        <FaUser className='text-lg mb-1' />
        پروفایل
      </div>
      <Link href='' className='primary-button font-medium'>
        <FaPlus /> ثبت آگهی
      </Link>
      <Link href='resumes-received' className='secondary-button font-medium'>
        <AiOutlineIdcard className='text-lg' />
        رزومه های دریافتی
      </Link>
    </div>
  );
}

export default LeftSide;
