import FadeIn from "./FadeIn";

export default function Experience({ t }) {
  return (
    <section id="experience" className="py-24 border-t border-border/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <div className="mb-16">
            <span className="text-xs uppercase tracking-widest text-muted font-mono">
              {t.experience.tag}
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground mt-2">
              {t.experience.title}
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-12">
          {t.experience.items.map((exp, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 border-l border-border/80 pl-6 relative">
                <div className="absolute -left-[4.5px] top-1.5 w-2 h-2 rounded-full bg-accent" />

                <div className="md:col-span-3 text-xs text-muted font-mono">
                  {exp.period}
                </div>

                <div className="md:col-span-9 space-y-2">
                  <h3 className="text-base font-medium text-foreground">
                    {exp.role}{" "}
                    <span className="text-subtle font-normal">
                      / {exp.company}
                    </span>
                  </h3>
                  <ul className="space-y-1.5 pt-1">
                    {exp.points.map((pt, pIdx) => (
                      <li
                        key={pIdx}
                        className="text-xs sm:text-sm text-subtle font-light leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-muted font-mono text-xs">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
