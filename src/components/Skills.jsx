export default function About({ t }) {
  return (
    <section id="about" className="py-24 border-t border-border/60">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <span className="text-xs uppercase tracking-widest text-muted font-mono">
              {t.about.tag}
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground mt-3">
              {t.about.title}
            </h2>
          </div>

          <div className="md:col-span-8 space-y-6 text-subtle font-light text-sm sm:text-base leading-relaxed">
            <p>{t.about.text1}</p>
            <p>{t.about.text2}</p>

            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-border/60 font-mono">
              <div className="p-4 bg-surface/30 border border-border rounded-sm">
                <span className="block text-xl font-semibold text-foreground">
                  {t.about.statYears}
                </span>
                <span className="text-[11px] text-muted">
                  {t.about.statYearsLabel}
                </span>
              </div>
              <div className="p-4 bg-surface/30 border border-border rounded-sm">
                <span className="block text-xl font-semibold text-foreground">
                  {t.about.statDegree}
                </span>
                <span className="text-[11px] text-muted">
                  {t.about.statDegreeLabel}
                </span>
              </div>
              <div className="p-4 bg-surface/30 border border-border rounded-sm">
                <span className="block text-xl font-semibold text-foreground">
                  {t.about.statCert}
                </span>
                <span className="text-[11px] text-muted">
                  {t.about.statCertLabel}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
