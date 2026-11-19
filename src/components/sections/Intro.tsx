"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/data/portfolio";

export default function Intro() {
  return (
    <section className="py-24 md:py-32 lg:py-40 border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          {/* Large statement */}
          <ScrollReveal>
            <p className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] text-text-primary leading-snug font-medium">
              {siteConfig.introStatement}
            </p>
          </ScrollReveal>

          {/* Body text */}
          <ScrollReveal delay={0.15}>
            <p className="text-base md:text-lg text-text-secondary mt-8 max-w-2xl leading-relaxed">
              Focusing on{" "}
              <span className="text-text-primary">hard-surface modeling</span>,{" "}
              <span className="text-text-primary">materials & shaders</span>,{" "}
              <span className="text-text-primary">lighting & rendering</span>, and{" "}
              <span className="text-text-primary">3D animation</span>{" "}
              — developing game-ready assets and creative digital art using{" "}
              <span className="text-accent">Blender</span>.
            </p>
          </ScrollReveal>

          {/* Decorative divider */}
          <ScrollReveal delay={0.25}>
            <div className="flex items-center gap-4 mt-12">
              <div className="h-[1px] w-12 bg-accent/40" />
              <span className="text-xs uppercase tracking-[0.3em] text-text-muted">
                BLENDER • HARD-SURFACE • MATERIALS • RENDERING • ANIMATION
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
