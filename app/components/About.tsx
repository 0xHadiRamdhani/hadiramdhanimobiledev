"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/Card";
import { ScrollReveal } from "./ui/ScrollReveal";
import { useSectionInView } from "../context/UIContext";

export function About() {
    const ref = useSectionInView("about", "violet");

    return (
        <section ref={ref} id="about">
            <ScrollReveal className="py-20 px-6 relative">
                {/* Decorative background blur - Violet Theme */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-neon-violet/10 rounded-full blur-[120px] -z-10" />

                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        <span className="text-neon-cyan">01. </span> <span className="text-white">About Me</span>
                    </h2>

                    <div className="grid md:grid-cols-[2fr_3fr] gap-10 items-center">
                        {/* Profile Image / Avatar Placeholder */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-neon-cyan/20 rounded-2xl blur-md group-hover:bg-neon-cyan/40 transition-all duration-500" />
                            <Card className="p-0 overflow-hidden relative aspect-square flex items-center justify-center bg-black/50" variant="liquid">
                                <span className="text-6xl">👨‍💻</span>
                                {/* Add your image here: <img src="/me.jpg" alt="Hadi" className="w-full h-full object-cover" /> */}
                            </Card>
                        </div>

                        {/* Bio Text */}
                        <div className="space-y-6 text-gray-300">
                            <p>
                                Hello! I'm <span className="text-neon-cyan font-semibold">Hadi Ramdhani</span>, a passionate software engineering student specializing in
                                <span className="text-neon-violet"> Mobile and Frontend Development</span>.
                            </p>
                            <p>
                                My journey involves building sleek, high-performance applications that merge
                                <span className="text-white font-mono"> aesthetic design</span> with
                                <span className="text-white font-mono"> robust functionality</span>.
                            </p>
                            <p>
                                I am currently exploring the depths of <span className="text-neon-cyan">Cyber-Physical Systems</span> and integrating them into modern web experiences.
                            </p>

                            <ul className="grid grid-cols-2 gap-2 font-mono text-sm mt-4">
                                <li className="flex items-center gap-2">
                                    <span className="text-neon-cyan">▹</span> React / Next.js
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-neon-cyan">▹</span> TypeScript
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-neon-cyan">▹</span> Flutter / Dart
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-neon-cyan">▹</span> Tailwind CSS
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}
