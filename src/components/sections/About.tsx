"use client";

import Image from "next/image";
import { aboutText, timeline, siteConfig } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-8">
        <SectionHeading
          title="About"
          subtitle="About Me"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Profile Image */}
          <div className="lg:col-span-4">
            <ScrollReveal>
              <div className="relative">
                {/* 
                  Profile Photo
                  Place your photo at:
                  /public/images/profile/profile.png
                */}
                <div className="aspect-[4/5] bg-bg-card rounded-sm border border-border overflow-hidden relative">
                  <Image
                    src="/images/profile/profile.png"
                    alt="Gouthamraj - 3D Artist"
                    fill
                    className="object-cover"
                  />

                  {/* Decorative glow */}
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
                </div>

                {/* Decorative line */}
                <div className="hidden lg:block absolute -right-10 top-1/2 w-10 h-[1px] bg-border" />
              </div>
            </ScrollReveal>
          </div>

          {/* Content */}
          <div className="lg:col-span-8">
            {/* Bio */}
            <ScrollReveal>
              <p className="font-display text-xl md:text-2xl text-text-primary leading-relaxed mb-6">
                {aboutText.intro}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-text-secondary leading-relaxed mb-12 max-w-2xl">
                {aboutText.body}
              </p>
            </ScrollReveal>

            {/* Timeline */}
            <ScrollReveal delay={0.2}>
              <h3 className="text-xs uppercase tracking-[0.3em] text-accent mb-8">
                Journey
              </h3>
            </ScrollReveal>

            <div className="space-y-0">
              {timeline.map((entry, index) => (
                <ScrollReveal key={index} delay={0.25 + index * 0.08}>
                  <div className="relative pl-8 pb-10 last:pb-0 border-l border-border">
                    {/* Dot */}
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-bg-primary border-2 border-accent/50" />

                    <p className="text-xs uppercase tracking-[0.2em] text-accent mb-1">
                      {entry.period}
                    </p>

                    <h4 className="font-display text-lg text-text-primary font-medium mb-1">
                      {entry.title}
                    </h4>

                    <p className="text-sm text-text-tertiary mb-2">
                      {entry.subtitle}
                    </p>

                    <p className="text-sm text-text-secondary leading-relaxed">
                      {entry.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}