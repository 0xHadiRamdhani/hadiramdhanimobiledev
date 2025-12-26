"use client";

import { Card } from "./ui/Card";
import { ScrollReveal } from "./ui/ScrollReveal";
import { useSectionInView } from "../context/UIContext";
import { Folder, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "Pentesting Kernel",
        description: "Pentesting Kernel is a specialized operating system kernel designed specifically for penetration testing, security research, and digital forensics. Built from scratch in C for x86_64 architecture, this kernel provides a comprehensive platform for security professionals to conduct advanced security testing and analysis.",
        tech: ["C", "x86_64", "Penetration Testing"],
        github: "https://github.com/0xHadiRamdhani/cate-kernel",
        link: "https://github.com/0xHadiRamdhani/cate-kernel"
    },
    {
        title: "DevSecOps Learning Sandbox",
        description: "A Flutter-based cybersecurity learning app that teaches basic security concepts through gamification and real-life vulnerability simulations.",
        tech: ["Elysia", "Flutter", "Firebase", "Stripe"],
        github: "https://github.com/0xHadiRamdhani/devsecops_learning_sandbox",
        link: "https://github.com/0xHadiRamdhani/devsecops_learning_sandbox"
    },
    {
        title: "VenomGo",
        description: "A comprehensive collection of penetration testing tools built with Go, featuring high performance, concurrent processing, and advanced features. Now with a beautiful Terminal User Interface (TUI)!",
        tech: ["Go", "Terminal", "Penetration Testing"],
        github: "https://github.com/0xHadiRamdhani/simple-pentest-go",
        link: "https://github.com/0xHadiRamdhani/simple-pentest-go"
    }
];

export function Projects() {
    const ref = useSectionInView("projects", "amber");

    return (
        <section ref={ref} id="projects">
            <ScrollReveal className="py-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                        <span className="text-neon-cyan">03. </span> Selected Projects
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <Card key={index} className="h-full flex flex-col" variant="liquid">
                                <div className="flex justify-between items-start mb-6">
                                    <Folder className="text-neon-cyan w-10 h-10" />
                                    <div className="flex gap-4 text-gray-400">
                                        <a href={project.github} className="hover:text-white transition-colors"><Github size={20} /></a>
                                        <a href={project.link} className="hover:text-white transition-colors"><ExternalLink size={20} /></a>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-2 group-hover:text-neon-cyan transition-colors">{project.title}</h3>
                                <div className="bg-white/5 p-3 rounded-lg mb-4 text-sm text-gray-300 grow">
                                    {project.description}
                                </div>

                                <div className="flex gap-3 text-xs font-mono text-gray-500 mt-auto">
                                    {project.tech.map((t, i) => (
                                        <span key={i}>{t}</span>
                                    ))}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}
