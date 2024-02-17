"use client";

import useInstallPrompt from "@/hooks/useInstallPrompt";
import Modal from "../modal/Modal";
import { useState } from "react";
import Button from "../buttons/Button";

function InstallBanner() {
  const [showModal, setShowModal] = useState(true);
  const { deferredPrompt, promptInstall } = useInstallPrompt();

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return deferredPrompt && showModal ? (
    <Modal onClose={handleCloseModal}>
      <div className='py-12 md:px-20 relative z-50 flex flex-col items-center justify-center gap-y-4'>
        <p>آیا مایل به نصب نرم افزار هستید؟</p>
        <div className='flex gap-x-4'>
          <Button
            type='button'
            className='bg-red-500 text-white'
            onClick={() => handleCloseModal()}>
            خیر
          </Button>
          <Button
            type='button'
            className='bg-primary-green text-white'
            onClick={() => promptInstall()}>
            نصب نرم افزار
          </Button>
        </div>
      </div>
    </Modal>
  ) : null;
}

export default InstallBanner;
