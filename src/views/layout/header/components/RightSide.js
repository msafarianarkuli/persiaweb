import SearchhDropDown from "@/components/ui/buttons/SearchhDropDown";
import SearchInput from "@/components/ui/inputs/SearchInput";
import { BiSolidBriefcaseAlt2 } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";

function RightSide() {
  return (
    <div className='flex gap-x-2'>
      <div className='hidden lg:flex gap-x-2'>
        <SearchhDropDown title='استان اصفهان' Icon={FaMapMarkerAlt} />
        <SearchhDropDown title='همه مشاغل' Icon={BiSolidBriefcaseAlt2} />
      </div>
      <SearchInput />
    </div>
  );
}

export default RightSide;
