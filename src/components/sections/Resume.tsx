"use client";

import { Download } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Resume() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal direction="none">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">
              Resume
            </p>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-text-primary leading-tight mb-6">
              Want to know more?
            </h2>

            <p className="text-text-secondary mb-10">
              Download my resume for a detailed overview of my skills,
              experience and education.
            </p>

            <MagneticButton
              href={siteConfig.resumePath}
              download
              ariaLabel="Download resume"
            >
              {/* 
                Place your resume PDF at:
                /public/resume/Gouthamraj_3DArtist.pdf 
              */}
              <span className="group inline-flex items-center gap-3 px-8 py-4 bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 hover:border-accent/50 transition-all duration-300 rounded-sm text-sm uppercase tracking-[0.15em] font-display cursor-pointer">
                Download Resume
                <Download
                  size={16}
                  className="group-hover:translate-y-0.5 transition-transform"
                />
              </span>
            </MagneticButton>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
