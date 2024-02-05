import Button from "@/components/ui/buttons/Button";
import ConnectionCheck from "@/components/ui/pwa/ConnectionCheck";
import BottomNavigation from "@/views/layout/BottomNavigation/BottomNavigation";
import Header from "@/views/layout/header";
import { useRouter } from "next/navigation";

function OfflinePage() {
  const router = useRouter();

  return (
    <>
      <ConnectionCheck />
      <Header />
      <div className='md:p-2 sm:p-0 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto mb-[250px] flex justify-center'>
        <div
          type='button'
          className='secondary-button font-medium w-[150px] cursor-pointer mt-36 flex justify-center items-center'
          onclick={() => router.reload()}>
          تلاش مجدد
        </div>
      </div>
      <BottomNavigation />
    </>
  );
}

export default OfflinePage;
