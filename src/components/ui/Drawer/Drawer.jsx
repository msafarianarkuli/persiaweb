function Drawer({ children, open }) {
  return (
    <div
      className={`max-w-[1000px] min-w-[0px] fixed top-0 right-0 left-0 bottom-0  ${
        open ? "w-full" : "w-[0px]"
      }  h-screen z-40 bg-inherit lg:hidden transition-all ease-in-out duration-[300ms] flex justify-center items-center`}>
      <div className='bg-white p-4 w-full rounded overflow-y-auto'>
        {children}
      </div>
    </div>
  );
}

export default Drawer;
