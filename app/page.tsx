"use client";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Interests } from "./components/Interests";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-neon-cyan selection:text-black">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Interests />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
