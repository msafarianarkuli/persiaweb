"use client";
import { useCategories } from "@/services/hooks/categories/useCategories";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

const FooterModal = ({ onClose }) => {
  const [categorySearch, setCategorySearch] = useState("");
  const { data: categories } = useCategories({ search: categorySearch });
  console.log(categories);
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
            onChange={(e) => setCategorySearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default FooterModal;
