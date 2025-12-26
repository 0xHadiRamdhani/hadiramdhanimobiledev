import { motion } from "framer-motion";
import { Target, Zap, Layout, Shield, ChevronRight } from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";

const interests = [
    { title: "Mobile Development", icon: Zap, desc: "Building cross-platform apps with Flutter", stats: "High Efficiency" },
    { title: "Frontend Engineering", icon: Layout, desc: "Crafting responsive and interactive webs", stats: "Visual Excellence" },
    { title: "Developer Tools", icon: Target, desc: "Optimizing workflows and DX", stats: "Process Optimized" },
    { title: "Cyber Security", icon: Shield, desc: "Exploring secure systems and protocols", stats: "System Secure" },
];

export function Interests() {
    return (
        <ScrollReveal className="py-20 px-6" id="interests">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                    Areas of <span className="text-neon-violet">Focus</span>
                </h2>

                <div className="flex flex-col gap-4">
                    {interests.map((item, idx) => (
                        <FocusBar key={idx} item={item} index={idx} />
                    ))}
                </div>
            </div>
        </ScrollReveal>
    );
}

function FocusBar({ item, index }: { item: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ x: 10, backgroundColor: "rgba(0, 243, 255, 0.05)" }}
            className="group relative flex items-center justify-between p-6 rounded-lg border-l-2 border-white/10 hover:border-neon-cyan bg-black/20 backdrop-blur-sm transition-all duration-300 cursor-pointer overflow-hidden"
        >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex items-center gap-6 relative z-10">
                <div className="p-3 rounded-lg bg-white/5 text-gray-400 group-hover:text-neon-cyan group-hover:bg-neon-cyan/20 transition-colors">
                    <item.icon size={24} />
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                    <h3 className="text-lg font-bold text-white group-hover:text-neon-cyan transition-colors min-w-[200px]">
                        {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors border-l border-white/10 pl-0 md:pl-6 md:border-l-0">
                        {item.desc}
                    </p>
                </div>
            </div>

            <div className="hidden md:flex items-center gap-4 relative z-10">
                <span className="text-xs font-mono text-neon-violet opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
                    [{item.stats}]
                </span>
                <ChevronRight className="text-gray-600 group-hover:text-neon-cyan transition-transform group-hover:translate-x-1" size={20} />
            </div>
        </motion.div>
    );
}
