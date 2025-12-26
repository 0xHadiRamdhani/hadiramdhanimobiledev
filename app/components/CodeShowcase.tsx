"use client";

import React, { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import { ScrollReveal } from "./ui/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Terminal, Code2 } from "lucide-react";
import { useSectionInView } from "../context/UIContext";

const snippets = [
  {
    title: "Glassmorphism Widget",
    lang: "dart",
    icon: <Code2 size={16} />,
    code: `class GlassBox extends StatelessWidget {
  final Widget child;

  const GlassBox({required this.child});

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(20),
      child: BackdropFilter(
        filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),
        child: Container(
          color: Colors.white.withOpacity(0.1),
          child: child,
        ),
      ),
    );
  }
}`
  },
  {
    title: "Next.js Liquid Card",
    lang: "tsx",
    icon: <Terminal size={16} />,
    code: `export const LiquidCard = ({ children }) => (
  <motion.div 
    className="relative overflow-hidden bg-white/5 
               border border-white/10 backdrop-blur-md"
    whileHover={{ scale: 1.02 }}
  >
    <div className="absolute inset-0 bg-gradient-to-tr 
                    from-cyan-500/20 to-violet-500/20 
                    opacity-0 hover:opacity-100 transition" />
    {children}
  </motion.div>
);`
  },
  {
    title: "Flutter Particle System",
    lang: "dart",
    icon: <Code2 size={16} />,
    code: `class ParticlePainter extends CustomPainter {
  final List<Particle> particles;

  ParticlePainter(this.particles);

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()..color = Colors.cyanAccent;
    
    for (var particle in particles) {
      canvas.drawCircle(
        Offset(particle.x, particle.y), 
        particle.radius, 
        paint
      );
    }
  }
}`
  },
  {
    title: "Secure Storage Service",
    lang: "dart",
    icon: <Code2 size={16} />,
    code: `class SecureStorageService {
  final _storage = const FlutterSecureStorage();

  Future<void> write(String key, String value) async {
    await _storage.write(
      key: key, 
      value: value,
      aOptions: _getAndroidOptions(),
    );
  }

  AndroidOptions _getAndroidOptions() => 
      const AndroidOptions(encryptedSharedPreferences: true);
}`
  },
  {
    title: "API Route Handler",
    lang: "typescript",
    icon: <Terminal size={16} />,
    code: `import { NextResponse } from 'next/server';

export async function GET() {
  const data = await fetchExternalData();

  if (!data) {
    return NextResponse.json(
      { error: 'Failed to fetch' }, 
      { status: 500 }
    );
  }

  return NextResponse.json({ 
    message: 'Success', 
    data 
  });
}`
  }
];

export function CodeShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const ref = useSectionInView("code", "rose");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(snippets[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section ref={ref} id="code-showcase">
      <ScrollReveal className="py-20 px-6 relative">
        {/* Background Decoration */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-violet/10 rounded-full blur-[120px] -z-10" />

        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-neon-cyan">04. </span> Code Quality
          </h2>

          <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl backdrop-blur-sm relative">

            {/* Header Bar */}
            <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/5">
              <div className="flex gap-2 mr-6">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>

              {/* Tabs */}
              <div className="flex gap-1 overflow-x-auto no-scrollbar">
                {snippets.map((snippet, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`
                                        flex items-center gap-2 px-3 py-1.5 rounded-t-md text-xs font-mono transition-colors
                                        ${activeTab === index
                        ? "bg-[#1e1e1e] text-neon-cyan border-t-2 border-neon-cyan"
                        : "text-gray-500 hover:text-gray-300 hover:bg-white/5"}
                                    `}
                  >
                    {snippet.icon}
                    {snippet.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Code Area */}
            <div className="relative group">
              <button
                onClick={copyToClipboard}
                className="absolute right-4 top-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-gray-400 hover:text-white transition-all opacity-0 group-hover:opacity-100 z-10"
                title="Copy Code"
              >
                {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
              </button>

              <div className="p-6 bg-[#0a0a0a] overflow-x-auto min-h-[300px] text-sm md:text-base font-mono leading-relaxed">
                <Highlight
                  theme={themes.vsDark}
                  code={snippets[activeTab].code}
                  language={snippets[activeTab].lang}
                >
                  {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre style={{ ...style, backgroundColor: "transparent" }} className={className}>
                      {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line })}>
                          <span className="text-gray-700 select-none w-8 inline-block text-right mr-4">{i + 1}</span>
                          {line.map((token, key) => (
                            <span key={key} {...getTokenProps({ token })} />
                          ))}
                        </div>
                      ))}
                    </pre>
                  )}
                </Highlight>
              </div>
            </div>

            {/* Footer Status Bar */}
            <div className="bg-neon-cyan/5 px-4 py-1 text-[10px] md:text-xs font-mono text-neon-cyan flex justify-between items-center border-t border-white/5">
              <span>Ln {snippets[activeTab].code.split('\n').length}, Col 1</span>
              <span>{snippets[activeTab].lang.toUpperCase()}</span>
              <span>UTF-8</span>
            </div>

          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
