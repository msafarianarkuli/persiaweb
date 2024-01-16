function Container({ children }) {
  return (
    <footer className='bg-text-700 mb-[60px] lg:mb-0'>
      <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between text-white '>
        {children}
      </div>
    </footer>
  );
}

export default Container;
