import { useState, useEffect } from "react";
import { Menu, X, Globe, Sun, Moon, Command } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

export default function Navbar({
  lang,
  setLang,
  theme,
  setTheme,
  t,
  onOpenCommand,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        "about",
        "skills",
        "projects",
        "experience",
        "education",
        "contact",
      ];
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            current = `#${id}`;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.education, href: "#education" },
    { name: t.nav.contact, href: "#contact" },
  ];

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-[var(--bg-surface)] backdrop-blur-xl border-b border-[var(--border-main)] py-3.5"
          : "bg-transparent py-5 sm:py-6"
      }`}
    >
      {/* Top Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-[var(--text-main)] origin-left z-50"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-sm font-semibold tracking-tight text-[var(--text-main)]"
        >
          Ardhiffa M.{" "}
          <span className="text-[var(--text-subtle)] font-mono text-xs">
            / Dev
          </span>
        </a>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center space-x-5">
          <nav className="flex items-center space-x-5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 text-xs tracking-wide transition-colors uppercase font-mono ${
                    isActive
                      ? "text-[var(--text-main)] font-medium"
                      : "text-[var(--text-subtle)] hover:text-[var(--text-main)]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[var(--text-main)]"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="h-4 w-[1px] bg-[var(--border-main)]" />

          {/* Command Palette Trigger */}
          {onOpenCommand && (
            <button
              type="button"
              onClick={onOpenCommand}
              className="glass-card inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono text-[var(--text-subtle)] hover:text-[var(--text-main)] cursor-pointer"
              title="Open Command Palette (Ctrl+K)"
            >
              <Command size={12} className="text-[var(--text-main)]" />
              <span>K</span>
            </button>
          )}

          {/* Theme Switcher Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className="glass-card p-1.5 rounded text-[var(--text-subtle)] hover:text-[var(--text-main)] cursor-pointer"
            title="Toggle Dark / Light Theme"
          >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>

          {/* Language Switcher */}
          <button
            type="button"
            onClick={() => setLang(lang === "EN" ? "ID" : "EN")}
            className="glass-card inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono text-[var(--text-subtle)] hover:text-[var(--text-main)] cursor-pointer"
          >
            <Globe size={13} className="text-[var(--text-main)]" />
            <span
              className={
                lang === "ID" ? "text-[var(--text-main)] font-bold" : ""
              }
            >
              ID
            </span>
            <span className="opacity-40">|</span>
            <span
              className={
                lang === "EN" ? "text-[var(--text-main)] font-bold" : ""
              }
            >
              EN
            </span>
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          {onOpenCommand && (
            <button
              type="button"
              onClick={onOpenCommand}
              className="glass-card p-2 rounded text-[var(--text-main)]"
              aria-label="Open Command Menu"
            >
              <Command size={15} />
            </button>
          )}
          <button
            type="button"
            onClick={toggleTheme}
            className="glass-card p-2 rounded text-[var(--text-main)]"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            type="button"
            onClick={() => setLang(lang === "EN" ? "ID" : "EN")}
            className="glass-card px-2.5 py-1.5 rounded text-xs font-mono text-[var(--text-main)]"
          >
            {lang}
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="glass-card text-[var(--text-main)] p-1.5 rounded"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Animated Mobile Glass Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--bg-surface)] backdrop-blur-2xl border-b border-[var(--border-main)] px-4 sm:px-6 py-5 space-y-2 overflow-hidden"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 px-3 rounded-xs text-xs uppercase tracking-wider font-mono transition-colors ${
                    isActive
                      ? "bg-[var(--bg-surface-hover)] text-[var(--text-main)] font-semibold"
                      : "text-[var(--text-subtle)] hover:text-[var(--text-main)]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
