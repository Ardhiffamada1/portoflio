import { useState, useEffect } from "react";
import { ArrowUpRight, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

export default function Hero({ t, onOpenCommand }) {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);
      setLocalTime(`${formatted} WIB`);
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen pt-28 sm:pt-36 pb-14 sm:pb-16 flex flex-col justify-between max-w-5xl mx-auto px-4 sm:px-6">
      <div className="space-y-8 sm:space-y-10">
        {/* Headline */}
        <FadeIn delay={0.1} className="space-y-4 max-w-3xl">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[var(--text-main)] leading-[1.1]">
            Ardhiffa Mada Perdana
          </h1>
          <p className="text-base sm:text-xl text-[var(--text-subtle)] font-normal tracking-tight leading-snug">
            {t.hero.role} —{" "}
            <span className="text-[var(--text-main)]">{t.hero.tagline}</span>
          </p>
        </FadeIn>

        {/* Description */}
        <FadeIn delay={0.2}>
          <p className="max-w-2xl text-xs sm:text-base text-[var(--text-subtle)] font-light leading-relaxed">
            {t.hero.description}
          </p>
        </FadeIn>

        {/* Action Buttons */}
        <FadeIn
          delay={0.3}
          className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2"
        >
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--text-main)] text-[var(--bg-main)] text-xs font-semibold tracking-wide rounded-sm hover:opacity-90 transition-all duration-200"
          >
            {t.hero.btnProjects}
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="glass-card inline-flex items-center justify-center gap-2 px-6 py-3 text-[var(--text-main)] text-xs font-medium tracking-wide rounded-sm group"
          >
            <span>{t.hero.btnContact}</span>
            <ArrowUpRight
              size={14}
              className="text-[var(--text-subtle)] group-hover:text-[var(--text-main)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
            />
          </motion.a>

          {onOpenCommand && (
            <motion.button
              type="button"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenCommand}
              className="glass-card inline-flex items-center justify-center gap-2.5 px-4 py-3 text-[var(--text-subtle)] hover:text-[var(--text-main)] text-xs font-mono rounded-sm cursor-pointer"
            >
              <Terminal size={13} className="text-[var(--text-main)]" />
              <span>{t.hero.btnTerminal}</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] border border-[var(--border-main)] bg-[var(--bg-main)]/60 text-[var(--text-muted)] rounded-xs">
                Ctrl K
              </kbd>
            </motion.button>
          )}
        </FadeIn>
      </div>

      {/* Meta Footer */}
      <FadeIn delay={0.4} className="mt-12 sm:mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 pt-8 sm:pt-12 border-t border-[var(--border-main)] text-xs text-[var(--text-muted)] font-mono">
          <div className="glass-card p-3.5 rounded-sm">
            <span className="block text-[var(--text-subtle)] font-sans mb-1 uppercase tracking-wider text-[10px]">
              {t.hero.metaFocus}
            </span>
            <span className="text-[var(--text-main)]">
              {t.hero.metaFocusValue}
            </span>
          </div>
          <div className="glass-card p-3.5 rounded-sm">
            <span className="block text-[var(--text-subtle)] font-sans mb-1 uppercase tracking-wider text-[10px]">
              {t.hero.metaDegree}
            </span>
            <span className="text-[var(--text-main)]">
              {t.hero.metaDegreeValue}
            </span>
          </div>
          <div className="glass-card p-3.5 rounded-sm">
            <span className="block text-[var(--text-subtle)] font-sans mb-1 uppercase tracking-wider text-[10px]">
              {t.hero.metaLangs}
            </span>
            <span className="text-[var(--text-main)]">
              {t.hero.metaLangsValue}
            </span>
          </div>
          <div className="glass-card p-3.5 rounded-sm">
            <span className="block text-[var(--text-subtle)] font-sans mb-1 uppercase tracking-wider text-[10px]">
              {t.hero.location}
            </span>
            <span className="text-[var(--text-main)]">
              {localTime || "UTC+7 WIB"}
            </span>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
