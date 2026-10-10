import { useEffect, type RefObject } from "react";
import { projectData } from "./project-data";

const active = "bg-primary text-on-primary";
const inactive = "bg-surface-card text-on-surface-variant";

const translations: Record<string, string> = {
  // Navigation & Header
  "Open for Work": "Available for Work",
  "Beranda": "Home",
  "Tentang": "About",
  "Keahlian": "Skills",
  "Proyek": "Projects",
  "Pengalaman": "Experience",
  "Sertifikat": "Certificates",
  "Kontak": "Contact",
  "Home": "Home",
  "About": "About",
  "Skills": "Skills",
  "Projects": "Projects",
  "Experience": "Experience",
  "Certificates": "Certificates",
  "Contact": "Contact",

  // Hero Section
  "STATUS: AVAILABLE FOR WORK": "STATUS: AVAILABLE FOR WORK",
  "PALEMBANG, ID": "PALEMBANG, ID",
  "FULL-STACK DEVELOPER & DATA ANALYST": "FULL-STACK DEVELOPER & DATA ANALYST",
  "Haikal Tirta Albanna": "Haikal Tirta Albanna",
  "Lihat Proyek": "View Projects",
  "Unduh CV": "Download CV",
  "Informatika • S.Kom (Cum Laude)": "Informatics • S.Kom (Cum Laude)",
  "Selamat datang di portofolio pribadi saya! Saya merupakan seorang Full-Stack Developer dan Data Analyst yang memiliki ketertarikan dalam mengembangkan solusi digital yang fungsional dan inovatif. Melalui portofolio ini, Anda dapat melihat berbagai proyek yang telah saya kerjakan, mulai dari website, landing page, hingga aplikasi berbasis web dengan pengembangan frontend maupun backend. Setiap proyek dirancang dengan mengutamakan kualitas, tampilan yang responsif, serta pengalaman pengguna yang optimal untuk memberikan solusi yang efektif dan bernilai.":
    "Welcome to my personal portfolio! I am a Full-Stack Developer and Data Analyst passionate about creating functional and innovative digital solutions. Explore the various projects I have worked on, from websites and landing pages to web applications with frontend and backend development. Each project prioritizes quality, responsive design, and optimal user experience to deliver effective, valuable solutions.",

  // Section 01: About
  "01. TENTANG SAYA": "01. ABOUT ME",
  "TENTANG SAYA": "ABOUT ME",
  "Mengubah ide menjadi aplikasi yang bermanfaat.": "Turning ideas into useful applications.",
  "Latar Belakang & Filosofi Rekayasa": "Background & Engineering Philosophy",
  "Saya adalah lulusan Sarjana Komputer (S1) Teknik Informatika dari": "I am a Computer Science graduate (B.Sc) in Informatics Engineering from",
  "Universitas Bina Darma": "Bina Darma University",
  " dengan predikat ": " with honors ",
  "Cum Laude (IPK 3.82)": "Cum Laude (GPA 3.82)",
  " dan peminatan Analisis Data. Sepanjang perjalanan akademis dan profesional, saya konsisten menggabungkan ketelitian data dengan kepraktisan rekayasa perangkat lunak.": " and a specialization in Data Analysis. Throughout my academic and professional journey, I consistently combine data precision with software engineering practice.",
  "Fokus utama saya bertumpu pada pembangunan sistem web yang terstruktur rapi, efisien, aman, serta memiliki reliabilitas tinggi. Saya berpengalaman menangani digitalisasi alur kerja dokumen pada instansi pemerintahan serta merancang antarmuka ramah pengguna yang terhubung langsung ke basis data terpusat.": "My primary focus centers on building cleanly structured, efficient, secure, and highly reliable web systems. I am experienced in digitalizing document workflows for government institutions and designing user-friendly interfaces directly connected to centralized databases.",
  "LOCATION: PALEMBANG, SUMSEL": "LOCATION: PALEMBANG, SUMSEL",
  "AVAILABLE_IMMEDIATELY": "AVAILABLE_IMMEDIATELY",
  "Pendidikan Formal": "Formal Education",
  "S1 Teknik Informatika, Universitas Bina Darma. Lulus dengan predikat ": "B.Sc in Informatics Engineering, Bina Darma University. Graduated with honors ",
  ". Fokus skripsi dan riset pada optimalisasi data serta rancang bangun sistem berbasis web.": ". Thesis and research focused on data optimization and web system design.",
  "Komitmen Kualitas & Clean Code": "Quality & Clean Code Commitment",
  "Mengutamakan keterbacaan kode (clean architecture), integritas skema database relasional (ACID), penerapan REST API terstandarisasi, dan optimasi performa rendering web.": "Prioritizing code readability (clean architecture), relational database schema integrity (ACID), standardized REST API implementation, and web rendering performance optimization.",
  "Pengalaman Nyata Institusi": "Real Institutional Experience",
  "Berkontribusi aktif dalam digitalisasi sistem administrasi pada instansi kementerian dan kelembagaan negara, termasuk LLDIKTI Wilayah II dan BAPAS Kelas II OKU Induk Kemenimipas RI.": "Actively contributing to the digitalization of administrative systems in ministry institutions and state agencies, including LLDIKTI Region II and BAPAS Class II OKU Induk Kemenimipas RI.",

  // Section 02: Skills
  "02. KEAHLIAN TEKNOLOGI & TECH ARSENAL": "02. CORE SKILLS & TECH ARSENAL",
  "KEAHLIAN TEKNOLOGI & TECH ARSENAL": "CORE SKILLS & TECH ARSENAL",
  "Perangkat & disiplin yang saya kuasai.": "Tools & engineering disciplines I master.",
  "Antarmuka web interaktif & responsif": "Interactive & responsive web interfaces",
  "8 TEKNOLOGI": "8 TECHNOLOGIES",
  "Arsitektur Server & Basis Data Relasional": "Server Architecture & Relational Databases",
  "5 TEKNOLOGI": "5 TECHNOLOGIES",
  "Visualisasi, Pemrosesan & Riset Data": "Data Visualization, Processing & Research",
  "Version Control, Container & Manajemen Proyek": "Version Control, Containers & Project Management",
  "4 TEKNOLOGI": "4 TECHNOLOGIES",
  "Pengembangan Web (Frontend & Backend)": "Web Development (Frontend & Backend)",
  "Analisis Data & Visualisasi": "Data Analysis & Visualization",
  "Alat Rekayasa & Alur Kerja": "Engineering Tools & Workflow",
  "Analisis & Pengolahan Data": "Data Analysis & Processing",
  "Desain": "Design",
  "Perkantoran & Tools": "Office & Tools",
  "UI/UX design & aset visual": "UI/UX design & visual assets",
  "Developer tooling & administrasi": "Developer tooling & administration",

  // Section 03: Projects
  "03. PORTOFOLIO PROYEK": "03. PROJECT PORTFOLIO",
  "PORTOFOLIO PROYEK": "PROJECT PORTFOLIO",
  "PROYEK UNGGULAN": "FEATURED PROJECTS",
  "Proyek Unggulan & Implementasi": "Featured Projects & Implementations",
  "Implementasi nyata penyelesaian masalah data & transformasi digital instansi.": "Real-world solutions for data challenges and institutional digital transformation.",
  "Rancang bangun sistem enterprise, otomatisasi administrasi instansi, dan arsitektur analitik cloud berkinerja tinggi.": "Enterprise system design, institutional administrative automation, and high-performance cloud analytics architecture.",
  "Semua Proyek": "All Projects",
  "Sistem Internal": "Internal Systems",
  "Aplikasi Web": "Web Applications",
  "Personal": "Personal",
  "Lihat Detail": "View Details",
  "Demo Langsung": "Live Demo",
  "Kode Sumber": "Source Code",
  "Tampilkan Semua": "Show All",
  "Tampilkan Lebih Sedikit": "Show Less",
  "Tidak ada proyek yang ditemukan.": "No projects found.",

  // Section 04: Experience
  "04. PENGALAMAN KERJA & KONTRIBUSI": "04. WORK EXPERIENCE & CONTRIBUTIONS",
  "04. PENGALAMAN KERJA": "04. WORK EXPERIENCE",
  "PENGALAMAN KERJA & KONTRIBUSI": "WORK EXPERIENCE & CONTRIBUTIONS",
  "PENGALAMAN KERJA": "WORK EXPERIENCE",
  "Pengalaman Profesional & Proyek Institusi": "Professional Experience & Institutional Projects",
  "Jejak rekam profesional dan kontribusi nyata": "Professional track record and real contributions",
  "Pengalaman langsung pada instansi pemerintah dan program akselerasi teknologi nasional.": "Hands-on experience in government institutions and national technology acceleration programs.",
  "DESEMBER 2025 — JUNI 2026": "DECEMBER 2025 — JUNE 2026",
  "Pengelola Fasilitas Umum": "Public Facilities Officer",
  "BAPAS Kelas II OKU Induk": "BAPAS Class II OKU Induk",
  "Balai Pemasyarakatan Kelas II OKU Induk": "Balai Pemasyarakatan Class II OKU Induk",
  "Mengembangkan aplikasi web berbasis React, melakukan analisis kebutuhan sistem, perancangan database, desain antarmuka, serta implementasi fitur untuk mendukung digitalisasi layanan Registrasi dan administrasi.": "Developed React-based web applications, conducted system requirements analysis, database design, interface layout, and feature implementation to support the digitalization of Registration and administrative services.",
  "SEPTEMBER 2024 — DESEMBER 2024": "SEPTEMBER 2024 — DECEMBER 2024",
  "Kelompok Komputasi Awan": "Cloud Computing Track",
  "Bangkit Academy led by Google, GoTo, & Traveloka": "Bangkit Academy led by Google, GoTo, & Traveloka",
  "Mempelajari cloud computing menggunakan Google Cloud Platform (GCP), membangun REST API, mengelola database, menerapkan deployment aplikasi, serta berkolaborasi dalam pengembangan proyek capstone berbasis cloud.": "Studied cloud computing using Google Cloud Platform (GCP), built REST APIs, managed databases, deployed applications, and collaborated on a cloud-based capstone project.",
  "FEBRUARI 2024 — JUNI 2024": "FEBRUARY 2024 — JUNE 2024",
  "Pengembangan Sistem Informasi": "Information System Development",
  "LLDIKTI Wilayah II": "LLDIKTI Region II",
  "Mengembangkan aplikasi web berbasis Laravel, melakukan analisis kebutuhan sistem, dan perancangan database.": "Developed Laravel-based web applications, conducted system requirements analysis, and designed database architecture.",
  "Full-Stack Web Developer (Freelance / Proyek Institusi)": "Full-Stack Web Developer (Freelance / Institutional Project)",
  "Desember 2024 – Juni 2025": "December 2024 – June 2025",
  "Mengembangkan dan mengimplementasikan aplikasi web Buku Agenda Surat Digital untuk digitalisasi administrasi persuratan dinas.": "Developed and implemented the Digital Mail Agenda Book web application for institutional mail administration digitalization.",
  "Mempercepat alur registrasi surat masuk/keluar dan pencarian berkas dari proses manual fisik menjadi sistem digital terpusat.": "Accelerated incoming/outgoing mail registration and file search workflows from physical manual processes to a centralized digital system.",
  "Mengintegrasikan autentikasi berbasis peran (Role-Based Access Control) serta sistem pelaporan data persuratan.": "Integrated Role-Based Access Control authentication and correspondence data reporting systems.",
  "Pranata Komputer (Magang / Internship)": "Computer Systems Specialist (Internship)",
  "Desember 2022 – Maret 2023": "December 2022 – March 2023",
  "Mengelola dan memvalidasi pangkalan data perguruan tinggi swasta di wilayah Sumsel, Lampung, Bengkulu, dan Babel.": "Managed and validated higher education databases for private universities in South Sumatra, Lampung, Bengkulu, and Babel regions.",
  "Membantu pengolahan data statistik pelaporan akademik dan asistensi teknis pemeliharaan sistem informasi lembaga.": "Assisted in statistical data processing for academic reporting and technical assistance for institutional information system maintenance.",

  // Section 05: Certificates
  "05. SERTIFIKASI & KREDENSIAL RESMI": "05. OFFICIAL CERTIFICATIONS & CREDENTIALS",
  "05. SERTIFIKAT & LISENSI": "05. CERTIFICATES & LICENSES",
  "SERTIFIKASI & KREDENSIAL RESMI": "OFFICIAL CERTIFICATIONS & CREDENTIALS",
  "SERTIFIKAT & LISENSI": "CERTIFICATES & LICENSES",
  "Lisensi Profesional & Sertifikasi Keahlian": "Professional Licenses & Skill Certifications",
  "Dokumentasi pencapaian kompetensi & kelulusan program terstandarisasi.": "Documentation of competency achievements & standardized program graduations.",
  "Portofolio lisensi, kredensial kementerian, dan kelulusan program akselerasi digital bereputasi nasional.": "Portfolio of licenses, ministry credentials, and nationally reputable digital acceleration program graduations.",
  "Surat Pengalaman Magang": "Internship Experience Certificate",
  "Surat keterangan pengalaman magang di Balai Pemasyarakatan Kelas II OKU Induk. Dokumen lengkap terdiri dari dua halaman.": "Certificate of internship experience at Balai Pemasyarakatan Class II OKU Induk. Full document consists of two pages.",
  "Sertifikat MagangHub 2026": "MagangHub Certificate 2026",
  "Sertifikat penyelesaian program MagangHub tahun 2026.": "Certificate of completion for the MagangHub program 2026.",
  "Studi Independen Bersertifikat MSIB Batch 7": "MSIB Batch 7 Certified Independent Study",
  "Sertifikat kelulusan program Studi Independen Bersertifikat (MSIB) Angkatan 7 tahun 2024.": "Certificate of graduation from the Certified Independent Study (MSIB) Batch 7 program in 2024.",
  "Sertifikat Kelulusan Program MSIB Batch 6": "MSIB Batch 6 Program Graduation Certificate",
  "Program Magang & Studi Independen Bersertifikat (MSIB) Batch 6 posisi Information System Developer. Fokus rekayasa arsitektur sistem informasi institusi, standarisasi API, dan integrasi database relasional.": "Certified Internship & Independent Study (MSIB) Batch 6 as Information System Developer. Focused on institutional IS architecture engineering, API standardization, and relational database integration.",
  "Bangkit Academy: Machine Learning for Cloud Engineer": "Bangkit Academy: Machine Learning for Cloud Engineer",
  "Sertifikat kelulusan Bangkit Academy. Halaman kedua merupakan lanjutan dokumen.": "Bangkit Academy graduation certificate. The second page is a document continuation.",
  "Dasar jaringan, pengalamatan, perangkat, dan konektivitas.": "Fundamentals of networking, addressing, devices, and connectivity.",
  "Lihat Dokumen Lengkap": "View Full Document",
  "Dokumen Sertifikat": "Certificate Document",
  "Dokumen Multi-Halaman": "Multi-Page Document",
  "Buka Gambar Asli": "Open Original Image",
  "2 Halaman": "2 Pages",

  // Section 06: Contact
  "06. MARI BERKOLABORASI": "06. LET'S COLLABORATE",
  "MARI BERKOLABORASI": "LET'S COLLABORATE",
  "Terbuka untuk peluang kerja full-time, kontrak, maupun kemitraan proyek sistem.": "Open for full-time roles, contracts, and system project partnerships.",
  "Kirim Pesan Langsung": "Send a Direct Message",
  "Silakan isi formulir di bawah ini untuk memulai percakapan atau mendiskusikan peluang kerja sama.": "Please fill out the form below to start a conversation or discuss work opportunities.",
  "SURAT ELEKTRONIK UTAMA": "PRIMARY EMAIL",
  "DOMISILI & KESIAPAN": "DOMICILE & AVAILABILITY",
  "JEJARING PROFESIONAL": "PROFESSIONAL NETWORKS",
  "Palembang, Sumatera Selatan, Indonesia": "Palembang, South Sumatra, Indonesia",
  "Siap bergabung segera (On-site / Remote / Hybrid)": "Ready to join immediately (On-site / Remote / Hybrid)",
  "Nama Lengkap *": "Full Name *",
  "Alamat Email *": "Email Address *",
  "Subjek / Perihal *": "Subject *",
  "Pesan Lengkap *": "Message *",
  "Kirim Pesan": "Send Message",
  "Atau hubungi langsung melalui email:": "Or contact directly via email:",
  "Salin Email": "Copy Email",

  // Project Modals
  "Detail Proyek": "Project Details",
  "Deskripsi & Latar Belakang": "Description & Background",
  "Fitur & Fungsionalitas": "Features & Functionality",
  "Teknologi & Peran": "Tech Stack & Roles",
  "Tutup": "Close",

  // Footer
  "Hak Cipta © 2026 Haikal Tirta Albanna. Seluruh Hak Cipta Dilindungi.": "Copyright © 2026 Haikal Tirta Albanna. All Rights Reserved.",
};

