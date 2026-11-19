"use client";

import { motion } from "framer-motion";
import {
  Box,
  Palette,
  Clapperboard,
  Sun,
  Image as ImageIcon,
  Layers,
  Sparkles,
  Sliders,
  Copy,
  Grid,
  Wrench,
  Package,
  Gamepad2,
  Flame,
  Zap,
} from "lucide-react";
import { skillCategories } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

// Map skill names to icons for visual richness
const skillIconMap: Record<string, React.ReactNode> = {
  Blender: <Box size={16} />,
  "3D Modeling": <Box size={16} />,
  "Hard-Surface Modeling": <Layers size={16} />,
  Modifiers: <Sliders size={16} />,
  Bevel: <Wrench size={16} />,
  Mirror: <Copy size={16} />,
  Array: <Grid size={16} />,
  "Materials & Shaders": <Palette size={16} />,
  Texturing: <Palette size={16} />,
  Lighting: <Sun size={16} />,
  Rendering: <ImageIcon size={16} />,
  "3D Animation": <Clapperboard size={16} />,
  "Visual Effects": <Sparkles size={16} />,
  "Simulation / Experiments": <Flame size={16} />,
  "3D Asset Creation": <Package size={16} />,
  "Game-Ready Asset Development": <Gamepad2 size={16} />,
};

// Category icons
const categoryIconMap: Record<string, React.ReactNode> = {
  "3D & Blender": <Box size={22} />,
  "Materials & Rendering": <Palette size={22} />,
  "Animation & Effects": <Clapperboard size={22} />,
  "Asset Development": <Package size={22} />,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 lg:py-40 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <SectionHeading
          title="Skills"
          subtitle="Blender techniques & 3D capabilities."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((category, catIndex) => (
            <ScrollReveal key={category.title} delay={catIndex * 0.1}>
              <motion.div
                className="group p-6 md:p-8 bg-bg-card border border-border rounded-sm hover:border-border-hover hover:bg-bg-card-hover transition-all duration-500"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-accent/60 group-hover:text-accent transition-colors duration-500">
                    {categoryIconMap[category.title] || <Box size={22} />}
                  </div>
                  <h3 className="font-display text-lg font-medium text-text-primary">
                    {category.title}
                  </h3>
                </div>
                <p className="text-sm text-text-tertiary mb-6">
                  {category.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="group/tag inline-flex items-center gap-2 px-3 py-2 text-xs text-text-secondary bg-bg-primary border border-border rounded-sm hover:border-accent/30 hover:text-text-primary hover:bg-accent/5 transition-all duration-300 cursor-default"
                    >
                      <span className="text-text-muted group-hover/tag:text-accent transition-colors duration-300">
                        {skillIconMap[skill.name] || <Zap size={14} />}
                      </span>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
