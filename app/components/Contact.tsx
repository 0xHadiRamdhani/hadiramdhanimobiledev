"use client";

import { Card } from "./ui/Card";
import { ScrollReveal } from "./ui/ScrollReveal";
import { Mail, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useSectionInView } from "../context/UIContext";

export function Contact() {
    const ref = useSectionInView("contact", "violet");

    return (
        <section ref={ref} id="contact">
            <ScrollReveal className="py-24 px-6 relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-neon-cyan/5 blur-[120px] -z-10 pointer-events-none" />

                <div className="container mx-auto max-w-xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                        <span className="text-neon-cyan">06. </span> Initialize Connection
                    </h2>

                    <p className="text-gray-400 mb-12">
                        My inbox is always open. Whether you have a question, a project idea, or just want to verify my hash, I'll try my best to get back to you!
                    </p>

                    <Card className="p-8 backdrop-blur-xl bg-black/40 border-white/10" variant="liquid">
                        <form className="space-y-6 text-left">
                            <div>
                                <label className="block text-xs font-mono text-neon-cyan mb-2">IDENTIFIER (NAME)</label>
                                <input
                                    type="text"
                                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all text-white"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-neon-cyan mb-2">DATA PACKET (EMAIL)</label>
                                <input
                                    type="email"
                                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all text-white"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-neon-cyan mb-2">PAYLOAD (MESSAGE)</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all text-white resize-none"
                                    placeholder="Enter your message"
                                />
                            </div>

                            <button className="w-full bg-linear-to-r from-neon-cyan to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold py-4 rounded-md transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2">
                                <Send size={18} /> TRANSMIT
                            </button>
                        </form>
                    </Card>

                    <div className="mt-16 flex justify-center gap-8">
                        <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors transform hover:-translate-y-1"><Github size={24} /></a>
                        <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors transform hover:-translate-y-1"><Linkedin size={24} /></a>
                        <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors transform hover:-translate-y-1"><Twitter size={24} /></a>
                        <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors transform hover:-translate-y-1"><Mail size={24} /></a>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}
