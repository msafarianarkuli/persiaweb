import BottomNavigation from "@/views/layout/BottomNavigation/BottomNavigation";
import Footer from "@/views/layout/footer";
import Header from "@/views/layout/header";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <div className='md:p-2 sm:p-0 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto'>
        {children}
      </div>
      <Footer />
      <BottomNavigation />
    </>
  );
}
