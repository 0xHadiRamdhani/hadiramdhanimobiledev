"use client";

import { useState } from "react";
import { Highlight, themes, type Language } from "prism-react-renderer";
import { Check, Copy, Code2, Terminal } from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";
import { delay, motion } from "framer-motion";

const snippets = [
  {
    title: "Flutter Glass Widget",
    language: "dart",
    code: `// glass_panel.dart
class GlassPanel extends StatelessWidget {
  final Widget child;
  
  const GlassPanel({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(16),
      child: BackdropFilter(
        filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),
        child: Container(
          decoration: BoxDecoration(
            color: Colors.white.withOpacity(0.05),
            border: Border.all(color: Colors.white.withOpacity(0.1)),
            gradient: LinearGradient(
              colors: [
                Colors.cyanAccent.withOpacity(0.1),
                Colors.purpleAccent.withOpacity(0.05),
              ],
            ),
          ),
          child: child,
        ),
      ),
    );
  }
}`
  },
  {
    title: "Next.js Liquid Card",
    language: "tsx",
    code: `// LiquidCard.tsx
"use client";
import { motion } from "framer-motion";

export function LiquidCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div 
      className="relative overflow-hidden group rounded-xl bg-black/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
        {/* Liquid Fill Animation */}
        <motion.div 
            className="absolute bottom-0 left-0 w-full bg-neon-cyan/20 blur-md"
            initial={{ height: "0%" }}
            whileHover={{ height: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        
        <div className="relative z-10 p-6">
            {children}
        </div>
    </motion.div>
  );
}`
  },
  {
    title: "Flutter Secure Storage",
    language: "dart",
    code: `// auth_service.dart
class AuthService {
  final _storage = const FlutterSecureStorage();

  Future<void> login(String token) async {
    // Store encrypted token
    await _storage.write(
      key: 'jwt_token', 
      value: token,
      aOptions: AndroidOptions(encryptedSharedPreferences: true),
    );
    
    Get.offAll(() => const DashboardScreen());
  }
}`
  },
  {
    title: "Next.js API Route",
    language: "typescript",
    code: `// app/api/hello/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const data = {
    message: "Hello form CyberSystem",
    timestamp: new Date().toISOString(),
    status: "operational"
  };

  return NextResponse.json(data, { 
    status: 200,
    headers: { 'Cache-Control': 'no-store' } 
  });
}`
  }
];

export function CodeShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(snippets[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ScrollReveal className="py-20 px-6 relative" id="code-showcase">
      {/* Background Decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-violet/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            System <span className="text-neon-cyan">Architecture</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore the core algorithms driving this cyber-physical system.
            Efficient, clean, and built for performance.
          </p>
        </div>

        {/* Code Window */}
        <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0c0c0c]/80 backdrop-blur-md shadow-2xl relative group">

          {/* Window Header (Tabs & Controls) */}
          <div className="flex flex-col md:flex-row items-center justify-between border-b border-white/5 bg-black/50 p-2">
            {/* Mac-style Buttons */}
            <div className="hidden md:flex gap-2 px-4">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>

            {/* Tabs */}
            <div className="flex gap-1 overflow-x-auto max-w-full no-scrollbar px-2 py-1 md:py-0">
              {snippets.map((snippet, index) => (
                <button
                  key={index}
                  onClick={() => { setActiveTab(index); setCopied(false); }}
                  className={`px-4 py-2 text-sm font-mono rounded-t-lg transition-colors whitespace-nowrap flex items-center gap-2 ${activeTab === index
                    ? "bg-[#1a1b26] text-neon-cyan border-t-2 border-neon-cyan"
                    : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                    }`}
                >
                  <Code2 size={14} />
                  {snippet.title}
                </button>
              ))}
            </div>

            {/* Spacer for layout balance */}
            <div className="hidden md:block w-16" />
          </div>

          {/* Code Content */}
          <div className="relative bg-[#1a1b26] p-6 text-sm md:text-base overflow-x-auto min-h-[300px]">

            {/* Copy Button */}
            <button
              onClick={copyToClipboard}
              className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-gray-400 hover:text-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
              title="Copy Code"
            >
              {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
            </button>

            <Highlight
              theme={themes.nightOwl}
              code={snippets[activeTab].code}
              language={snippets[activeTab].language as Language ?? "tsx"}
            >
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre style={{ ...style, backgroundColor: "transparent" }} className="font-mono">
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line })} className="table-row">
                      <span className="table-cell select-none text-gray-700 text-right pr-4 w-10">
                        {i + 1}
                      </span>
                      <span className="table-cell">
                        {line.map((token, key) => (
                          <span key={key} {...getTokenProps({ token })} />
                        ))}
                      </span>
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </div>

          {/* Footer Status Bar */}
          <div className="bg-black/80 px-4 py-1 text-xs text-gray-500 font-mono flex justify-between items-center border-t border-white/5">
            <div className="flex items-center gap-2">
              <Terminal size={12} />
              <span>Language: {snippets[activeTab].language.toUpperCase()}</span>
            </div>
            <div>
              UTF-8 | Read-Only
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
