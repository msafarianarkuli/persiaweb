"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/buttons/Button";
import { usePathname } from "next/navigation";

function AdCard({ item, bg = "bg-white" }) {
  const asPath = usePathname();
  return (
    <Link
      href={`advertisements/${item.slug}`}
      className={`flex p-2 rounded-md gap-x-4 shadow-[0px_0px_7px_-4px_rgba(0,0,0,0.5)] hover:shadow-[0px_0px_9px_0px_rgba(0,0,0,0.5)] custom-transition ${bg}`}>
      <Image
        width={110}
        height={110}
        src={`https://ja.p65.ir${item?.company_logo}`}
        alt=''
        priority
        className='rounded'
      />
      <div className='flex flex-col items-start w-full justify-center gap-y-4'>
        <p className='text-text-0'>{item?.job_title}</p>
        <p className='text-text-100'>{item?.company_name}</p>
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
