"use client";

import { motion, Variants } from "framer-motion";

export function CircuitBoard() {
    const draw: Variants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i: number) => ({
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay: i, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay: i, duration: 0.01 }
            }
        })
    };

    const pulse: Variants = {
        hidden: { pathLength: 0, opacity: 0, strokeDashoffset: 1 },
        visible: (i: number) => ({
            pathLength: [0, 1, 0],   // Grow then shrink to simulate a pulse
            opacity: [0, 1, 0],
            strokeDashoffset: [0, -1], // Move along path
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 2,
                repeatDelay: 1
            }
        })
    };

    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30 select-none overflow-hidden">
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 800 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                preserveAspectRatio="none"
            >
                {/* Style for static paths */}
                <style>
                    {`
                .circuit-path { stroke: rgba(0, 243, 255, 0.2); stroke-width: 2; fill: none; }
                .circuit-pulse { stroke: #00f3ff; stroke-width: 3; fill: none; stroke-linecap: round; filter: drop-shadow(0 0 5px #00f3ff); }
            `}
                </style>

                {/* Path 1: Top Left to Center */}
                <motion.path
                    d="M0 50 H100 L150 100 V200 L300 350 H400"
                    className="circuit-path"
                    initial="hidden"
                    animate="visible"
                    custom={0}
                    variants={draw}
                />
                <motion.path
                    d="M0 50 H100 L150 100 V200 L300 350 H400"
                    className="circuit-pulse"
                    strokeDasharray="0 1"
                    initial="hidden"
                    animate="visible"
                    custom={0.5}
                    variants={pulse}
                />

                {/* Path 2: Bottom Right to Center */}
                <motion.path
                    d="M800 550 H700 L650 500 V400 L500 250 H400"
                    className="circuit-path"
                    initial="hidden"
                    animate="visible"
                    custom={1}
                    variants={draw}
                />
                <motion.path
                    d="M800 550 H700 L650 500 V400 L500 250 H400"
                    className="circuit-pulse"
                    strokeDasharray="0 1"
                    initial="hidden"
                    animate="visible"
                    custom={1.5}
                    variants={pulse}
                />

                {/* Path 3: Vertical Data Line */}
                <motion.path
                    d="M400 0 V600"
                    className="circuit-path"
                    initial="hidden"
                    animate="visible"
                    custom={2}
                    variants={draw}
                />
                <motion.path
                    d="M400 0 V600"
                    className="circuit-pulse"
                    strokeDasharray="0 1"
                    initial="hidden"
                    animate="visible"
                    custom={2.5}
                    variants={pulse}
                />

                {/* Connection Nodes (Circles) */}
                <motion.circle cx="400" cy="300" r="5" fill="#00f3ff"
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
                <circle cx="150" cy="100" r="3" fill="#bd00ff" className="opacity-50" />
                <circle cx="650" cy="500" r="3" fill="#bd00ff" className="opacity-50" />

            </svg>
        </div>
    );
}
