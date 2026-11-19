"use client";

import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-16 md:mb-20 ${alignClass} ${className}`}>
      <ScrollReveal>
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4 font-body">
          {title}
        </p>
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-text-primary leading-tight">
            {subtitle}
          </h2>
        </ScrollReveal>
      )}
    </div>
  );
}
