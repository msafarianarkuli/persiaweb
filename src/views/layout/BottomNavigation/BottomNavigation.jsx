"use client";
import { useState } from "react";
import Link from "next/link";
import { FaRegIdCard } from "react-icons/fa6";
import { FaMapMarkerAlt, FaPlus, FaUser } from "react-icons/fa";
import { BiSolidBriefcaseAlt2 } from "react-icons/bi";
import Footer from "../footer";
import Modal from "@/components/ui/modal/Modal";
import FooterModal from "./components/CategoryModal";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/buttons/Button";
import useDeviceWidth from "@/hooks/useDeviceWidth";
import { useCommonStore } from "@/store/commonStore";
import ProvinceModal from "./components/ProvinceModal";

function BottomNavigation() {
  const category = useCommonStore((state) => state.category);
  const province = useCommonStore((state) => state.province);
  const asPath = usePathname();
  const [modalInfo, setModalInfo] = useState({ showModal: false, modalId: 0 });
  const isMobile = useDeviceWidth() < 600;

  const routeDevide = asPath.split("/");
  const isBottomNavigation =
    routeDevide[1] === "advertisements" && Boolean(routeDevide[2]);

  const items = [
    { id: 1, Icon: FaMapMarkerAlt, title: province?.title, link: "" },
    { id: 2, Icon: BiSolidBriefcaseAlt2, title: category?.title, link: "" },
    {
      id: 3,
      Icon: FaPlus,
      title: "ثبت آگهی",
      link: "advertisement-registration",
    },
    { id: 4, Icon: FaRegIdCard, title: "رزومه‌ها", link: "resumes-received" },
    { id: 5, Icon: FaUser, title: "پروفایل من", link: "profile" },
  ];

  const handleOpenModal = (id) => {
    setModalInfo({ showModal: true, modalId: id });
  };

  const handleCloseModal = () => {
    setModalInfo({ showModal: false, modalId: 0 });
  };

  if (isBottomNavigation && isMobile) {
    return (
      <div className='fixed bottom-0 left-0 lg:hidden z-30 w-full bg-white border-t border-gray-200 py-2 px-4'>
        <Button type='button' className='bg-primary-green text-white my-2'>
          ارسال رزومه
        </Button>
      </div>
    );
  }

  return (
    <>
      <Footer />
      <div className='fixed bottom-0 left-0 lg:hidden z-30 w-full bg-white border-t border-gray-200 py-2'>
        <div className='flex flex-wrap gap-y-4 justify-between'>
          {items.map((item) =>
            item.id === 1 || item.id === 2 ? (
              <div
                onClick={() => handleOpenModal(item.id)}
                className='flex flex-col gap-y-2 items-center justify-center px-2 sm:px-5 group cursor-pointer'
                key={item.id}>
                <div className='flex flex-col justify-center items-center gap-y-1'>
                  <item.Icon className='w-6 fill-primary-blue text-xl group-hover:fill-light-primary-blue' />
                  <span className='text-[12px] sm:text-sm text-primary-blue group-hover:text-light-primary-blue'>
                    {item.title}
                  </span>
                </div>
              </div>
            ) : (
              <Link
                href={item.link}
                className='flex flex-col gap-y-2 items-center justify-center px-2 sm:px-5 group'
                key={item.id}>
                <div className='flex flex-col justify-center items-center gap-y-1'>
                  <item.Icon className='w-6 fill-primary-blue text-xl group-hover:fill-light-primary-blue' />
                  <span className='text-[12px] sm:text-sm text-primary-blue group-hover:text-light-primary-blue'>
                    {item.title}
                  </span>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
      {modalInfo.showModal && modalInfo.modalId === 2 && (
        <Modal onClose={handleCloseModal}>
          <FooterModal onClose={handleCloseModal} />
        </Modal>
      )}
      {modalInfo.showModal && modalInfo.modalId === 1 && (
        <Modal onClose={handleCloseModal}>
          <ProvinceModal onClose={handleCloseModal} />
        </Modal>
      )}
    </>
  );
}

export default BottomNavigation;
