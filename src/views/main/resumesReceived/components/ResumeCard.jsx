function ResumeCard({ title, last, onOpen }) {
  return (
    <div className='text-text-300 cursor-pointer group' onClick={onOpen}>
      <p className='py-4 text-sm group-hover:text-primary-blue custom-transition'>
        {title}
      </p>
      {!last && <hr className='border-text-100' />}
    </div>
  );
}

export default ResumeCard;
