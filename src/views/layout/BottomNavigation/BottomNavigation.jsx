"use client";
import { useState } from "react";
import Link from "next/link";
import { FaRegIdCard } from "react-icons/fa6";
import { FaMapMarkerAlt, FaPlus, FaUser } from "react-icons/fa";
import { BiSolidBriefcaseAlt2 } from "react-icons/bi";
import Footer from "../footer";
import Modal from "@/components/ui/modal/Modal";
import FooterModal from "./components/FooterModal";

const items = [
  { id: 1, Icon: FaMapMarkerAlt, title: "همه استان ها", link: "" },
  { id: 2, Icon: BiSolidBriefcaseAlt2, title: "همه مشاغل", link: "" },
  {
    id: 3,
    Icon: FaPlus,
    title: "ثبت آگهی",
    link: "advertisement-registration",
  },
  { id: 4, Icon: FaRegIdCard, title: "رزومه ها", link: "resumes-received" },
  { id: 5, Icon: FaUser, title: "پروفایل من", link: "profile" },
];

function BottomNavigation() {
  const [modalInfo, setModalInfo] = useState({ showModal: false, modalId: 0 });

  const handleOpenModal = (id) => {
    setModalInfo({ showModal: true, modalId: id });
  };

  const handleCloseModal = () => {
    setModalInfo({ showModal: false, modalId: 0 });
  };

  return (
    <>
      <div className='fixed w-full bottom-0 left-0'>
        <Footer />
        <div className='lg:hidden z-30 w-full bg-white border-t border-gray-200 py-2'>
          <div className='flex flex-wrap gap-y-4 justify-between'>
            {items.map((item) =>
              item.id === 1 || item.id === 2 ? (
                <div
                  onClick={() => handleOpenModal(item.id)}
                  className='flex flex-col gap-y-2 items-center justify-center px-2 sm:px-5 group cursor-pointer'
                  key={item.id}>
                  <div>
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
                  <div>
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
      </div>
      {modalInfo.showModal &&
        (modalInfo.modalId === 1 || modalInfo.modalId === 2) && (
          <Modal onClose={handleCloseModal}>
            <FooterModal onClose={handleCloseModal} />
          </Modal>
        )}
    </>
  );
}

export default BottomNavigation;
