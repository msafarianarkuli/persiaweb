"use client";
import Image from "next/image";
import PersiaWeb from "@/assets/images/PersiaWeb.png";
import Link from "next/link";
import Button from "../ui/buttons/Button";
import { usePathname } from "next/navigation";

function AdCard({ item, bg = "bg-white" }) {
  const asPath = usePathname();
  console.log(asPath);
  const { title, description } = item;
  return (
    <Link
      href=''
      className={`flex p-2 rounded-md shadow-[0px_0px_7px_-4px_rgba(0,0,0,0.5)] hover:shadow-[0px_0px_9px_0px_rgba(0,0,0,0.5)] custom-transition ${bg}`}>
      <Image width={110} height={110} src={PersiaWeb} alt='' priority />
      <div className='flex flex-col items-start w-full justify-center gap-y-4'>
        <p className='text-text-0'>{title}</p>
        <p className='text-text-100'>{description}</p>
      </div>
      {asPath === "/my-advertisements" ? (
        <div className='flex justify-end items-end w-full'>
          <Button type='button' className='bg-red-500 text-white'>
            حذف آگهی
          </Button>
        </div>
      ) : null}
    </Link>
  );
}

export default AdCard;
