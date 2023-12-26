"use client";
import { useState, useEffect } from "react";

// this hook is used to get the scroll position of the window
export const useHandleScroll = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Removed scrollPosition from dependencies

    return scrollPosition;
}