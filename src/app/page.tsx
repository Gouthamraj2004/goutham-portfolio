"use client";

import dynamic from "next/dynamic";

// Layout
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Sections
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Process from "@/components/sections/Process";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";

// UI Overlays (client-only, lazy-loaded)
const GrainOverlay = dynamic(() => import("@/components/ui/GrainOverlay"), {
  ssr: false,
});
const CursorGlow = dynamic(() => import("@/components/ui/CursorGlow"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      {/* Global overlays */}
      <GrainOverlay />
      <CursorGlow />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <Intro />
        <Work />
        <About />
        <Skills />
        <Process />
        <Resume />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
