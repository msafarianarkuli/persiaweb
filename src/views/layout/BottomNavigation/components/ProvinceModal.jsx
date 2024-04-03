"use client";
import { useProvinces } from "@/services/hooks/area/useProvinces";
import { useCommonStore } from "@/store/commonStore";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

const ProvinceModal = ({ onClose }) => {
  const [provinceSearch, setProvinceSearch] = useState("");
  const { data: provinces } = useProvinces({ search: provinceSearch });
  const setProvince = useCommonStore((state) => state.setProvince);

  const handleOnClick = (id, title) => {
    setProvince(id, title);
    onClose();
  };
  return (
    <div className='py-12 px-20 relative z-50'>
      <div className='p-3'>
        <div className='relative'>
          <div className='absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none'>
            <IoSearch className='text-lg text-text-100' />
          </div>
          <input
            type='text'
            className='block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none placeholder:text-[10px]'
            placeholder='جست‌وجوی...'
            onChange={(e) => setProvinceSearch(e.target.value)}
          />
        </div>
      </div>
      <div class='text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded w-full'>
        {provinces?.map((cat) => (
          <div
            onClick={() => handleOnClick(cat?.id, cat?.title)}
            className='block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700'>
            {cat?.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProvinceModal;
