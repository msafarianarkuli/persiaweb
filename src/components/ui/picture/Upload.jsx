"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaUser } from "react-icons/fa";

const Upload = () => {
  const inputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleUpload = (e) => {
    const reader = new FileReader();

    const file = e.target.files[0];
    reader.onload = function (event) {
      const binaryString = event.target.result; // Binary string representation of the file
      // You can also use ArrayBuffer instead of binary string:
      // const arrayBuffer = event.target.result;
      // Do something with the binary file data
    };

    // Read the file as a binary string or ArrayBuffer
    reader.readAsBinaryString(file);
    setSelectedImage(file);
  };

  const handleRemoveProfile = () => {
    setSelectedImage(null);
  };

  return (
    <div className='flex flex-col items-center gap-y-4 text-center'>
      {selectedImage ? (
        <Image
          src={URL.createObjectURL(selectedImage)}
          alt='Profile Picture'
          priority
          width={90}
          height={90}
          className='w-[90px] h-[90px] rounded-full object-cover'
        />
      ) : (
        <div
          className='w-fit h-fit rounded-full p-5 bg-[#f6f6f6] cursor-pointer'
          onClick={() => {
            inputRef.current?.click();
          }}>
          <FaUser className='text-3xl text-text-300' />
        </div>
      )}
      <h4
        className='text-sm/4 text-text-300 cursor-pointer'
        onClick={handleRemoveProfile}>
        {selectedImage ? (
          <span className='text-red-400'>حذف لوگو شرکت</span>
        ) : (
          <span>لوگو شرکت</span>
        )}
      </h4>
      <input
        type='file'
        ref={inputRef}
        className='hidden'
        onChange={(event) => handleUpload(event)}
        accept={".jpg, .jpeg, .png"}
      />
    </div>
  );
};

export default Upload;
