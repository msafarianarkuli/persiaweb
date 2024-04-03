import { useCommonStore } from "@/store/commonStore";
import { useEffect, useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";

function SearchDropDown({ title, Icon, width, items, onChange, onClick }) {
  const dropdownRef = useRef(null);
  const [open, setOpen] = useState(false);

  const province = useCommonStore((state) => state.province);
  const category = useCommonStore((state) => state.category);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickItem = (id, title) => {
    setOpen(false);
    onClick(id, title);
  };
  return (
    <div className='relative' ref={dropdownRef}>
      <button
        className='secondary-button text-primary-blue w-[140px] px-2'
        type='button'
        onClick={handleClick}>
        <Icon className='text-lg' />
        {title === "provinces" ? province.title : category.title}
      </button>
      {open ? (
        <div
          className={`z-10 absolute top-11 bg-white rounded-lg shadow scroll-smooth	 w-[${width}px]`}>
          <div className='p-3'>
            <div className='relative'>
              <div className='absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none'>
                <IoSearch className='text-lg text-text-100' />
              </div>
              <input
                type='text'
                className='block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none placeholder:text-[10px]'
                placeholder='جست‌وجوی...'
                onChange={onChange}
              />
            </div>
          </div>
          <ul className='max-h-48 px-3 pb-3 overflow-y-auto text-xs text-gray-700'>
            {items?.map((item) => (
              <li
                key={item.id}
                onClick={() => handleClickItem(item.id, item.title)}>
                <div className='flex items-center ps-2 rounded hover:bg-gray-100 cursor-pointer'>
                  <span className='w-full py-2 text-text-300 rounded'>
                    {item.title}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default SearchDropDown;
