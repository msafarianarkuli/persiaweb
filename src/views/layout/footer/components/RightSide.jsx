import Link from "next/link";

function RightSide() {
  return (
    <div className='flex flex-wrap justify-center gap-x-6 items-center mt-3'>
      <Link href='/'>صفحه اصلی</Link>
      <Link href='/'>قوانین و مقررات</Link>
      <Link href='/'>لینک دلخواه</Link>
      <Link href='/'>لینک دلخواه</Link>
      <Link href='/'>لینک دلخواه</Link>
    </div>
  );
}

export default RightSide;
