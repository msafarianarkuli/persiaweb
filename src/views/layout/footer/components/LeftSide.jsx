import Link from "next/link";

function LeftSide() {
  return (
    <span className='flex justify-center'>
      طراحی توسط{" "}
      <Link href='/'>
        {"\u00A0"}پرشیا وب{"\u00A0"}
      </Link>
    </span>
  );
}

export default LeftSide;
