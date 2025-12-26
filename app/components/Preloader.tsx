"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const codeLines = [
    "Initializing Cyber-Physical System...",
    "Loading localized modules...",
    "Verifying security protocols...",
    "Connecting to neural network...",
    "Establishing secure connection...",
    "Importing 'Cyber-Physical System' module...",
    "Compiling Next.js assets...",
    "Optimizing Tailwind CSS classes...",
    "Hydrating React components...",
    "System Ready."
];

export function Preloader({ onComplete }: { onComplete: () => void }) {
    const [lines, setLines] = useState<string[]>([]);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let lineIndex = 0;

        // Add lines interval
        const textInterval = setInterval(() => {
            if (lineIndex < codeLines.length) {
                setLines((prev) => [...prev, codeLines[lineIndex]]);
                lineIndex++;
            } else {
                clearInterval(textInterval);
            }
        }, 150);

        // Progress bar interval
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    setTimeout(onComplete, 500); // Wait a bit before finishing
                    return 100;
                }
                return prev + 2;
            });
        }, 30);

        return () => {
            clearInterval(textInterval);
            clearInterval(progressInterval);
        };
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center font-mono p-4"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="w-full max-w-lg mb-8 h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                <div className="flex flex-col justify-end h-full">
                    {lines.map((line, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-green-500 text-sm md:text-base leading-tight"
                        >
                            <span className="text-gray-500 mr-2">{`>`}</span>
                            {line}
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="w-full max-w-lg bg-gray-900 h-2 rounded-full overflow-hidden border border-gray-800">
                <motion.div
                    className="h-full bg-neon-cyan shadow-[0_0_10px_#00f3ff]"
                    style={{ width: `${progress}%` }}
                />
            </div>
            <div className="mt-2 text-neon-cyan text-xs text-right w-full max-w-lg">
                {progress}%
            </div>
        </motion.div>
    );
}
