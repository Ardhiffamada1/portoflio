import { useState } from "react";
import { Mail, Check, Copy, ArrowUpRight, Globe, Send } from "lucide-react";
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
  const [senderName, setSenderName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const email = "ardhiffaperdana@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleQuickCompose = (e) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(
      subject || `Inquiry from ${senderName || "Portfolio Visitor"}`
    );
    const mailBody = encodeURIComponent(
      `Hi Ardhiffa,\n\n${message}\n\nBest regards,\n${senderName}`
    );
    window.location.href = `mailto:${email}?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Contact & Links */}
          <FadeIn className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-muted font-mono">
                {t.contact.tag}
              </span>
              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground mt-3">
                {t.contact.title}
              </h2>
            </div>

            <p className="text-subtle text-xs sm:text-base font-light leading-relaxed max-w-xl">
              {t.contact.description}
            </p>

            {/* Email Actions */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-foreground text-background text-xs font-semibold tracking-wide rounded-sm hover:opacity-90 transition-opacity"
              >
                <Mail size={15} />
                <span>{t.contact.btnEmail}</span>
              </a>

              <button
                onClick={handleCopy}
                type="button"
                className="glass-card inline-flex items-center justify-center gap-2 px-4 py-3 text-subtle hover:text-foreground text-xs font-mono rounded-sm cursor-pointer"
              >
                {copied ? (
                  <Check size={14} className="text-foreground" />
                ) : (
                  <Copy size={14} />
                )}
                <span className="truncate">{copied ? "Copied!" : email}</span>
              </button>
            </div>

            {/* Social & Web Links */}
            <div className="pt-8 sm:pt-10 border-t border-border flex flex-wrap items-center gap-5 sm:gap-6 text-xs text-subtle font-mono">
              <a
                href={t.contact.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
              >
                <Globe size={14} className="text-foreground" />
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
          </FadeIn>

          {/* Right Column: Quick Inquiry Composer */}
          <FadeIn delay={0.15} className="lg:col-span-5">
            <form
              onSubmit={handleQuickCompose}
              className="glass-card p-5 sm:p-6 rounded-sm space-y-4"
            >
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-foreground">
                  {t.contact.quickMsgTitle}
                </span>
                <span className="text-[10px] font-mono text-muted">
                  DIRECT MAILTO
                </span>
              </div>

              <div className="space-y-3">
                <input
                  type="text"
                  required
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder={t.contact.quickMsgName}
                  className="w-full px-3.5 py-2.5 text-xs bg-background/70 border border-border rounded-xs text-foreground placeholder:text-muted focus:outline-none focus:border-foreground transition-colors"
                />
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder={t.contact.quickMsgSubject}
                  className="w-full px-3.5 py-2.5 text-xs bg-background/70 border border-border rounded-xs text-foreground placeholder:text-muted focus:outline-none focus:border-foreground transition-colors"
                />
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.contact.quickMsgBody}
                  className="w-full px-3.5 py-2.5 text-xs bg-background/70 border border-border rounded-xs text-foreground placeholder:text-muted focus:outline-none focus:border-foreground transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-foreground text-background text-xs font-medium rounded-xs hover:opacity-90 transition-opacity cursor-pointer"
              >
                <Send size={13} />
                <span>{t.contact.quickMsgSend}</span>
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
