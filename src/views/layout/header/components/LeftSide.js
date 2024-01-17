import { FaPlus, FaUser } from "react-icons/fa";
import { AiOutlineIdcard } from "react-icons/ai";

function LeftSide() {
  return (
    <div className='hidden lg:flex gap-x-4 items-center '>
      <div className='ouline-white-button'>
        <FaUser className='text-lg mb-1' />
        پروفایل
      </div>
      <button type='button' className='primary-button font-medium'>
        <FaPlus /> ثبت آگهی
      </button>
      <button type='button' className='secondary-button font-medium'>
        <AiOutlineIdcard className='text-lg' />
        رزومه های دریافتی
      </button>
    </div>
  );
}

export default LeftSide;
