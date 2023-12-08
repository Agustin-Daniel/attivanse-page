"use client";
import { useState, useEffect } from "react";

// this hook is used to get the scroll position of the window
export const useHandleScroll = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
          setScrollPosition(window.scrollY);
          console.log(scrollPosition);
          
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [scrollPosition]);


  return scrollPosition
}
