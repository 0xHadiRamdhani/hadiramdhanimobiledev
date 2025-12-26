import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/app/lib/utils";

interface CardProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    variant?: "default" | "liquid";
}

export function Card({ children, className, delay = 0, variant = "default" }: CardProps) {
    const isLiquid = variant === "liquid";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={!isLiquid ? {
                y: -10,
                boxShadow: "0 0 20px rgba(0, 243, 255, 0.3)",
                borderColor: "rgba(0, 243, 255, 0.5)"
            } : undefined}
            className={cn(
                "glass-panel rounded-2xl p-6 transition-colors duration-300 relative overflow-hidden group",
                className
            )}
        >
            {isLiquid && (
                <>
                    {/* Liquid Fill Layer */}
                    <motion.div
                        className="absolute inset-x-0 bottom-0 bg-neon-cyan/10 z-0"
                        initial={{ height: 0 }}
                        whileHover={{ height: "100%" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-transparent via-white/50 to-transparent blur-[2px]" />
                    </motion.div>

                    {/* Bubbles */}
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute bg-neon-cyan/20 rounded-full blur-[1px]"
                                style={{
                                    width: Math.random() * 20 + 10,
                                    height: Math.random() * 20 + 10,
                                    left: `${Math.random() * 80 + 10}%`,
                                    bottom: "-20px"
                                }}
                                animate={{
                                    y: [0, -400],
                                    x: [0, Math.random() * 20 - 10],
                                    opacity: [0, 1, 0]
                                }}
                                transition={{
                                    duration: Math.random() * 2 + 2,
                                    repeat: Infinity,
                                    delay: Math.random() * 0.5,
                                    ease: "easeOut"
                                }}
                            />
                        ))}
                    </div>
                </>
            )}

            {/* Content requires relative stacking context to be above liquid */}
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
}
