import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollToTop = (): void => {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scroll(0, 0);
    }, 1);
  }, [pathname]);
};
