import Footer from "@/views/layout/footer";

export default function RootLayout({ children }) {
  return (
    <>
      <div className='p-2 sm:p-0 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto'>
        {children}
      </div>
      <div className='absolute bottom-0 w-full'>
        <Footer />
      </div>
    </>
  );
}
