import { ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";

export default function Hero({ t }) {
  return (
    <section className="min-h-screen pt-36 pb-16 flex flex-col justify-between max-w-5xl mx-auto px-6">
      <div className="space-y-10">
        {/* Status Badge */}
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full border border-[var(--border-main)] bg-[var(--bg-surface)] text-xs text-[var(--text-subtle)] font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-color)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-color)]"></span>
            </span>
            <span>{t.hero.status}</span>
          </div>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.2} className="space-y-4 max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[var(--text-main)] leading-[1.08]">
            Ardhiffa Mada Perdana
          </h1>
          <p className="text-lg sm:text-xl text-[var(--text-subtle)] font-normal tracking-tight">
            {t.hero.role} —{" "}
            <span className="text-[var(--text-main)]">{t.hero.tagline}</span>
          </p>
        </FadeIn>

        {/* Description */}
        <FadeIn delay={0.3}>
          <p className="max-w-2xl text-sm sm:text-base text-[var(--text-subtle)] font-light leading-relaxed">
            {t.hero.description}
          </p>
        </FadeIn>

        {/* Action Buttons */}
        <FadeIn delay={0.4} className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--text-main)] text-[var(--bg-main)] text-xs font-semibold tracking-wide rounded-sm hover:opacity-90 transition-all duration-200"
          >
            {t.hero.btnProjects}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border-main)] text-[var(--text-main)] text-xs font-medium tracking-wide rounded-sm hover:bg-[var(--bg-surface)] hover:border-[var(--border-hover)] transition-all duration-200 group"
          >
            <span>{t.hero.btnContact}</span>
            <ArrowUpRight
              size={14}
              className="text-[var(--text-subtle)] group-hover:text-[var(--text-main)] transition-colors"
            />
          </a>
        </FadeIn>
      </div>

      {/* Meta Footer */}
      <FadeIn delay={0.5}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 border-t border-[var(--border-main)] text-xs text-[var(--text-muted)] font-mono">
          <div>
            <span className="block text-[var(--text-subtle)] font-sans mb-1 uppercase tracking-wider text-[10px]">
              {t.hero.metaFocus}
            </span>
            <span>{t.hero.metaFocusValue}</span>
          </div>
          <div>
            <span className="block text-[var(--text-subtle)] font-sans mb-1 uppercase tracking-wider text-[10px]">
              {t.hero.metaDegree}
            </span>
            <span>{t.hero.metaDegreeValue}</span>
          </div>
          <div>
            <span className="block text-[var(--text-subtle)] font-sans mb-1 uppercase tracking-wider text-[10px]">
              {t.hero.metaLangs}
            </span>
            <span>{t.hero.metaLangsValue}</span>
          </div>
          <div>
            <span className="block text-[var(--text-subtle)] font-sans mb-1 uppercase tracking-wider text-[10px]">
              LOCATION
            </span>
            <span>{t.hero.location}</span>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
