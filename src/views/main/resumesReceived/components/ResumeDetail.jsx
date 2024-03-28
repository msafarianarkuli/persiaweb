import { useResume } from "@/services/hooks/resumes/useResume";
import { useResumePdf } from "@/services/hooks/resumes/useResumePdf";
import { education, gender } from "@/utils/constants";
import { useParams, usePathname, useSearchParams } from "next/navigation";

function ResumeDetail() {
  const searchParams = useSearchParams();
  const resume_id = searchParams.get("resume_id");
  const { data } = useResume(resume_id);
  // const { data: pdf } = useResumePdf(resume_id);
  // console.log(data);
  return (
    <>
      <div className='flex justify-between'>
        <p className='text-primary-blue'>
          اطلاعات رزومه {data?.user?.full_name} | {data?.advertise?.job_title}
        </p>
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
              {education?.find((g) => g.value === data?.education)?.label}
            </span>
          </li>
          <li>
            <span className='font-medium'>وظعیت نظام وظیفه:</span>
            {"\u00A0"}
            <span className='font-light'>{data?.military_status}</span>
          </li>
          <li>
            <span className='font-medium'>سطح زبان انگلیسی:</span>
            {"\u00A0"}
            <span className='font-light'>{data?.english_lan_status}</span>
          </li>
          <li>
            <span className='font-medium'>میزان حقوق درخواستی:</span>
            {"\u00A0"}
            <span className='font-light'>
              حداقل {data?.min_requested_salary / 1000000} میلیون تومان حداکثر
              {data?.max_requested_salary / 1000000} میلیون تومان
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

export default ResumeDetail;
