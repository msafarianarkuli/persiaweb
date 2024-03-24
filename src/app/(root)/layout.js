"use client";
import ConnectionCheck from "@/components/ui/pwa/ConnectionCheck";
import InstallBanner from "@/components/ui/pwa/InstallBanner";
import BottomNavigation from "@/views/layout/BottomNavigation/BottomNavigation";
import Header from "@/views/layout/header";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import Loading from "../loading";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children, session }) {
  const path = usePathname();
  return (
    <SessionProvider session={session}>
      <Suspense key={path} fallback={<Loading />}>
        <ConnectionCheck />
        <InstallBanner />
        <Header />
        <div className='md:p-2 sm:p-0 mt-20 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto mb-[250px]'>
          {children}
        </div>
        <BottomNavigation />
      </Suspense>
    </SessionProvider>
  );
}
