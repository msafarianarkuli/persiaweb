import { IoSearch } from "react-icons/io5";

function SearchInput() {
  return (
    <form>
      <div class='relative'>
        <div class='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
          <IoSearch className='text-lg text-text-100' />
        </div>
        <input
          type='search'
          class='block w-full p-4 ps-10 text-sm placeholder::text-[#7a7a7a] outline-none rounded bg-bg-100 focus:ring-blue-500 focus:border-blue-500'
          placeholder='جستجوی...'
          required
        />
      </div>
    </form>
  );
}

export default SearchInput;
