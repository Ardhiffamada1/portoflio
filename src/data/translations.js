export const translations = {
  EN: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
      cmdHint: "Command Menu",
    },
    hero: {
      status: "Available for select engineering roles",
      role: "Full-Stack Web Developer",
      location: "Semarang, Indonesia",
      tagline:
        "Building scalable web systems, enterprise tools, and responsive digital platforms.",
      description:
        "Result-oriented Full-Stack Developer with 2+ years of experience in designing, building, and deploying industrial-grade web applications using Next.js, React, Laravel, and Docker.",
      btnProjects: "Explore Selected Works",
      btnContact: "Get in Touch",
      btnTerminal: "Quick Command",
      metaFocus: "CURRENT FOCUS",
      metaFocusValue: "Enterprise Systems & Web Apps",
      metaDegree: "EDUCATION",
      metaDegreeValue: "B.C.S in Informatics (UDINUS)",
      metaLangs: "LANGUAGES",
      metaLangsValue: "Indonesian (Native) • English (Fluent)",
      localTimeLabel: "LOCAL TIME (WIB)",
    },
    about: {
      tag: "01 — ABOUT & SUMMARY",
      title: "Bridging complex logic with responsive digital experiences.",
      text1:
        "I am a Full-Stack Web Developer based in Semarang, Indonesia, with over 2 years of experience developing production-ready applications.",
      text2:
        "My practice centers on clean MVC architecture, modular frontend components, and lightweight containerized deployments using Docker and cloud platforms.",
      statYears: "2+ Years",
      statYearsLabel: "Industry Experience",
      statDegree: "S.Kom.",
      statDegreeLabel: "Informatics Graduate (UDINUS)",
      statCert: "BNSP",
      statCertLabel: "Certified Web Developer",
    },
    skills: {
      tag: "02 — SKILLS & STACK",
      title: "Technical Stack & Competencies",
      subtitle:
        "Interactive overview of core technologies used to design, build, and deploy full-stack systems.",
      filterAll: "All Stack",
      languages: "Languages",
      frameworks: "Frameworks & Libraries",
      backendDb: "Backend & Database",
      toolsDevops: "Tools & DevOps",
    },
    projects: {
      tag: "03 — PORTFOLIO",
      title: "Featured Works & Implementations",
      subtitle:
        "A selection of industrial-grade systems, digital platforms, and POS tools.",
      filterAll: "All Projects",
      repoBtn: "Repository",
      liveBtn: "View Live App",
      detailsBtn: "System Breakdown",
      closeModal: "Close Breakdown",
      archLabel: "Architecture & Engineering Highlights",
      impactLabel: "Key Capabilities",
      items: [
        {
          id: "wms-system",
          title: "Warehouse Management System (WMS)",
          category: "Enterprise System",
          year: "2026",
          description:
            "Manufacturing/corporate warehouse system for stock logging, inventory transfer flows, real-time transaction monitoring, and automated stock reporting.",
          techStack: [
            "Laravel",
            "MySQL",
            "React",
            "Tailwind CSS",
            "MVC Architecture",
          ],
          architecture:
            "Modular MVC Backend with relational inventory ledger & role-based access control",
          highlights: [
            "Multi-location stock mutation tracking & audit trails",
            "Real-time low-stock threshold alerts and automated batch reporting",
            "Role-based permissions for warehouse operators, supervisors, and auditors",
          ],
          metrics: "Real-Time Stock Ledger",
          github: "https://github.com/Ardhiffamada1/WMS",
          demo: "https://wms-zeta-mauve.vercel.app/",
        },
        {
          id: "cariclipper",
          title: "CariClipper Service Platform",
          category: "Digital Directory Platform",
          year: "2025",
          description:
            "Web-based directory and booking platform connecting users with nearby digital service providers intuitively.",
          techStack: ["Next.js", "React", "Node.js", "Tailwind CSS", "Vercel"],
          architecture:
            "Server-Side Rendered (SSR) Next.js App Router with dynamic location filtering",
          highlights: [
            "Fast search and multi-parameter filtering by location, rating, and service type",
            "SEO-optimized dynamic vendor profiles with instant booking flow",
            "Mobile-first responsive interface deployed on Vercel Edge network",
          ],
          metrics: "Production Live Platform",
          github: null, // Private Repository
          demo: "https://www.cariclipper.biz.id/",
        },
        {
          id: "restaurant-pos",
          title: "Restaurant POS System",
          category: "Full-Stack Web App",
          year: "2024",
          description:
            "Full-stack Point-of-Sale application designed to simplify digital ordering, automated billing, and real-time transaction processing.",
          techStack: ["PHP", "Laravel", "MySQL", "Bootstrap", "RESTful API"],
          architecture:
            "Transactional RESTful backend with ACID-compliant order & receipt engine",
          highlights: [
            "Synchronized table ordering, kitchen queue status, and cashier checkout",
            "Automated tax/discount calculation and printable thermal receipt generation",
            "Daily, weekly, and monthly revenue analytics dashboard",
          ],
          metrics: "End-to-End POS Flow",
          github: "https://github.com/Ardhiffamada1/RestaurantPOS",
          demo: null,
        },
      ],
    },
    experience: {
      tag: "04 — EXPERIENCE",
      title: "Work History & Roles",
      items: [
        {
          period: "Jan 2025 — Jun 2026",
          role: "Freelance Full-Stack Developer",
          company: "Independent / Project-Based",
          badge: "Latest",
          points: [
            "Architected and deployed custom business applications including CariClipper and industrial inventory systems.",
            "Developed Python-based automation and data processing modules to streamline digital workflows.",
            "Managed end-to-end project lifecycles from database design to cloud deployment (Vercel/cPanel).",
          ],
        },
        {
          period: "Jan 2024 — Jan 2025",
          role: "Full-Stack Developer",
          company: "PT. Indonesia Development Corner",
          points: [
            "Developed and maintained responsive web applications using Next.js and Laravel.",
            "Utilized Docker and MySQL backend stacks for lightweight, containerized deployment environments.",
            "Applied clean MVC architecture and collaborated in Agile/Scrum workflows using Trello.",
          ],
        },
        {
          period: "Oct 2023 — Jan 2024",
          role: "IT Assistant",
          company: "Hotel Mercure Pangkalan Bun",
          points: [
            "Troubleshot network infrastructure with Head of IT and executed daily server data backups.",
            "Monitored server room operations ensuring optimal conditions and maximum network uptime.",
          ],
        },
        {
          period: "Mar 2023 — Jul 2023",
          role: "Frontend Developer & UI/UX Intern",
          company: "Center of Excellence (COE) UDINUS",
          points: [
            "Built centralized e-commerce platform infrastructure empowering local MSMEs in Central Java.",
            "Translated high-fidelity Figma mockups into dynamic React.js code using Ant Design components.",
          ],
        },
      ],
    },
    education: {
      tag: "05 — CREDENTIALS",
      title: "Education & Certifications",
      eduDegree: "Bachelor of Computer Science (S.Kom.) — Informatics",
      eduInstitution: "Dian Nuswantoro University (UDINUS) — Semarang",
      eduPeriod: "2019 — 2024",
      certTitle: "Certifications & Grants",
      certBnsp: "BNSP Web Developer Competency Certification",
      certBnspDesc:
        "National Professional Certification Board (BNSP Indonesia)",
      certDicoding: "Dicoding Frontend Development Scholarship",
      certDicodingDesc:
        "Advanced frontend concepts, semantic layout, and modern JavaScript core.",
    },
    contact: {
      tag: "06 — CONTACT",
      title: "Let's build something scalable together.",
      description:
        "Available for full-stack engineering roles, enterprise system development, and technical consultations.",
      btnEmail: "Send an Email",
      quickMsgTitle: "Quick Inquiry Composer",
      quickMsgName: "Your Name / Company",
      quickMsgSubject: "Project or Role Topic",
      quickMsgBody: "Brief details about your project or opportunity...",
      quickMsgSend: "Compose in Email Client",
      githubUrl: "https://github.com/Ardhiffamada1",
      linkedinUrl: "https://linkedin.com/in/ardhiffamada",
      websiteUrl: "https://ardhiffaperdana.my.id",
    },
    commandPalette: {
      placeholder: "Type a command or search sections...",
      noResults: "No matching command found.",
      secNavigation: "Navigation",
      secActions: "Quick Actions",
      secLinks: "External Profiles",
      toggleTheme: "Toggle Dark / Light Theme",
      switchLang: "Switch Language (ID / EN)",
      copyEmail: "Copy Email Address",
      copiedEmail: "Email Copied to Clipboard!",
    },
  },

  ID: {
    nav: {
      about: "Tentang",
      skills: "Keahlian",
      projects: "Proyek",
      experience: "Pengalaman",
      education: "Pendidikan",
      contact: "Kontak",
      cmdHint: "Menu Cepat",
    },
    hero: {
      status: "Tersedia untuk posisi Software Engineering",
      role: "Full-Stack Web Developer",
      location: "Semarang, Indonesia",
      tagline:
        "Membangun sistem web berskala besar, sistem korporat, dan platform digital yang responsif.",
      description:
        "Full-Stack Web Developer berorientasi hasil dengan pengalaman 2+ tahun dalam merancang, membangun, dan mendeploy aplikasi web industri menggunakan Next.js, React, Laravel, dan Docker.",
      btnProjects: "Lihat Portofolio Utama",
      btnContact: "Hubungi Saya",
      btnTerminal: "Menu Pintas",
      metaFocus: "FOKUS UTAMA",
      metaFocusValue: "Sistem Korporat & Aplikasi Web",
      metaDegree: "PENDIDIKAN",
      metaDegreeValue: "S.Kom Teknik Informatika (UDINUS)",
      metaLangs: "BAHASA",
      metaLangsValue: "Indonesia (Native) • Inggris (Fasih)",
      localTimeLabel: "WAKTU LOKAL (WIB)",
    },
    about: {
      tag: "01 — TENTANG SAYA",
      title:
        "Menghubungkan logika kompleks dengan pengalaman digital yang responsif.",
      text1:
        "Saya adalah seorang Full-Stack Web Developer berdomisili di Semarang, Indonesia, dengan pengalaman lebih dari 2 tahun membangun aplikasi siap pakai untuk kebutuhan industri.",
      text2:
        "Praktik kerja saya berpusat pada arsitektur MVC yang bersih, komponen frontend modular, serta deployment ter-kontainerisasi yang ringan menggunakan Docker dan platform cloud.",
      statYears: "2+ Tahun",
      statYearsLabel: "Pengalaman Industri",
      statDegree: "S.Kom.",
      statDegreeLabel: "Lulusan Informatika (UDINUS)",
      statCert: "BNSP",
      statCertLabel: "Sertifikasi Web Developer",
    },
    skills: {
      tag: "02 — KEAHLIAN TEKNIS",
      title: "Tech Stack & Kompetensi",
      subtitle:
        "Ringkasan interaktif teknologi utama yang saya gunakan untuk merancang, membangun, dan men-deploy sistem full-stack.",
      filterAll: "Semua Stack",
      languages: "Bahasa Pemrograman",
      frameworks: "Framework & Library",
      backendDb: "Backend & Database",
      toolsDevops: "Tools & DevOps",
    },
    projects: {
      tag: "03 — PORTOFOLIO UTAMA",
      title: "Proyek Pilihan & Implementasi",
      subtitle:
        "Kumpulan sistem korporat, platform direktori digital, dan aplikasi kasir POS.",
      filterAll: "Semua Proyek",
      repoBtn: "Repositori",
      liveBtn: "Lihat Aplikasi",
      detailsBtn: "Detail Arsitektur",
      closeModal: "Tutup Detail",
      archLabel: "Arsitektur & Sorotan Teknis",
      impactLabel: "Fitur Utama Sistem",
      items: [
        {
          id: "wms-system",
          title: "Warehouse Management System (WMS)",
          category: "Sistem Korporat",
          year: "2026",
          description:
            "Sistem pengelolaan gudang berbasis web tingkat korporat untuk pencatatan stok, pemindahan inventaris, pemantauan transaksi real-time, dan otomatisasi pelaporan.",
          techStack: [
            "Laravel",
            "MySQL",
            "React",
            "Tailwind CSS",
            "MVC Architecture",
          ],
          architecture:
            "Backend MVC Modular dengan pencatatan buku besar inventaris relasional & otorisasi berbasis peran (RBAC)",
          highlights: [
            "Pelacakan mutasi stok multi-lokasi beserta rekam jejak audit (audit trail)",
            "Peringatan otomatis stok menipis secara real-time dan ekspor laporan berkala",
            "Manajemen hak akses untuk operator gudang, supervisor, dan auditor",
          ],
          metrics: "Real-Time Stock Ledger",
          github: "https://github.com/Ardhiffamada1/WMS",
          demo: "https://wms-zeta-mauve.vercel.app/",
        },
        {
          id: "cariclipper",
          title: "CariClipper Service Platform",
          category: "Platform Direktori Digital",
          year: "2025",
          description:
            "Platform direktori dan pemesanan layanan digital berbasis web yang menghubungkan pengguna dengan penyedia jasa terdekat secara intuitif.",
          techStack: ["Next.js", "React", "Node.js", "Tailwind CSS", "Vercel"],
          architecture:
            "Next.js App Router dengan Server-Side Rendering (SSR) & pemfilteran lokasi dinamis",
          highlights: [
            "Pencarian instan dan filter multi-parameter berdasarkan lokasi, rating, serta jenis layanan",
            "Halaman profil mitra yang teroptimasi SEO dengan alur reservasi cepat",
            "Antarmuka responsif mobile-first yang di-deploy pada jaringan Vercel Edge",
          ],
          metrics: "Platform Live Produksi",
          github: null, // Private Repository
          demo: "https://www.cariclipper.biz.id/",
        },
        {
          id: "restaurant-pos",
          title: "Restaurant POS System",
          category: "Aplikasi Web Full-Stack",
          year: "2024",
          description:
            "Aplikasi kasir (point-of-sale) full-stack untuk menyederhanakan pemesanan digital, penagihan otomatis, dan pemrosesan transaksi real-time.",
          techStack: ["PHP", "Laravel", "MySQL", "Bootstrap", "RESTful API"],
          architecture:
            "Backend RESTful transaksional dengan mesin pemrosesan pesanan & struk yang konsisten",
          highlights: [
            "Sinkronisasi pemesanan meja, antrean dapur, hingga pembayaran kasir",
            "Kalkulasi pajak/diskon otomatis serta pembuatan struk belanja siap cetak",
            "Dashboard analitik pendapatan harian, mingguan, dan bulanan",
          ],
          metrics: "Alur Kasir End-to-End",
          github: "https://github.com/Ardhiffamada1/RestaurantPOS",
          demo: null,
        },
      ],
    },
    experience: {
      tag: "04 — PENGALAMAN KERJA",
      title: "Riwayat Pekerjaan & Peran",
      items: [
        {
          period: "Jan 2025 — Jun 2026",
          role: "Freelance Full-Stack Developer Mandiri",
          company: "Proyek Lepas / Independent",
          badge: "Terbaru",
          points: [
            "Merancang dan mengimplementasikan aplikasi bisnis kustom seperti platform CariClipper dan sistem inventarisasi gudang.",
            "Mengembangkan modul automasi dan pemrosesan data berbasis Python guna mengoptimalkan alur kerja digital klien.",
            "Mengelola manajemen siklus penuh proyek (end-to-end) mulai dari perancangan basis data hingga deployment ke cloud server (Vercel/cPanel).",
          ],
        },
        {
          period: "Jan 2024 — Jan 2025",
          role: "Full-Stack Developer",
          company: "PT. Indonesia Development Corner",
          points: [
            "Mengembangkan dan memelihara aplikasi web kustom yang responsif menggunakan Next.js dan Laravel.",
            "Memanfaatkan stack backend Docker dan MySQL untuk memastikan lingkungan deployment ter-kontainerisasi dan konsisten.",
            "Menerapkan pola arsitektur MVC yang bersih serta berkolaborasi dalam alur kerja Agile/Scrum menggunakan Trello.",
          ],
        },
        {
          period: "Okt 2023 — Jan 2024",
          role: "IT Assistant",
          company: "Hotel Mercure Pangkalan Bun",
          points: [
            "Troubleshoot infrastruktur jaringan bersama Head of IT dan mengeksekusi pencadangan data harian server.",
            "Memantau operasional ruang server untuk memastikan uptime jaringan yang maksimal.",
          ],
        },
        {
          period: "Mar 2023 — Jul 2023",
          role: "Frontend Developer & UI/UX Intern",
          company: "Center of Excellence (COE) UDINUS",
          points: [
            "Merancang platform e-commerce terpusat untuk memberdayakan UMKM lokal di Jawa Tengah.",
            "Menerjemahkan mockup Figma high-fidelity menjadi kode React.js dinamis menggunakan komponen Ant Design.",
          ],
        },
      ],
    },
    education: {
      tag: "05 — PENDIDIKAN & SERTIFIKASI",
      title: "Gelar Akademis & Kualifikasi",
      eduDegree: "Sarjana Komputer (S.Kom.) — Teknik Informatika",
      eduInstitution: "Universitas Dian Nuswantoro (UDINUS) — Semarang",
      eduPeriod: "2019 — 2024",
      certTitle: "Sertifikasi & Beasiswa",
      certBnsp: "Sertifikasi Kompetensi Web Developer BNSP",
      certBnspDesc: "Badan Nasional Sertifikasi Profesi (BNSP Indonesia)",
      certDicoding: "Beasiswa Dicoding Frontend Development",
      certDicodingDesc:
        "Konsep lanjutan frontend, layout HTML semantik, dan JavaScript murni.",
    },
    contact: {
      tag: "06 — KONTAK",
      title: "Mari bangun sistem yang berskala besar.",
      description:
        "Tersedia untuk posisi Full-Stack Engineer, pengembangan sistem korporat, dan konsultasi teknis.",
      btnEmail: "Kirim Email",
      quickMsgTitle: "Kirim Pesan Cepat",
      quickMsgName: "Nama / Perusahaan Anda",
      quickMsgSubject: "Topik Proyek atau Posisi",
      quickMsgBody: "Ceritakan singkat mengenai kebutuhan proyek atau kolaborasi...",
      quickMsgSend: "Buka di Aplikasi Email",
      githubUrl: "https://github.com/Ardhiffamada1",
      linkedinUrl: "https://linkedin.com/in/ardhiffamada",
      websiteUrl: "https://ardhiffaperdana.my.id",
    },
    commandPalette: {
      placeholder: "Ketik perintah atau cari bagian halaman...",
      noResults: "Perintah tidak ditemukan.",
      secNavigation: "Navigasi Halaman",
      secActions: "Aksi Cepat",
      secLinks: "Profil Eksternal",
      toggleTheme: "Ganti Tema Gelap / Terang",
      switchLang: "Ganti Bahasa (ID / EN)",
      copyEmail: "Salin Alamat Email",
      copiedEmail: "Email Berhasil Disalin!",
    },
  },
};
