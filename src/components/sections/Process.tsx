"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Lightbulb,
  Box,
  Palette,
  Bone,
  Sun,
  Rocket,
} from "lucide-react";
import { processSteps } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const stepIcons = [
  <Lightbulb key="concept" size={24} />,
  <Box key="model" size={24} />,
  <Palette key="texture" size={24} />,
  <Bone key="rig" size={24} />,
  <Sun key="light" size={24} />,
  <Rocket key="implement" size={24} />,
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Progress line grows as user scrolls through the section
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section className="py-24 md:py-32 lg:py-40" ref={containerRef}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <SectionHeading
          title="Process"
          subtitle="My creative workflow."
          align="center"
        />

        {/* Steps */}
        <div className="relative max-w-3xl mx-auto">
          {/* Connecting Line (background) */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[1px] bg-border" />

          {/* Animated progress line */}
          <motion.div
            className="absolute left-6 md:left-8 top-0 w-[1px] bg-accent/40 origin-top"
            style={{ height: lineHeight }}
          />

          {/* Steps */}
          <div className="space-y-12 md:space-y-16">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 0.08}>
                <div className="relative flex items-start gap-6 md:gap-10 pl-0">
                  {/* Step Number + Icon */}
                  <div className="relative z-10 flex-shrink-0 w-12 md:w-16 h-12 md:h-16 rounded-full bg-bg-secondary border border-border flex items-center justify-center text-accent/60">
                    {stepIcons[index]}
                  </div>

                  {/* Content */}
                  <div className="pt-1 md:pt-3">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-xs text-accent/50 font-display tracking-wider">
                        {step.number}
                      </span>
                      <h3 className="font-display text-xl md:text-2xl font-medium text-text-primary">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm md:text-base text-text-secondary leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
