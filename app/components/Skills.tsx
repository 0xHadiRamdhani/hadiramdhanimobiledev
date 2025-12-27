"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "./ui/ScrollReveal";
import { useSectionInView } from "../context/UIContext";
import { useState, useEffect } from "react";

// URL Icons
const Icons = {
    React: (
        <img src="https://skillicons.dev/icons?i=react" height="60" alt="react logo" />
    ),
    Flutter: (
        <img src="https://skillicons.dev/icons?i=flutter" height="60" alt="flutter logo" />
    ),
    TypeScript: (
        <img src="https://skillicons.dev/icons?i=typescript" height="60" alt="typescript logo" />
    ),
    NextJS: (
        <img src="https://skillicons.dev/icons?i=next" height="60" alt="next logo" />
    ),
    Tailwind: (
        <img src="https://skillicons.dev/icons?i=tailwind" height="60" alt="tailwind logo" />
    ),
    Node: (
        <img src="https://skillicons.dev/icons?i=nodejs" height="60" alt="node logo" />
    ),
    Firebase: (
        <img src="https://skillicons.dev/icons?i=firebase" height="60" alt="firebase logo" />
    ),
    Git: (
        <img src="https://skillicons.dev/icons?i=git" height="60" alt="git logo" />
    ),
};

const skills = [
    { name: "React", icon: Icons.React, level: 90 },
    { name: "Flutter", icon: Icons.Flutter, level: 85 },
    { name: "TypeScript", icon: Icons.TypeScript, level: 88 },
    { name: "Next.js", icon: Icons.NextJS, level: 92 },
    { name: "Tailwind", icon: Icons.Tailwind, level: 95 },
    { name: "Node.js", icon: Icons.Node, level: 80 },
    { name: "Firebase", icon: Icons.Firebase, level: 75 },
    { name: "Git", icon: Icons.Git, level: 85 },
];

export function Skills() {
    const ref = useSectionInView("skills", "cyan");

    return (
        <section ref={ref} id="skills" className="py-20 relative overflow-hidden">
            <ScrollReveal className="container mx-auto max-w-4xl px-6 relative z-10">
                {/* Section Header */}
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                    <span className="text-neon-cyan">02. </span> Skill Stack
                </h2>

                {/* Skills Container */}
                <div className="flex flex-col gap-6">
                    {skills.map((skill, index) => (
                        <BinarySkillBar key={index} skill={skill} index={index} />
                    ))}
                </div>
            </ScrollReveal>

            {/* Background Decoration */}
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
        </section>
    );
}

function BinarySkillBar({ skill, index }: { skill: typeof skills[0]; index: number }) {
    // Generate static binary string for background
    const [binaryString, setBinaryString] = useState("");

    useEffect(() => {
        setBinaryString(Array.from({ length: 60 }, () => Math.random() > 0.5 ? '1' : '0').join(''));
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
        >
            {/* Label Row */}
            <div className="flex justify-between items-end mb-2">
                <div className="flex items-center gap-3">
                    <span className="w-6 h-6 flex items-center justify-center filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110">
                        {skill.icon}
                    </span>
                    <span className="text-lg font-mono font-bold text-gray-400 group-hover:text-neon-cyan transition-colors">
                        {skill.name}
                    </span>
                </div>
                <span className="font-mono text-xs text-neon-cyan/70 group-hover:text-neon-cyan transition-colors">
                    {skill.level}%_
                </span>
            </div>

            {/* The Bar Container */}
            <div className="h-8 w-full bg-black/40 border border-white/5 rounded-sm overflow-hidden relative cursor-crosshair">

                {/* 1. Underlying Binary Code (The "Raw Data") - Always visible but changing state */}
                <div className="absolute inset-0 flex items-center overflow-hidden">
                    {/* We repeat the string to ensure it covers widely */}
                    <motion.div
                        className="font-mono text-[10px] tracking-[4px] text-neon-cyan/30 whitespace-nowrap select-none"
                        initial={{ x: 0 }}
                        animate={{ x: -100 }}
                        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                    >
                        {binaryString} {binaryString} {binaryString}
                    </motion.div>
                </div>

                {/* 2. The Filled Area - Represents Skill Level */}
                <div
                    className="absolute inset-y-0 left-0 overflow-hidden transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                >
                    {/* 
                        LAYER A: Highlighted Binary (Default State)
                        This is the "Data Portion" of your skill. It glows but is still just numbers.
                        Visible by default. Hidden on hover.
                     */}
                    <div className="absolute inset-0 flex items-center overflow-hidden opacity-100 group-hover:opacity-0 transition-opacity duration-300 bg-neon-cyan/10 border-r-2 border-neon-cyan/50">
                        <motion.div
                            className="font-mono text-[10px] tracking-[4px] text-neon-cyan font-bold whitespace-nowrap select-none"
                            initial={{ x: 0 }}
                            animate={{ x: -100 }}
                            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                        >
                            {binaryString} {binaryString} {binaryString}
                        </motion.div>
                    </div>

                    {/* 
                        LAYER B: Solid Neon Bar (Hover State)
                        This is the "Real Expertise". The numbers coalesce into a solid block.
                        Hidden by default. Visible on hover.
                     */}
                    <div className="absolute inset-0 bg-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_theme('colors.neon.cyan')]" />
                </div>

                {/* Scanline / Glitch Overlay (Pure aesthetic) */}
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)] -translate-x-full group-hover:animate-scanline pointer-events-none" />
            </div>
        </motion.div>
    );
}
