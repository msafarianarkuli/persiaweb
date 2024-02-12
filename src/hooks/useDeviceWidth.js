import { useEffect, useState } from "react";

const useDeviceWidth = () => {
  const [deviceWidth, setDeviceWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
    };
    setDeviceWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return deviceWidth;
};

export default useDeviceWidth;
