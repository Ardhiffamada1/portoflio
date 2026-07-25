import { useState, useEffect } from "react";
import { Menu, X, Globe, Sun, Moon } from "lucide-react";

export default function Navbar({ lang, setLang, theme, setTheme, t }) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
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
        scrolled
          ? "bg-[var(--bg-main)]/80 backdrop-blur-md border-b border-[var(--border-main)] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-sm font-semibold tracking-tight text-[var(--text-main)]"
        >
          Ardhiffa M.{" "}
          <span className="text-[var(--accent-color)] font-mono text-xs">
            / Dev
          </span>
        </a>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs tracking-wide text-[var(--text-subtle)] hover:text-[var(--text-main)] transition-colors uppercase font-mono"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="h-4 w-[1px] bg-[var(--border-main)]" />

          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded border border-[var(--border-main)] bg-[var(--bg-surface)] text-[var(--text-subtle)] hover:text-[var(--text-main)] hover:border-[var(--border-hover)] transition-all"
            title="Toggle Dark / Light Theme"
          >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>

          {/* Language Switcher */}
          <button
            onClick={() => setLang(lang === "EN" ? "ID" : "EN")}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-[var(--border-main)] bg-[var(--bg-surface)] text-xs font-mono text-[var(--text-subtle)] hover:text-[var(--text-main)] hover:border-[var(--border-hover)] transition-all"
          >
            <Globe size={13} className="text-[var(--accent-color)]" />
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
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded border border-[var(--border-main)] bg-[var(--bg-surface)] text-[var(--text-main)]"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setLang(lang === "EN" ? "ID" : "EN")}
            className="px-2 py-1 rounded border border-[var(--border-main)] bg-[var(--bg-surface)] text-xs font-mono text-[var(--text-main)]"
          >
            {lang}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[var(--text-subtle)] hover:text-[var(--text-main)] p-1"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[var(--bg-surface)] border-b border-[var(--border-main)] px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm text-[var(--text-subtle)] hover:text-[var(--text-main)] transition-colors font-mono"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
