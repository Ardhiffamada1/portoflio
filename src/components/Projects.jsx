import { ArrowUpRight } from "lucide-react";

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
  return (
    <section id="projects" className="py-28 border-t border-border/60">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-muted font-mono">
              {t.projects.tag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mt-2">
              {t.projects.title}
            </h2>
          </div>
          <p className="text-xs text-subtle max-w-xs font-light">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="space-y-6">
          {t.projects.items.map((project, index) => (
            <article
              key={project.id}
              className="group relative p-6 sm:p-8 rounded-sm bg-surface/30 border border-border hover:border-border-hover hover:bg-surface/70 transition-all duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-2 text-xs text-muted font-mono tracking-tight">
                  [{String(index + 1).padStart(2, "0")}] // {project.year}
                </div>

                <div className="md:col-span-7 space-y-3">
                  <span className="text-[11px] uppercase tracking-wider text-accent-light font-mono font-medium block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-medium text-foreground tracking-tight group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-subtle font-light leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-3">
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

                <div className="md:col-span-3 md:flex md:flex-col md:items-end justify-between h-full gap-4 pt-2 md:pt-0">
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-accent-light transition-colors group/link"
                  >
                    <span>{t.projects.liveBtn}</span>
                    <ArrowUpRight
                      size={14}
                      className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200"
                    />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-subtle transition-colors mt-auto"
                  >
                    <GithubIcon size={13} />
                    <span className="font-mono text-[11px]">
                      {t.projects.repoBtn}
                    </span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
