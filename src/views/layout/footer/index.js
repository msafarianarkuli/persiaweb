import Link from "next/link";

function Footer() {
  return (
    <footer className='bg-text-700'>
      <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between text-white'>
        <div className='flex flex-wrap justify-center gap-x-6 items-center mt-3'>
          <Link href='/'>صفحه اصلی</Link>
          <Link href='/'>قوانین و مقررات</Link>
          <Link href='/'>لینک دلخواه</Link>
          <Link href='/'>لینک دلخواه</Link>
          <Link href='/'>لینک دلخواه</Link>
        </div>
        <span className='flex justify-center'>
          طراحی توسط{" "}
          <Link href='/'>
            {" "}
            پرشیا وب<span> </span>
          </Link>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
