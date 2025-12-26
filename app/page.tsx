"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Interests } from "./components/Interests";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Terminal } from "./components/Terminal";
import { CodeShowcase } from "./components/CodeShowcase";
import { Preloader } from "./components/Preloader";
import { MouseParticles } from "./components/ui/MouseParticles";
import { DynamicBackground } from "./components/ui/DynamicBackground";
import { UIProvider } from "./context/UIContext";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <UIProvider>
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen relative selection:bg-neon-cyan selection:text-black"
        >
          <DynamicBackground />
          <MouseParticles />
          <Header />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <CodeShowcase />
          <Interests />
          <Contact />
          <Footer />
          <Terminal />
        </motion.main>
      )}
    </UIProvider>
  );
}
