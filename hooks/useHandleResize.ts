"use client"
import { useEffect, useState } from "react";

// this hook is used to force a re-render when the window is resized
export const useHandleResize = () => {
    
    const [key, setKey] = useState(0);

    useEffect(() => {
    const handleResize = () => setKey(prevKey => prevKey + 1);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    }, []);

  return key;
}
