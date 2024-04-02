import { useResumeStore } from "@/store/resumeStore";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

function Pagination() {
  const increasepage = useResumeStore((state) => state.increasepage);
  const decreasepage = useResumeStore((state) => state.decreasepage);

  return (
    <div className='bg-white h-[40px] flex justify-between items-center py-8'>
      <div
        className='flex items-center gap-x-2 cursor-pointer'
        onClick={() => increasepage()}>
        <FaAngleRight className='text-2xl text-text-300' />
        <span className='font-light text-sm text-text-300'>
          رزومه‌های قدیمی‌تر
        </span>
      </div>
      <span className='block w-[1px] h-[20px] bg-text-300'></span>
      <div
        className='flex items-center gap-x-2 cursor-pointer'
        onClick={() => decreasepage()}>
        <span className='font-light text-sm text-text-300'>
          رزومه‌های جدیدتر
        </span>
        <FaAngleLeft className='text-2xl text-text-300' />
      </div>
    </div>
  );
}

export default Pagination;
