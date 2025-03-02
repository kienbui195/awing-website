import { useEffect, useState } from "react";

export function useScrollDirection() {
  const [isScrollDown, setIsScrollDown] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollDown(currentScrollY > lastScrollY);
      setIsAtTop(currentScrollY === 0);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isScrollDown, isAtTop };
}