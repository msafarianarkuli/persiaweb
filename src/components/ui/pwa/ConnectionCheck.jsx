"use client";
import { useEffect, useState } from "react";

function ConnectionCheck() {
  const [isOnline, setIsOnline] = useState(true);
  const [showOnlineMessage, setShowOnlineMessage] = useState(false);

  useEffect(() => {
    const handleOnlineStatus = () => {
      setIsOnline(navigator.onLine);
      setShowOnlineMessage(true);
      setTimeout(() => {
        setShowOnlineMessage(false);
      }, 2000); // Show online message for 2 seconds
    };

    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOnlineStatus);

    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOnlineStatus);
    };
  }, []);

  return (
    <div>
      {isOnline ? (
        showOnlineMessage ? (
          <p className='text-center bg-[#49AF41] text-white'>
            به اینترنت متصل شدید
          </p>
        ) : null
      ) : (
        <p className='text-center text-white bg-[#FF3333]'>
          لطفا اتصال به اینترنتتان را بررسی کنید
        </p>
      )}
    </div>
  );
}

export default ConnectionCheck;
