import { useEffect, useState } from "react";

export default function useScrollToTop(threshold = 0) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      const headerBottom = header?.getBoundingClientRect().bottom ?? 0;
      setShowScrollTop(headerBottom <= threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return showScrollTop;
}
