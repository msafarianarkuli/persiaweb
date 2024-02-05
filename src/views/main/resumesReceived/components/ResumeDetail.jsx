import H3 from "@/components/ui/heading/H3";
import H4 from "@/components/ui/heading/H4";

function ResumeDetail() {
  return (
    <>
      <div className='flex justify-between'>
        <p className='text-primary-blue'>
          اطلاعات رزومه محمدعلی زبردست | استخدام کارشناس برق صنعتی و حفاظت
          گیاهانیانی
        </p>
        <p className='text-primary-blue'>دانلود در PDF</p>
      </div>
      <div className='p-8 text-text-300'>
        <ul className='list-disc'>
          <li>
            <span className='font-medium'>نام و نام‌خانوادگی:</span>
            {"\u00A0"}
            <span className='font-light'>محمدعلی زبردست</span>
          </li>
          <li>
            <span className='font-medium'>جنسیت:</span>
            {"\u00A0"}
            <span className='font-light'>آقا</span>
          </li>
          <li>
            <span className='font-medium'>شماره تماس:</span>
            {"\u00A0"}
            <span className='font-light'>09111301621</span>
          </li>
          <li>
            <span className='font-medium'>سن:</span>
            {"\u00A0"}
            <span className='font-light'>35 سال</span>
          </li>
          <li>
            <span className='font-medium'>دین:</span>
            {"\u00A0"}
            <span className='font-light'>اسلام</span>
          </li>
          <li>
            <span className='font-medium'>میزان تحصیلات:</span>
            {"\u00A0"}
            <span className='font-light'>فوق لیسانس</span>
          </li>
          <li>
            <span className='font-medium'>وظعیت نظام وظیفه:</span>
            {"\u00A0"}
            <span className='font-light'>معاف</span>
          </li>
          <li>
            <span className='font-medium'>سطح زبان انگلیسی:</span>
            {"\u00A0"}
            <span className='font-light'>چیزی نمی دانم</span>
          </li>
          <li>
            <span className='font-medium'>میزان حقوق درخواستی:</span>
            {"\u00A0"}
            <span className='font-light'>
              حداقل 25 میلیون تومان حداکثر 350 میلیون تومان
            </span>
          </li>
        </ul>
        <p className='font-medium mt-6'>مهارت‌های این شخص:</p>
        <p className='font-light'>کار با ابزار</p>
        <p className='font-light'>خیاطی</p>
        <p className='font-light'>خیاطی</p>
        <p className='font-medium mt-6'>سابقه کار:</p>
        <p className='font-light'>کار با ابزار</p>
        <p className='font-medium mt-6'>آدرس محل سکونت:</p>
        <p className='font-light'>
          اصفهان، نجف آباد، خیابان مطهری، کوچه رضایی، پلاک ایکس
        </p>
      </div>
    </>
  );
}

export default ResumeDetail;
