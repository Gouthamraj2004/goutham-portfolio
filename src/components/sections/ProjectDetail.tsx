"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import type { Project } from "@/data/portfolio";

interface ProjectDetailProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDetail({
  project,
  isOpen,
  onClose,
}: ProjectDetailProps) {
  const [activeTab, setActiveTab] = useState(0);

  // Lock scroll and handle ESC key
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("scroll-locked");
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleEsc);
      return () => {
        document.body.classList.remove("scroll-locked");
        window.removeEventListener("keydown", handleEsc);
      };
    } else {
      document.body.classList.remove("scroll-locked");
    }
  }, [isOpen, onClose]);

  // Reset tab when project changes
  useEffect(() => {
    setActiveTab(0);
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-bg-primary/95 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Content */}
          <motion.div
            className="relative z-10 w-full max-w-5xl mx-auto px-6 py-20 md:py-24"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="fixed top-6 right-6 md:top-8 md:right-8 z-[110] w-10 h-10 flex items-center justify-center rounded-full border border-border bg-bg-secondary/80 backdrop-blur-sm text-text-secondary hover:text-text-primary hover:border-border-hover transition-all duration-300"
              aria-label="Close project details"
            >
              <X size={18} />
            </button>

            {/* Category */}
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
              {project.category}
            </p>

            {/* Title */}
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-text-primary leading-tight mb-6">
              {project.title}
            </h2>

            {/* Hero Image / Gallery */}
            <div className="mt-8 mb-10">
              {/* Gallery Tabs */}
              {project.gallery.length > 1 && (
                <div className="flex items-center gap-4 mb-4">
                  {project.gallery.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveTab(i)}
                      className={`text-xs uppercase tracking-[0.15em] pb-2 border-b-2 transition-all duration-300 ${
                        activeTab === i
                          ? "text-text-primary border-accent"
                          : "text-text-muted border-transparent hover:text-text-secondary"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Gallery Content */}
              <div className="relative aspect-video bg-bg-tertiary rounded-sm overflow-hidden border border-border">
                <AnimatePresence mode="wait">
                  {project.gallery[activeTab] && (
                    <motion.div
                      key={activeTab}
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.gallery[activeTab].type === "video" ? (
                        <div className="relative w-full h-full bg-black flex items-center justify-center">
                          <video
                            src={project.gallery[activeTab].src}
                            poster={project.gallery[activeTab].poster}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-contain pointer-events-none"
                          >
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      ) : (
                        <div className="relative w-full h-full bg-black/90 flex items-center justify-center">
                          <img
                            src={project.gallery[activeTab].src}
                            alt=""
                            aria-hidden="true"
                            className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110"
                          />
                          <img
                            src={project.gallery[activeTab].src}
                            alt={project.gallery[activeTab].label}
                            className="relative z-10 w-full h-full object-contain"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = "none";
                            }}
                          />
                          <div className="absolute inset-0 -z-10 flex items-center justify-center bg-bg-tertiary">
                            <div className="text-center">
                              <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-border flex items-center justify-center">
                                <ExternalLink
                                  size={20}
                                  className="text-text-muted"
                                />
                              </div>
                              <p className="text-sm text-text-muted">
                                {project.gallery[activeTab].label}
                              </p>
                              <p className="text-xs text-text-muted mt-1 opacity-60">
                                {project.gallery[activeTab].src}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Project Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
              {/* Description */}
              <div className="md:col-span-2">
                <h3 className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
                  Project Details
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {project.longDescription}
                </p>

                {/* Process */}
                <h3 className="text-xs uppercase tracking-[0.2em] text-accent mb-4 mt-10">
                  Process
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {project.process}
                </p>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Role */}
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-accent mb-3">
                    My Role
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {project.role}
                  </p>
                </div>

                {/* Tools */}
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-accent mb-3">
                    Technology
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 text-xs text-text-secondary bg-bg-tertiary border border-border rounded-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Repository Link */}
                {project.github && (
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.2em] text-accent mb-3">
                      Repository
                    </h3>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 hover:border-accent/50 text-xs uppercase tracking-[0.15em] rounded-sm transition-all"
                    >
                      View on GitHub
                      <ExternalLink size={14} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
