import Image from "next/image";
import PersiaWeb from "@/assets/images/PersiaWeb.png";

function AdCard({ item }) {
  const { title, description } = item;
  return (
    <div className='flex p-2 bg-white rounded-md shadow-[0px_0px_9px_-7px_rgba(0,0,0,0.5)]'>
      <Image width={110} height={110} src={PersiaWeb} alt='' />
      <div className='flex flex-col items-start justify-center gap-y-4'>
        <p className='text-text-0'>{title}</p>
        <p className='text-text-100'>{description}</p>
      </div>
    </div>
  );
}

export default AdCard;
