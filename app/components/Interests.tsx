import { Card } from "./ui/Card";
import { Target, Zap, Layout, Shield } from "lucide-react";

const interests = [
    { title: "Mobile Development", icon: Zap, desc: "Building cross-platform apps with Flutter" },
    { title: "Frontend Engineering", icon: Layout, desc: "Crafting responsive and interactive webs" },
    { title: "Developer Tools", icon: Target, desc: "Optimizing workflows and DX" },
    { title: "Cyber Security", icon: Shield, desc: "Exploring secure systems and protocols" },
];

export function Interests() {
    return (
        <section className="py-20 px-6 relative z-10" id="interests">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                    Areas of <span className="text-neon-violet">Focus</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {interests.map((item, idx) => (
                        <Card key={idx} delay={idx * 0.1} className="flex items-center gap-6 hover:bg-white/5">
                            <div className="p-4 rounded-xl bg-neon-violet/10 text-neon-violet">
                                <item.icon size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