const dateMonthReplacements: [RegExp, string][] = [
  [/\bJanuari\b/g, "January"],
  [/\bFebruari\b/g, "February"],
  [/\bMaret\b/g, "March"],
  [/\bMei\b/g, "May"],
  [/\bJuni\b/g, "June"],
  [/\bJuli\b/g, "July"],
  [/\bAgustus\b/g, "August"],
  [/\bDesember\b/g, "December"],
  [/\bDes\b/g, "Dec"],
  [/\bAgu\b/g, "Aug"],
  [/\bOkt\b/g, "Oct"],
  [/\bDESEMBER\b/g, "DECEMBER"],
  [/\bJUNI\b/g, "JUNE"],
  [/\bFEBRUARI\b/g, "FEBRUARY"],
  [/\bAGUSTUS\b/g, "AUGUST"],
  [/\bMARET\b/g, "MARCH"],
  [/\bOKTOBER\b/g, "OCTOBER"],
  [/\bMEI\b/g, "MAY"],
];

export function usePortfolioInteractions(container: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const root = container.current;
    if (!root) return;

    const q = <T extends HTMLElement = HTMLElement>(selector: string) =>
      root.querySelector<T>(selector);
    const all = (selector: string) => Array.from(root.querySelectorAll<HTMLElement>(selector));

    let filter = "all",
      query = "",
      page = 1,
      showAll = false,
      showAllCerts = false,
      currentLang = "id";

    let lastFocus: HTMLElement | null = null;
    let certificatePages: string[] = [];
    let certificateTitle = "";
    let certificatePageIndex = 0;
    let activeModalProjectId: string | null = null;

    const setText = (id: string, text: string) => {
      const el = q("#" + id);
      if (el) el.textContent = text;
    };

    const parseCertDateTimestamp = (dateStr: string): number => {
      if (!dateStr) return 0;
      const monthMap: Record<string, number> = {
        januari: 1, jan: 1, january: 1,
        februari: 2, feb: 2, february: 2,
        maret: 3, mar: 3, march: 3,
        april: 4, apr: 4,
        mei: 5, may: 5,
        juni: 6, jun: 6, june: 6,
        juli: 7, jul: 7, july: 7,
        agustus: 8, agu: 8, aug: 8, august: 8,
        september: 9, sep: 9, sept: 9,
        oktober: 10, okt: 10, oct: 10, october: 10,
        november: 11, nov: 11,
        desember: 12, des: 12, dec: 12, december: 12,
      };

      const matches = Array.from(dateStr.matchAll(/\b(20\d\d)\b/g));
      if (!matches.length) return 0;

      let maxYear = 0;
      let maxYearIndex = -1;
      matches.forEach((m) => {
        const yr = Number(m[1]);
        if (yr >= maxYear) {
          maxYear = yr;
          maxYearIndex = m.index ?? 0;
        }
      });

      const textAroundYear = dateStr
        .slice(Math.max(0, maxYearIndex - 30), maxYearIndex + 10)
        .toLowerCase();

      let month = 1;
      for (const [key, val] of Object.entries(monthMap)) {
        if (textAroundYear.includes(key)) {
          month = val;
          break;
        }
      }

      const dayMatch = textAroundYear.match(/\b(\d{1,2})\b/);
      const day = dayMatch ? Number(dayMatch[1]) : 1;

      return maxYear * 10000 + month * 100 + day;
    };

    const originalTextMap = new Map<Text, string>();
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode as Text;
      const text = node.textContent?.trim();
      if (text) {
        originalTextMap.set(node, node.textContent || "");
      }
    }

    const translateDocumentText = (isEn: boolean) => {
      originalTextMap.forEach((origText, node) => {
        if (!node.parentElement) return;
        const trimmed = origText.trim();
        if (translations[trimmed]) {
          const replacement = isEn ? translations[trimmed] : trimmed;
          node.textContent = origText.replace(trimmed, replacement);
        } else if (isEn) {
          let updated = origText;
          dateMonthReplacements.forEach(([regex, rep]) => {
            updated = updated.replace(regex, rep);
          });
          if (updated !== origText) {
            node.textContent = updated;
          }
        } else {
          node.textContent = origText;
        }
      });

      // Update placeholders
      const projInput = q<HTMLInputElement>("#project-search-input");
      if (projInput) {
        projInput.placeholder = isEn
          ? "Search projects by name, technology, or description..."
          : "Cari proyek berdasarkan nama, teknologi, atau deskripsi...";
      }
      const certInput = q<HTMLInputElement>("#certificate-search-input");
      if (certInput) {
        certInput.placeholder = isEn
          ? "Search certificates by name, issuer, or keyword..."
          : "Cari sertifikat berdasarkan nama, penerbit, atau kata kunci...";
      }
      const contact0 = q<HTMLInputElement>("#contact-0");
      if (contact0) {
        contact0.placeholder = isEn ? "e.g., John Doe" : "Contoh: Rian Pratama";
      }
      const contact1 = q<HTMLInputElement>("#contact-1");
      if (contact1) {
        contact1.placeholder = isEn ? "email@company.com" : "email@perusahaan.com";
      }
      const contact2 = q<HTMLInputElement>("#contact-2");
      if (contact2) {
        contact2.placeholder = isEn
          ? "Job Offer / System Development Project"
          : "Penawaran Kerja / Proyek Pengembangan Sistem";
      }
      const contact3 = q<HTMLTextAreaElement>("#contact-3");
      if (contact3) {
        contact3.placeholder = isEn
          ? "Write a summary of the position, project, or requirements you wish to discuss..."
          : "Tuliskan gambaran posisi, proyek, atau kebutuhan yang ingin didiskusikan...";
      }

      // Update static headings in project modal if open
      setText("pm-header-title", isEn ? "Project Details" : "Detail Proyek");
      setText("pm-heading-desc", isEn ? "Description & Background" : "Deskripsi & Latar Belakang");
      setText("pm-heading-features", isEn ? "Features & Functionality" : "Fitur & Fungsionalitas");
      setText("pm-heading-tech", isEn ? "Tech Stack & Roles" : "Teknologi & Peran");

      if (activeModalProjectId) {
        updateProjectModalContent(activeModalProjectId);
      }
    };

    const renderCertificates = () => {
      const certificateGrid = q<HTMLElement>("#certificate-grid");
      if (!certificateGrid) return;
      const cards = Array.from(certificateGrid.children) as HTMLElement[];
      cards
        .sort((left, right) => {
          const leftDateStr = left.querySelector(".certificate-date")?.textContent?.trim() || "";
          const rightDateStr = right.querySelector(".certificate-date")?.textContent?.trim() || "";
          const leftTs = parseCertDateTimestamp(leftDateStr);
          const rightTs = parseCertDateTimestamp(rightDateStr);

          if (leftTs !== rightTs) {
            return rightTs - leftTs;
          }

          const leftOrder = Number(
            left.querySelector("img")?.getAttribute("data-certificate-order") || 999,
          );
          const rightOrder = Number(
            right.querySelector("img")?.getAttribute("data-certificate-order") || 999,
          );
          return leftOrder - rightOrder;
        })
        .forEach((card) => certificateGrid.append(card));

      cards.forEach((card, index) => {
        if (showAllCerts || index < 4) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }

        const viewBtnText = card.querySelector<HTMLElement>('[data-action="openCertModal"] span:first-child');
        if (viewBtnText) {
          viewBtnText.textContent = currentLang === "en" ? "View Full Document" : "Lihat Dokumen Lengkap";
        }
      });

      const showAllBtnText = q<HTMLElement>("#toggle-all-certificates-text");
      if (showAllBtnText) {
        showAllBtnText.textContent = showAllCerts
          ? (currentLang === "en" ? "Show Less" : "Tampilkan Lebih Sedikit")
          : (currentLang === "en" ? "Show All" : "Tampilkan Semua");
      }
    };

    const showCertificatePage = () => {
      const pageUrl = certificatePages[certificatePageIndex];
      if (!pageUrl) return;
      const image = q<HTMLImageElement>("#cert-modal-image");
      if (image) {
        image.src = pageUrl;
        image.alt = `${certificateTitle} - ${currentLang === "en" ? "Page" : "Halaman"} ${certificatePageIndex + 1}`;
      }
      const controls = q<HTMLElement>("#cert-modal-page-controls");
      if (controls) controls.hidden = certificatePages.length < 2;
      const previous = q<HTMLButtonElement>("#cert-modal-page-previous");
      const next = q<HTMLButtonElement>("#cert-modal-page-next");
      if (previous) previous.disabled = certificatePageIndex === 0;
      if (next) next.disabled = certificatePageIndex === certificatePages.length - 1;
      setText(
        "cert-modal-page-count",
        currentLang === "en"
          ? `Page ${certificatePageIndex + 1} of ${certificatePages.length}`
          : `Halaman ${certificatePageIndex + 1} dari ${certificatePages.length}`,
      );
      const download = q<HTMLAnchorElement>("#cert-modal-download");
      if (download) {
        download.href = pageUrl;
        const iconSpan = download.querySelector(".material-symbols-outlined");
        if (iconSpan) {
          iconSpan.textContent = "open_in_new";
        }
        const textSpan = download.querySelector<HTMLElement>(".cert-modal-download-text, span:not(.material-symbols-outlined)");
        const labelText = certificatePages.length > 1
          ? (currentLang === "en" ? `Open Page ${certificatePageIndex + 1}` : `Buka Halaman ${certificatePageIndex + 1}`)
          : (currentLang === "en" ? "Open Original Image" : "Buka Gambar Asli");
        if (textSpan) {
          textSpan.textContent = labelText;
        } else {
          download.replaceChildren();
          const icon = document.createElement("span");
          icon.className = "material-symbols-outlined text-base text-secondary";
          icon.textContent = "open_in_new";
          const label = document.createElement("span");
          label.className = "cert-modal-download-text";
          label.textContent = labelText;
          download.appendChild(icon);
          download.appendChild(label);
        }
      }
    };

    const selectButton = (el: HTMLElement, selected: boolean) => {
      el.classList.remove(...(selected ? inactive : active).split(" "));
      el.classList.add(...(selected ? active : inactive).split(" "));
      el.setAttribute("aria-pressed", String(selected));
    };

    const renderProjects = () => {
      const isEn = currentLang === "en";
      const cards = all(".project-card");

      // Update card content per language
      cards.forEach((c) => {
        const btn = c.querySelector<HTMLElement>('[data-action^="openProjectModal"]');
        const match = btn?.dataset["action"]?.match(/'([^']+)'/);
        const pid = match ? match[1] : null;
        if (pid && pid in projectData) {
          const d = projectData[pid];
          if (d) {
            const titleEl = c.querySelector<HTMLElement>("h3");
            if (titleEl) titleEl.textContent = isEn ? (d.titleEn || d.title) : d.title;
            const badgeTypeEl = c.querySelector<HTMLElement>(".absolute span:first-child");
            if (badgeTypeEl) badgeTypeEl.textContent = isEn ? (d.badgeTypeEn || d.badgeType) : d.badgeType;
            const badgeStatusEl = c.querySelector<HTMLElement>(".absolute span:last-child");
            if (badgeStatusEl) badgeStatusEl.textContent = isEn ? (d.badgeStatusEn || d.badgeStatus) : d.badgeStatus;
            const detailBtnSpan = c.querySelector<HTMLElement>('[data-action^="openProjectModal"] span:first-child');
            if (detailBtnSpan) detailBtnSpan.textContent = isEn ? "Project Details" : "Detail Proyek";
          }
        }
      });

      const matches = cards.filter(
        (c) =>
          (filter === "all" || c.dataset["category"] === filter) &&
          (c.textContent || "").toLowerCase().includes(query),
      );

      const pages = Math.max(1, Math.ceil(matches.length / 4));
      page = Math.min(page, pages);
      cards.forEach((card) => {
        card.hidden = true;
      });
      (showAll ? matches : matches.slice((page - 1) * 4, page * 4)).forEach((c) =>
        (c.hidden = false),
      );

      all('#projects button[id^="filter-"]').forEach((b) =>
        selectButton(b, b.id === "filter-" + filter),
      );

      for (const n of [1, 2]) {
        const b = q<HTMLButtonElement>("#btn-project-page-" + n);
        if (b) {
          b.classList.toggle("hidden", n > pages);
          selectButton(b, n === page);
          b.disabled = showAll;
        }
      }

      const prev = q<HTMLButtonElement>("#btn-project-page-prev"),
        next = q<HTMLButtonElement>("#btn-project-page-next");
      if (prev) prev.disabled = showAll || page <= 1;
      if (next) next.disabled = showAll || page >= pages;

      setText(
        "toggle-all-projects-text",
        showAll
          ? (isEn ? "Show Less" : "Tampilkan Lebih Sedikit")
          : (isEn ? "Show All" : "Tampilkan Semua"),
      );

      let empty = q("[data-empty='projects']");
      if (!empty) {
        empty = document.createElement("p");
        empty.dataset["empty"] = "projects";
        empty.textContent = isEn ? "No projects found." : "Tidak ada proyek yang ditemukan.";
        q("#projects-grid")?.after(empty);
      } else {
        empty.textContent = isEn ? "No projects found." : "Tidak ada proyek yang ditemukan.";
      }
      empty.classList.toggle("hidden", matches.length > 0);
    };

    const updateProjectModalContent = (id: string) => {
      const d = projectData[id];
      if (!d) return;
      const isEn = currentLang === "en";

      setText("pm-title", isEn ? (d.titleEn || d.title) : d.title);
      setText("pm-badge-type", isEn ? (d.badgeTypeEn || d.badgeType) : d.badgeType);
      setText("pm-badge-status", isEn ? (d.badgeStatusEn || d.badgeStatus) : d.badgeStatus);
      setText("pm-period", isEn ? (d.periodEn || d.period) : d.period);
      setText("pm-institution-tag", isEn ? (d.institutionEn || d.institution) : d.institution);
      setText("pm-description", isEn ? (d.descEn || d.desc) : d.desc);

      const img = q<HTMLImageElement>("#pm-image");
      if (img) {
        img.src = d.img;
        img.alt = isEn ? (d.titleEn || d.title) : d.title;
      }

      const githubLink = q<HTMLAnchorElement>("#pm-github-link");
      if (githubLink) {
        githubLink.href = d.githubUrl || "https://github.com/HaikalAlbanna";
      }

      const demoLink = q<HTMLAnchorElement>("#pm-demo-link");
      if (demoLink) {
        if (d.demoUrl) {
          demoLink.href = d.demoUrl;
          demoLink.style.display = "inline-flex";
        } else {
          demoLink.style.display = "none";
        }
      }

      const featureList = isEn ? (d.featuresEn || d.features) : d.features;
      const features = q("#pm-features");
      if (features) {
        features.replaceChildren(
          ...featureList.map((f) => {
            const li = document.createElement("li");
            li.className = "flex items-start gap-2.5";
            const icon = document.createElement("span");
            icon.className = "material-symbols-outlined text-secondary text-base mt-1";
            icon.textContent = "done";
            const span = document.createElement("span");
            span.textContent = f;
            li.appendChild(icon);
            li.appendChild(span);
            return li;
          }),
        );
      }

      const tech = q("#pm-tech-stack");
      if (tech) {
        tech.replaceChildren(
          ...d.tech.map((t) => {
            const el = document.createElement("div");
            el.className =
              "p-3 rounded-lg border border-border-hairline bg-surface-subtle font-label-code-sm text-label-code-sm";
            const role = isEn ? (t.roleEn || t.role) : t.role;
            el.textContent = t.name + " · " + role;
            return el;
          }),
        );
      }
    };

    const close = () => {
      all("#project-modal,#certModal").forEach((m) => {
        m.classList.add("hidden");
        m.classList.remove("flex");
      });
      activeModalProjectId = null;
      document.body.style.overflow = "";
      lastFocus?.focus();
    };

    const open = (id: string) => {
      const m = q("#" + id);
      if (!m) return;
      lastFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      m.classList.remove("hidden");
      m.classList.add("flex");
      m.setAttribute("role", "dialog");
      m.setAttribute("aria-modal", "true");
      m.setAttribute("aria-labelledby", id === "project-modal" ? "pm-title" : "cert-modal-title");
      document.body.style.overflow = "hidden";
      m.querySelector<HTMLButtonElement>("button")?.focus();
    };

    all("img").forEach((el) => {
      const img = el as HTMLImageElement;
      const fallback = () => {
        img.classList.add("hidden");
        let alt = img.parentElement?.querySelector<HTMLElement>("[data-image-fallback]");
        if (!alt) {
          alt = document.createElement("div");
          alt.dataset["imageFallback"] = "true";
          alt.className = "image-fallback";
          alt.textContent = img.alt === "Haikal Tirta Albanna" ? "HTA" : img.alt;
          img.parentElement?.prepend(alt);
        }
      };
      img.addEventListener("error", fallback);
      img.addEventListener("load", () => {
        img.classList.remove("hidden");
        img.parentElement?.querySelector("[data-image-fallback]")?.remove();
      });
      if (img.complete && !img.naturalWidth) fallback();
    });

    const click = async (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const b = event.target.closest<HTMLElement>("[data-action]");
      if (!b) {
        if (event.target.matches("#project-modal,#certModal")) close();
        return;
      }
      const action = b.dataset["action"] || "";

      if (action.startsWith("setProjectFilter")) {
        filter = action.match(/'([^']+)'/)?.[1] || "all";
        page = 1;
        showAll = false;
        renderProjects();
      } else if (action.startsWith("changeProjectPage")) {
        page = Number(action.match(/\((\d)/)?.[1] || 1);
        showAll = false;
        renderProjects();
      } else if (action === "toggleAllProjects()") {
        showAll = !showAll;
        renderProjects();
      } else if (action.startsWith("openProjectModal")) {
        const id = action.match(/'([^']+)'/)?.[1];
        if (!id || !(id in projectData)) return;
        activeModalProjectId = id;
        updateProjectModalContent(id);
        open("project-modal");
      } else if (action.startsWith("openCertModal")) {
        const card = b.closest<HTMLElement>("#certificates .group");
        const preview = card?.querySelector<HTMLImageElement>("img");
        const imageUrl = preview?.getAttribute("src") || "";
        const secondPage = preview?.dataset["certImageTwo"] || "";
        const title = card?.querySelector("h3")?.textContent?.trim() || (currentLang === "en" ? "Certificate Document" : "Dokumen Sertifikat");
        const issuer =
          card?.querySelector(".certificate-issuer, div.text-secondary")?.textContent?.trim() || "";
        const date = card?.querySelector(".certificate-date")?.textContent?.trim() || "";

        certificateTitle = title;
        certificatePages = [imageUrl, secondPage].filter((pageUrl) => Boolean(pageUrl));
        certificatePageIndex = 0;

        setText("cert-modal-title", title);
        setText("cert-modal-issuer", issuer);
        setText("cert-modal-date", date);
        setText(
          "cert-modal-cred",
          certificatePages.length > 1
            ? (currentLang === "en" ? "Multi-Page Document" : "Dokumen Multi-Halaman")
            : title,
        );
        showCertificatePage();
        open("certModal");
      } else if (action === "certificate-page-previous") {
        certificatePageIndex = Math.max(0, certificatePageIndex - 1);
        showCertificatePage();
      } else if (action === "certificate-page-next") {
        certificatePageIndex = Math.min(certificatePages.length - 1, certificatePageIndex + 1);
        showCertificatePage();
      } else if (action === "showAllCertificates()" || action === "toggleAllCertificates()") {
        showAllCerts = !showAllCerts;
        renderCertificates();
        if (!showAllCerts) {
          q("#certificates")?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else if (action.startsWith("close")) close();
      else if (action.includes("classList.toggle('dark')"))
        document.documentElement.classList.toggle("dark");
      else if (action === "mobile-menu") {
        const nav = q("header nav");
        nav?.classList.toggle("mobile-open");
        b.setAttribute("aria-expanded", String(nav?.classList.contains("mobile-open")));
      } else if (action.startsWith("language-")) {
        const isEnglish = action === "language-en";
        currentLang = isEnglish ? "en" : "id";
        document.documentElement.lang = currentLang;

        translateDocumentText(isEnglish);
        renderProjects();
        renderCertificates();

        all('[data-action^="language-"]').forEach((el) => {
          const isSelected = el.dataset["action"] === action;
          el.classList.toggle("bg-primary", isSelected);
          el.classList.toggle("text-on-primary", isSelected);
          el.classList.toggle("font-semibold", isSelected);
          el.classList.toggle("shadow-sm", isSelected);
          el.classList.toggle("bg-surface-card", false);
          el.classList.toggle("text-primary", false);
          el.classList.toggle("text-on-surface-variant", !isSelected);
          el.classList.toggle("font-medium", !isSelected);
          el.setAttribute("aria-pressed", String(isSelected));
        });
      } else if (action.startsWith("navigator.clipboard")) {
        try {
          await navigator.clipboard.writeText("haikalalbanna2313@gmail.com");
          const icon = b.querySelector("span");
          if (icon) {
            icon.textContent = "done";
            setTimeout(() => {
              icon.textContent = "content_copy";
            }, 2000);
          }
        } catch {
          window.location.href = "mailto:haikalalbanna2313@gmail.com";
        }
      }
    };

    const input = (event: Event) => {
      if (!(event.target instanceof HTMLInputElement)) return;
      if (event.target.id === "project-search-input") {
        query = event.target.value.toLowerCase().trim();
        page = 1;
        renderProjects();
      }
    };

    const submit = (event: Event) => {
      if (!(event.target instanceof HTMLFormElement)) return;
      event.preventDefault();
      const data = new FormData(event.target);
      window.location.href = `mailto:haikalalbanna2313@gmail.com?subject=${encodeURIComponent(String(data.get("subject") || ""))}&body=${encodeURIComponent(`${data.get("message")}\n\n${data.get("name")}\n${data.get("email")}`)}`;
    };

    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "Tab") {
        const modal = all("#project-modal,#certModal").find((m) => !m.classList.contains("hidden"));
        if (!modal) return;
        const controls = Array.from(
          modal.querySelectorAll<HTMLElement>("button,a[href],input,textarea"),
        );
        const first = controls[0],
          last = controls.at(-1);
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    renderProjects();
    renderCertificates();

    root.addEventListener("click", click);
    root.addEventListener("input", input);
    root.addEventListener("submit", submit);
    document.addEventListener("keydown", keydown);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting)
            all("header nav a").forEach((a) => {
              const selected = a.getAttribute("href") === "#" + e.target.id;
              a.classList.toggle("bg-surface-subtle", selected);
              a.classList.toggle("font-semibold", selected);
              if (selected) a.setAttribute("aria-current", "location");
              else a.removeAttribute("aria-current");
            });
        });
      },
      { rootMargin: "-10% 0px -65% 0px" },
    );

    all("main section").forEach((s) => observer.observe(s));

    return () => {
      root.removeEventListener("click", click);
      root.removeEventListener("input", input);
      root.removeEventListener("submit", submit);
      document.removeEventListener("keydown", keydown);
      observer.disconnect();
      document.body.style.overflow = "";
    };
  }, [container]);
}
