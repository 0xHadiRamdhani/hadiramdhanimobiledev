import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/app/lib/utils";

interface CardProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export function Card({ children, className, delay = 0 }: CardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{
                y: -10,
                boxShadow: "0 0 20px rgba(0, 243, 255, 0.3)",
                borderColor: "rgba(0, 243, 255, 0.5)"
            }}
            className={cn(
                "glass-panel rounded-2xl p-6 transition-colors duration-300",
                className
            )}
        >
            {children}
        </motion.div>
    );
}
