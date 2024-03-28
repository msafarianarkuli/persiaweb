import { useRouter } from "next/navigation";

function ResumeCard({ id, title, last, onOpen }) {
  const router = useRouter();

  const handleOnClick = () => {
    onOpen();
    router.push(`?resume_id=${id}`);
  };

  return (
    <div className='text-text-300 cursor-pointer group' onClick={handleOnClick}>
      <p className='py-4 text-sm group-hover:text-primary-blue custom-transition'>
        {title}
      </p>
      {!last && <hr className='border-text-100' />}
    </div>
  );
}

export default ResumeCard;
