"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "./ui/ScrollReveal";
import { useSectionInView } from "../context/UIContext";

const interests = [
    { name: "Cyber-Physical Systems", progress: 92, status: "Connected" },
    { name: "Mobile Development", progress: 88, status: "Active" },
    { name: "User Interface Design", progress: 85, status: "Designing" },
    { name: "System Architecture", progress: 80, status: "Building" },
];

export function Interests() {
    const ref = useSectionInView("interests", "cyan");

    return (
        <section ref={ref} id="interests">
            <ScrollReveal className="py-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                        <span className="text-neon-cyan">05. </span> Areas of Focus
                    </h2>

                    <div className="space-y-6">
                        {interests.map((interest, index) => (
                            <motion.div
                                key={index}
                                className="group relative overflow-hidden bg-white/5 border border-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors duration-300"
                                whileHover={{ scale: 1.02 }}
                            >
                                {/* Background Glow on Hover */}
                                <div className="absolute inset-0 bg-linear-to-r from-neon-cyan/0 via-neon-cyan/5 to-neon-cyan/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="flex justify-between items-center relative z-10">
                                    <div>
                                        <h3 className="text-xl font-bold group-hover:text-neon-cyan transition-colors">{interest.name}</h3>
                                        <div className="text-xs font-mono text-gray-500 mt-1 uppercase tracking-widest">
                                            Status: <span className="text-neon-cyan">{interest.status}</span>
                                        </div>
                                    </div>
                                    <div className="text-2xl font-mono font-bold text-gray-600 group-hover:text-white transition-colors">
                                        [{interest.progress}%]
                                    </div>
                                </div>

                                {/* Progress Bar Background */}
                                <div className="absolute bottom-0 left-0 h-1 bg-gray-800 w-full" />
                                {/* Active Progress Bar */}
                                <motion.div
                                    className="absolute bottom-0 left-0 h-1 bg-neon-cyan shadow-[0_0_10px_#00f3ff]"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${interest.progress}%` }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                />
                            </motion.div>
                        ))}
                    </div>

                </div>
            </ScrollReveal>
        </section>
    );
}
