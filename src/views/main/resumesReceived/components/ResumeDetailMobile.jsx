import { useResume } from "@/services/hooks/resumes/useResume";
import { education, english, gender, military_status } from "@/utils/constants";
import { useSearchParams } from "next/navigation";
import { MdOutlineClose } from "react-icons/md";

function ResumeDetailMobile({ onClose }) {
  const searchParams = useSearchParams();
  const resume_id = searchParams.get("resume_id");
  const { data } = useResume(resume_id);
  return (
    <>
      <div className='flex justify-between'>
        <p className='text-primary-blue text-sm'>
          اطلاعات رزومه {data?.user?.full_name} | {data?.advertise?.job_title}
        </p>
        <MdOutlineClose className='text-xl cursor-pointer' onClick={onClose} />
      </div>
      <div className='flex justify-between mt-2 mb-2'>
        <p className='text-primary-blue'>دانلود در PDF</p>
      </div>
      <div className='p-8 text-text-300'>
        <ul className='list-disc'>
          <li>
            <span className='font-medium'>نام و نام‌خانوادگی:</span>
            {"\u00A0"}
            <span className='font-light'>{data?.user?.full_name}</span>
          </li>
          <li>
            <span className='font-medium'>جنسیت:</span>
            {"\u00A0"}
            <span className='font-light'>
              {gender?.find((g) => g.value === data?.gender)?.label}
            </span>
          </li>
          <li>
            <span className='font-medium'>شماره تماس:</span>
            {"\u00A0"}
            <span className='font-light'>{data?.phone}</span>
          </li>
          <li>
            <span className='font-medium'>سن:</span>
            {"\u00A0"}
            <span className='font-light'>{data?.age} سال</span>
          </li>
          <li>
            <span className='font-medium'>دین:</span>
            {"\u00A0"}
            <span className='font-light'>{data?.religion}</span>
          </li>
          <li>
            <span className='font-medium'>میزان تحصیلات:</span>
            {"\u00A0"}
            <span className='font-light'>
              {" "}
              {education?.find((g) => g.value === data?.education)?.label}
            </span>
          </li>
          <li>
            <span className='font-medium'>وظعیت نظام وظیفه:</span>
            {"\u00A0"}
            <span className='font-light'>
              {
                military_status?.find((g) => g.value === data?.military_status)
                  ?.label
              }
            </span>
          </li>
          <li>
            <span className='font-medium'>سطح زبان انگلیسی:</span>
            {"\u00A0"}
            <span className='font-light'>
              {
                english?.find((g) => g.value === data?.english_lan_status)
                  ?.label
              }
            </span>
          </li>
          <li>
            <span className='font-medium'>میزان حقوق درخواستی:</span>
            {"\u00A0"}
            <span className='font-light'>
              حداقل {data?.min_requested_salary / 1000000} میلیون تومان حداکثر
              {data?.max_requested_salary / 1000000} میلیون تومان{" "}
            </span>
          </li>
        </ul>
        <p className='font-medium mt-6'>مهارت‌های این شخص:</p>
        <p className='font-light'>{data?.skills}</p>
        <p className='font-medium mt-6'>سابقه کار:</p>
        <p className='font-light'>{data?.work_experiences}</p>
        <p className='font-medium mt-6'>آدرس محل سکونت:</p>
        <p className='font-light'>{data?.address} </p>
      </div>
    </>
  );
}

export default ResumeDetailMobile;
