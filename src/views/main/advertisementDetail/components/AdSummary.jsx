import H1 from "@/components/ui/heading/H1";
import image from "@/assets/images/ads.png";
import Image from "next/image";

function AdSummary() {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='flex flex-col items-center w-full gap-y-4 order-2 md:order-1'>
          <H1 className='mt-14 text-[40px] md:text-[30px] lg:text-[50px]'>
            استخدام جوشکار
          </H1>
          <p className='text-xl text-[#033598]'>کارخانه عباس آبادی</p>
        </div>
        <div className='w-full flex justify-center items-center order-1 md:order-2'>
          <Image src={image} alt='' priority />
        </div>
      </div>
      <div>
        <p className='text-primary-blue mt-10'>
          کاراخانه عباس آبادی​ در تهران جهت تکمیل کادر خود استخدام می‌نماید.
        </p>
        <p className='text-[#033598] text-2xl my-4'>جوشکار</p>
      </div>
    </>
  );
}

export default AdSummary;
