"use client";
import Image from "next/image";
import { BiSolidBriefcaseAlt2 } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import SearchDropDown from "@/components/ui/buttons/SearchDropDown";
import SearchInput from "@/components/ui/inputs/SearchInput";
import logo from "@/assets/images/logo-primary.png";
import useCategories from "@/services/hooks/categories/useCategories";
import useProvinces from "@/services/hooks/area/useProvinces";
import { useState } from "react";
import { useCommonStore } from "@/store/commonStore";

function RightSide() {
  const [provinceSearch, setProvinceSearch] = useState();
  const [categorySearch, setCategorySearch] = useState();
  const { data: categories } = useCategories({ search: categorySearch });
  const { data: provinces } = useProvinces({ search: provinceSearch });
  const setProvince = useCommonStore((state) => state.setProvince);
  const setCategory = useCommonStore((state) => state.setCategory);
  const inputs = [
    {
      id: 1,
      title: "provinces",
      Icon: FaMapMarkerAlt,
      width: 140,
      items: provinces?.data?.data,
      onChange: (e) => setProvinceSearch(e.target.value),
      onClick: (data) => setCategory(data),
    },
    {
      id: 2,
      title: "categories",
      Icon: BiSolidBriefcaseAlt2,
      width: 140,
      items: categories?.data?.data,
      onChange: (e) => setCategorySearch(e.target.value),
      onClick: (data) => setProvince(data),
    },
  ];

  return (
    <div className='flex justify-between w-full lg:w-auto gap-x-2'>
      <Image src={logo} alt='' width={60} priority />
      <div className='hidden lg:flex gap-x-2'>
        {inputs?.map((input) => (
          <SearchDropDown
            title={input?.title}
            Icon={input.Icon}
            width={input.width}
            items={input.items}
            key={input.id}
            onChange={input.onChange}
            onClick={input.onClick}
          />
        ))}
      </div>
      <div className='lg:hidden'></div>
      <SearchInput />
    </div>
  );
}

export default RightSide;
