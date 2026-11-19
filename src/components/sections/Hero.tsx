"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, User } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import MagneticButton from "@/components/ui/MagneticButton";
import dynamic from "next/dynamic";

// Lazy-load the 3D scene to avoid SSR issues and improve initial load
const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-bg-primary" aria-hidden="true" />
  ),
});

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.6,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

const sceneVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.5,
      delay: 0.3,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function Hero() {
  const handleScrollToWork = () => {
    const el = document.querySelector("#work");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToAbout = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-bg-primary"
    >
      {/* 3D Background Scene */}
      <motion.div
        className="absolute inset-0"
        variants={sceneVariants}
        initial="hidden"
        animate="visible"
      >
        <HeroScene />
      </motion.div>

      {/* Gradient overlays for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/80 via-transparent to-bg-primary z-[1] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/70 via-transparent to-transparent z-[1] pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline & Bio */}
          <div className="lg:col-span-7">
            {/* Overline */}
            <motion.p
              className="text-xs uppercase tracking-[0.3em] text-accent mb-6"
              variants={itemVariants}
            >
              Portfolio
            </motion.p>

            {/* Name */}
            <motion.h1
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-text-primary leading-[0.95] tracking-tight"
              variants={itemVariants}
            >
              {siteConfig.name.toUpperCase()}
            </motion.h1>

            {/* Title */}
            <motion.h2
              className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-text-secondary mt-3 leading-tight"
              variants={itemVariants}
            >
              3D Artist
              <br />
              <span className="text-text-tertiary">&</span>{" "}
              <span className="text-gradient">3D Animator</span>
            </motion.h2>

            {/* Skill Pills line */}
            <motion.p
              className="text-xs uppercase tracking-[0.2em] text-accent/80 mt-4 font-display"
              variants={itemVariants}
            >
              {siteConfig.skillLine}
            </motion.p>

            {/* Tagline */}
            <motion.p
              className="text-base md:text-lg text-text-secondary mt-5 max-w-xl leading-relaxed"
              variants={itemVariants}
            >
              {siteConfig.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-start gap-4 mt-8 md:mt-10"
              variants={itemVariants}
            >
              <MagneticButton onClick={handleScrollToWork}>
                <span className="group flex items-center gap-3 px-7 py-3.5 bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 hover:border-accent/50 transition-all duration-300 rounded-sm text-sm uppercase tracking-[0.15em] font-display cursor-pointer">
                  View My Work
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </MagneticButton>

              <MagneticButton onClick={handleScrollToAbout}>
                <span className="group flex items-center gap-3 px-7 py-3.5 border border-border text-text-secondary hover:border-border-hover hover:text-text-primary transition-all duration-300 rounded-sm text-sm uppercase tracking-[0.15em] font-display cursor-pointer">
                  About Me
                  <User size={16} />
                </span>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Column: Floating 3D Showcase Badges framing the model */}
          <div className="hidden lg:flex lg:col-span-5 flex-col items-end justify-between h-[420px] pointer-events-none select-none">
            {/* Top Badge */}
            <motion.div
              className="px-4 py-2 bg-bg-card/70 backdrop-blur-md border border-border rounded-full flex items-center gap-2.5 shadow-lg shadow-black/40"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-text-secondary font-display">
                Real-Time 3D Mesh
              </span>
            </motion.div>

            {/* Middle Prompt */}
            <motion.div
              className="px-4 py-1.5 bg-bg-primary/40 backdrop-blur-sm border border-border/50 rounded-sm text-[11px] uppercase tracking-[0.15em] text-text-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 1.6, duration: 1 }}
            >
              Drag to rotate ↺
            </motion.div>

            {/* Bottom Spec Pill */}
            <motion.div
              className="px-4 py-2.5 bg-bg-card/70 backdrop-blur-md border border-border rounded-sm flex flex-col gap-0.5 text-right shadow-lg shadow-black/40"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-display">
                Blender • Cycles • Eevee
              </span>
              <span className="text-xs text-text-tertiary">
                Hard-Surface & Organic Topology
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-text-muted">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
