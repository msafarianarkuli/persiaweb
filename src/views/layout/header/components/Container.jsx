function Container({ children }) {
  return (
    <header>
      <nav className='bg-white shadow-[0px_0px_53px_-24px_rgba(0,0,0,0.5)] text-xs text-text-200'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          {children}
        </div>
      </nav>
    </header>
  );
}

export default Container;
