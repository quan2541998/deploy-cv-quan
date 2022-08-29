import { useEffect, useState } from "react";

const useViewPort = () => {
  const [windowWidth, setWinDowWidth] = useState(
    window.innerWidth || document.documentElement.clientWidth
  );

  useEffect(() => {
    const handleWindownWidth = () => {
      const width = window.innerWidth || document.documentElement.clientWidth;
      setWinDowWidth(width);
    };
    handleWindownWidth();
    window.addEventListener("resize", handleWindownWidth);
    return () => {
      window.removeEventListener("resize", handleWindownWidth);
    };
  }, []);

  return [windowWidth];
};

export default useViewPort;
