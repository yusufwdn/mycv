import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  // Get current path
  const { pathname } = useLocation();

  // This hook will run when the path name is changed
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
