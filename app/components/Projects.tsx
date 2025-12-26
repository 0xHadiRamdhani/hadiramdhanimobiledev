import { Card } from "./ui/Card";
import { Github, ExternalLink } from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";
import { MechanicalText } from "./ui/MechanicalText";

const projects = [
    {
        title: "Cyber Portfolio",
        description: "A futuristic portfolio website built with Next.js and Tailwind CSS featuring antigravity animations and glassmorphism.",
        tech: ["Next.js", "Tailwind", "Framer Motion"],
        link: "#",
        stats: "Design 10/10"
    },
    {
        title: "Flutter E-Commerce",
        description: "A modern mobile shopping application with smooth transitions and state management.",
        tech: ["Flutter", "Dart", "Firebase"],
        link: "#",
        stats: "Speed 98%"
    },
    {
        title: "Secure Chat App",
        description: "End-to-end encrypted messaging plarform focusing on privacy and security.",
        tech: ["Python", "Cryptography", "Socket.io"],
        link: "#",
        stats: "Secure 100%"
    }
];

export function Projects() {
    return (
        <ScrollReveal className="py-20 px-6" id="projects">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                    Featured <span className="text-neon-violet">Projects</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Card key={index} delay={index * 0.2} className="group hover:border-neon-cyan/50" variant="liquid">
                            <div className="h-full flex flex-col">
                                <div className="mb-6 flex justify-between items-start">
                                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:from-neon-cyan group-hover:to-white transition-all duration-300">
                                        {project.title}
                                    </h3>
                                    <a href={project.link} className="text-gray-400 hover:text-white transition-colors">
                                        <Github size={20} />
                                    </a>
                                </div>

                                <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mb-6 pt-4 border-t border-white/5">
                                    <div className="text-xs text-gray-500 mb-2 uppercase tracking-wider font-mono">System Metrics</div>
                                    <MechanicalText text={project.stats} variant="meter" className="text-sm font-bold" />
                                </div>

                                <div className="space-y-4 mt-auto">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t) => (
                                            <span key={t} className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 border border-white/10 text-neon-cyan">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="pt-4 border-t border-white/5 flex items-center text-sm text-gray-500 group-hover:text-neon-violet transition-colors">
                                        <ExternalLink size={16} className="mr-2" />
                                        <span>View Project</span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </ScrollReveal>
    );
}
