"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, Minus, Square } from "lucide-react";
import { cn } from "@/app/lib/utils";

interface Log {
    type: "input" | "output";
    text: string;
}

const COMMANDS = {
    help: "Available commands: ./about, ./skills, ./contact, ./projects, whoami, clear",
    "./about": "Hadi Ramdhani | SMK RPL Student | Aspiring Mobile & Frontend Dev.",
    "./skills": "flutter, next.js, tailwind, python, cyber-security, developer-tools",
    "./contact": "GitHub: github.com/0xHadiRamdhani | LinkedIn: linkedin.com/in/0xHadiRamdhani",
    "./projects": "Cyber Portfolio | Flutter E-Commerce | Secure Chat App",
    "whoami": "root@cyber-system:~/portfolio",
};

export function Terminal() {
    const [isOpen, setIsOpen] = useState(true); // Default open to show off
    const [isMinimized, setIsMinimized] = useState(false);
    const [input, setInput] = useState("");
    const [logs, setLogs] = useState<Log[]>([
        { type: "output", text: "Welcome to CyberSystem v1.0. Type 'help' for commands." }
    ]);
    const inputRef = useRef<HTMLInputElement>(null);
    const logsEndRef = useRef<HTMLDivElement>(null);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        const cmd = input.trim().toLowerCase();

        if (!cmd) return;

        const newLogs = [...logs, { type: "input" as const, text: input }];

        if (cmd === "clear" || cmd === "cls") {
            setLogs([]);
        } else {
            const output = COMMANDS[cmd as keyof typeof COMMANDS] || `Command not found: ${cmd}. Type 'help' for list.`;
            newLogs.push({ type: "output", text: output });
            setLogs(newLogs);
        }

        setInput("");
    };

    // Auto-scroll to bottom
    useEffect(() => {
        if (logsEndRef.current) {
            logsEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [logs, isOpen, isMinimized]);

    // Focus input on click
    const focusInput = () => {
        inputRef.current?.focus();
    };

    if (!isOpen) {
        return (
            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-50 p-4 bg-black/80 border border-neon-cyan/50 text-neon-cyan rounded-full shadow-[0_0_15px_rgba(0,243,255,0.3)] hover:shadow-[0_0_25px_rgba(0,243,255,0.5)] transition-all"
            >
                <TerminalIcon size={24} />
            </motion.button>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={cn(
                "fixed right-4 md:right-8 z-50 w-[90vw] md:w-[450px] bg-[#0c0c0c]/95 border border-white/10 rounded-lg shadow-2xl backdrop-blur-xl overflow-hidden font-mono text-sm",
                isMinimized ? "bottom-4 h-10" : "bottom-4 h-[350px]"
            )}
        >
            {/* Header */}
            <div
                className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5 cursor-pointer"
                onClick={() => setIsMinimized(!isMinimized)}
            >
                <div className="flex items-center gap-2 text-gray-400">
                    <TerminalIcon size={14} />
                    <span className="text-xs">visitor@hadi-portfolio: ~</span>
                </div>
                <div className="flex items-center gap-2">
                    <button onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }} className="hover:text-white text-gray-500">
                        <Minus size={14} />
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); setIsOpen(false); }} className="hover:text-red-500 text-gray-500">
                        <X size={14} />
                    </button>
                </div>
            </div>

            {/* Terminal Body */}
            {!isMinimized && (
                <div
                    className="p-4 h-[calc(100%-40px)] overflow-y-auto custom-scrollbar"
                    onClick={focusInput}
                >
                    {logs.map((log, i) => (
                        <div key={i} className="mb-2">
                            {log.type === "input" ? (
                                <div className="flex gap-2 text-gray-400">
                                    <span className="text-neon-cyan">➜</span>
                                    <span className="text-white">~</span>
                                    <span>{log.text}</span>
                                </div>
                            ) : (
                                <div className="text-neon-cyan/90 pl-6 leading-relaxed">
                                    {log.text}
                                </div>
                            )}
                        </div>
                    ))}

                    <form onSubmit={handleCommand} className="flex gap-2 text-gray-400 mt-2">
                        <span className="text-neon-cyan">➜</span>
                        <span className="text-white">~</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="bg-transparent border-none outline-none flex-1 text-white caret-neon-cyan"
                            autoFocus
                            spellCheck={false}
                            autoComplete="off"
                        />
                    </form>
                    <div ref={logsEndRef} />
                </div>
            )}
        </motion.div>
    );
}
