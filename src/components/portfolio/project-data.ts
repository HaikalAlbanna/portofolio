export interface ProjectTech {
  name: string;
  role: string;
  roleEn?: string;
  icon: string;
}

export interface ProjectItem {
  title: string;
  titleEn?: string;
  badgeType: string;
  badgeTypeEn?: string;
  badgeStatus: string;
  badgeStatusEn?: string;
  period: string;
  periodEn?: string;
  img: string;
  institution: string;
  institutionEn?: string;
  githubUrl: string;
  demoUrl?: string;
  desc: string;
  descEn?: string;
  features: string[];
  featuresEn?: string[];
  tech: ProjectTech[];
}

export const projectData: Record<string, ProjectItem> = {
  "job-tracker": {
    title: "Job Tracker — Job Application Management System",
    titleEn: "Job Tracker — Job Application Management System",
    badgeType: "Personal Project",
    badgeTypeEn: "Personal Project",
    badgeStatus: "Web Application",
    badgeStatusEn: "Web Application",
    period: "September 2026",
    periodEn: "September 2026",
    img: "/project/job-tracker.png",
    institution: "Personal Project • Web Application",
    institutionEn: "Personal Project • Web Application",
    githubUrl: "https://github.com/HaikalAlbanna/job-application-tracker",
    demoUrl: "https://job-application-tracker-rose-sigma.vercel.app/auth/login",
    desc: "Aplikasi web yang dirancang untuk membantu mengelola dan memantau proses pencarian kerja secara terstruktur. Sistem ini memudahkan pengguna dalam mencatat lowongan pekerjaan, memantau status lamaran, menyimpan informasi perusahaan, serta mengorganisasi aktivitas rekrutmen dalam satu platform digital.",
    descEn: "A web application designed to manage and monitor job application processes in a structured manner. It enables users to record job openings, track application statuses, store company info, and organize recruitment activities in a single digital platform.",
    features: [
      "Pencatatan dan pengelolaan data lowongan pekerjaan.",
      "Pemantauan status lamaran, mulai dari proses melamar hingga tahapan seleksi.",
      "Pengelolaan informasi perusahaan dan posisi yang dilamar.",
      "Dashboard untuk memantau perkembangan proses pencarian kerja.",
      "Antarmuka yang responsif dan mudah digunakan.",
    ],
    featuresEn: [
      "Recording and management of job vacancy data.",
      "Application status tracking, from applying to selection stages.",
      "Management of company info and applied positions.",
      "Dashboard for monitoring job search progress.",
      "Responsive and user-friendly interface.",
    ],
    tech: [
      {
        name: "React.js",
        role: "Pengembangan UI",
        roleEn: "UI Development",
        icon: "devices",
      },
      {
        name: "TypeScript",
        role: "Logika & State",
        roleEn: "Logic & State",
        icon: "code",
      },
      {
        name: "Tailwind CSS",
        role: "Desain UI",
        roleEn: "UI Design",
        icon: "palette",
      },
      {
        name: "Supabase / SQL",
        role: "Penyimpanan Data",
        roleEn: "Data Storage",
        icon: "database",
      },
    ],
  },
  "agenda-surat": {
    title: "Buku Agenda Surat Digital - Balai Pemasyarakatan OKU Induk",
    titleEn: "Digital Mail Agenda Book - Balai Pemasyarakatan OKU Induk",
    badgeType: "Internal System",
    badgeTypeEn: "Internal System",
    badgeStatus: "Production",
    badgeStatusEn: "Production",
    period: "Desember 2025 – Juni 2026",
    periodEn: "DEC 2024 - JUNE 2025",
    img: "/project/buku-agenda.png",
    institution: "Production Deployment • Kemenimipas RI",
    institutionEn: "Production Deployment • Kemenimipas RI",
    githubUrl: "https://github.com/HaikalAlbanna/buku_agenda",
    demoUrl: "https://buku-agenda-xi.vercel.app/login",
    desc: "Aplikasi web Buku Agenda Surat Digital yang dikembangkan untuk mendukung pengelolaan administrasi persuratan di lingkungan Balai Pemasyarakatan Kelas II OKU Induk. Sistem ini dirancang untuk mempermudah pencatatan agenda surat, pengelolaan data persuratan, serta penyajian informasi secara digital agar proses administrasi menjadi lebih terstruktur dan efisien.",
    descEn: "Digital Mail Agenda Book web application developed to support mail administration management at Balai Pemasyarakatan Class II OKU Induk. Designed to streamline mail logging, correspondence data management, and digital information presentation for structured and efficient administrative workflows.",
    features: [
      "Pencatatan dan pengelolaan data agenda surat secara digital.",
      "Antarmuka web yang responsif dan mudah digunakan.",
      "Penyajian informasi agenda surat secara terstruktur.",
      "Digitalisasi proses administrasi untuk mendukung pengelolaan dokumen dan pencatatan persuratan.",
    ],
    featuresEn: [
      "Digital recording and management of mail agenda data.",
      "Responsive and easy-to-use web interface.",
      "Structured presentation of mail agenda information.",
      "Administrative digitalization supporting document management and correspondence tracking.",
    ],
    tech: [
      {
        name: "React.js",
        role: "Frontend SPA",
        roleEn: "Frontend SPA",
        icon: "devices",
      },
      {
        name: "TypeScript",
        role: "Type Safety",
        roleEn: "Type Safety",
        icon: "code",
      },
      {
        name: "Tailwind CSS",
        role: "Styling",
        roleEn: "Styling",
        icon: "palette",
      },
      {
        name: "Node.js",
        role: "REST Service",
        roleEn: "REST Service",
        icon: "dns",
      },
      {
        name: "MySQL",
        role: "ACID RDBMS",
        roleEn: "ACID RDBMS",
        icon: "database",
      },
    ],
  },
  "landingpage-bapas": {
    title: "Landing Page — Balai Pemasyarakatan OKU Induk",
    titleEn: "Landing Page — Balai Pemasyarakatan OKU Induk",
    badgeType: "Internal System",
    badgeTypeEn: "Internal System",
    badgeStatus: "Private System",
    badgeStatusEn: "Private System",
    period: "Desember 2025 – Juni 2026",
    periodEn: "December 2025 – June 2026",
    img: "/project/landingpage-bapas.png",
    institution: "KEMENIMIPAS RI • BAPAS KELAS II OKU INDUK",
    institutionEn: "KEMENIMIPAS RI • BAPAS CLASS II OKU INDUK",
    githubUrl: "https://github.com/HaikalAlbanna/Landingpage-BAPAS",
    desc: "Website landing page yang dikembangkan untuk Balai Pemasyarakatan Kelas II OKU Induk sebagai sarana penyampaian informasi dan pengenalan instansi secara digital. Website dirancang dengan tampilan yang modern, informatif, dan responsif untuk memudahkan pengunjung mengakses informasi mengenai profil, layanan, serta kegiatan instansi.",
    descEn: "Landing page website developed for Balai Pemasyarakatan Class II OKU Induk as a digital medium for institutional information delivery and profile presentation. Designed with a modern, informative, and responsive layout for easy visitor access to agency profiles, services, and activities.",
    features: [
      "Tampilan landing page yang modern dan responsif.",
      "Navigasi antarmuka untuk memudahkan akses informasi.",
      "Penyajian informasi profil dan kegiatan instansi.",
      "Desain antarmuka yang disesuaikan dengan identitas instansi.",
      "Animasi dan efek transisi untuk meningkatkan pengalaman pengguna.",
    ],
    featuresEn: [
      "Modern and responsive landing page interface.",
      "Intuitive UI navigation for convenient information access.",
      "Presentation of institutional profile and activity details.",
      "UI design tailored to institutional identity.",
      "Smooth animations and transition effects for enhanced user experience.",
    ],
    tech: [
      {
        name: "React.js",
        role: "Pengembangan UI",
        roleEn: "UI Development",
        icon: "devices",
      },
      {
        name: "JavaScript",
        role: "Interaktivitas & Logika",
        roleEn: "Interactivity & Logic",
        icon: "code",
      },
      {
        name: "CSS",
        role: "Styling & Responsive",
        roleEn: "Styling & Responsive",
        icon: "palette",
      },
      {
        name: "JSON",
        role: "Pengelolaan Konten",
        roleEn: "Content Management",
        icon: "description",
      },
      {
        name: "AOS",
        role: "Animate On Scroll",
        roleEn: "Animate On Scroll",
        icon: "animation",
      },
    ],
  },
};
