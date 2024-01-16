import { FaRegIdCard } from "react-icons/fa6";
import { FaMapMarkerAlt, FaPlus, FaUser } from "react-icons/fa";
import { BiSolidBriefcaseAlt2 } from "react-icons/bi";

const items = [
  { id: 1, Icon: FaMapMarkerAlt, title: "همه جا" },
  { id: 2, Icon: BiSolidBriefcaseAlt2, title: "همه مشاغل" },
  { id: 3, Icon: FaPlus, title: "ثبت آگهی" },
  { id: 4, Icon: FaRegIdCard, title: "رزومه ها" },
  { id: 5, Icon: FaUser, title: "پروفایل من" },
];

function BottomNavigation(props) {
  return (
    <div className='lg:hidden fixed bottom-0 left-0 z-50 w-full bg-white border-t border-gray-200 py-2'>
      <div className='flex flex-wrap gap-y-4 justify-center max-w-lg mx-auto'>
        {items.map((item) => (
          <button
            type='button'
            className='inline-flex flex-col gap-y-2 items-center justify-center px-5 hover:bg-gray-50'>
            <item.Icon className='w-6 fill-primary-blue text-xl' />
            <span className='text-sm text-primary-blue group-hover:text-primary-blue'>
              {item.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default BottomNavigation;
