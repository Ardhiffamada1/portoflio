import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Layers, CheckCircle2, X, Cpu } from "lucide-react";
import FadeIn from "./FadeIn";

const GithubIcon = ({ size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects({ t }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-border/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-3 sm:gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-muted font-mono">
                {t.projects.tag}
              </span>
              <h2 className="text-xl sm:text-3xl font-semibold tracking-tight text-foreground mt-2">
                {t.projects.title}
              </h2>
            </div>
            <p className="text-xs text-subtle max-w-xs font-light">
              {t.projects.subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="space-y-5 sm:space-y-6">
          {t.projects.items.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.12}>
              <motion.article
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="glass-card group relative p-5 sm:p-8 rounded-sm overflow-hidden"
              >
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-start">
                  <div className="md:col-span-2 flex md:block items-center justify-between text-xs text-muted font-mono tracking-tight md:space-y-2">
                    <div>
                      [{String(index + 1).padStart(2, "0")}] // {project.year}
                    </div>
                    {project.metrics && (
                      <span className="inline-block px-2 py-0.5 text-[10px] border border-border bg-background/60 text-subtle rounded-xs">
                        {project.metrics}
                      </span>
                    )}
                  </div>

                  <div className="md:col-span-7 space-y-2.5 sm:space-y-3">
                    <span className="text-[11px] uppercase tracking-wider text-accent-light font-mono font-medium block">
                      {project.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-medium text-foreground tracking-tight group-hover:text-accent-light transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-subtle font-light leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 sm:pt-3">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 text-[10px] font-mono border border-border bg-background/50 text-subtle rounded-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-3 flex flex-wrap md:flex-col md:items-end justify-between h-full gap-3 pt-2 md:pt-0 border-t md:border-t-0 border-border/50">
                    <div className="flex flex-wrap md:flex-col md:items-end gap-2.5">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-accent-light transition-colors group/link"
                        >
                          <span>{t.projects.liveBtn}</span>
                          <ArrowUpRight
                            size={14}
                            className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200"
                          />
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-mono border border-border bg-background/60 text-subtle hover:text-foreground hover:border-border-hover rounded-xs transition-all cursor-pointer"
                      >
                        <Layers size={12} className="text-foreground" />
                        <span>{t.projects.detailsBtn}</span>
                      </button>
                    </div>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-subtle transition-colors md:mt-auto"
                      >
                        <GithubIcon size={13} />
                        <span className="font-mono text-[11px]">
                          {t.projects.repoBtn}
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Interactive System Architecture & Highlights Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[90] flex items-center justify-center p-3 sm:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card relative z-10 w-full max-w-xl max-h-[88vh] overflow-y-auto rounded-sm p-5 sm:p-8 shadow-2xl space-y-5 sm:space-y-6"
            >
              <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-accent-light font-mono block">
                    {selectedProject.category} • {selectedProject.year}
                  </span>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-1">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-xs border border-border text-subtle hover:text-foreground hover:border-border-hover transition-colors cursor-pointer shrink-0"
                >
                  <X size={15} />
                </button>
              </div>

              <p className="text-xs sm:text-sm text-subtle font-light leading-relaxed">
                {selectedProject.description}
              </p>

              {selectedProject.architecture && (
                <div className="p-3.5 sm:p-4 rounded-xs bg-background/60 border border-border space-y-1.5">
                  <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-foreground">
                    <Cpu size={13} />
                    <span>{t.projects.archLabel}</span>
                  </div>
                  <p className="text-xs text-subtle font-mono leading-relaxed">
                    {selectedProject.architecture}
                  </p>
                </div>
              )}

              {selectedProject.highlights && (
                <div className="space-y-2.5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-muted">
                    {t.projects.impactLabel}
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-subtle font-light"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-foreground shrink-0 mt-0.5"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-1.5 pt-1">
                {selectedProject.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-[10px] font-mono border border-border bg-background/70 text-subtle rounded-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-foreground text-background text-xs font-medium rounded-xs hover:opacity-90 transition-opacity"
                    >
                      <span>{t.projects.liveBtn}</span>
                      <ArrowUpRight size={13} />
                    </a>
                  )}
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-border text-xs font-mono text-subtle hover:text-foreground hover:border-border-hover rounded-xs transition-colors"
                    >
                      <GithubIcon size={13} />
                      <span>{t.projects.repoBtn}</span>
                    </a>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="text-xs font-mono text-muted hover:text-foreground transition-colors cursor-pointer"
                >
                  {t.projects.closeModal}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
