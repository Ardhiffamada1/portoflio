import { useState } from "react";
import { Mail, Check, Copy, ArrowUpRight, Globe } from "lucide-react";

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

const LinkedinIcon = ({ size = 14 }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact({ t }) {
  const [copied, setCopied] = useState(false);
  const email = "ardhiffaperdana@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-28 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-2xl space-y-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-muted font-mono">
              {t.contact.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mt-3">
              {t.contact.title}
            </h2>
          </div>

          <p className="text-subtle text-sm sm:text-base font-light leading-relaxed">
            {t.contact.description}
          </p>

          {/* Email Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-foreground text-background text-xs font-semibold tracking-wide rounded-sm hover:opacity-90 transition-opacity"
            >
              <Mail size={15} />
              <span>{t.contact.btnEmail}</span>
            </a>

            <button
              onClick={handleCopy}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-3 border border-border bg-surface text-subtle hover:text-foreground text-xs font-mono rounded-sm hover:border-border-hover transition-all cursor-pointer"
            >
              {copied ? (
                <Check size={14} className="text-accent" />
              ) : (
                <Copy size={14} />
              )}
              <span>{copied ? "Copied!" : email}</span>
            </button>
          </div>

          {/* Social & Web Links dari translations.js */}
          <div className="pt-10 border-t border-border flex flex-wrap items-center gap-6 text-xs text-subtle font-mono">
            <a
              href={t.contact.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Globe size={14} className="text-accent" />
              <span>ardhiffaperdana.my.id</span>
              <ArrowUpRight size={12} className="text-muted" />
            </a>

            <a
              href={t.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <GithubIcon size={14} />
              <span>GitHub</span>
              <ArrowUpRight size={12} className="text-muted" />
            </a>

            <a
              href={t.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <LinkedinIcon size={14} />
              <span>LinkedIn</span>
              <ArrowUpRight size={12} className="text-muted" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
