import { FaPlus, FaUser } from "react-icons/fa";

function LeftSide() {
  return (
    <div className='flex gap-x-4 items-center'>
      <div className='flex items-center gap-x-2 cursor-pointer'>
        <FaUser />
        پروفایل
      </div>
      <button
        type='button'
        className='text-white bg-primary-blue font-medium px-5 py-2.5 me-2 mb-2 flex items-center rounded gap-x-2'>
        <FaPlus /> ثبت آگهی
      </button>
      <button
        type='button'
        className='text-text-200 bg-[#E2E2E2] font-medium px-5 py-2.5 me-2 mb-2 flex items-center rounded gap-x-2'>
        رزومه های دریافتی
      </button>
    </div>
  );
}

export default LeftSide;
