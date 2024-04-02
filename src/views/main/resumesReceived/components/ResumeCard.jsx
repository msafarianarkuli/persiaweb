import { useResumes } from "@/services/hooks/resumes/useResumes";
import { useRouter, useSearchParams } from "next/navigation";

function ResumeCard({ id, title, item, last, onOpen }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const resume_id = searchParams.get("resume_id");
  const { refetch } = useResumes();
  const handleOnClick = () => {
    onOpen();
    refetch();
    router.push(`?resume_id=${item.id}`);
  };

  return (
    <div className={`cursor-pointer group`} onClick={handleOnClick}>
      <p
        className={`py-4 text-sm group-hover:text-primary-blue custom-transition ${
          Number(resume_id) === item.id
            ? "text-primary-blue"
            : !item.is_seen
            ? "text-red-500"
            : "text-text-300"
        }`}>
        {title}
      </p>
      {!last && <hr className='border-text-100' />}
    </div>
  );
}

export default ResumeCard;
