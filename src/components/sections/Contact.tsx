"use client";

import { useState, type FormEvent } from "react";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

// Inline SVG icons for LinkedIn and GitHub (removed from lucide-react)
const LinkedInIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  const formEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formEndpoint) {
      setFormStatus("error");
      setFeedback(
        "The contact form is not configured yet. Please use the Email Me button above for now."
      );
      return;
    }

    setFormStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: {
          Accept: "application/json",
        },
      });

      const result = (await response.json().catch(() => null)) as
        | { errors?: Array<{ message?: string }> }
        | null;

      if (!response.ok) {
        const errorMessage = result?.errors
          ?.map((error) => error.message)
          .filter(Boolean)
          .join(", ");

        throw new Error(
          errorMessage ||
            (response.status === 429
              ? "Too many submissions. Please wait a moment and try again."
              : "Your message could not be sent. Please try again.")
        );
      }

      setFormStatus("success");
      setFeedback("Thank you! Your message has been sent successfully.");
      setFormState({ name: "", email: "", message: "" });
    } catch (error) {
      setFormStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again or email me directly."
      );
    }
  };

  const updateField = (field: keyof typeof formState, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    if (formStatus !== "submitting") {
      setFormStatus("idle");
      setFeedback("");
    }
  };

  const isConfigured = Boolean(formEndpoint);

  return (
    <section id="contact" className="py-24 md:py-32 lg:py-40 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <SectionHeading
          title="Contact"
          subtitle="Let's create something."
          align="center"
        />

        <div className="max-w-3xl mx-auto">
          {/* Statement */}
          <ScrollReveal>
            <p className="text-center text-text-secondary leading-relaxed mb-12 max-w-xl mx-auto">
              I&apos;m currently looking for opportunities where I can contribute
              as a 3D Artist, 3D Animator or Game Artist. If you have a project
              or position that could be a good fit, I&apos;d love to hear from you.
            </p>
          </ScrollReveal>

          {/* Contact Buttons */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Send email"
                className="group inline-flex items-center gap-3 px-6 py-3.5 bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 hover:border-accent/50 transition-all duration-300 rounded-sm text-sm uppercase tracking-[0.15em] font-display"
              >
                <Mail size={16} />
                Email Me
              </a>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile"
                className="group inline-flex items-center gap-3 px-6 py-3.5 border border-border text-text-secondary hover:border-border-hover hover:text-text-primary transition-all duration-300 rounded-sm text-sm uppercase tracking-[0.15em] font-display"
              >
                <LinkedInIcon size={16} />
                LinkedIn
              </a>

              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub profile"
                className="group inline-flex items-center gap-3 px-6 py-3.5 border border-border text-text-secondary hover:border-border-hover hover:text-text-primary transition-all duration-300 rounded-sm text-sm uppercase tracking-[0.15em] font-display"
              >
                <GitHubIcon size={16} />
                GitHub
              </a>
            </div>
          </ScrollReveal>

          {/* Divider */}
          <ScrollReveal delay={0.15}>
            <div className="flex items-center gap-4 mb-12">
              <div className="flex-1 h-[1px] bg-border" />
              <span className="text-xs uppercase tracking-[0.2em] text-text-muted">
                or send a message
              </span>
              <div className="flex-1 h-[1px] bg-border" />
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs uppercase tracking-[0.2em] text-text-tertiary mb-3"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={formState.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    className="w-full px-4 py-3 bg-bg-card border border-border rounded-sm text-text-primary text-sm placeholder:text-text-muted focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs uppercase tracking-[0.2em] text-text-tertiary mb-3"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formState.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className="w-full px-4 py-3 bg-bg-card border border-border rounded-sm text-text-primary text-sm placeholder:text-text-muted focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs uppercase tracking-[0.2em] text-text-tertiary mb-3"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  className="w-full px-4 py-3 bg-bg-card border border-border rounded-sm text-text-primary text-sm placeholder:text-text-muted focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <input type="hidden" name="_subject" value="New message from your portfolio" />

              {/* Submit */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <button
                  type="submit"
                  disabled={!isConfigured || formStatus === "submitting"}
                  className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 hover:border-accent/50 transition-all duration-300 rounded-sm text-sm uppercase tracking-[0.15em] font-display disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-accent/10"
                >
                  {formStatus === "submitting" ? (
                    <>Sending...</>
                  ) : formStatus === "success" ? (
                    <>
                      <CheckCircle size={16} />
                      Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send
                        size={14}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </>
                  )}
                </button>

                <p
                  role="status"
                  aria-live="polite"
                  className={`text-sm ${formStatus === "success" ? "text-emerald-400" : formStatus === "error" ? "text-red-400" : "text-text-muted"}`}
                >
                  {feedback ||
                    (!isConfigured
                      ? "Contact form setup is pending. Please use Email Me above for now."
                      : "")}
                </p>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
