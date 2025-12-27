"use client";

import { Briefcase, GraduationCap, Mail, Radio } from "lucide-react";
import { Card } from "./ui/Card";

export function DetailGrid() {
    return (
        <div className="grid grid-cols-2 gap-4 mt-8">
            {/* Status */}
            <Card className="p-4 bg-white/5 border-white/10 flex flex-col items-start gap-3 hover:bg-white/10 transition-colors group" variant="liquid">
                <div className="p-2 bg-green-500/20 rounded-lg text-green-400 group-hover:text-green-300 transition-colors">
                    <Radio size={20} />
                </div>
                <div>
                    <span className="text-xs text-gray-500 font-mono block mb-1">STATUS</span>
                    <span className="text-sm font-bold text-white flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Open for Work
                    </span>
                </div>
            </Card>

            {/* Experience */}
            <Card className="p-4 bg-white/5 border-white/10 flex flex-col items-start gap-3 hover:bg-white/10 transition-colors group" variant="liquid">
                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 group-hover:text-blue-300 transition-colors">
                    <Briefcase size={20} />
                </div>
                <div>
                    <span className="text-xs text-gray-500 font-mono block mb-1">EXPERIENCE</span>
                    <span className="text-sm font-bold text-white">5+ Years</span>
                </div>
            </Card>

            {/* Education */}
            <Card className="p-4 bg-white/5 border-white/10 flex flex-col items-start gap-3 hover:bg-white/10 transition-colors group" variant="liquid">
                <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400 group-hover:text-purple-300 transition-colors">
                    <GraduationCap size={20} />
                </div>
                <div>
                    <span className="text-xs text-gray-500 font-mono block mb-1">EDUCATION</span>
                    <span className="text-sm font-bold text-white">Software Engineering.</span>
                </div>
            </Card>

            {/* Email */}
            <a href="mailto:hadsxdevpy@gmail.com" className="block h-full">
                <Card className="p-4 bg-white/5 border-white/10 flex flex-col items-start gap-3 hover:bg-white/10 transition-colors h-full groupcursor-pointer" variant="liquid">
                    <div className="p-2 bg-red-500/20 rounded-lg text-red-400 group-hover:text-red-300 transition-colors">
                        <Mail size={20} />
                    </div>
                    <div>
                        <span className="text-xs text-gray-500 font-mono block mb-1">EMAIL</span>
                        <span className="text-sm font-bold text-white break-all">hadsxdev@gmail.com</span>
                    </div>
                </Card>
            </a>
        </div>
    );
}
