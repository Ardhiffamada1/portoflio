import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Cpu,
  FolderGit2,
  Briefcase,
  GraduationCap,
  Mail,
  Sun,
  Moon,
  Globe,
  Copy,
  Check,
  ExternalLink,
  CornerDownLeft,
  Terminal,
} from "lucide-react";

export default function CommandPalette({
  isOpen,
  setIsOpen,
  lang,
  setLang,
  theme,
  setTheme,
  t,
}) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);

  const email = "ardhiffaperdana@gmail.com";

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, setIsOpen]);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const navigateTo = (hash) => {
    setIsOpen(false);
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const actions = [
    {
      id: "nav-about",
      group: t.commandPalette.secNavigation,
      label: t.nav.about,
      shortcut: "01",
      icon: User,
      onSelect: () => navigateTo("#about"),
    },
    {
      id: "nav-skills",
      group: t.commandPalette.secNavigation,
      label: t.nav.skills,
      shortcut: "02",
      icon: Cpu,
      onSelect: () => navigateTo("#skills"),
    },
    {
      id: "nav-projects",
      group: t.commandPalette.secNavigation,
      label: t.nav.projects,
      shortcut: "03",
      icon: FolderGit2,
      onSelect: () => navigateTo("#projects"),
    },
    {
      id: "nav-experience",
      group: t.commandPalette.secNavigation,
      label: t.nav.experience,
      shortcut: "04",
      icon: Briefcase,
      onSelect: () => navigateTo("#experience"),
    },
    {
      id: "nav-education",
      group: t.commandPalette.secNavigation,
      label: t.nav.education,
      shortcut: "05",
      icon: GraduationCap,
      onSelect: () => navigateTo("#education"),
    },
    {
      id: "nav-contact",
      group: t.commandPalette.secNavigation,
      label: t.nav.contact,
      shortcut: "06",
      icon: Mail,
      onSelect: () => navigateTo("#contact"),
    },
    {
      id: "act-theme",
      group: t.commandPalette.secActions,
      label: t.commandPalette.toggleTheme,
      shortcut: theme === "dark" ? "Light" : "Dark",
      icon: theme === "dark" ? Sun : Moon,
      onSelect: () => {
        setTheme(theme === "dark" ? "light" : "dark");
        setIsOpen(false);
      },
    },
    {
      id: "act-lang",
      group: t.commandPalette.secActions,
      label: t.commandPalette.switchLang,
      shortcut: lang === "EN" ? "ID" : "EN",
      icon: Globe,
      onSelect: () => {
        setLang(lang === "EN" ? "ID" : "EN");
        setIsOpen(false);
      },
    },
    {
      id: "act-copy-email",
      group: t.commandPalette.secActions,
      label: copied
        ? t.commandPalette.copiedEmail
        : `${t.commandPalette.copyEmail} (${email})`,
      shortcut: "Copy",
      icon: copied ? Check : Copy,
      onSelect: () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
          setIsOpen(false);
        }, 900);
      },
    },
    {
      id: "ext-github",
      group: t.commandPalette.secLinks,
      label: "GitHub — @Ardhiffamada1",
      shortcut: "↗",
      icon: ExternalLink,
      onSelect: () => {
        window.open(t.contact.githubUrl, "_blank", "noopener,noreferrer");
        setIsOpen(false);
      },
    },
    {
      id: "ext-linkedin",
      group: t.commandPalette.secLinks,
      label: "LinkedIn — Ardhiffa Mada Perdana",
      shortcut: "↗",
      icon: ExternalLink,
      onSelect: () => {
        window.open(t.contact.linkedinUrl, "_blank", "noopener,noreferrer");
        setIsOpen(false);
      },
    },
  ];

  const filtered = actions.filter(
    (item) =>
      item.label.toLowerCase().includes(query.toLowerCase()) ||
      item.group.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleInputKeyDown = (e) => {
    if (!filtered.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filtered.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[selectedIndex]?.onSelect();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 sm:pt-28 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -12 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card relative w-full max-w-lg rounded-sm shadow-2xl overflow-hidden z-10"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[var(--border-main)]">
              <Terminal size={15} className="text-[var(--accent-color)] shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleInputKeyDown}
                placeholder={t.commandPalette.placeholder}
                className="w-full bg-transparent text-xs sm:text-sm text-[var(--text-main)] placeholder:text-[var(--text-muted)] focus:outline-none font-mono"
              />
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono text-[var(--text-muted)] border border-[var(--border-main)] rounded-xs">
                ESC
              </kbd>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-2 space-y-1">
              {filtered.length === 0 ? (
                <div className="py-8 text-center text-xs text-[var(--text-muted)] font-mono">
                  {t.commandPalette.noResults}
                </div>
              ) : (
                filtered.map((item, idx) => {
                  const Icon = item.icon;
                  const isActive = idx === selectedIndex;
                  const showGroupHeader =
                    idx === 0 || filtered[idx - 1].group !== item.group;

                  return (
                    <div key={item.id}>
                      {showGroupHeader && (
                        <div className="px-2.5 pt-2 pb-1 text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
                          {item.group}
                        </div>
                      )}
                      <button
                        type="button"
                        onMouseEnter={() => setSelectedIndex(idx)}
                        onClick={item.onSelect}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xs text-left text-xs transition-colors cursor-pointer ${
                          isActive
                            ? "bg-[var(--bg-surface-hover)] text-[var(--text-main)] border-l-2 border-[var(--accent-color)]"
                            : "text-[var(--text-subtle)] hover:text-[var(--text-main)]"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon
                            size={14}
                            className={
                              isActive
                                ? "text-[var(--accent-light)]"
                                : "text-[var(--text-muted)]"
                            }
                          />
                          <span>{item.label}</span>
                        </div>
                        <div className="flex items-center gap-1.5 font-mono text-[10px] text-[var(--text-muted)]">
                          <span>{item.shortcut}</span>
                          {isActive && <CornerDownLeft size={11} />}
                        </div>
                      </button>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer Hints */}
            <div className="px-4 py-2 border-t border-[var(--border-main)] bg-[var(--bg-main)]/50 flex items-center justify-between text-[10px] font-mono text-[var(--text-muted)]">
              <div className="flex items-center gap-3">
                <span>↑↓ Navigate</span>
                <span>↵ Execute</span>
              </div>
              <span>Ardhiffa M. // CLI v2.6</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
