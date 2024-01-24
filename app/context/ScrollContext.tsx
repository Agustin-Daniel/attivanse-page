"use client";
import { createContext, useState, useEffect, ReactNode } from "react";
import { useDebouncedCallback } from 'use-debounce';

export const ScrollContext = createContext(0);

interface ScrollProviderProps {
    children: ReactNode;
}

export const ScrollProvider = ({ children }:ScrollProviderProps) => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const debouncedHandleScroll = useDebouncedCallback(() => {
        setScrollPosition(window.scrollY);
        // console.log(scrollPosition);
        
    }, 50); // 300ms debounce

    useEffect(() => {
        window.addEventListener('scroll', debouncedHandleScroll);
        
        return () => {
            window.removeEventListener('scroll', debouncedHandleScroll);
        };
    }, [debouncedHandleScroll]);

    return (
        <ScrollContext.Provider value={scrollPosition}>
            {children}
        </ScrollContext.Provider>
    );
}