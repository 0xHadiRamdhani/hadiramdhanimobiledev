"use client";

import { motion } from "framer-motion";
import { useUI } from "../../context/UIContext";

export function DynamicBackground() {
    const { themeColor } = useUI();

    // Map theme colors to CSS gradients/colors
    const gradients = {
        cyan: "radial-gradient(circle at 50% 50%, rgba(0, 243, 255, 0.03) 0%, rgba(0,0,0,0) 50%)",
        violet: "radial-gradient(circle at 80% 20%, rgba(189, 0, 255, 0.03) 0%, rgba(0,0,0,0) 50%)",
        amber: "radial-gradient(circle at 20% 80%, rgba(245, 158, 11, 0.03) 0%, rgba(0,0,0,0) 50%)",
        emerald: "radial-gradient(circle at 50% 20%, rgba(16, 185, 129, 0.03) 0%, rgba(0,0,0,0) 50%)",
        rose: "radial-gradient(circle at 80% 80%, rgba(244, 63, 94, 0.03) 0%, rgba(0,0,0,0) 50%)",
    };

    return (
        <div className="fixed inset-0 pointer-events-none -z-40 overflow-hidden">
            {/* Animated Gradient Blob */}
            <motion.div
                className="absolute inset-0 transition-opacity duration-1000"
                animate={{
                    background: gradients[themeColor],
                }}
                transition={{ duration: 1.5 }}
            />

            {/* Noise Texture */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />
        </div>
    );
}
