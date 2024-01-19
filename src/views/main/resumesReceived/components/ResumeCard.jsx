function ResumeCard({ title }) {
  return (
    <div className='text-text-300 cursor-pointer group'>
      <p className='py-4 text-sm group-hover:text-primary-blue custom-transition'>
        {title}
      </p>
      <hr className='border-text-100' />
    </div>
  );
}

export default ResumeCard;
