"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const content = {
    roles: ["Frontend Dev", "Mobile Engineer", "UI Designer", "Fullstack Dev"],
    likes: ["Kopi", "Matcha", "Coding", "Music"],
    techs: ["React", "Flutter", "Next.js", "TypeScript"]
};

export function DynamicBio() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [likeIndex, setLikeIndex] = useState(0);
    const [techIndex, setTechIndex] = useState(0);

    const toggle = (current: number, max: number, setter: (n: number) => void) => {
        setter((current + 1) % max);
    };

    const Word = ({ text, onClick }: { text: string; onClick: () => void }) => (
        <span
            onClick={onClick}
            className="inline-block relative cursor-pointer text-neon-cyan hover:text-white transition-colors border-b border-neon-cyan/30 hover:border-neon-cyan mx-1 min-w-[100px] text-center select-none"
        >
            <AnimatePresence mode="wait">
                <motion.span
                    key={text}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="block"
                >
                    {text}
                </motion.span>
            </AnimatePresence>
        </span>
    );

    return (
        <div className="font-mono text-lg md:text-xl leading-relaxed text-gray-300">
            <p>
                Saya adalah seorang
                <Word
                    text={content.roles[roleIndex]}
                    onClick={() => toggle(roleIndex, content.roles.length, setRoleIndex)}
                />
                yang suka
                <Word
                    text={content.likes[likeIndex]}
                    onClick={() => toggle(likeIndex, content.likes.length, setLikeIndex)}
                />
                dan mahir di
                <Word
                    text={content.techs[techIndex]}
                    onClick={() => toggle(techIndex, content.techs.length, setTechIndex)}
                />.
            </p>
            <p className="text-xs text-gray-500 mt-4 italic">
                (Klik kata yang berwarna biru untuk mengubahnya bio-nya)
            </p>
        </div>
    );
}
