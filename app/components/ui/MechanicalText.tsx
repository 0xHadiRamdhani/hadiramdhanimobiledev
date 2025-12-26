"use client";

import { motion } from "framer-motion";
import { cn } from "@/app/lib/utils";

interface MechanicalTextProps {
    text: string;
    className?: string;
    variant?: "default" | "meter";
}

export function MechanicalText({ text, className, variant = "default" }: MechanicalTextProps) {
    const characters = text.split("");

    return (
        <div className={cn("flex items-center", className)}>
            {characters.map((char, index) => {
                // Simple logic: if it's a number and variant is meter, give it a specific look
                const isMeterStyle = variant === "meter";

                return (
                    <div
                        key={`${char}-${index}`}
                        className={cn(
                            "relative overflow-hidden flex justify-center items-center text-center",
                            isMeterStyle
                                ? "bg-[#111] text-neon-cyan border border-white/10 w-[0.8em] h-[1.4em] mx-[1px] rounded-sm font-mono shadow-inner"
                                : "mx-[1px]"
                        )}
                    >
                        <motion.span
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.05,
                                type: "spring",
                                stiffness: 100,
                                damping: 15
                            }}
                            className="inline-block"
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    </div>
                );
            })}
        </div>
    );
}
