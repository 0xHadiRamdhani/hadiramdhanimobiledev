import { motion } from "framer-motion";
import { CircuitBoard } from "./ui/CircuitBoard";

export function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <CircuitBoard />
                <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px] animate-float" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }} />
            </div>

            <div className="container mx-auto px-6 z-10 text-center relative">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-neon-cyan text-xl md:text-2xl font-light tracking-widest mb-4">
                        HELLO WORLD, I AM
                    </h2>
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500 pb-2">
                        Hadi Ramdhani
                    </h1>
                    <div className="h-px w-24 bg-neon-cyan mx-auto mb-8 shadow-[0_0_10px_#00f3ff]" />

                    <motion.p
                        className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <span className="text-neon-violet font-semibold">SMK RPL Student</span> | Mobile & Frontend Developer
                    </motion.p>
                </motion.div>

                {/* Floating Code Elements */}
                {/* Decorative elements representing antigravity code blocks */}
                <motion.div
                    className="absolute -left-4 top-1/2 hidden md:block text-gray-800 font-mono text-sm pointer-events-none select-none"
                    animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                    {"<System />"}
                </motion.div>
                <motion.div
                    className="absolute -right-4 bottom-1/3 hidden md:block text-gray-800 font-mono text-sm pointer-events-none select-none"
                    animate={{ y: [0, 40, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                >
                    {"{cybersecurity: true}"}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-neon-cyan to-transparent" />
            </motion.div>
        </section>
    );
}
