import { useState, useEffect } from "react";
import {
  Plus,
  Trash2,
  Download,
  Copy,
  Check,
  Code,
  Briefcase,
  FolderGit2,
  RotateCcw,
  ArrowUp,
  ArrowDown,
  Save,
  ArrowLeft,
  Lock,
} from "lucide-react";

const SECRET_PASSCODE =
  import.meta.env.VITE_STUDIO_PASSCODE || "ardhiffa24";

export default function AdminStudio({
  portfolioData,
  onUpdateData,
  onResetData,
}) {
  const [unlocked, setUnlocked] = useState(() => {
    return sessionStorage.getItem("amp_studio_unlocked") === "true";
  });
  const [passInput, setPassInput] = useState("");
  const [passError, setPassError] = useState(false);

  const [editLang, setEditLang] = useState("ID");
  const [activeTab, setActiveTab] = useState("experience");
  const [draft, setDraft] = useState(portfolioData);
  const [jsonText, setJsonText] = useState("");
  const [jsonError, setJsonError] = useState("");
  const [copied, setCopied] = useState(false);
  const [savedNotice, setSavedNotice] = useState(false);

  useEffect(() => {
    if (portfolioData) {
      setDraft(structuredClone(portfolioData));
      setJsonText(JSON.stringify(portfolioData, null, 2));
      setJsonError("");
    }
  }, [portfolioData]);

  const handleUnlock = (e) => {
    e.preventDefault();
    if (passInput === SECRET_PASSCODE) {
      sessionStorage.setItem("amp_studio_unlocked", "true");
      setUnlocked(true);
      setPassError(false);
    } else {
      setPassError(true);
    }
  };

  const handleSwitchTab = (tab) => {
    if (tab === "json") {
      setJsonText(JSON.stringify(draft, null, 2));
      setJsonError("");
    }
    setActiveTab(tab);
  };

  const handleJsonChange = (val) => {
    setJsonText(val);
    try {
      const parsed = JSON.parse(val);
      if (!parsed.EN || !parsed.ID) {
        setJsonError("JSON harus memiliki root key 'EN' dan 'ID'.");
        return;
      }
      setDraft(parsed);
      setJsonError("");
    } catch (err) {
      setJsonError(err.message);
    }
  };

  // Experience Handlers
  const addExperience = () => {
    const newExpID = {
      period: "2026 — Sekarang",
      role: "Posisi / Role Baru",
      company: "Nama Perusahaan",
      points: ["Deskripsi pencapaian atau tanggung jawab utama."],
    };
    const newExpEN = {
      period: "2026 — Present",
      role: "New Role Title",
      company: "Company Name",
      points: ["Key achievement or core engineering responsibility."],
    };
    setDraft((prev) => ({
      ...prev,
      ID: {
        ...prev.ID,
        experience: [newExpID, ...(prev.ID?.experience || [])],
      },
      EN: {
        ...prev.EN,
        experience: [newExpEN, ...(prev.EN?.experience || [])],
      },
    }));
  };

  const updateExperience = (idx, field, value) => {
    setDraft((prev) => {
      const list = [...(prev[editLang]?.experience || [])];
      list[idx] = { ...list[idx], [field]: value };
      return {
        ...prev,
        [editLang]: { ...prev[editLang], experience: list },
      };
    });
  };

  const removeExperience = (idx) => {
    setDraft((prev) => {
      const list = (prev[editLang]?.experience || []).filter(
        (_, i) => i !== idx
      );
      return {
        ...prev,
        [editLang]: { ...prev[editLang], experience: list },
      };
    });
  };

  const moveExperience = (idx, dir) => {
    setDraft((prev) => {
      const list = [...(prev[editLang]?.experience || [])];
      const target = idx + dir;
      if (target < 0 || target >= list.length) return prev;
      [list[idx], list[target]] = [list[target], list[idx]];
      return {
        ...prev,
        [editLang]: { ...prev[editLang], experience: list },
      };
    });
  };

  // Project Handlers
  const addProject = () => {
    const newId = `project-${Date.now()}`;
    const newProjID = {
      id: newId,
      title: "Nama Proyek Baru",
      category: "Aplikasi Web Full-Stack",
      year: String(new Date().getFullYear()),
      description: "Deskripsi singkat mengenai sistem yang dibangun.",
      techStack: ["React", "Laravel", "MySQL", "Tailwind CSS"],
      architecture: "Arsitektur MVC Modular & RESTful API",
      highlights: ["Fitur unggulan pertama pada sistem"],
      metrics: "Production Ready",
      github: "https://github.com/Ardhiffamada1",
      demo: "https://",
    };
    const newProjEN = {
      id: newId,
      title: "New Project Title",
      category: "Full-Stack Web App",
      year: String(new Date().getFullYear()),
      description: "Short description of the system built.",
      techStack: ["React", "Laravel", "MySQL", "Tailwind CSS"],
      architecture: "Modular MVC Architecture & RESTful API",
      highlights: ["First key capability of the system"],
      metrics: "Production Ready",
      github: "https://github.com/Ardhiffamada1",
      demo: "https://",
    };
    setDraft((prev) => ({
      ...prev,
      ID: {
        ...prev.ID,
        projects: [newProjID, ...(prev.ID?.projects || [])],
      },
      EN: {
        ...prev.EN,
        projects: [newProjEN, ...(prev.EN?.projects || [])],
      },
    }));
  };

  const updateProject = (idx, field, value) => {
    setDraft((prev) => {
      const list = [...(prev[editLang]?.projects || [])];
      list[idx] = { ...list[idx], [field]: value };
      return {
        ...prev,
        [editLang]: { ...prev[editLang], projects: list },
      };
    });
  };

  const removeProject = (idx) => {
    setDraft((prev) => {
      const list = (prev[editLang]?.projects || []).filter((_, i) => i !== idx);
      return {
        ...prev,
        [editLang]: { ...prev[editLang], projects: list },
      };
    });
  };

  const moveProject = (idx, dir) => {
    setDraft((prev) => {
      const list = [...(prev[editLang]?.projects || [])];
      const target = idx + dir;
      if (target < 0 || target >= list.length) return prev;
      [list[idx], list[target]] = [list[target], list[idx]];
      return {
        ...prev,
        [editLang]: { ...prev[editLang], projects: list },
      };
    });
  };

  const handleApplyPreview = () => {
    onUpdateData(draft);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2000);
  };

  const handleCopyJson = () => {
    const formatted = JSON.stringify(draft, null, 2);
    navigator.clipboard.writeText(formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadJson = () => {
    const formatted = JSON.stringify(draft, null, 2);
    const blob = new Blob([formatted], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "portfolio-data.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  // Passcode Protection Screen so unauthorized users cannot access
  if (!unlocked) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 relative z-10">
        <form
          onSubmit={handleUnlock}
          className="glass-card w-full max-w-sm p-6 sm:p-8 rounded-sm space-y-5"
        >
          <div className="flex items-center gap-2.5 text-foreground">
            <Lock size={16} />
            <span className="text-xs font-mono uppercase tracking-widest font-semibold">
              Protected Studio Access
            </span>
          </div>
          <p className="text-xs text-subtle font-light leading-relaxed">
            Halaman ini dikunci. Masukkan kode akses untuk membuka editor{" "}
            <code className="font-mono text-foreground">
              portfolio-data.json
            </code>
            .
          </p>
          <div className="space-y-2">
            <input
              type="password"
              value={passInput}
              onChange={(e) => {
                setPassInput(e.target.value);
                setPassError(false);
              }}
              placeholder="Masukkan Passcode..."
              autoFocus
              className="w-full px-3.5 py-2.5 text-xs font-mono bg-background/80 border border-border rounded-xs text-foreground focus:outline-none focus:border-foreground"
            />
            {passError && (
              <p className="text-[11px] font-mono text-red-400">
                Passcode salah. Akses ditolak.
              </p>
            )}
          </div>
          <div className="flex items-center justify-between gap-3 pt-1">
            <a
              href="/"
              className="text-xs font-mono text-muted hover:text-foreground transition-colors"
            >
              ← Kembali
            </a>
            <button
              type="submit"
              className="px-4 py-2 bg-foreground text-background text-xs font-mono font-semibold rounded-xs hover:opacity-90 cursor-pointer"
            >
              Buka Studio
            </button>
          </div>
        </form>
      </div>
    );
  }

  if (!draft) return null;

  const currentExpList = draft[editLang]?.experience || [];
  const currentProjList = draft[editLang]?.projects || [];

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] py-10 px-4 sm:px-6 relative z-10">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Top Bar */}
        <div className="glass-card p-5 sm:p-6 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <span className="text-sm font-mono uppercase tracking-widest text-foreground font-semibold">
                Portfolio JSON Studio
              </span>
              <span className="px-2 py-0.5 text-[10px] font-mono border border-border rounded-xs text-muted">
                /studio-amp
              </span>
            </div>
            <p className="text-xs text-subtle">
              Kelola <strong className="text-foreground">Experience</strong> &{" "}
              <strong className="text-foreground">Projects</strong> secara
              visual, lalu klik{" "}
              <strong className="text-foreground">
                Download portfolio-data.json
              </strong>{" "}
              dan timpa ke{" "}
              <code className="font-mono text-foreground">
                public/portfolio-data.json
              </code>
              .
            </p>
          </div>

          <a
            href="/"
            className="glass-card inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono text-foreground hover:opacity-90 rounded-xs shrink-0"
          >
            <ArrowLeft size={14} />
            <span>Lihat Portfolio</span>
          </a>
        </div>

        {/* Action & Tab Bar */}
        <div className="glass-card p-4 sm:px-6 rounded-sm flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => handleSwitchTab("experience")}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xs text-xs font-mono cursor-pointer transition-colors ${
                activeTab === "experience"
                  ? "bg-foreground text-background font-medium"
                  : "text-subtle hover:text-foreground border border-border"
              }`}
            >
              <Briefcase size={13} />
              <span>Experience ({currentExpList.length})</span>
            </button>

            <button
              type="button"
              onClick={() => handleSwitchTab("projects")}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xs text-xs font-mono cursor-pointer transition-colors ${
                activeTab === "projects"
                  ? "bg-foreground text-background font-medium"
                  : "text-subtle hover:text-foreground border border-border"
              }`}
            >
              <FolderGit2 size={13} />
              <span>Projects ({currentProjList.length})</span>
            </button>

            <button
              type="button"
              onClick={() => handleSwitchTab("json")}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xs text-xs font-mono cursor-pointer transition-colors ${
                activeTab === "json"
                  ? "bg-foreground text-background font-medium"
                  : "text-subtle hover:text-foreground border border-border"
              }`}
            >
              <Code size={13} />
              <span>Raw JSON</span>
            </button>
          </div>

          {activeTab !== "json" && (
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-muted text-[11px]">Bahasa Data:</span>
              {["ID", "EN"].map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setEditLang(l)}
                  className={`px-3 py-1.5 rounded-xs border cursor-pointer ${
                    editLang === l
                      ? "bg-foreground text-background border-foreground font-semibold"
                      : "border-border text-subtle hover:text-foreground"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Main Editor Area */}
        <div className="glass-card p-5 sm:p-6 rounded-sm space-y-6">
          {/* TAB 1: EXPERIENCE EDITOR */}
          {activeTab === "experience" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-subtle">
                  Daftar Pengalaman Kerja ({editLang})
                </span>
                <button
                  type="button"
                  onClick={addExperience}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-foreground text-background text-xs font-mono rounded-xs hover:opacity-90 cursor-pointer"
                >
                  <Plus size={13} />
                  <span>Tambah Pengalaman</span>
                </button>
              </div>

              {currentExpList.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-sm border border-border bg-background/60 space-y-3.5"
                >
                  <div className="flex items-center justify-between gap-2 border-b border-border pb-2.5">
                    <span className="text-xs font-mono text-foreground">
                      #{idx + 1} — {exp.role}
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => moveExperience(idx, -1)}
                        disabled={idx === 0}
                        className="p-1.5 text-subtle hover:text-foreground disabled:opacity-30 cursor-pointer"
                        title="Pindah ke Atas"
                      >
                        <ArrowUp size={14} />
                      </button>
                      <button
                        type="button"
                        onClick={() => moveExperience(idx, 1)}
                        disabled={idx === currentExpList.length - 1}
                        className="p-1.5 text-subtle hover:text-foreground disabled:opacity-30 cursor-pointer"
                        title="Pindah ke Bawah"
                      >
                        <ArrowDown size={14} />
                      </button>
                      <button
                        type="button"
                        onClick={() => removeExperience(idx)}
                        className="p-1.5 text-subtle hover:text-foreground cursor-pointer ml-1"
                        title="Hapus"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[10px] font-mono uppercase text-muted mb-1">
                        Periode
                      </label>
                      <input
                        type="text"
                        value={exp.period}
                        onChange={(e) =>
                          updateExperience(idx, "period", e.target.value)
                        }
                        className="w-full px-3 py-2 text-xs bg-surface border border-border rounded-xs text-foreground font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase text-muted mb-1">
                        Role / Jabatan
                      </label>
                      <input
                        type="text"
                        value={exp.role}
                        onChange={(e) =>
                          updateExperience(idx, "role", e.target.value)
                        }
                        className="w-full px-3 py-2 text-xs bg-surface border border-border rounded-xs text-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase text-muted mb-1">
                        Perusahaan
                      </label>
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) =>
                          updateExperience(idx, "company", e.target.value)
                        }
                        className="w-full px-3 py-2 text-xs bg-surface border border-border rounded-xs text-foreground"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase text-muted mb-1">
                      Poin Deskripsi (1 baris = 1 bullet point)
                    </label>
                    <textarea
                      rows={3}
                      value={(exp.points || []).join("\n")}
                      onChange={(e) =>
                        updateExperience(
                          idx,
                          "points",
                          e.target.value.split("\n")
                        )
                      }
                      className="w-full px-3 py-2 text-xs bg-surface border border-border rounded-xs text-foreground leading-relaxed"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: PROJECTS EDITOR (LENGKAP DENGAN ARSITEKTUR & HIGHLIGHTS) */}
          {activeTab === "projects" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-subtle">
                  Daftar Proyek ({editLang})
                </span>
                <button
                  type="button"
                  onClick={addProject}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-foreground text-background text-xs font-mono rounded-xs hover:opacity-90 cursor-pointer"
                >
                  <Plus size={13} />
                  <span>Tambah Proyek</span>
                </button>
              </div>

              {currentProjList.map((proj, idx) => (
                <div
                  key={proj.id || idx}
                  className="p-4 sm:p-5 rounded-sm border border-border bg-background/60 space-y-3.5"
                >
                  <div className="flex items-center justify-between border-b border-border pb-2.5">
                    <span className="text-xs font-mono text-foreground">
                      #{idx + 1} — {proj.title}
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => moveProject(idx, -1)}
                        disabled={idx === 0}
                        className="p-1.5 text-subtle hover:text-foreground disabled:opacity-30 cursor-pointer"
                        title="Pindah ke Atas"
                      >
                        <ArrowUp size={14} />
                      </button>
                      <button
                        type="button"
                        onClick={() => moveProject(idx, 1)}
                        disabled={idx === currentProjList.length - 1}
                        className="p-1.5 text-subtle hover:text-foreground disabled:opacity-30 cursor-pointer"
                        title="Pindah ke Bawah"
                      >
                        <ArrowDown size={14} />
                      </button>
                      <button
                        type="button"
                        onClick={() => removeProject(idx)}
                        className="p-1.5 text-subtle hover:text-foreground cursor-pointer ml-1"
                        title="Hapus Proyek"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                    <div className="sm:col-span-2">
                      <label className="block text-[10px] font-mono uppercase text-muted mb-1">
                        Judul Proyek
                      </label>
                      <input
                        type="text"
                        value={proj.title}
                        onChange={(e) =>
                          updateProject(idx, "title", e.target.value)
                        }
                        className="w-full px-3 py-2 text-xs bg-surface border border-border rounded-xs text-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase text-muted mb-1">
                        Kategori
                      </label>
                      <input
                        type="text"
                        value={proj.category}
                        onChange={(e) =>
                          updateProject(idx, "category", e.target.value)
                        }
                        className="w-full px-3 py-2 text-xs bg-surface border border-border rounded-xs text-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase text-muted mb-1">
                        Tahun
                      </label>
                      <input
                        type="text"
                        value={proj.year}
                        onChange={(e) =>
                          updateProject(idx, "year", e.target.value)
                        }
                        className="w-full px-3 py-2 text-xs bg-surface border border-border rounded-xs text-foreground font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase text-muted mb-1">
                      Deskripsi Utama
                    </label>
                    <textarea
                      rows={2}
                      value={proj.description}
                      onChange={(e) =>
                        updateProject(idx, "description", e.target.value)
                      }
                      className="w-full px-3 py-2 text-xs bg-surface border border-border rounded-xs text-foreground"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-mono uppercase text-muted mb-1">
                        Ringkasan Arsitektur (System Breakdown Modal)
                      </label>
                      <input
                        type="text"
                        value={proj.architecture || ""}
                        onChange={(e) =>
                          updateProject(idx, "architecture", e.target.value)
                        }
                        className="w-full px-3 py-2 text-xs bg-surface border border-border rounded-xs text-foreground font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase text-muted mb-1">
                        Badge Status / Metrik
                      </label>
                      <input
                        type="text"
                        value={proj.metrics || ""}
                        onChange={(e) =>
                          updateProject(idx, "metrics", e.target.value)
                        }
                        className="w-full px-3 py-2 text-xs bg-surface border border-border rounded-xs text-foreground font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase text-muted mb-1">
                      Fitur Utama / Highlights di Modal (1 baris = 1 poin)
                    </label>
                    <textarea
                      rows={3}
                      value={(proj.highlights || []).join("\n")}
                      onChange={(e) =>
                        updateProject(
                          idx,
                          "highlights",
                          e.target.value.split("\n")
                        )
                      }
                      className="w-full px-3 py-2 text-xs bg-surface border border-border rounded-xs text-foreground leading-relaxed"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[10px] font-mono uppercase text-muted mb-1">
                        Tech Stack (pisahkan koma)
                      </label>
                      <input
                        type="text"
                        value={(proj.techStack || []).join(", ")}
                        onChange={(e) =>
                          updateProject(
                            idx,
                            "techStack",
                            e.target.value
                              .split(",")
                              .map((s) => s.trim())
                              .filter(Boolean)
                          )
                        }
                        className="w-full px-3 py-2 text-xs bg-surface border border-border rounded-xs text-foreground font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase text-muted mb-1">
                        URL Live Demo (opsional)
                      </label>
                      <input
                        type="text"
                        value={proj.demo || ""}
                        onChange={(e) =>
                          updateProject(idx, "demo", e.target.value || null)
                        }
                        className="w-full px-3 py-2 text-xs bg-surface border border-border rounded-xs text-foreground font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase text-muted mb-1">
                        URL GitHub (opsional)
                      </label>
                      <input
                        type="text"
                        value={proj.github || ""}
                        onChange={(e) =>
                          updateProject(idx, "github", e.target.value || null)
                        }
                        className="w-full px-3 py-2 text-xs bg-surface border border-border rounded-xs text-foreground font-mono"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: RAW JSON EDITOR */}
          {activeTab === "json" && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-subtle">
                  Edit langsung format JSON (`public/portfolio-data.json`)
                </span>
                {jsonError ? (
                  <span className="text-xs font-mono text-red-400">
                    Error: {jsonError}
                  </span>
                ) : (
                  <span className="text-xs font-mono text-subtle">
                    ✓ Valid JSON
                  </span>
                )}
              </div>
              <textarea
                rows={20}
                value={jsonText}
                onChange={(e) => handleJsonChange(e.target.value)}
                spellCheck={false}
                className="w-full p-4 text-xs font-mono bg-background/80 border border-border rounded-sm text-foreground focus:outline-none focus:border-foreground leading-relaxed"
              />
            </div>
          )}

          {/* Bottom Save / Export Bar */}
          <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={onResetData}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-border text-xs font-mono text-subtle hover:text-foreground rounded-xs cursor-pointer"
            >
              <RotateCcw size={13} />
              <span>Reset ke File JSON Asli</span>
            </button>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={handleApplyPreview}
                className="inline-flex items-center gap-1.5 px-4 py-2 border border-border bg-surface text-xs font-mono text-foreground hover:border-border-hover rounded-xs cursor-pointer"
              >
                {savedNotice ? <Check size={13} /> : <Save size={13} />}
                <span>
                  {savedNotice ? "Preview Tersimpan!" : "Simpan Preview Lokal"}
                </span>
              </button>

              <button
                type="button"
                onClick={handleCopyJson}
                className="inline-flex items-center gap-1.5 px-4 py-2 border border-border bg-surface text-xs font-mono text-foreground hover:border-border-hover rounded-xs cursor-pointer"
              >
                {copied ? <Check size={13} /> : <Copy size={13} />}
                <span>{copied ? "Tersalin!" : "Copy JSON"}</span>
              </button>

              <button
                type="button"
                onClick={handleDownloadJson}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-foreground text-background text-xs font-mono font-semibold rounded-xs hover:opacity-90 cursor-pointer"
              >
                <Download size={13} />
                <span>Download portfolio-data.json</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
