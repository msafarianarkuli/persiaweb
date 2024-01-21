import Link from "next/link";

function RightSide() {
  return (
    <div className='flex flex-wrap justify-center gap-x-6 items-center mt-3'>
      <Link href='/' className='hover:text-text-100 custom-transition'>
        صفحه اصلی
      </Link>
      <Link href='/' className='hover:text-text-100 custom-transition'>
        قوانین و مقررات
      </Link>
      <Link href='/' className='hover:text-text-100 custom-transition'>
        لینک دلخواه
      </Link>
      <Link href='/' className='hover:text-text-100 custom-transition'>
        لینک دلخواه
      </Link>
      <Link href='/' className='hover:text-text-100 custom-transition'>
        لینک دلخواه
      </Link>
    </div>
  );
}

export default RightSide;
