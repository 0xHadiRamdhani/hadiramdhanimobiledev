import { Card } from "./ui/Card";
import { Github, Linkedin, Mail, Send } from "lucide-react";

export function Contact() {
    return (
        <section className="py-20 px-6 relative z-10 overflow-hidden" id="contact">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                    Get In <span className="text-neon-cyan">Touch</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                        <p className="text-gray-400 mb-8">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        <div className="flex flex-col gap-6">
                            <a href="https://github.com" target="_blank" className="flex items-center gap-4 text-gray-300 hover:text-neon-cyan transition-colors group">
                                <div className="p-3 glass-panel rounded-full group-hover:border-neon-cyan/50 transition-colors">
                                    <Github size={20} />
                                </div>
                                <span>github.com/0xHadiRamdhani</span>
                            </a>
                            <a href="https://linkedin.com" target="_blank" className="flex items-center gap-4 text-gray-300 hover:text-neon-cyan transition-colors group">
                                <div className="p-3 glass-panel rounded-full group-hover:border-neon-cyan/50 transition-colors">
                                    <Linkedin size={20} />
                                </div>
                                <span>linkedin.com/in/0xHadiRamdhani</span>
                            </a>
                            <a href="mailto:email@example.com" className="flex items-center gap-4 text-gray-300 hover:text-neon-cyan transition-colors group">
                                <div className="p-3 glass-panel rounded-full group-hover:border-neon-cyan/50 transition-colors">
                                    <Mail size={20} />
                                </div>
                                <span>hadsxdev@gmail.com</span>
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <Card className="p-8">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-neon-cyan transition-colors" placeholder="Hadi Ramdhani" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-neon-cyan transition-colors" placeholder="hadsxdev@gmail.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-neon-cyan transition-colors" placeholder="Your message..." />
                            </div>
                            <button className="w-full bg-gradient-to-r from-neon-violet to-neon-cyan text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                                <Send size={18} />
                                Send Message
                            </button>
                        </form>
                    </Card>
                </div>
            </div>
        </section>
    );
}
