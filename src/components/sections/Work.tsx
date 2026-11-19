"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import { projects } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProjectDetail from "./ProjectDetail";
import type { Project } from "@/data/portfolio";

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setIsDetailOpen(true);
  };

  const closeProject = () => {
    setIsDetailOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="work" className="py-24 md:py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <SectionHeading
          title="Selected Work"
          subtitle="A selection of 3D, animation and interactive projects."
        />

        {/* Projects */}
        <div className="space-y-20 md:space-y-32">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={0.1}>
              <motion.article
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
                whileHover={{ scale: 1.005 }}
                transition={{ duration: 0.4 }}
              >
                {/* Image */}
                <div
                  className={`group relative cursor-pointer ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                  onClick={() => openProject(project)}
                >
                  <div className="relative aspect-[16/10] bg-bg-card rounded-sm overflow-hidden border border-border group-hover:border-border-hover transition-all duration-500">
                    {project.thumbnail && (
                      <>
                        {/* Ambient blurred backdrop so any aspect ratio image fits perfectly */}
                        <img
                          src={project.thumbnail}
                          alt=""
                          aria-hidden="true"
                          className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110"
                        />
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          className="relative z-10 w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = "none";
                          }}
                        />
                      </>
                    )}
                    <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center bg-gradient-to-br from-bg-card to-bg-tertiary">
                      <div className="w-20 h-20 rounded-full border border-border flex items-center justify-center mb-4 group-hover:border-accent/30 group-hover:bg-accent/5 transition-all duration-500">
                        <ImageIcon
                          size={28}
                          className="text-text-muted group-hover:text-accent transition-colors duration-500"
                        />
                      </div>
                      <p className="text-sm text-text-muted">
                        Project Image
                      </p>
                      <p className="text-xs text-text-muted mt-1 opacity-50">
                        {project.thumbnail}
                      </p>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* View Project badge */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-bg-primary/80 backdrop-blur-sm border border-border rounded-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 z-10">
                      <span className="text-xs uppercase tracking-[0.15em] text-text-secondary">
                        View Project
                      </span>
                      <ArrowUpRight size={14} className="text-accent" />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div
                  className={`${
                    index % 2 === 1 ? "lg:order-1 lg:text-right" : ""
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-accent mb-3">
                    {project.category}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium text-text-primary leading-tight mb-4">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-6 max-w-md">
                    {project.description}
                  </p>

                  {/* Tools */}
                  <div
                    className={`flex flex-wrap gap-2 mb-8 ${
                      index % 2 === 1 ? "lg:justify-end" : ""
                    }`}
                  >
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 text-xs text-text-tertiary bg-bg-card border border-border rounded-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className={`flex items-center gap-6 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                    <button
                      onClick={() => openProject(project)}
                      className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-text-secondary hover:text-accent transition-colors duration-300"
                    >
                      View Project
                      <ArrowUpRight
                        size={16}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </button>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm uppercase tracking-[0.15em] text-accent hover:text-accent-light transition-colors duration-300"
                      >
                        GitHub
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetail
        project={selectedProject}
        isOpen={isDetailOpen}
        onClose={closeProject}
      />
    </section>
  );
}
