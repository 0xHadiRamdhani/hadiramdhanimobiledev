"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useInView } from "framer-motion";

type ThemeColor = "cyan" | "violet" | "amber" | "emerald" | "rose"; // Added more colors

interface UIContextType {
    activeSection: string;
    setActiveSection: (section: string) => void;
    themeColor: ThemeColor;
    setThemeColor: (color: ThemeColor) => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: React.ReactNode }) {
    const [activeSection, setActiveSection] = useState("hero");
    const [themeColor, setThemeColor] = useState<ThemeColor>("cyan");

    return (
        <UIContext.Provider value={{ activeSection, setActiveSection, themeColor, setThemeColor }}>
            {children}
        </UIContext.Provider>
    );
}

export function useUI() {
    const context = useContext(UIContext);
    if (!context) {
        throw new Error("useUI must be used within a UIProvider");
    }
    return context;
}

// Helper hook for sections
export function useSectionInView(sectionName: string, color: ThemeColor) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" }); // Activate when 50% in view
    const { setActiveSection, setThemeColor } = useUI();

    useEffect(() => {
        if (isInView) {
            setActiveSection(sectionName);
            setThemeColor(color);
        }
    }, [isInView, sectionName, color, setActiveSection, setThemeColor]);

    return ref;
}
