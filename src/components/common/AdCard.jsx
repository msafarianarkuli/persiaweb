import Image from "next/image";
import PersiaWeb from "@/assets/images/PersiaWeb.png";
import Link from "next/link";

function AdCard({ item }) {
  const { title, description } = item;
  return (
    <Link
      href=''
      className='flex p-2 bg-white rounded-md shadow-[0px_0px_9px_-7px_rgba(0,0,0,0.5)] hover:shadow-[0px_0px_9px_0px_rgba(0,0,0,0.5)] custom-transition'>
      <Image width={110} height={110} src={PersiaWeb} alt='' priority />
      <div className='flex flex-col items-start justify-center gap-y-4'>
        <p className='text-text-0'>{title}</p>
        <p className='text-text-100'>{description}</p>
      </div>
    </Link>
  );
}

export default AdCard;
