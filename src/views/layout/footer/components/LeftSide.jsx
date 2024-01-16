import Link from "next/link";

function LeftSide() {
  return (
    <span className='flex justify-center'>
      طراحی توسط{" "}
      <Link href='/'>
        {" "}
        پرشیا وب<span> </span>
      </Link>
    </span>
  );
}

export default LeftSide;
