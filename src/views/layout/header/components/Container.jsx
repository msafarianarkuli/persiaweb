function Container({ children }) {
  return (
    <header className='relative z-30 shadow-[0px_0px_65px_-22px_rgba(0,0,0,0.5)] md:shadow-none'>
      <nav className='bg-white text-xs text-text-200'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          {children}
        </div>
      </nav>
    </header>
  );
}

export default Container;
// className='shadow-[0px_0px_65px_-22px_rgba(0,0,0,0.5)]'
