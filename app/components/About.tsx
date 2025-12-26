import { Card } from "./ui/Card";
import { ScrollReveal } from "./ui/ScrollReveal";

export function About() {
    return (
        <ScrollReveal className="py-20 px-6" id="about">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    <span className="text-neon-violet">About</span> Me
                </h2>

                <Card className="border-l-4 border-l-neon-cyan" variant="liquid">
                    <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-center">
                        {/* Placeholder for potential profile image or avatar if desired, using a cyber graphical element for now */}
                        <div className="flex justify-center">
                            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-cyan-500 to-violet-500 p-1 animate-pulse">
                                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                                    <span className="text-4xl">👨‍💻</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 text-gray-300">
                            <p className="text-lg leading-relaxed">
                                I'm <strong className="text-white">Hadi Ramdhani</strong>, a Vocational High School (SMK) student majoring in <span className="text-neon-cyan">Software Engineering (RPL)</span>.
                            </p>
                            <p>
                                My journey in technology is driven by a curiosity for <span className="text-neon-violet">Cyber-Physical Systems</span> and modern app development. I specialize in building responsive web applications and cross-platform mobile apps.
                            </p>
                            <p>
                                Currently exploring the intersection of secure code, beautiful UI, and high-performance engineering.
                            </p>
                        </div>
                    </div>
                </Card>
            </div>
        </ScrollReveal>
    );
}
