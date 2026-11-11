import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

export default function About({ t }) {
  const stats = [
    { value: t.about.statYears, label: t.about.statYearsLabel },
    { value: t.about.statDegree, label: t.about.statDegreeLabel },
    { value: t.about.statCert, label: t.about.statCertLabel },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 border-t border-border/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          <FadeIn className="md:col-span-4">
            <span className="text-xs uppercase tracking-widest text-muted font-mono">
              {t.about.tag}
            </span>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground mt-3">
              {t.about.title}
            </h2>
          </FadeIn>

          <div className="md:col-span-8 space-y-5 sm:space-y-6 text-subtle font-light text-xs sm:text-base leading-relaxed">
            <FadeIn delay={0.1}>
              <p>{t.about.text1}</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p>{t.about.text2}</p>
            </FadeIn>

            <div className="pt-4 sm:pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 border-t border-border/60 font-mono">
              {stats.map((stat, idx) => (
                <FadeIn key={idx} delay={0.25 + idx * 0.1}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="glass-card p-4 rounded-sm"
                  >
                    <span className="block text-xl font-semibold text-foreground">
                      {stat.value}
                    </span>
                    <span className="text-[11px] text-muted">{stat.label}</span>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
