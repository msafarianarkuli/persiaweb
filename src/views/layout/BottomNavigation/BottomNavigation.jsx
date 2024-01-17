import { FaRegIdCard } from "react-icons/fa6";
import { FaMapMarkerAlt, FaPlus, FaUser } from "react-icons/fa";
import { BiSolidBriefcaseAlt2 } from "react-icons/bi";
import Link from "next/link";

const items = [
  { id: 1, Icon: FaMapMarkerAlt, title: "همه جا", link: "" },
  { id: 2, Icon: BiSolidBriefcaseAlt2, title: "همه مشاغل", link: "" },
  { id: 3, Icon: FaPlus, title: "ثبت آگهی", link: "" },
  { id: 4, Icon: FaRegIdCard, title: "رزومه ها", link: "resumes-received" },
  { id: 5, Icon: FaUser, title: "پروفایل من", link: "" },
];

function BottomNavigation(props) {
  return (
    <div className='lg:hidden fixed bottom-0 left-0 z-50 w-full bg-white border-t border-gray-200 py-2'>
      <div className='flex flex-wrap gap-y-4 justify-between'>
        {items.map((item) => (
          <Link
            href={item.link}
            className='flex flex-col gap-y-2 items-center justify-center px-2 sm:px-5 group'
            key={item.id}>
            <item.Icon className='w-6 fill-primary-blue text-xl group-hover:fill-light-primary-blue' />
            <span className='text-[12px] sm:text-sm text-primary-blue group-hover:text-light-primary-blue'>
              {item.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BottomNavigation;
