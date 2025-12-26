import { motion } from "framer-motion";
import { Smartphone, Globe, Palette, Terminal, Code2, Database } from "lucide-react";

const skills = [
    { name: "Flutter", icon: Smartphone, color: "#42A5F5" },
    { name: "Next.js", icon: Globe, color: "#ffffff" },
    { name: "Tailwind CSS", icon: Palette, color: "#38bdf8" },
    { name: "Python", icon: Terminal, color: "#FFD43B" },
    { name: "Frontend", icon: Code2, color: "#bd00ff" },
    { name: "Backend", icon: Database, color: "#00f3ff" },
];

export function Skills() {
    return (
        <section className="py-20 px-6 relative z-10" id="skills">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                    Technical <span className="text-neon-cyan">Arsenal</span>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="flex flex-col items-center justify-center group"
                        >
                            <div
                                className="w-20 h-20 md:w-24 md:h-24 glass-panel rounded-2xl flex items-center justify-center mb-4 relative transition-all duration-300 group-hover:border-opacity-100 group-hover:shadow-[0_0_20px_rgba(0,243,255,0.3)] border-white/5"
                                style={{ borderColor: "rgba(255,255,255,0.1)" }}
                            >
                                {/* Antigravity hover effect on icon */}
                                <motion.div
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                                >
                                    <skill.icon size={40} color={skill.color} className="group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all" />
                                </motion.div>

                                {/* Corner Accents */}
                                <div className="absolute -top-1 -left-1 w-2 h-2 bg-neon-cyan/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-neon-violet/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            <span className="text-gray-300 font-medium tracking-wide group-hover:text-white transition-colors">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
