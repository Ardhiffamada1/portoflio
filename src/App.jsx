import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { translations } from "./data/translations";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CommandPalette from "./components/CommandPalette";
import BackgroundEffect from "./components/BackgroundEffect";
import AdminStudio from "./components/AdminStudio";

const STORAGE_KEY = "portfolio_json_preview_v1";

const getInitialJsonData = () => ({
  EN: {
    experience: translations.EN.experience.items,
    projects: translations.EN.projects.items,
  },
  ID: {
    experience: translations.ID.experience.items,
    projects: translations.ID.projects.items,
  },
});

export default function App() {
  const [lang, setLang] = useState("EN");
  const [theme, setTheme] = useState("dark");
  const [cmdOpen, setCmdOpen] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [portfolioData, setPortfolioData] = useState(getInitialJsonData);

  const isStudioRoute =
    typeof window !== "undefined" &&
    window.location.pathname.replace(/\/+$/, "") === "/studio-amp";

  // Load data from /portfolio-data.json (or localStorage preview if active)
  useEffect(() => {
    const savedLocal = localStorage.getItem(STORAGE_KEY);
    if (savedLocal) {
      try {
        const parsed = JSON.parse(savedLocal);
        if (parsed?.EN && parsed?.ID) {
          setPortfolioData(parsed);
          return;
        }
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }

    fetch("/portfolio-data.json")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.EN && data?.ID) {
          setPortfolioData(data);
        }
      })
      .catch(() => {
        // Fallback to initial translations data
      });
  }, []);

  // Toggle class .light langsung pada element <html>
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
  }, [theme]);

  useEffect(() => {
    const onScroll = () => {
      setShowTopBtn(window.scrollY > 450);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Merge dynamic JSON data (Experience & Projects) with static translations
  const t = useMemo(() => {
    const base = translations[lang];
    const dynamicLang = portfolioData?.[lang];
    if (!dynamicLang) return base;

    return {
      ...base,
      experience: {
        ...base.experience,
        items: dynamicLang.experience || base.experience.items,
      },
      projects: {
        ...base.projects,
        items: dynamicLang.projects || base.projects.items,
      },
    };
  }, [lang, portfolioData]);

  const handleUpdatePortfolioData = (newData) => {
    setPortfolioData(newData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
  };

  const handleResetPortfolioData = () => {
    localStorage.removeItem(STORAGE_KEY);
    fetch("/portfolio-data.json")
      .then((res) => (res.ok ? res.json() : getInitialJsonData()))
      .then((data) => setPortfolioData(data))
      .catch(() => setPortfolioData(getInitialJsonData()));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Render Halaman Khusus /studio-amp (Terpisah & Dikunci Passcode)
  if (isStudioRoute) {
    return (
      <div className="relative min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] selection:bg-[var(--text-main)] selection:text-[var(--bg-main)]">
        <BackgroundEffect theme={theme} />
        <AdminStudio
          portfolioData={portfolioData}
          onUpdateData={handleUpdatePortfolioData}
          onResetData={handleResetPortfolioData}
        />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] selection:bg-[var(--text-main)] selection:text-[var(--bg-main)] transition-colors duration-300">
      {/* Monochrome Interactive Background Animation */}
      <BackgroundEffect theme={theme} />

      <Navbar
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
        t={t}
        onOpenCommand={() => setCmdOpen(true)}
      />

      <main className="relative z-10">
        <Hero t={t} onOpenCommand={() => setCmdOpen(true)} />
        <About t={t} />
        <Skills t={t} />
        <Projects t={t} />
        <Experience t={t} />
        <Education t={t} />
        <Contact t={t} />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>

      {/* Interactive Command Palette (Ctrl+K / Cmd+K) */}
      <CommandPalette
        isOpen={cmdOpen}
        setIsOpen={setCmdOpen}
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
        t={t}
      />

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-40 p-3 rounded-sm border border-[var(--border-main)] bg-[var(--bg-surface)]/90 backdrop-blur-md text-[var(--text-subtle)] hover:text-[var(--text-main)] hover:border-[var(--border-hover)] shadow-lg transition-colors cursor-pointer"
          >
            <ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
