"use client";
import ConnectionCheck from "@/components/ui/pwa/ConnectionCheck";
import BottomNavigation from "@/views/layout/BottomNavigation/BottomNavigation";
import Header from "@/views/layout/header";

export default function RootLayout({ children }) {
  return (
    <>
      <ConnectionCheck />
      <Header />
      <div className='md:p-2 sm:p-0 mt-20 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto mb-[250px]'>
        {children}
      </div>
      <BottomNavigation />
    </>
  );
}
