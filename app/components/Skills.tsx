"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "./ui/ScrollReveal";

const skills = [
    { name: "Flutter", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Python", level: 80 },
    { name: "Cyber Security", level: 75 },
    { name: "System Arch", level: 70 },
];

export function Skills() {
    return (
        <ScrollReveal className="py-20 px-6" id="skills">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Technical <span className="text-neon-cyan">Capabilities</span>
                </h2>

                <div className="bg-black/40 border border-white/10 rounded-lg p-6 md:p-10 font-mono text-sm shadow-2xl backdrop-blur-sm relative overflow-hidden">
                    {/* Background decorations */}
                    <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none">
                        <div className="flex gap-1 mb-2">
                            {[...Array(3)].map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-white" />)}
                        </div>
                    </div>

                    <div className="grid gap-8">
                        {skills.map((skill, index) => (
                            <BinarySkillBar key={skill.name} skill={skill} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </ScrollReveal>
    );
}

function BinarySkillBar({ skill, index }: { skill: { name: string; level: number }; index: number }) {
    const [isHovered, setIsHovered] = useState(false);
    const [binaryString, setBinaryString] = useState("");

    // Generate random binary string
    useEffect(() => {
        let str = "";
        for (let i = 0; i < 60; i++) {
            str += Math.random() > 0.5 ? "1" : "0";
        }
        setBinaryString(str);
    }, []);

    return (
        <div
            className="group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex justify-between mb-2">
                <span className="text-neon-violet font-bold tracking-wider">{skill.name}</span>
                <span className="text-neon-cyan">{skill.level}%</span>
            </div>

            <div className="h-6 w-full bg-black/50 border border-white/10 rounded overflow-hidden relative cursor-crosshair">
                {/* Visual Background (always visible but faint, represents empty space) */}
                <div className="absolute inset-0 flex items-center text-[10px] text-gray-800 tracking-[0.2em] overflow-hidden select-none">
                    {binaryString.repeat(3)}
                </div>

                {/* Progress Layer: This div expands to the width of the skill level */}
                <motion.div
                    className="h-full absolute top-0 left-0 flex items-center overflow-hidden whitespace-nowrap"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
                >
                    {/* Hover State: Solid Bar */}
                    <motion.div
                        className="absolute inset-0 bg-neon-cyan shadow-[0_0_10px_#00f3ff]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                    />

                    {/* Default State: High-contrast Binary Text */}
                    <motion.div
                        className="absolute inset-0 bg-neon-cyan/20 flex items-center text-[10px] text-neon-cyan tracking-[0.2em] select-none font-bold"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: isHovered ? 0 : 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        {binaryString.repeat(3)}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
