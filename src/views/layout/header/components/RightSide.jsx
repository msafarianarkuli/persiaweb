"use client";
import SearchDropDown from "@/components/ui/buttons/SearchDropDown";
import SearchInput from "@/components/ui/inputs/SearchInput";
import { useEffect, useRef, useState } from "react";
import { BiSolidBriefcaseAlt2 } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";

const locations = [
  { id: 1, title: "اصفهان" },
  { id: 2, title: "گیلان" },
  { id: 3, title: "فارس" },
  { id: 4, title: "کرمانشاه" },
  { id: 5, title: "مشهد" },
  { id: 6, title: "مازندران" },
];

const jobs = [
  { id: 1, title: "اصفهان" },
  { id: 2, title: "گیلان" },
  { id: 3, title: "فارس" },
  { id: 4, title: "کرمانشاه" },
  { id: 5, title: "مشهد" },
  { id: 6, title: "مازندران" },
];

function RightSide() {
  return (
    <div className='flex justify-between w-full lg:w-auto gap-x-2'>
      <div className='hidden lg:flex gap-x-2'>
        <SearchDropDown
          title='همه جا'
          Icon={FaMapMarkerAlt}
          width={140}
          items={locations}
        />
        <SearchDropDown
          title='همه مشاغل'
          Icon={BiSolidBriefcaseAlt2}
          width={140}
          items={jobs}
        />
      </div>
      <div className='lg:hidden'></div>
      <SearchInput />
    </div>
  );
}

export default RightSide;