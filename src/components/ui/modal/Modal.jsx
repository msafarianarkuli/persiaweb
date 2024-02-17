import { useRef, useEffect } from "react";

const Modal = ({ children, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className='flex justify-center items-center fixed top-0 bottom-0 right-0 left-0 w-full h-full bg-[#00000026] z-50 py-10'>
      <div
        ref={modalRef}
        className='bg-white rounded w-11/12 max-w-6xl overflow-y-auto max-h-[670px] z-50 relative'>
        {children}
      </div>
    </div>
  );
};

export default Modal;
