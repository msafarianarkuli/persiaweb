"use client";
import { useState } from "react";
import cookieCutter from "cookie-cutter";
import useInstallPrompt from "@/hooks/useInstallPrompt";
import Modal from "../modal/Modal";
import Button from "../buttons/Button";
import { useEffect } from "react";

function InstallBanner() {
  const [showModal, setShowModal] = useState(false);
  const { deferredPrompt, promptInstall } = useInstallPrompt();

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 10000);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
    cookieCutter.set("installApp", "NO");
  };

  const handleCancelInstalling = () => {
    cookieCutter.set("installApp", "NO");
    handleCloseModal();
  };

  const showBanner =
    deferredPrompt && showModal && cookieCutter.get("installApp") !== "NO";

  return showBanner ? (
    <Modal onClose={handleCloseModal}>
      <div className='py-12 md:px-20 relative z-50 flex flex-col items-center justify-center gap-y-4'>
        <p>آیا مایل به نصب نرم افزار هستید؟</p>
        <div className='flex gap-x-4'>
          <Button
            type='button'
            className='bg-red-500 text-white'
            onClick={() => handleCancelInstalling()}>
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
