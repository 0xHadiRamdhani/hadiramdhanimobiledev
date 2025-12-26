"use client";

import { motion } from "framer-motion";
import { CircuitBoard } from "./ui/CircuitBoard";
import { useSectionInView } from "../context/UIContext";
import { useState, useEffect } from "react";

export function Hero() {
    const ref = useSectionInView("hero", "cyan");
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(200);
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const toRotate = [
        "Hadi Ramdhani",
        "Software Engineer",
        "Mobile Engineer",
        "FrontEnd Engineer",
        "BackEnd Engineer"
    ];

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(2000); // Pause at end
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(100); // Fast typing start
        } else {
            // Normal typing speed
            // Randomize slightly for realism
            setDelta(isDeleting ? 50 : 150 - Math.random() * 50);
        }
    };

    return (
        <section ref={ref} className="min-h-screen flex items-center justify-center relative overflow-hidden">
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
                    <h1 className="text-4xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-white via-gray-200 to-gray-500 pb-2 min-h-[1.2em]">
                        {text}<span className="animate-pulse text-neon-cyan">|</span>
                    </h1>
                    <div className="h-px w-24 bg-neon-cyan mx-auto mb-8 shadow-[0_0_10px_#00f3ff]" />

                    <motion.p
                        className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <span className="text-neon-cyan font-semibold">SMK RPL Student</span> | Solve problems. Engineer systems. Ship impact.
                    </motion.p>
                </motion.div>

                {/* Extended Floating Anti-Gravity Elements */}
                {[
                    { content: "<System />", top: "20%", left: "10%", delay: 0, duration: 8, rotate: 5, y: -30 },
                    { content: "{cybersecurity: true}", top: "70%", right: "10%", delay: 1, duration: 10, rotate: -5, y: 40 },
                    { content: "0x1F4A9", top: "15%", right: "20%", delay: 2, duration: 7, rotate: 10, y: -25 },
                    { content: "git push --force", top: "85%", left: "15%", delay: 1.5, duration: 9, rotate: -8, y: 35 },
                    { content: "function() => {}", top: "40%", left: "5%", delay: 3, duration: 11, rotate: 3, y: -45 },
                    { content: "[]", top: "60%", right: "5%", delay: 2.5, duration: 6, rotate: -12, y: 20 },
                    { content: "404", top: "30%", right: "30%", delay: 0.5, duration: 8.5, rotate: 6, y: -35, className: "text-neon-violet/30" },
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        className={`absolute hidden md:block font-mono text-sm pointer-events-none select-none ${item.className || "text-white/10"}`}
                        style={{ top: item.top, left: item.left, right: item.right }}
                        initial={{ y: 0, rotate: 0 }}
                        animate={{
                            y: [0, item.y, 0],
                            rotate: [0, item.rotate, 0],
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                            duration: item.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: item.delay
                        }}
                    >
                        {item.content}
                    </motion.div>
                ))}

                {/* Geometric Floating Shapes */}
                {[
                    { width: 40, height: 40, top: "25%", left: "25%", border: "border-neon-cyan/20", delay: 0, duration: 12 },
                    { width: 60, height: 60, top: "65%", right: "25%", border: "border-neon-violet/20", delay: 2, duration: 15 },
                    { width: 20, height: 20, top: "80%", left: "40%", border: "border-white/10", delay: 4, duration: 8 },
                ].map((shape, i) => (
                    <motion.div
                        key={`shape-${i}`}
                        className={`absolute border ${shape.border} rounded-lg`}
                        style={{
                            width: shape.width,
                            height: shape.height,
                            top: shape.top,
                            left: shape.left,
                            right: shape.right
                        }}
                        animate={{
                            y: [0, -40, 0],
                            rotate: [0, 180, 360],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{
                            duration: shape.duration,
                            repeat: Infinity,
                            ease: "linear",
                            delay: shape.delay
                        }}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-px h-16 bg-linear-to-b from-transparent via-neon-cyan to-transparent" />
            </motion.div>
        </section>
    );
}
