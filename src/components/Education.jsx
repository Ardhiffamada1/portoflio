import { GraduationCap, Award } from "lucide-react";

export default function Education({ t }) {
  return (
    <section id="education" className="py-24 border-t border-border/60">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-xs uppercase tracking-widest text-muted font-mono">
            {t.education.tag}
          </span>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground mt-2">
            {t.education.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Degree */}
          <div className="p-6 bg-surface/30 border border-border rounded-sm space-y-3">
            <div className="flex items-center gap-2 text-accent-light">
              <GraduationCap size={18} />
              <span className="text-xs font-mono uppercase tracking-wider">
                Degree
              </span>
            </div>
            <h3 className="text-base font-medium text-foreground">
              {t.education.eduDegree}
            </h3>
            <p className="text-xs text-subtle font-light">
              {t.education.eduInstitution}
            </p>
            <span className="inline-block text-[11px] font-mono text-muted pt-2">
              {t.education.eduPeriod}
            </span>
          </div>

          {/* Certifications */}
          <div className="p-6 bg-surface/30 border border-border rounded-sm space-y-4">
            <div className="flex items-center gap-2 text-accent-light">
              <Award size={18} />
              <span className="text-xs font-mono uppercase tracking-wider">
                {t.education.certTitle}
              </span>
            </div>

            <div className="space-y-3">
              <div>
                <h4 className="text-xs font-medium text-foreground">
                  {t.education.certBnsp}
                </h4>
                <p className="text-[11px] text-muted font-light">
                  {t.education.certBnspDesc}
                </p>
              </div>
              <div className="border-t border-border/40 pt-2">
                <h4 className="text-xs font-medium text-foreground">
                  {t.education.certDicoding}
                </h4>
                <p className="text-[11px] text-muted font-light">
                  {t.education.certDicodingDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
