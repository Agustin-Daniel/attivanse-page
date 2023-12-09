import { useEffect, useState } from "react";

const useMediaQuery = (mediaQuery: string): boolean => {
  const [isVerified, setIsVerified] = useState<boolean>(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);

    const documentChangeHandler = () => setIsVerified(!!mediaQueryList.matches);

    documentChangeHandler();

    try {
      mediaQueryList.addEventListener("change", documentChangeHandler);
    } catch {
      // Safari isn't supporting mediaQueryList.addEventListener
      mediaQueryList.addListener(documentChangeHandler);
    }

    return () => {
      try {
        mediaQueryList.removeEventListener("change", documentChangeHandler);
      } catch {
        // Safari isn't supporting mediaQueryList.removeEventListener
        mediaQueryList.removeListener(documentChangeHandler);
      }
    };
  }, [mediaQuery]);

  return isVerified;
};

export default useMediaQuery;