"use client";
import ConnectionCheck from "@/components/ui/pwa/ConnectionCheck";
import BottomNavigation from "@/views/layout/BottomNavigation/BottomNavigation";
import Header from "@/views/layout/header";
import OfflinePage from "../offline";
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  // const [isOnline, setIsOnline] = useState(true);

  // useEffect(() => {
  //   const handleOnlineStatus = () => {
  //     setIsOnline(navigator.onLine);
  //   };

  //   window.addEventListener("online", handleOnlineStatus);
  //   window.addEventListener("offline", handleOnlineStatus);

  //   return () => {
  //     window.removeEventListener("online", handleOnlineStatus);
  //     window.removeEventListener("offline", handleOnlineStatus);
  //   };
  // }, []);

  // if (!isOnline) {
  //   return <OfflinePage />;
  // }
  return (
    <>
      <ConnectionCheck />
      <Header />
      <div className='md:p-2 sm:p-0 mt-16 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto mb-[250px]'>
        {children}
      </div>
      <BottomNavigation />
    </>
  );
}
