"use client";
import Footer from "@/views/layout/footer";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children, session }) {
  return (
    <SessionProvider session={session}>
      <div className='p-2 sm:p-0 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto'>
        {children}
      </div>
      <div className='absolute bottom-0 w-full'>
        <Footer />
      </div>
    </SessionProvider>
  );
}
