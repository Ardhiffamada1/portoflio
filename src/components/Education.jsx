import { GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

export default function Education({ t }) {
  return (
    <section
      id="education"
      className="py-16 sm:py-24 border-t border-border/60"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <div className="mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-widest text-muted font-mono">
              {t.education.tag}
            </span>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground mt-2">
              {t.education.title}
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {/* Degree */}
          <FadeIn delay={0.1}>
            <motion.div
              whileHover={{ y: -3 }}
              className="glass-card h-full p-5 sm:p-6 rounded-sm space-y-3"
            >
              <div className="flex items-center gap-2 text-foreground">
                <GraduationCap size={18} />
                <span className="text-xs font-mono uppercase tracking-wider">
                  Degree
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-medium text-foreground">
                {t.education.eduDegree}
              </h3>
              <p className="text-xs text-subtle font-light">
                {t.education.eduInstitution}
              </p>
              <span className="inline-block text-[11px] font-mono text-muted pt-2">
                {t.education.eduPeriod}
              </span>
            </motion.div>
          </FadeIn>

          {/* Certifications */}
          <FadeIn delay={0.2}>
            <motion.div
              whileHover={{ y: -3 }}
              className="glass-card h-full p-5 sm:p-6 rounded-sm space-y-4"
            >
              <div className="flex items-center gap-2 text-foreground">
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
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
