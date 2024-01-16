import { FaPlus, FaUser } from "react-icons/fa";
import { AiOutlineIdcard } from "react-icons/ai";

function LeftSide() {
  return (
    <div className='hidden lg:flex gap-x-4 items-center '>
      <div className='flex items-center gap-x-2 cursor-pointer'>
        <FaUser className='text-lg mb-1' />
        پروفایل
      </div>
      <button
        type='button'
        className='text-white bg-primary-blue font-medium px-5 py-2.5 me-2 mb-2 flex items-center rounded gap-x-2'>
        <FaPlus /> ثبت آگهی
      </button>
      <button
        type='button'
        className='text-text-200 bg-bg-200 font-medium px-5 py-2.5 me-2 mb-2 flex items-center rounded gap-x-2'>
        <AiOutlineIdcard className='text-lg' />
        رزومه های دریافتی
      </button>
    </div>
  );
}

export default LeftSide;
