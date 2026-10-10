import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { usePortfolioInteractions } from "./use-portfolio-interactions";
export function PortfolioPage() {
  const container = useRef<HTMLDivElement>(null);
  usePortfolioInteractions(container);
  return (
    <div ref={container}>
      <header className="fixed top-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-border-hairline">
        <div className="h-16 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 shrink-0">
            <a
              className="font-label-code-md text-label-code-md font-semibold text-primary tracking-tight hover:opacity-80 transition-opacity"
              data-path="overview"
              href="#home"
            >
              {"<Haikal.dev />"}
            </a>
            <div className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded border border-border-hairline bg-surface-subtle text-secondary font-label-code-sm text-label-code-sm font-medium">
              <span className="text-outline-variant font-mono">{"["}</span>
              <span className="tracking-wide uppercase text-primary font-semibold">
                {"Open for Work"}
              </span>
              <span className="text-outline-variant font-mono">{"]"}</span>
            </div>
          </div>
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2 justify-center flex-1"
            data-active-classes="bg-surface-subtle text-primary font-semibold rounded-lg"
          >
            <a
              aria-current="page"
              className="px-3 py-1.5 transition-colors bg-surface-subtle text-primary font-semibold rounded-lg"
              data-path="overview"
              href="#home"
            >
              {"Home"}
            </a>
            <a
              className="px-3 py-1.5 font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-subtle hover:text-on-surface transition-colors rounded-lg"
              data-path="about"
              href="#about"
            >
              {"About"}
            </a>
            <a
              className="px-3 py-1.5 font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-subtle hover:text-on-surface transition-colors rounded-lg"
              data-path="skills"
              href="#skills"
            >
              {"Skills"}
            </a>
            <a
              className="px-3 py-1.5 font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-subtle hover:text-on-surface transition-colors rounded-lg"
              data-path="projects"
              href="#projects"
            >
              {"Projects"}
            </a>
            <a
              className="px-3 py-1.5 font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-subtle hover:text-on-surface transition-colors rounded-lg"
              data-path="experience"
              href="#experience"
            >
              {"Experience"}
            </a>
            <a
              className="px-3 py-1.5 font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-subtle hover:text-on-surface transition-colors rounded-lg"
              data-path="certificates"
              href="#certificates"
            >
              {"Certificates"}
            </a>
            <a
              className="px-3 py-1.5 font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-subtle hover:text-on-surface transition-colors rounded-lg"
              data-path="contact"
              href="#contact"
            >
              {"Contact"}
            </a>
          </nav>
          <div className="flex items-center gap-2 shrink-0">
            <div className="inline-flex items-center p-1 rounded-lg border border-border-hairline bg-surface-subtle font-label-code-sm text-label-code-sm">
              <Button
                variant="portfolio"
                size="reference"
                className="px-2 py-1 rounded bg-surface-card text-primary font-semibold shadow-sm transition-all flex items-center gap-1"
                data-action="language-id"
              >
                <span className="material-symbols-outlined text-xs">{"language"}</span>
                <span className="">{"ID"}</span>
              </Button>
              <Button
                variant="portfolio"
                size="reference"
                className="px-2 py-1 rounded text-on-surface-variant hover:text-primary transition-colors font-medium"
                data-action="language-en"
              >
                {"EN"}
              </Button>
            </div>
            <Button
              variant="portfolio"
              size="reference"
              aria-label="Toggle dark mode"
              className="w-9 h-9 rounded-lg border border-border-hairline bg-surface-card hover:bg-surface-subtle text-on-surface-variant hover:text-primary flex items-center justify-center transition-colors shadow-sm"
              title="Toggle Dark / Light Mode"
              data-action="document.documentElement.classList.toggle('dark')"
            >
              <span className="material-symbols-outlined text-lg">{"dark_mode"}</span>
            </Button>
            <Button
              variant="portfolio"
              size="reference"
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-border-hairline bg-surface-card"
              aria-label="Open navigation"
              data-action="mobile-menu"
            >
              <span className="material-symbols-outlined text-lg">{"menu"}</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="w-full pt-16 bg-surface min-h-[calc(100vh-160px)]">
        <div className="flex flex-col w-full">
          <section className="w-full py-16 lg:py-24 max-w-7xl mx-auto px-6 lg:px-12" id="home">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              <div className="lg:col-span-7 flex flex-col items-start gap-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-border-hairline bg-surface-subtle font-label-code-sm text-label-code-sm">
                  <span className="material-symbols-outlined text-secondary text-sm">{"work"}</span>
                  <span className="text-primary font-semibold tracking-tight uppercase">
                    {"STATUS: AVAILABLE FOR WORK"}
                  </span>
                  <span className="text-outline-variant">{"—"}</span>
                  <span className="text-on-surface-variant font-normal">{"PALEMBANG, ID"}</span>
                </div>

                <div className="flex items-center gap-2 text-secondary font-label-code-md text-label-code-md tracking-wider uppercase font-semibold">
                  <span className="text-outline-variant">{">"}</span>
                  <span className="">{"FULL-STACK DEVELOPER & DATA ANALYST"}</span>
                </div>

                <h1 className="font-display text-headline-lg lg:text-display text-primary tracking-tight font-bold leading-tight">
                  {"\n          Membangun Solusi Digital yang "}
                  <span className="underline decoration-secondary decoration-4 underline-offset-8">
                    {"Efisien"}
                  </span>
                  {", Terstruktur & Bernilai Nyata.\n        "}
                </h1>

                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                  {
                    "\n          Selamat datang di portofolio pribadi saya! Saya merupakan seorang Full-Stack Developer dan Data Analyst yang berfokus pada pengembangan sistem web terintegrasi, manajemen basis data, serta transformasi digital institusi. Siap berkontribusi dalam tim engineering profesional.\n        "
                  }
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2 w-full">
                  <a
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-on-primary rounded-lg font-body-md text-body-md font-medium hover:bg-primary-container transition-all shadow-sm"
                    href="#projects"
                  >
                    <span className="">{"Lihat Proyek"}</span>
                    <span className="material-symbols-outlined text-sm">{"arrow_forward"}</span>
                  </a>
                  <a
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-surface-card border border-border-hairline text-on-surface rounded-lg font-body-md text-body-md font-medium hover:bg-surface-subtle transition-all shadow-sm"
                    href="#contact"
                  >
                    <span className="material-symbols-outlined text-sm">{"description"}</span>
                    <span className="">{"Minta CV"}</span>
                  </a>
                  <div className="flex items-center gap-2 ml-auto lg:ml-2">
                    <a
                      className="p-2.5 rounded-lg border border-border-hairline bg-surface-card hover:bg-surface-subtle text-on-surface-variant hover:text-primary transition-colors"
                      href="https://github.com"
                      rel="noreferrer"
                      target="_blank"
                      title="GitHub Profile"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path>
                      </svg>
                    </a>
                    <a
                      className="p-2.5 rounded-lg border border-border-hairline bg-surface-card hover:bg-surface-subtle text-on-surface-variant hover:text-primary transition-colors"
                      href="https://linkedin.com"
                      rel="noreferrer"
                      target="_blank"
                      title="LinkedIn Profile"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                      </svg>
                    </a>
                    <a
                      className="p-2.5 rounded-lg border border-border-hairline bg-surface-card hover:bg-surface-subtle text-on-surface-variant hover:text-primary transition-colors"
                      href="mailto:haikalalbanna2313@gmail.com"
                      title="Email Direct"
                    >
                      <span className="material-symbols-outlined text-xl">{"mail"}</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
                <div className="relative w-full max-w-md bg-surface-card p-4 rounded-xl border border-border-hairline shadow-md">
                  <div className="flex items-center justify-between pb-3 border-b border-border-hairline mb-4 font-label-code-sm text-label-code-sm text-on-surface-variant">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-outline-variant/60"></span>
                      <span className="w-3 h-3 rounded-full bg-outline-variant/60"></span>
                      <span className="w-3 h-3 rounded-full bg-outline-variant/60"></span>
                    </div>
                    <span className="font-mono text-outline font-medium">
                      {"<Haikal_Profile.vue />"}
                    </span>
                    <span className="text-secondary font-mono">{"STATUS: 200 OK"}</span>
                  </div>

                  <div className="relative w-full h-[420px] rounded-lg overflow-hidden bg-surface-container">
                    <img
                      alt="Haikal Tirta Albanna"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                      src="https://lh3.googleusercontent.com/aida/AEtjO1W6NC-CBzOt0fZE2noq6C5mXMq2NrWyDakH5ARRluFlfFeaEvEB5pR8vit4fLUZchMSIjPWEpKG780K4xPAzznm66Lf3UgFiflW3ksHVtD3eudsCFHQk9COf3Pkoq2so3pQlooA2evMmtuhzgNP_mBEUqzRZGfYkFw4oAw9ZKNjmxILchUS_UadOXMxSsTQlVxRFNTpJDDSijf1tuJFw-2EJtnHbH_PYlvMzTJ4h-kbsiWDFDvKJOTs0ms"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>

                    <div className="absolute bottom-4 left-4 right-4 text-on-primary">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-headline-sm text-headline-sm font-semibold">
                          {"Haikal Tirta Albanna"}
                        </span>
                        <span
                          className="material-symbols-outlined text-secondary-fixed text-lg"
                          title="Verified Graduate"
                        >
                          {"verified"}
                        </span>
                      </div>
                      <p className="font-label-code-sm text-label-code-sm text-surface-container-highest">
                        {"Informatika • S.Kom (Cum Laude)"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="w-full py-16 bg-surface-canvas border-y border-border-hairline"
            id="about"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="flex flex-col gap-2 mb-12">
                <div className="flex items-center gap-2 text-secondary font-label-code-md text-label-code-md font-semibold">
                  <span className="">{"01."}</span>
                  <span className="">{"TENTANG SAYA"}</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
                  {
                    "\n          Mendedikasikan keterampilan teknologi untuk efisiensi sistem nyata.\n        "
                  }
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6 bg-surface-card p-8 rounded-xl border border-border-hairline shadow-sm flex flex-col justify-between h-full">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-surface-subtle flex items-center justify-center text-primary mb-6">
                      <span className="material-symbols-outlined text-2xl">{"terminal"}</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary font-semibold mb-4">
                      {"\n              Latar Belakang & Filosofi Rekayasa\n            "}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
                      {
                        "\n              Saya adalah lulusan Sarjana Komputer (S1) Teknik Informatika dari "
                      }
                      <strong>{"Universitas Bina Darma"}</strong>
                      {" dengan predikat "}
                      <strong>{"Cum Laude (IPK 3.83)"}</strong>
                      {
                        " dan peminatan Analisis Data. Sepanjang perjalanan akademis dan profesional, saya konsisten menggabungkan ketelitian data dengan kepraktisan rekayasa perangkat lunak.\n            "
                      }
                    </p>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {
                        "\n              Fokus utama saya bertumpu pada pembangunan sistem web yang terstruktur rapi, efisien, aman, serta memiliki reliabilitas tinggi. Saya berpengalaman menangani digitalisasi alur kerja dokumen pada instansi pemerintahan serta merancang antarmuka ramah pengguna yang terhubung langsung ke basis data terpusat.\n            "
                      }
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-border-hairline flex items-center justify-between font-label-code-sm text-label-code-sm text-on-surface-variant">
                    <span className="">{"LOCATION: PALEMBANG, SUMSEL"}</span>
                    <span className="text-secondary font-semibold">{"AVAILABLE_IMMEDIATELY"}</span>
                  </div>
                </div>

                <div className="lg:col-span-6 flex flex-col gap-4">
                  <div className="bg-surface-card p-6 rounded-xl border border-border-hairline shadow-sm hover:border-outline-variant transition-colors flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-tech-badge-cyan-bg text-tech-badge-cyan flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-2xl">{"school"}</span>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-title-md text-title-md text-primary font-semibold">
                          {"Pendidikan Formal"}
                        </h4>
                        <span className="font-label-code-sm text-label-code-sm px-2 py-0.5 rounded bg-surface-subtle text-primary">
                          {"2020 - 2024"}
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {
                          "\n                S1 Teknik Informatika, Universitas Bina Darma. Lulus dengan predikat "
                        }
                        <strong>{"Cum Laude (IPK 3.83)"}</strong>
                        {
                          ". Fokus skripsi dan riset pada optimalisasi data serta rancang bangun sistem berbasis web.\n              "
                        }
                      </p>
                    </div>
                  </div>

                  <div className="bg-surface-card p-6 rounded-xl border border-border-hairline shadow-sm hover:border-outline-variant transition-colors flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary-container/40 text-secondary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-2xl">{"code_blocks"}</span>
                    </div>
                    <div>
                      <h4 className="font-title-md text-title-md text-primary font-semibold mb-1">
                        {"Komitmen Kualitas & Clean Code"}
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {
                          "\n                Mengutamakan keterbacaan kode (clean architecture), integritas skema database relasional (ACID), penerapan REST API terstandarisasi, dan optimasi performa rendering web.\n              "
                        }
                      </p>
                    </div>
                  </div>

                  <div className="bg-surface-card p-6 rounded-xl border border-border-hairline shadow-sm hover:border-outline-variant transition-colors flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-2xl">{"domain"}</span>
                    </div>
                    <div>
                      <h4 className="font-title-md text-title-md text-primary font-semibold mb-1">
                        {"Pengalaman Nyata Institusi"}
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {
                          "\n                Berkontribusi aktif dalam digitalisasi sistem administrasi pada instansi kementerian dan kelembagaan negara, termasuk LLDIKTI Wilayah II dan BAPAS Kelas II OKU Induk Kemenimipas RI.\n              "
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full py-16 max-w-7xl mx-auto px-6 lg:px-12" id="skills">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-secondary font-label-code-md text-label-code-md font-semibold">
                  <span className="">{"02."}</span>
                  <span className="">{"KEAHLIAN TEKNOLOGI & TECH ARSENAL"}</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-primary font-bold tracking-tight">
                  {
                    "Instrumen modern untuk arsitektur frontend, backend, database, dan alat pendukung."
                  }
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-surface-card rounded-xl border border-border-hairline p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                  <div className="space-y-5">
                    <div className="flex items-center justify-between pb-4 border-b border-border-hairline gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-surface-subtle text-primary flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-2xl">{"devices"}</span>
                        </div>
                        <div>
                          <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                            {"Frontend"}
                          </h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                            {"Antarmuka web interaktif & responsif"}
                          </p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-surface-subtle font-label-code-sm text-label-code-sm text-primary font-mono font-medium border border-border-hairline shrink-0">
                        {"8 TEKNOLOGI"}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="p-2.5 rounded-lg border border-border-hairline bg-surface-subtle hover:bg-surface-card transition-all flex items-center gap-2.5">
                        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                          <path d="M3 2l1.8 20.2 7.2 2 7.2-2L21 2H3z" fill="#E44D26"></path>
                          <path d="M12 22.1l5.7-1.6 1.5-16.5H12v18.1z" fill="#F16529"></path>
                          <path
                            d="M12 11.2H8.3l-.2-2.7h7.8l.2-2.7H5.2l.8 8.1H12v-2.7z"
                            fill="#EBEBEB"
                          ></path>
                          <path
                            d="M12 16.5l-3.3-.9-.2-2.3H5.8l.4 4.5 5.8 1.6V16.5zm0-5.3h3.7l-.3 3.6-3.4.9V13.8h.1z"
                            fill="#fff"
                          ></path>
                        </svg>
                        <div className="truncate">
                          <div className="font-label-code-md text-label-code-md font-semibold text-primary truncate">
                            {"HTML"}
                          </div>
                          <span className="font-label-code-sm text-[10px] text-outline block truncate">
                            {"HTML5 / Semantic"}
                          </span>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-lg border border-border-hairline bg-surface-subtle hover:bg-surface-card transition-all flex items-center gap-2.5">
                        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                          <path d="M3 2l1.8 20.2 7.2 2 7.2-2L21 2H3z" fill="#1572B6"></path>
                          <path d="M12 22.1l5.7-1.6 1.5-16.5H12v18.1z" fill="#33A9DC"></path>
                          <path
                            d="M12 11.2h3.7l.3-3.2H8.3l-.3 2.7h7.8l-.3 3.2H8.3l.2 2.7h7.6l-.3 3.3-3.8 1-3.8-1-.2-2.3H6.2l.4 4.5 5.4 1.5 5.4-1.5 1-11H8.6l.2-2.2H12v-3.4z"
                            fill="#fff"
                          ></path>
                        </svg>
                        <div className="truncate">
                          <div className="font-label-code-md text-label-code-md font-semibold text-primary truncate">
                            {"CSS"}
                          </div>
                          <span className="font-label-code-sm text-[10px] text-outline block truncate">
                            {"CSS3 / Layouts"}
                          </span>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-lg border border-border-hairline bg-surface-subtle hover:bg-surface-card transition-all flex items-center gap-2.5">
                        <svg className="w-5 h-5 shrink-0 rounded" viewBox="0 0 630 630">
                          <rect fill="#F7DF1E" height="630" width="630"></rect>
                          <path d="m165.65 526.4c21.21 12.02 43.7 21.32 70.4 21.32 41.08 0 66.82-18.42 66.82-58.43v-237.5h-50.04v238.6c0 23.36-12.82 34.6-34.6 34.6-17.67 0-31.2-7.07-40.42-14.77zm198.8 18.42c26.16 14.15 60.1 22.98 90.5 22.98 52.34 0 86.27-25.1 86.27-69.65 0-38.2-22.63-57.65-64.35-75.32l-15.56-6.36c-24.04-10.25-37.47-18.38-37.47-34.65 0-14.5 11.31-25.1 31.82-25.1 19.1 0 32.53 6.72 41.72 13.08l17.68-29.7c-13.8-9.9-34.3-17.3-59.4-17.3-50.2 0-80.6 27.2-80.6 67.2 0 37.1 22.6 57.3 60.8 73.2l15.56 6.72c26.17 11.31 39.95 20.15 39.95 37.83 0 17.32-14.5 27.23-38.54 27.23-26.17 0-44.55-10.6-56.9-19.8z"></path>
                        </svg>
                        <div className="truncate">
                          <div className="font-label-code-md text-label-code-md font-semibold text-primary truncate">
                            {"JavaScript"}
                          </div>
                          <span className="font-label-code-sm text-[10px] text-outline block truncate">
                            {"ES6+ Standard"}
                          </span>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-lg border border-border-hairline bg-surface-subtle hover:bg-surface-card transition-all flex items-center gap-2.5">
                        <svg className="w-5 h-5 shrink-0 rounded" viewBox="0 0 128 128">
                          <rect fill="#3178C6" height="128" width="128"></rect>
                          <path
                            d="M70.9 92.5c4.9 2.8 10.6 4.4 16.5 4.4 12.2 0 19.3-6.1 19.3-15.6 0-8.9-6-13.6-17.1-18.4l-5.6-2.5c-7.3-3.2-11.2-6.9-11.2-13.2 0-7.8 6.4-13.3 16.5-13.3 5.4 0 10.1 1.3 14.2 3.6l-3.3 10.6c-3.4-1.8-7.3-2.8-11.1-2.8-5.3 0-8.7 2.8-8.7 6.6 0 4.2 3.5 6.9 11.7 10.5l5.2 2.3c11 4.8 17.6 9.8 17.6 19.4 0 11.2-8.9 17.8-23.7 17.8-6.9 0-13.5-1.7-18.9-4.8l2.9-11.4zM24 45.4h37.7v11H43.9v48.1H29.8V56.4H24v-11z"
                            fill="#fff"
                          ></path>
                        </svg>
                        <div className="truncate">
                          <div className="font-label-code-md text-label-code-md font-semibold text-primary truncate">
                            {"TypeScript"}
                          </div>
                          <span className="font-label-code-sm text-[10px] text-outline block truncate">
                            {"Typed Strict"}
                          </span>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-lg border border-border-hairline bg-surface-subtle hover:bg-surface-card transition-all flex items-center gap-2.5">
                        <svg className="w-5 h-5 shrink-0" viewBox="0 0 115.3 100">
                          <path
                            d="M57.65 65.5A15.5 15.5 0 1 0 57.65 34.5A15.5 15.5 0 1 0 57.65 65.5Z"
                            fill="#087ea4"
                          ></path>
                          <path
                            d="M57.65 15C81 15 100 30.7 100 50C100 69.3 81 85 57.65 85C34.3 85 15.3 69.3 15.3 50C15.3 30.7 34.3 15 57.65 15Z"
                            fill="none"
                            stroke="#087ea4"
                            strokeWidth="4.5"
                          ></path>
                          <path
                            d="M57.65 15C81 15 100 30.7 100 50C100 69.3 81 85 57.65 85C34.3 85 15.3 69.3 15.3 50C15.3 30.7 34.3 15 57.65 15Z"
                            fill="none"
                            stroke="#087ea4"
                            strokeWidth="4.5"
                            transform="rotate(60 57.65 50)"
                          ></path>
                          <path
                            d="M57.65 15C81 15 100 30.7 100 50C100 69.3 81 85 57.65 85C34.3 85 15.3 69.3 15.3 50C15.3 30.7 34.3 15 57.65 15Z"
                            fill="none"
                            stroke="#087ea4"
                            strokeWidth="4.5"
                            transform="rotate(120 57.65 50)"
                          ></path>
                        </svg>
                        <div className="truncate">
                          <div className="font-label-code-md text-label-code-md font-semibold text-primary truncate">
                            {"React"}
                          </div>
                          <span className="font-label-code-sm text-[10px] text-outline block truncate">
                            {"React.js / SPA"}
                          </span>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-lg border border-border-hairline bg-surface-subtle hover:bg-surface-card transition-all flex items-center gap-2.5">
                        <svg className="w-5 h-5 shrink-0" fill="#38bdf8" viewBox="0 0 24 24">
                          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
                        </svg>
                        <div className="truncate">
                          <div className="font-label-code-md text-label-code-md font-semibold text-primary truncate">
                            {"Tailwind"}
                          </div>
                          <span className="font-label-code-sm text-[10px] text-outline block truncate">
                            {"Tailwind CSS"}
                          </span>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-lg border border-border-hairline bg-surface-subtle hover:bg-surface-card transition-all flex items-center gap-2.5">
                        <svg className="w-5 h-5 shrink-0" fill="#FF2D20" viewBox="0 0 24 24">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <div className="truncate">
                          <div className="font-label-code-md text-label-code-md font-semibold text-primary truncate">
                            {"Blade"}
                          </div>
                          <span className="font-label-code-sm text-[10px] text-outline block truncate">
                            {"Laravel Engine"}
                          </span>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-lg border border-border-hairline bg-surface-subtle hover:bg-surface-card transition-all flex items-center gap-2.5">
                        <svg className="w-5 h-5 shrink-0" viewBox="0 0 512 512">
                          <path
                            d="M414.11 24C468.18 24 512 67.82 512 121.89v268.22C512 444.18 468.18 488 414.11 488H97.89C43.82 488 0 444.18 0 390.11V121.89C0 67.82 43.82 24 97.89 24h316.22z"
                            fill="#7952B3"
                          ></path>
                          <path
                            d="M290.7 325.2c19.7 0 34.6-4.7 44.8-14.1 10.1-9.4 15.2-22.3 15.2-38.6 0-14.7-4.4-26.6-13.3-35.6-8.9-9-21.7-14.3-38.5-16v-1.6c13.7-2.7 24.3-7.9 31.9-15.6 7.6-7.7 11.4-17.7 11.4-30 0-14.3-4.8-25.7-14.4-34.2-9.6-8.5-23.5-12.8-41.6-12.8h-99.3v198.5h103.8zm-65.7-162.2h47.3c10.4 0 18.2 2.1 23.3 6.3 5.1 4.2 7.7 10.4 7.7 18.6 0 8.1-2.7 14.3-8.2 18.6-5.5 4.3-13.6 6.4-24.4 6.4h-45.7v-49.9zm0 82.7h52.8c11.7 0 20.5 2.5 26.5 7.4 6 5 9 12.1 9 21.4 0 9.8-3.1 17.3-9.4 22.5-6.3 5.2-15.7 7.8-28.2 7.8H225v-59.1z"
                            fill="#fff"
                          ></path>
                        </svg>
                        <div className="truncate">
                          <div className="font-label-code-md text-label-code-md font-semibold text-primary truncate">
                            {"Bootstrap"}
                          </div>
                          <span className="font-label-code-sm text-[10px] text-outline block truncate">
                            {"Responsive UI"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 pt-3 border-t border-border-hairline flex items-center justify-between font-label-code-sm text-label-code-sm text-on-surface-variant">
                    <span className="">{"CLIENT SIDE"}</span>
                    <span className="text-secondary font-semibold">{"MODERN UI/UX"}</span>
                  </div>
                </div>

                <div className="bg-surface-card rounded-xl border border-border-hairline p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                  <div className="space-y-5">
                    <div className="flex items-center justify-between pb-4 border-b border-border-hairline gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-surface-subtle text-primary flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-2xl">{"dns"}</span>
                        </div>
                        <div>
                          <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                            {"Backend"}
                          </h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                            {"Logika bisnis, REST API & deployment"}
                          </p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-surface-subtle font-label-code-sm text-label-code-sm text-primary font-mono font-medium border border-border-hairline shrink-0">
                        {"5 STACK"}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="p-2.5 rounded-lg border border-border-hairline bg-surface-subtle hover:bg-surface-card transition-all flex items-center gap-2.5">
                        <svg className="w-5 h-5 shrink-0" viewBox="0 0 128 128">
                          <ellipse cx="64" cy="64" fill="#777BB4" rx="60" ry="36"></ellipse>
                          <path
                            d="M48.2 50.8c2.9-5.1 7.8-8.2 13.6-8.2 8.7 0 14.8 6.4 14.8 15.5 0 9.8-6.5 16.5-15.8 16.5-4.1 0-7.7-1.5-10-4.1l-4.7 13.9H34.4l13.8-33.6zm13.1 14.9c3.8 0 6.6-2.9 6.6-7.3 0-4.2-2.5-7-6.2-7-3.9 0-6.8 3.1-6.8 7.3 0 4.2 2.8 7 6.4 7zm32.8-14.9c2.9-5.1 7.8-8.2 13.6-8.2 8.7 0 14.8 6.4 14.8 15.5 0 9.8-6.5 16.5-15.8 16.5-4.1 0-7.7-1.5-10-4.1l-4.7 13.9H80.5l13.8-33.6zm13.1 14.9c3.8 0 6.6-2.9 6.6-7.3 0-4.2-2.5-7-6.2-7-3.9 0-6.8 3.1-6.8 7.3 0 4.2 2.8 7 6.4 7zM18.8 64.4c0-4.1 2.3-6.9 5.8-6.9 3.5 0 5.8 2.8 5.8 6.9 0 4.1-2.3 6.9-5.8 6.9-3.5 0-5.8-2.8-5.8-6.9z"
                            fill="#fff"
                          ></path>
                        </svg>
                        <div className="truncate">
                          <div className="font-label-code-md text-label-code-md font-semibold text-primary truncate">
                            {"PHP"}
                          </div>
                          <span className="font-label-code-sm text-[10px] text-outline block truncate">
                            {"PHP 8.x / OOP"}
                          </span>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-lg border border-border-hairline bg-surface-subtle hover:bg-surface-card transition-all flex items-center gap-2.5">
                        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                          <path
                            d="M22.25 15.34l-3.32 1.92-5.74-3.31v-2.3l4.74 2.73 3.32-1.92-6.73-3.88-6.74 3.88v7.76l6.74 3.89 8.73-5.04v-3.73zM9.75 16.53v-3.92l3.41-1.97v3.92l-3.41 1.97zM2 8.66l6.74-3.89 6.73 3.89-3.32 1.91-3.41-1.97-4.74 2.74v2.3l5.74-3.32 3.32 1.92L6.74 15.14 2 12.4V8.66z"
                            fill="#FF2D20"
                          ></path>
                        </svg>
                        <div className="truncate">
                          <div className="font-label-code-md text-label-code-md font-semibold text-primary truncate">
                            {"Laravel"}
                          </div>
                          <span className="font-label-code-sm text-[10px] text-outline block truncate">
                            {"Laravel 11 / MVC"}
                          </span>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-lg border border-border-hairline bg-surface-subtle hover:bg-surface-card transition-all flex items-center gap-2.5">
                        <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 109 113">
                          <path
                            d="M63.7 110.3c-2.7 3.6-8.5 1.7-8.5-2.8V68.9H12.9c-4.4 0-6.9-5-4.2-8.5l45.3-57.5c2.7-3.6 8.5-1.7 8.5 2.8v38.6h42.3c4.4 0 6.9 5 4.2 8.5L63.7 110.3z"
                            fill="#3ECF8E"
                          ></path>
                        </svg>
                        <div className="truncate">
                          <div className="font-label-code-md text-label-code-md font-semibold text-primary truncate">
                            {"Supabase"}
                          </div>
                          <span className="font-label-code-sm text-[10px] text-outline block truncate">
                            {"BaaS & Auth"}
                          </span>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-lg border border-border-hairline bg-surface-subtle hover:bg-surface-card transition-all flex items-center gap-2.5">
                        <svg
                          className="w-5 h-5 shrink-0 fill-current text-primary"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 22.525H0l12-21.05 12 21.05z"></path>
                        </svg>
                        <div className="truncate">
                          <div className="font-label-code-md text-label-code-md font-semibold text-primary truncate">
                            {"Vercel"}
                          </div>
                          <span className="font-label-code-sm text-[10px] text-outline block truncate">
                            {"Cloud & Edge"}
                          </span>
                        </div>
                      </div>
                      <div className="col-span-2 p-2.5 rounded-lg border border-border-hairline bg-surface-subtle hover:bg-surface-card transition-all flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-secondary text-xl shrink-0">
                          {"api"}
                        </span>
                        <div className="truncate">
                          <div className="font-label-code-md text-label-code-md font-semibold text-primary truncate">
                            {"REST API"}
                          </div>
                          <span className="font-label-code-sm text-[10px] text-outline block truncate">
                            {"Standardized JSON & Endpoints"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 pt-3 border-t border-border-hairline flex items-center justify-between font-label-code-sm text-label-code-sm text-on-surface-variant">
                    <span className="">{"SERVER & API"}</span>
                    <span className="text-secondary font-semibold">{"ROBUST & SECURE"}</span>
                  </div>
                </div>

                <div className="bg-surface-card rounded-xl border border-border-hairline p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                  <div className="space-y-5">
                    <div className="flex items-center justify-between pb-4 border-b border-border-hairline gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-surface-subtle text-primary flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-2xl">{"database"}</span>
                        </div>
                        <div>
                          <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                            {"Database"}
                          </h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                            {"Basis data relasional & integritas skema"}
                          </p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-surface-subtle font-label-code-sm text-label-code-sm text-primary font-mono font-medium border border-border-hairline shrink-0">
                        {"2 DATABASE"}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 gap-2.5">
                      <div className="p-3 rounded-lg border border-border-hairline bg-surface-subtle hover:bg-surface-card transition-all flex items-center gap-3">
                        <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24">
                          <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v5zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
                            fill="#00758F"
                          ></path>
                        </svg>
                        <div>
                          <div className="font-label-code-md text-label-code-md font-semibold text-primary">
                            {"MySQL"}
                          </div>
                          <span className="font-label-code-sm text-[10px] text-outline">
                            {"Relational RDBMS / ACID"}
                          </span>
                        </div>
                      </div>
                      <div className="p-3 rounded-lg border border-border-hairline bg-surface-subtle hover:bg-surface-card transition-all flex items-center gap-3">
                        <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24">
                          <path
                            d="M2 7l10-5 10 5v10l-10 5-10-5V7zm10 2.5L5.5 6.2 12 3 18.5 6.2 12 9.5z"
                            fill="#003545"
                          ></path>
                        </svg>
                        <div>
                          <div className="font-label-code-md text-label-code-md font-semibold text-primary">
                            {"MariaDB"}
                          </div>
                          <span className="font-label-code-sm text-[10px] text-outline">
                            {"Relational SQL Engine"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 pt-3 border-t border-border-hairline flex items-center justify-between font-label-code-sm text-label-code-sm text-on-surface-variant">
                    <span className="">{"DATA STORAGE"}</span>
                    <span className="text-secondary font-semibold">{"STRUCTURED & OPTIMIZED"}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-5 bg-surface-card rounded-xl border border-border-hairline p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                  <div className="space-y-5">
                    <div className="flex items-center justify-between pb-4 border-b border-border-hairline gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-surface-subtle text-primary flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-2xl">{"palette"}</span>
                        </div>
                        <div>
                          <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                            {"Desain"}
                          </h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                            {"UI/UX design & aset visual"}
                          </p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-surface-subtle font-label-code-sm text-label-code-sm text-primary font-mono font-medium border border-border-hairline shrink-0">
                        {"DESIGN_SUITE"}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="p-2.5 rounded-lg border border-border-hairline bg-surface-subtle hover:bg-surface-card transition-all flex items-center gap-2.5">
                        <svg className="w-6 h-6 shrink-0" viewBox="0 0 38 57">
                          <path
                            d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"
                            fill="#1abcfe"
                          ></path>
                          <path
                            d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"
                            fill="#0acf83"
                          ></path>
                          <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#ff7262"></path>
                          <path
                            d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"
                            fill="#f24e1e"
                          ></path>
                          <path
                            d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"
                            fill="#a259ff"
                          ></path>
                        </svg>
                        <div className="truncate">
                          <div className="font-label-code-md text-label-code-md font-semibold text-primary truncate">
                            {"Figma"}
                          </div>
                          <span className="font-label-code-sm text-[10px] text-outline block truncate">
                            {"UI/UX & Prototyping"}
                          </span>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-lg border border-border-hairline bg-surface-subtle hover:bg-surface-card transition-all flex items-center gap-2.5">
                        <svg className="w-6 h-6 shrink-0 rounded-full" viewBox="0 0 48 48">
                          <circle cx="24" cy="24" fill="#00C4CC" r="24"></circle>
                          <path
                            d="M23.1 33.2c-5.5 0-9.2-3.8-9.2-9.2 0-5.6 4-9.3 9.4-9.3 3.6 0 6.1 1.4 7.6 3.6l-2.8 2.2c-1.1-1.4-2.6-2.2-4.7-2.2-3.4 0-5.8 2.5-5.8 5.8 0 3.3 2.3 5.7 5.7 5.7 2.1 0 3.7-.8 5-2.3l2.8 2.1c-1.8 2.4-4.5 3.6-8 3.6z"
                            fill="#fff"
                          ></path>
                        </svg>
                        <div className="truncate">
                          <div className="font-label-code-md text-label-code-md font-semibold text-primary truncate">
                            {"Canva"}
                          </div>
                          <span className="font-label-code-sm text-[10px] text-outline block truncate">
                            {"Graphic Assets"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 pt-3 border-t border-border-hairline flex items-center justify-between font-label-code-sm text-label-code-sm text-on-surface-variant">
                    <span className="">{"CREATIVE SUITE"}</span>
                    <span className="text-secondary font-semibold">{"USER-CENTERED"}</span>
                  </div>
                </div>

                <div className="md:col-span-7 bg-surface-card rounded-xl border border-border-hairline p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                  <div className="space-y-5">
                    <div className="flex items-center justify-between pb-4 border-b border-border-hairline gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-surface-subtle text-primary flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-2xl">
                            {"construction"}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                            {"Perkantoran & Tools"}
                          </h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                            {"Developer tooling, version control, dan dokumentasi administrasi"}
                          </p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-surface-subtle font-label-code-sm text-label-code-sm text-primary font-mono font-medium border border-border-hairline shrink-0">
                        {"TOOLS_&_OFFICE"}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                      <div className="p-2.5 rounded-lg border border-border-hairline bg-surface-subtle hover:bg-surface-card transition-all flex flex-col items-center text-center gap-1.5">
                        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                          <path
                            d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L9.1 4.3l2.7 2.7c.6-.2 1.3 0 1.8.4.5.5.6 1.2.4 1.8l2.6 2.6c.6-.2 1.3 0 1.8.4.8.8.8 2.1 0 2.9s-2.1.8-2.9 0c-.6-.6-.7-1.4-.4-2.1l-2.4-2.4v5.3c.2.2.4.6.4 1 0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.4.2-.8.4-1V9.9c-.2-.2-.4-.6-.4-1 0-.6.4-1.2.9-1.4L8.7 5.1 2.4 11.4c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.6-8.6c.6-.6.6-1.5 0-2.5z"
                            fill="#F05032"
                          ></path>
                        </svg>
                        <div className="w-full">
                          <div className="font-label-code-md text-label-code-md font-semibold text-primary truncate">
                            {"Git/GitHub"}
                          </div>
                          <span className="font-label-code-sm text-[10px] text-outline block truncate">
                            {"VCS"}
                          </span>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-lg border border-border-hairline bg-surface-subtle hover:bg-surface-card transition-all flex flex-col items-center text-center gap-1.5">
                        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                          <path
                            d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .32 8.653L4.316 12 .32 15.347a1 1 0 0 0 .007 1.392l1.322 1.202a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.94-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352z"
                            fill="#007ACC"
                          ></path>
                        </svg>
                        <div className="w-full">
                          <div className="font-label-code-md text-label-code-md font-semibold text-primary truncate">
                            {"VS Code"}
                          </div>
                          <span className="font-label-code-sm text-[10px] text-outline block truncate">
                            {"IDE"}
                          </span>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-lg border border-border-hairline bg-surface-subtle hover:bg-surface-card transition-all flex flex-col items-center text-center gap-1.5">
                        <svg className="w-5 h-5 shrink-0" viewBox="0 0 48 48">
                          <path
                            d="M27 4H7a3 3 0 0 0-3 3v34a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z"
                            fill="#107C41"
                          ></path>
                          <path
                            d="M41 4H27v40h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z"
                            fill="#21A366"
                          ></path>
                          <path d="M27 12H15v24h12V12z" fill="#185C37"></path>
                          <path d="M27 12h12v24H27V12z" fill="#33C481"></path>
                          <path
                            d="M10.8 17.5l3.2 6.5-3.5 6.5h3.3l1.8-4.2 1.8 4.2h3.3l-3.5-6.5 3.2-6.5h-3.2l-1.6 4-1.6-4h-3.2z"
                            fill="#fff"
                          ></path>
                        </svg>
                        <div className="w-full">
                          <div className="font-label-code-md text-label-code-md font-semibold text-primary truncate">
                            {"Excel"}
                          </div>
                          <span className="font-label-code-sm text-[10px] text-outline block truncate">
                            {"Sheets"}
                          </span>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-lg border border-border-hairline bg-surface-subtle hover:bg-surface-card transition-all flex flex-col items-center text-center gap-1.5">
                        <svg className="w-5 h-5 shrink-0" viewBox="0 0 48 48">
                          <path
                            d="M27 4H7a3 3 0 0 0-3 3v34a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z"
                            fill="#185ABD"
                          ></path>
                          <path
                            d="M41 4H27v40h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z"
                            fill="#2B7CD3"
                          ></path>
                          <path d="M27 12H15v24h12V12z" fill="#103F91"></path>
                          <path d="M27 12h12v24H27V12z" fill="#41A5EE"></path>
                          <path
                            d="M9.5 17.5l2.2 13h2.6l1.7-8 1.7 8h2.6l2.2-13h-2.9l-1 7.8-1.7-7.8h-1.9l-1.7 7.8-1-7.8H9.5z"
                            fill="#fff"
                          ></path>
                        </svg>
                        <div className="w-full">
                          <div className="font-label-code-md text-label-code-md font-semibold text-primary truncate">
                            {"Word"}
                          </div>
                          <span className="font-label-code-sm text-[10px] text-outline block truncate">
                            {"Docs"}
                          </span>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-lg border border-border-hairline bg-surface-subtle hover:bg-surface-card transition-all flex flex-col items-center text-center gap-1.5">
                        <svg className="w-5 h-5 shrink-0" viewBox="0 0 48 48">
                          <path
                            d="M27 4H7a3 3 0 0 0-3 3v34a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z"
                            fill="#C43E1C"
                          ></path>
                          <path
                            d="M41 4H27v40h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z"
                            fill="#ED6C47"
                          ></path>
                          <path d="M27 12H15v24h12V12z" fill="#98240D"></path>
                          <path d="M27 12h12v24H27V12z" fill="#F38C6F"></path>
                          <path
                            d="M11 17.5h5.5c2.5 0 4.2 1.4 4.2 3.6 0 2.3-1.7 3.7-4.2 3.7h-2.7v5.7H11v-13zm2.8 5h2.5c1 0 1.7-.5 1.7-1.4s-.7-1.3-1.7-1.3h-2.5v2.7z"
                            fill="#fff"
                          ></path>
                        </svg>
                        <div className="w-full">
                          <div className="font-label-code-md text-label-code-md font-semibold text-primary truncate">
                            {"PowerPoint"}
                          </div>
                          <span className="font-label-code-sm text-[10px] text-outline block truncate">
                            {"Slides"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 pt-3 border-t border-border-hairline flex items-center justify-between font-label-code-sm text-label-code-sm text-on-surface-variant">
                    <span className="">{"WORKFLOW & DEV TOOLS"}</span>
                    <span className="text-secondary font-semibold">{"STANDARDIZED"}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="w-full py-16 bg-surface-canvas border-y border-border-hairline"
            id="projects"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                <div className="flex flex-col gap-2 max-w-2xl">
                  <div className="flex items-center gap-2 text-secondary font-label-code-md text-label-code-md font-semibold">
                    <span className="">{"03."}</span>
                    <span className="">{"PROYEK UNGGULAN"}</span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
                    {
                      "Implementasi nyata penyelesaian masalah data & transformasi digital instansi."
                    }
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {
                      "Rancang bangun sistem enterprise, otomatisasi administrasi instansi, dan arsitektur analitik cloud berkinerja tinggi."
                    }
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-border-hairline">
                <div className="flex flex-wrap items-center gap-2">
                  <Button
                    variant="portfolio"
                    size="reference"
                    className="px-3.5 py-1.5 rounded-lg text-xs font-label-code-sm font-semibold bg-primary text-on-primary shadow-sm transition-all"
                    id="filter-all"
                    data-action="setProjectFilter('all', this)"
                  >
                    {"Semua Proyek (6)"}
                  </Button>
                  <Button
                    variant="portfolio"
                    size="reference"
                    className="px-3.5 py-1.5 rounded-lg text-xs font-label-code-sm font-medium bg-surface-card border border-border-hairline text-on-surface-variant hover:text-primary hover:bg-surface-subtle transition-all"
                    id="filter-enterprise"
                    data-action="setProjectFilter('enterprise', this)"
                  >
                    {"Sistem Instansi & Enterprise (3)"}
                  </Button>
                  <Button
                    variant="portfolio"
                    size="reference"
                    className="px-3.5 py-1.5 rounded-lg text-xs font-label-code-sm font-medium bg-surface-card border border-border-hairline text-on-surface-variant hover:text-primary hover:bg-surface-subtle transition-all"
                    id="filter-portal"
                    data-action="setProjectFilter('portal', this)"
                  >
                    {"Web Portal & Publik (2)"}
                  </Button>
                  <Button
                    variant="portfolio"
                    size="reference"
                    className="px-3.5 py-1.5 rounded-lg text-xs font-label-code-sm font-medium bg-surface-card border border-border-hairline text-on-surface-variant hover:text-primary hover:bg-surface-subtle transition-all"
                    id="filter-cloud"
                    data-action="setProjectFilter('cloud', this)"
                  >
                    {"Cloud & Data Analytics (1)"}
                  </Button>
                </div>
                <div className="relative min-w-[260px] sm:w-72">
                  <span className="material-symbols-outlined absolute left-3 top-2.5 text-outline text-lg">
                    {"search"}
                  </span>
                  <input
                    id="project-search-input"
                    type="text"
                    placeholder="Cari nama proyek / instansi..."
                    className="w-full pl-9 pr-3.5 py-2 bg-surface-card border border-border-hairline rounded-lg text-xs font-body-sm text-on-surface placeholder:text-outline-variant focus:outline-none focus:border-primary shadow-sm"
                  />
                </div>
              </div>
              <div id="projects-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div
                  className="project-card bg-surface-card rounded-xl border border-border-hairline overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                  data-category="enterprise"
                  data-page="1"
                >
                  <div className="relative w-full h-64 bg-surface-container overflow-hidden">
                    <img
                      alt="Buku Agenda Surat Digital"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      src="https://lh3.googleusercontent.com/aida/AEtjO1WDyohY0UKCK-2iFZGC5nSO97ZaQQW4mdSHRtoLWReCIG5IuGz76qUEnGo3t1K7dvX3az1nQZARBMcC4ezZHQMswNftTNyVf7U93JrjQrstI_rX1xzSp6EOKRzbB8J6t-a5xs0OzQdQz_hjV1vvSYNMU1FGtqiWIBOyISXeCLYezn6kKakmCyw5kOCFQVYZZKyNfOi9BRHRY5zMYNEw6wKtIZUxfwpH-feCp0Z_T8Hlt_w2Yac0Jhvs6L6b"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-2.5 py-1 bg-surface-card/90 backdrop-blur rounded font-label-code-sm text-label-code-sm font-semibold text-primary">
                        {"Internal System"}
                      </span>
                      <span className="px-2.5 py-1 bg-secondary text-on-secondary rounded font-label-code-sm text-label-code-sm font-medium">
                        {"Production"}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8 flex flex-col justify-between flex-grow">
                    <div className="space-y-3">
                      <div className="text-secondary font-label-code-sm text-label-code-sm font-semibold">
                        {"BAPAS KELAS II OKU INDUK"}
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                        {"Buku Agenda Surat Digital"}
                      </h3>
                    </div>
                    <div className="pt-6 mt-6 border-t border-border-hairline flex items-center justify-between">
                      <Button
                        variant="portfolio"
                        size="reference"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary rounded font-body-sm text-body-sm font-medium hover:bg-primary-container transition-colors shadow-sm text-on-primary"
                        data-action="openProjectModal('agenda-surat')"
                      >
                        <span className="">{"Detail Proyek"}</span>
                        <span className="material-symbols-outlined text-sm">{"arrow_forward"}</span>
                      </Button>
                      <a
                        className="inline-flex items-center gap-1.5 px-3 py-2 text-on-surface-variant hover:text-primary transition-colors font-body-sm text-body-sm"
                        href="https://github.com"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <span className="material-symbols-outlined text-base">{"code"}</span>
                        <span className="">{"Source Code"}</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="project-card bg-surface-card rounded-xl border border-border-hairline overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                  data-category="portal"
                  data-page="1"
                >
                  <div className="relative w-full h-64 bg-surface-container overflow-hidden">
                    <img
                      alt="Website Profil Balai Pemasyarakatan OKU Induk"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      src="https://lh3.googleusercontent.com/aida/AEtjO1VS0CCE21zCmpBmSsK_TzWgEWwU2yogOqQi09U1wBMxFROK5RW5hwiI1zk6V7TqW_kBhAScaflfuCbCxmDGRPxHyjmdsL9aSocx9AMIsbiPSHIyG7ZW87q7QY3XyJTg51Qq3iVY6lbhqVEihXh8TvfUbmt40oFClE_sKaCRpbzrVZUjEdKAGCcs-gOh8v5tvEgwcygvMAboA4iKMR4xq3cqt_tKEZfIyPMkIdmqY5i2oPzUM3-7QPf1mKuI"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-2.5 py-1 bg-surface-card/90 backdrop-blur rounded font-label-code-sm text-label-code-sm font-semibold text-primary">
                        {"Public Portal"}
                      </span>
                      <span className="px-2.5 py-1 bg-status-active text-on-secondary rounded font-label-code-sm text-label-code-sm font-medium">
                        {"Live Portal"}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8 flex flex-col justify-between flex-grow">
                    <div className="space-y-3">
                      <div className="text-secondary font-label-code-sm text-label-code-sm font-semibold">
                        {"KEMENIMIPAS RI"}
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                        {"Website Profil Balai Pemasyarakatan OKU Induk"}
                      </h3>
                    </div>
                    <div className="pt-6 mt-6 border-t border-border-hairline flex items-center justify-between">
                      <Button
                        variant="portfolio"
                        size="reference"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary rounded font-body-sm text-body-sm font-medium hover:bg-primary-container transition-colors shadow-sm text-on-primary"
                        data-action="openProjectModal('profil-bapas')"
                      >
                        <span className="">{"Detail Proyek"}</span>
                        <span className="material-symbols-outlined text-sm">{"arrow_forward"}</span>
                      </Button>
                      <a
                        className="inline-flex items-center gap-1.5 px-3 py-2 text-on-surface-variant hover:text-primary transition-colors font-body-sm text-body-sm"
                        href="https://github.com"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <span className="material-symbols-outlined text-base">{"code"}</span>
                        <span className="">{"Source Code"}</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="project-card bg-surface-card rounded-xl border border-border-hairline overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                  data-category="enterprise"
                  data-page="1"
                >
                  <div className="relative w-full h-64 bg-surface-subtle overflow-hidden flex items-center justify-center p-6">
                    <div className="w-full h-full rounded-lg border border-border-hairline bg-surface-card p-4 flex flex-col justify-between shadow-sm group-hover:scale-105 transition-transform duration-500">
                      <div className="flex items-center justify-between border-b border-border-hairline pb-2.5">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-secondary text-base">
                            {"verified_user"}
                          </span>
                          <span className="font-label-code-sm text-label-code-sm text-primary font-semibold">
                            {"SIMPEL-MON v1.0"}
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-secondary-container/40 text-secondary font-label-code-sm text-[10px] font-semibold">
                          {"Gov System"}
                        </span>
                      </div>
                      <div className="space-y-2 py-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-on-surface-variant font-medium">
                            {"Capaian SKP Pegawai"}
                          </span>
                          <span className="font-label-code-sm font-bold text-primary">
                            {"98.7% Valid"}
                          </span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-surface-subtle overflow-hidden">
                          <div className="w-[98%] h-full bg-secondary rounded-full"></div>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-outline font-label-code-sm pt-1">
                          <span className="">{"Multi-tier Approval"}</span>
                          <span className="">{"Export PDF & XLSX"}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-on-surface-variant font-label-code-sm pt-1 border-t border-border-hairline">
                        <span className="text-primary font-medium">
                          {"Role-Based Access (RBAC)"}
                        </span>
                        <span className="text-secondary font-mono font-medium">
                          {"PHP 8.2 • MySQL"}
                        </span>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-2.5 py-1 bg-surface-card/90 backdrop-blur rounded font-label-code-sm text-label-code-sm font-semibold text-primary">
                        {"Enterprise Modul"}
                      </span>
                      <span className="px-2.5 py-1 bg-surface-subtle text-primary border border-border-hairline rounded font-label-code-sm text-label-code-sm font-medium">
                        {"Internal Gov"}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8 flex flex-col justify-between flex-grow">
                    <div className="space-y-3">
                      <div className="text-secondary font-label-code-sm text-label-code-sm font-semibold">
                        {"SISTEM INFORMASI MANAJEMEN"}
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                        {"SIMPEL-MON: Sistem Monitoring Kinerja Pegawai"}
                      </h3>
                    </div>
                    <div className="pt-6 mt-6 border-t border-border-hairline flex items-center justify-between">
                      <Button
                        variant="portfolio"
                        size="reference"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary rounded font-body-sm text-body-sm font-medium hover:bg-primary-container transition-colors shadow-sm text-on-primary"
                        data-action="openProjectModal('simpel-mon')"
                      >
                        <span className="">{"Detail Proyek"}</span>
                        <span className="material-symbols-outlined text-sm">{"arrow_forward"}</span>
                      </Button>
                      <a
                        className="inline-flex items-center gap-1.5 px-3 py-2 text-on-surface-variant hover:text-primary transition-colors font-body-sm text-body-sm"
                        href="https://github.com"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <span className="material-symbols-outlined text-base">{"code"}</span>
                        <span className="">{"Source Code"}</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="project-card bg-surface-card rounded-xl border border-border-hairline overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                  data-category="cloud"
                  data-page="1"
                >
                  <div className="relative w-full h-64 bg-surface-container-high overflow-hidden flex items-center justify-center p-6 bg-gradient-to-t from-primary-container via-surface-card to-surface-subtle">
                    <div className="w-full h-full rounded-lg border border-border-hairline bg-surface-card/95 backdrop-blur p-4 flex flex-col justify-between shadow-sm group-hover:scale-105 transition-transform duration-500">
                      <div className="flex items-center justify-between border-b border-border-hairline pb-2.5">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-status-active"></span>
                          <span className="font-label-code-sm text-label-code-sm text-primary font-semibold">
                            {"Anlytics Pipeline v2.4"}
                          </span>
                        </div>
                        <span className="font-label-code-sm text-[10px] text-outline px-2 py-0.5 rounded bg-surface-subtle">
                          {"GCP Cloud Run"}
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 py-2">
                        <div className="p-2 rounded bg-surface-subtle border border-border-hairline">
                          <span className="text-[10px] text-outline block">{"REQUESTS"}</span>
                          <span className="font-label-code-md text-label-code-md font-bold text-primary">
                            {"142.8k"}
                          </span>
                        </div>
                        <div className="p-2 rounded bg-surface-subtle border border-border-hairline">
                          <span className="text-[10px] text-outline block">{"AVG LATENCY"}</span>
                          <span className="font-label-code-md text-label-code-md font-bold text-secondary">
                            {"38ms"}
                          </span>
                        </div>
                        <div className="p-2 rounded bg-surface-subtle border border-border-hairline">
                          <span className="text-[10px] text-outline block">{"ACCURACY"}</span>
                          <span className="font-label-code-md text-label-code-md font-bold text-tech-badge-cyan">
                            {"99.4%"}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-on-surface-variant font-label-code-sm pt-1">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-xs text-status-active">
                            {"database"}
                          </span>
                          {" Cloud SQL MySQL"}
                        </span>
                        <span className="text-secondary font-medium">{"Healthy"}</span>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-2.5 py-1 bg-surface-card/90 backdrop-blur rounded font-label-code-sm text-label-code-sm font-semibold text-primary">
                        {"Data Engine"}
                      </span>
                      <span className="px-2.5 py-1 bg-tech-badge-cyan-bg text-tech-badge-cyan rounded font-label-code-sm text-label-code-sm font-medium">
                        {"Cloud Platform"}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8 flex flex-col justify-between flex-grow">
                    <div className="space-y-3">
                      <div className="text-secondary font-label-code-sm text-label-code-sm font-semibold">
                        {"BANGKIT CAPSTONE & LLDIKTI"}
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                        {"Cloud Data Analytics Platform"}
                      </h3>
                    </div>
                    <div className="pt-6 mt-6 border-t border-border-hairline flex items-center justify-between">
                      <Button
                        variant="portfolio"
                        size="reference"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary rounded font-body-sm text-body-sm font-medium hover:bg-primary-container transition-colors shadow-sm text-on-primary"
                        data-action="openProjectModal('cloud-analytics')"
                      >
                        <span className="">{"Detail Proyek"}</span>
                        <span className="material-symbols-outlined text-sm">{"arrow_forward"}</span>
                      </Button>
                      <a
                        className="inline-flex items-center gap-1.5 px-3 py-2 text-on-surface-variant hover:text-primary transition-colors font-body-sm text-body-sm"
                        href="https://github.com"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <span className="material-symbols-outlined text-base">{"code"}</span>
                        <span className="">{"Source Code"}</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="project-card hidden bg-surface-card rounded-xl border border-border-hairline overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                  data-category="portal"
                  data-page="2"
                >
                  <div className="relative w-full h-64 bg-surface-container overflow-hidden">
                    <img
                      alt="Portal Pelaporan Kinerja Pegawai Terpadu"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      src="https://lh3.googleusercontent.com/aida/AEtjO1VS0CCE21zCmpBmSsK_TzWgEWwU2yogOqQi09U1wBMxFROK5RW5hwiI1zk6V7TqW_kBhAScaflfuCbCxmDGRPxHyjmdsL9aSocx9AMIsbiPSHIyG7ZW87q7QY3XyJTg51Qq3iVY6lbhqVEihXh8TvfUbmt40oFClE_sKaCRpbzrVZUjEdKAGCcs-gOh8v5tvEgwcygvMAboA4iKMR4xq3cqt_tKEZfIyPMkIdmqY5i2oPzUM3-7QPf1mKuI"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-2.5 py-1 bg-surface-card/90 backdrop-blur rounded font-label-code-sm text-label-code-sm font-semibold text-primary">
                        {"Gov Platform"}
                      </span>
                      <span className="px-2.5 py-1 bg-secondary text-on-secondary rounded font-label-code-sm text-label-code-sm font-medium">
                        {"Live"}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8 flex flex-col justify-between flex-grow">
                    <div className="space-y-3">
                      <div className="text-secondary font-label-code-sm text-label-code-sm font-semibold">
                        {"LLDIKTI WILAYAH II"}
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                        {"Portal Pelaporan Kinerja Pegawai Terpadu"}
                      </h3>
                    </div>
                    <div className="pt-6 mt-6 border-t border-border-hairline flex items-center justify-between">
                      <Button
                        variant="portfolio"
                        size="reference"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary rounded font-body-sm text-body-sm font-medium hover:bg-primary-container transition-colors shadow-sm text-on-primary"
                        data-action="openProjectModal('portal-lldikti')"
                      >
                        <span className="">{"Detail Proyek"}</span>
                        <span className="material-symbols-outlined text-sm">{"arrow_forward"}</span>
                      </Button>
                      <a
                        className="inline-flex items-center gap-1.5 px-3 py-2 text-on-surface-variant hover:text-primary transition-colors font-body-sm text-body-sm"
                        href="https://github.com"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <span className="material-symbols-outlined text-base">{"code"}</span>
                        <span className="">{"Source Code"}</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="project-card hidden bg-surface-card rounded-xl border border-border-hairline overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                  data-category="enterprise"
                  data-page="2"
                >
                  <div className="relative w-full h-64 bg-surface-subtle overflow-hidden flex items-center justify-center p-6">
                    <div className="w-full h-full rounded-lg border border-border-hairline bg-surface-card p-4 flex flex-col justify-between shadow-sm group-hover:scale-105 transition-transform duration-500">
                      <div className="flex items-center justify-between border-b border-border-hairline pb-2.5">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-base">
                            {"psychology"}
                          </span>
                          <span className="font-label-code-sm text-label-code-sm text-primary font-semibold">
                            {"DocClassifier v1.2"}
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-surface-subtle text-primary border border-border-hairline font-label-code-sm text-[10px] font-semibold">
                          {"NLP Pipeline"}
                        </span>
                      </div>
                      <div className="space-y-2 py-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-on-surface-variant font-medium">
                            {"Akurasi Klasifikasi Berkas"}
                          </span>
                          <span className="font-label-code-sm font-bold text-secondary">
                            {"96.8% Precision"}
                          </span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-surface-subtle overflow-hidden">
                          <div className="w-[96%] h-full bg-status-active rounded-full"></div>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-outline font-label-code-sm pt-1">
                          <span className="">{"Multi-format OCR"}</span>
                          <span className="">{"Auto Tagging Metadata"}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-on-surface-variant font-label-code-sm pt-1 border-t border-border-hairline">
                        <span className="text-primary font-medium">
                          {"Python FastAPI • Docker"}
                        </span>
                        <span className="text-secondary font-mono font-medium">{"PostgreSQL"}</span>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-2.5 py-1 bg-surface-card/90 backdrop-blur rounded font-label-code-sm text-label-code-sm font-semibold text-primary">
                        {"AI & Data Workflow"}
                      </span>
                      <span className="px-2.5 py-1 bg-tech-badge-cyan-bg text-tech-badge-cyan rounded font-label-code-sm text-label-code-sm font-medium">
                        {"Research"}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8 flex flex-col justify-between flex-grow">
                    <div className="space-y-3">
                      <div className="text-secondary font-label-code-sm text-label-code-sm font-semibold">
                        {"MAGANGHUB KEMNAKER RI"}
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                        {"Sistem Klasifikasi Dokumen Otomatis"}
                      </h3>
                    </div>
                    <div className="pt-6 mt-6 border-t border-border-hairline flex items-center justify-between">
                      <Button
                        variant="portfolio"
                        size="reference"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary rounded font-body-sm text-body-sm font-medium hover:bg-primary-container transition-colors shadow-sm text-on-primary"
                        data-action="openProjectModal('doc-classifier')"
                      >
                        <span className="">{"Detail Proyek"}</span>
                        <span className="material-symbols-outlined text-sm">{"arrow_forward"}</span>
                      </Button>
                      <a
                        className="inline-flex items-center gap-1.5 px-3 py-2 text-on-surface-variant hover:text-primary transition-colors font-body-sm text-body-sm"
                        href="https://github.com"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <span className="material-symbols-outlined text-base">{"code"}</span>
                        <span className="">{"Source Code"}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 mt-10 border-t border-border-hairline font-label-code-sm text-label-code-sm text-on-surface-variant">
                <div className="flex items-center gap-2" id="project-pagination-controls">
                  <Button
                    variant="portfolio"
                    size="reference"
                    id="btn-project-page-prev"
                    className="px-3 py-1.5 rounded-lg border border-border-hairline bg-surface-card text-on-surface-variant disabled:opacity-40 transition-colors"
                    disabled={true}
                    data-action="changeProjectPage(1)"
                  >
                    {"< Sebelumnya"}
                  </Button>
                  <Button
                    variant="portfolio"
                    size="reference"
                    id="btn-project-page-1"
                    className="px-3 py-1.5 rounded-lg bg-primary text-on-primary font-semibold transition-colors"
                    data-action="changeProjectPage(1)"
                  >
                    {"1"}
                  </Button>
                  <Button
                    variant="portfolio"
                    size="reference"
                    id="btn-project-page-2"
                    className="px-3 py-1.5 rounded-lg border border-border-hairline bg-surface-card hover:bg-surface-subtle text-on-surface transition-colors"
                    data-action="changeProjectPage(2)"
                  >
                    {"2"}
                  </Button>
                  <Button
                    variant="portfolio"
                    size="reference"
                    id="btn-project-page-next"
                    className="px-3 py-1.5 rounded-lg border border-border-hairline bg-surface-card hover:bg-surface-subtle text-on-surface transition-colors"
                    data-action="changeProjectPage(2)"
                  >
                    {"Berikutnya >"}
                  </Button>
                </div>
                <Button
                  variant="portfolio"
                  size="reference"
                  id="btn-toggle-all-projects"
                  className="px-3.5 py-1.5 rounded-lg border border-border-hairline bg-surface-card hover:bg-surface-subtle text-primary font-semibold transition-colors flex items-center gap-1.5"
                  data-action="toggleAllProjects()"
                >
                  <span className="material-symbols-outlined text-base">{"grid_view"}</span>
                  <span id="toggle-all-projects-text" className="">
                    {"Tampilkan Semua (6 Proyek)"}
                  </span>
                </Button>
              </div>
            </div>
          </section>

          <section className="w-full py-16 max-w-7xl mx-auto px-6 lg:px-12" id="experience">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
                <div className="flex flex-col gap-2 max-w-2xl">
                  <div className="flex items-center gap-2 text-secondary font-label-code-md text-label-code-md font-semibold">
                    <span className="">{"04."}</span>
                    <span className="">{"PENGALAMAN KERJA & KONTRIBUSI"}</span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-primary font-bold tracking-tight">
                    {"Jejak rekam profesional dan kontribusi nyata"}
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {
                      "Pengalaman langsung pada instansi pemerintah dan program akselerasi teknologi nasional."
                    }
                  </p>
                </div>
              </div>
              <div className="relative w-full py-4">
                <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary/30 via-border-hairline to-primary/10"></div>
                <div className="space-y-12 md:space-y-16 relative">
                  <div className="relative flex flex-col md:flex-row items-start md:items-center pl-10 md:pl-0">
                    <div className="w-full md:w-1/2 md:pr-12 md:text-right flex flex-col md:items-end">
                      <span className="text-tech-badge-cyan font-label-code-sm font-semibold tracking-wider uppercase mb-1.5">
                        {"DESEMBER 2024 — JUNI 2025"}
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-primary font-bold tracking-tight">
                        {"Pengelola Fasilitas Umum"}
                      </h3>
                      <p className="text-body-sm text-on-surface-variant font-medium mt-0.5 mb-2">
                        {"BAPAS Kelas II OKU Induk"}
                      </p>
                      <div className="flex flex-wrap gap-1.5 md:justify-end mt-1 mb-3 md:mb-0">
                        <span className="px-2 py-0.5 rounded bg-surface-subtle text-primary font-label-code-sm text-[11px] border border-border-hairline font-mono">
                          {"React.js"}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-surface-subtle text-primary font-label-code-sm text-[11px] border border-border-hairline font-mono">
                          {"TypeScript"}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-surface-subtle text-primary font-label-code-sm text-[11px] border border-border-hairline font-mono">
                          {"MySQL"}
                        </span>
                      </div>
                    </div>
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center top-1 md:top-auto">
                      <div className="w-8 h-8 rounded-full bg-surface-card border-2 border-primary/20 shadow-sm flex items-center justify-center">
                        <div className="w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-primary/10"></div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-12 mt-2 md:mt-0">
                      <div className="p-5 rounded-xl bg-surface-card border border-border-hairline shadow-sm hover:border-outline-variant transition-colors">
                        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                          {
                            "Mengembangkan aplikasi web berbasis React, melakukan analisis kebutuhan sistem, perancangan database, desain antarmuka, serta implementasi fitur untuk mendukung digitalisasi layanan Registrasi dan administrasi."
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex flex-col md:flex-row items-start md:items-center pl-10 md:pl-0">
                    <div className="w-full md:w-1/2 md:pr-12 order-2 md:order-1 mt-2 md:mt-0">
                      <div className="p-5 rounded-xl bg-surface-card border border-border-hairline shadow-sm hover:border-outline-variant transition-colors md:text-right">
                        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                          {
                            "Mempelajari cloud computing menggunakan Google Cloud Platform (GCP), membangun REST API, mengelola database, menerapkan deployment aplikasi, serta berkolaborasi dalam pengembangan proyek capstone berbasis cloud."
                          }
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center top-1 md:top-auto z-10">
                      <div className="w-8 h-8 rounded-full bg-surface-card border-2 border-primary/20 shadow-sm flex items-center justify-center">
                        <div className="w-3.5 h-3.5 rounded-full bg-secondary ring-4 ring-secondary/20"></div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-12 order-1 md:order-2 flex flex-col items-start">
                      <span className="text-tech-badge-cyan font-label-code-sm font-semibold tracking-wider uppercase mb-1.5">
                        {"SEPTEMBER 2024 — DESEMBER 2024"}
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-primary font-bold tracking-tight">
                        {"Kelompok Komputasi Awan"}
                      </h3>
                      <p className="text-body-sm text-on-surface-variant font-medium mt-0.5 mb-2">
                        {"Bangkit Academy led by Google, GoTo, & Traveloka"}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-1 mb-3 md:mb-0">
                        <span className="px-2 py-0.5 rounded bg-surface-subtle text-primary font-label-code-sm text-[11px] border border-border-hairline font-mono">
                          {"Google Cloud"}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-surface-subtle text-primary font-label-code-sm text-[11px] border border-border-hairline font-mono">
                          {"Node.js"}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-surface-subtle text-primary font-label-code-sm text-[11px] border border-border-hairline font-mono">
                          {"Docker"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex flex-col md:flex-row items-start md:items-center pl-10 md:pl-0">
                    <div className="w-full md:w-1/2 md:pr-12 md:text-right flex flex-col md:items-end">
                      <span className="text-tech-badge-cyan font-label-code-sm font-semibold tracking-wider uppercase mb-1.5">
                        {"FEBRUARI 2024 — JUNI 2024"}
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-primary font-bold tracking-tight">
                        {"Pengembangan Sistem Informasi"}
                      </h3>
                      <p className="text-body-sm text-on-surface-variant font-medium mt-0.5 mb-2">
                        {"LLDIKTI Wilayah II"}
                      </p>
                      <div className="flex flex-wrap gap-1.5 md:justify-end mt-1 mb-3 md:mb-0">
                        <span className="px-2 py-0.5 rounded bg-surface-subtle text-primary font-label-code-sm text-[11px] border border-border-hairline font-mono">
                          {"PHP"}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-surface-subtle text-primary font-label-code-sm text-[11px] border border-border-hairline font-mono">
                          {"Laravel"}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-surface-subtle text-primary font-label-code-sm text-[11px] border border-border-hairline font-mono">
                          {"Data Analysis"}
                        </span>
                      </div>
                    </div>
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center top-1 md:top-auto">
                      <div className="w-8 h-8 rounded-full bg-surface-card border-2 border-primary/20 shadow-sm flex items-center justify-center">
                        <div className="w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-primary/10"></div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-12 mt-2 md:mt-0">
                      <div className="p-5 rounded-xl bg-surface-card border border-border-hairline shadow-sm hover:border-outline-variant transition-colors">
                        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                          {
                            "Mengembangkan aplikasi web berbasis Laravel, melakukan analisis kebutuhan sistem, dan perancangan database."
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="w-full py-16 bg-surface-canvas border-y border-border-hairline"
            id="certificates"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                <div className="flex flex-col gap-2 max-w-2xl">
                  <div className="flex items-center gap-2 text-secondary font-label-code-md text-label-code-md font-semibold">
                    <span className="">{"05."}</span>
                    <span className="">{"SERTIFIKASI & KREDENSIAL RESMI"}</span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
                    {"Dokumentasi pencapaian kompetensi & kelulusan program terstandarisasi."}
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {
                      "Portofolio lisensi, kredensial kementerian, dan kelulusan program akselerasi digital bereputasi nasional."
                    }
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-border-hairline">
                <div className="flex flex-wrap items-center gap-2">
                  <Button
                    variant="portfolio"
                    size="reference"
                    className="px-3.5 py-1.5 rounded-lg text-xs font-label-code-sm font-semibold bg-primary text-on-primary shadow-sm transition-all"
                    data-cert-filter="all"
                  >
                    {"Semua (4)"}
                  </Button>
                  <Button
                    variant="portfolio"
                    size="reference"
                    className="px-3.5 py-1.5 rounded-lg text-xs font-label-code-sm font-medium bg-surface-card border border-border-hairline text-on-surface-variant hover:text-primary hover:bg-surface-subtle transition-all"
                    data-cert-filter="government"
                  >
                    {"Kementerian & Pemerintah (3)"}
                  </Button>
                  <Button
                    variant="portfolio"
                    size="reference"
                    className="px-3.5 py-1.5 rounded-lg text-xs font-label-code-sm font-medium bg-surface-card border border-border-hairline text-on-surface-variant hover:text-primary hover:bg-surface-subtle transition-all"
                    data-cert-filter="cloud"
                  >
                    {"Cloud & Rekayasa Software (1)"}
                  </Button>
                  <Button
                    variant="portfolio"
                    size="reference"
                    className="px-3.5 py-1.5 rounded-lg text-xs font-label-code-sm font-medium bg-surface-card border border-border-hairline text-on-surface-variant hover:text-primary hover:bg-surface-subtle transition-all"
                    data-cert-filter="academic"
                  >
                    {"Akademik & Riset (0)"}
                  </Button>
                </div>
                <div className="relative min-w-[260px] sm:w-72">
                  <span className="material-symbols-outlined absolute left-3 top-2.5 text-outline text-lg">
                    {"search"}
                  </span>
                  <input
                    type="text"
                    placeholder="Cari kredensial / instansi..."
                    className="w-full pl-9 pr-3.5 py-2 bg-surface-card border border-border-hairline rounded-lg text-xs font-body-sm text-on-surface placeholder:text-outline-variant focus:outline-none focus:border-primary shadow-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-surface-card rounded-xl border border-border-hairline overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                  <div
                    className="relative w-full h-64 bg-surface-container overflow-hidden border-b border-border-hairline cursor-pointer"
                    data-action="openCertModal('https://lh3.googleusercontent.com/aida/AEtjO1VsyrBbsGyPdZMjoNldtswax2iZhkTMEuMW46pmbnhoGqr65vpY_Y2yGZImGV31uvmqvPxKTXU3NPyHdp29jYucvxz8Lno1RWhO52oUn9bY50WjL7V8STXFEKVpMn7bAZmkxM8uhN2OVxqy4_k_P7hB8sY3auETYzWuIQctnaCKGDjc5vwqZnTF7KA5Bg9T9NbH4hJWKUzsLXsWmSeEU_yPkQy7f23JE_1xNEBAaV4yhJfUnDlf5Rf_-lI', 'Sertifikat Kelulusan Program MSIB Batch 6', 'Kemendikbudristek & LLDIKTI', 'Februari 2024 - Juni 2024', 'ID Kredensial: MSIB-6/LL2/2024/0912')"
                  >
                    <img
                      alt="Sertifikat Kelulusan Program MSIB Batch 6"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      src="https://lh3.googleusercontent.com/aida/AEtjO1VsyrBbsGyPdZMjoNldtswax2iZhkTMEuMW46pmbnhoGqr65vpY_Y2yGZImGV31uvmqvPxKTXU3NPyHdp29jYucvxz8Lno1RWhO52oUn9bY50WjL7V8STXFEKVpMn7bAZmkxM8uhN2OVxqy4_k_P7hB8sY3auETYzWuIQctnaCKGDjc5vwqZnTF7KA5Bg9T9NbH4hJWKUzsLXsWmSeEU_yPkQy7f23JE_1xNEBAaV4yhJfUnDlf5Rf_-lI"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-2.5 py-1 bg-surface-card/90 backdrop-blur rounded font-label-code-sm text-label-code-sm font-semibold text-primary">
                        {"Kemendikbudristek"}
                      </span>
                      <span className="px-2.5 py-1 bg-secondary text-on-secondary rounded font-label-code-sm text-label-code-sm font-medium">
                        {"Terverifikasi"}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8 flex flex-col justify-between flex-grow space-y-4">
                    <div>
                      <div className="flex items-center justify-between text-secondary font-label-code-sm text-label-code-sm font-semibold mb-1">
                        <span className="">{"KEMENDIKBUDRISTEK & LLDIKTI"}</span>
                        <span className="text-outline font-normal font-mono">
                          {"Februari 2024 - Juni 2024"}
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-2">
                        {"Sertifikat Kelulusan Program MSIB Batch 6"}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        {
                          "Program Magang & Studi Independen Bersertifikat (MSIB) Batch 6 posisi Information System Developer. Fokus rekayasa arsitektur sistem informasi institusi, standarisasi API, dan integrasi database relasional."
                        }
                      </p>
                    </div>
                    <div className="pt-4 border-t border-border-hairline flex items-center justify-between">
                      <Button
                        variant="portfolio"
                        size="reference"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary rounded-lg font-body-sm text-body-sm font-medium hover:bg-primary-container transition-colors shadow-sm text-on-primary"
                        data-action="openCertModal('https://lh3.googleusercontent.com/aida/AEtjO1VsyrBbsGyPdZMjoNldtswax2iZhkTMEuMW46pmbnhoGqr65vpY_Y2yGZImGV31uvmqvPxKTXU3NPyHdp29jYucvxz8Lno1RWhO52oUn9bY50WjL7V8STXFEKVpMn7bAZmkxM8uhN2OVxqy4_k_P7hB8sY3auETYzWuIQctnaCKGDjc5vwqZnTF7KA5Bg9T9NbH4hJWKUzsLXsWmSeEU_yPkQy7f23JE_1xNEBAaV4yhJfUnDlf5Rf_-lI', 'Sertifikat Kelulusan Program MSIB Batch 6', 'Kemendikbudristek & LLDIKTI', 'Februari 2024 - Juni 2024', 'ID Kredensial: MSIB-6/LL2/2024/0912')"
                      >
                        <span className="">{"Lihat Dokumen Lengkap"}</span>
                        <span className="material-symbols-outlined text-sm">{"open_in_new"}</span>
                      </Button>
                      <span className="font-label-code-sm text-xs text-outline font-mono">
                        {"PDF RESMI"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-card rounded-xl border border-border-hairline overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                  <div
                    className="relative w-full h-64 bg-surface-container overflow-hidden border-b border-border-hairline cursor-pointer"
                    data-action="openCertModal('https://lh3.googleusercontent.com/aida-public/AB6AXuCJf8e3fpk6UKYWGNndZ7iCi2O0QjSXhi23wd1V0Woz_nD8FgJcBhPpwExqMX9XK7JY7WT1bYSMA4iN87kfi1_0A4RZN1tdvz4bzHT7I2fDCHPIMGG0J4lYZW5L1xWy9MK2sFUWDy2GO7h8ManbRcx4R5xAMsmRc_20lhQGCAmDx5ppX4H--CY0L7nWObQv8cluM6RhvofJtRXSE4IxlMcgL-pgbcrqpge4yE9ykR3Z2hvLklolO_1o9w', 'Bangkit Academy - Cloud Computing Graduate', 'Google, GoTo, & Traveloka', 'September 2024 - Desember 2024', 'ID Kredensial: BANGKIT-CC-2024-8841')"
                  >
                    <img
                      alt="Bangkit Academy - Cloud Computing Graduate"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJf8e3fpk6UKYWGNndZ7iCi2O0QjSXhi23wd1V0Woz_nD8FgJcBhPpwExqMX9XK7JY7WT1bYSMA4iN87kfi1_0A4RZN1tdvz4bzHT7I2fDCHPIMGG0J4lYZW5L1xWy9MK2sFUWDy2GO7h8ManbRcx4R5xAMsmRc_20lhQGCAmDx5ppX4H--CY0L7nWObQv8cluM6RhvofJtRXSE4IxlMcgL-pgbcrqpge4yE9ykR3Z2hvLklolO_1o9w"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-2.5 py-1 bg-surface-card/90 backdrop-blur rounded font-label-code-sm text-label-code-sm font-semibold text-primary">
                        {"Google Cloud Partner"}
                      </span>
                      <span className="px-2.5 py-1 bg-secondary text-on-secondary rounded font-label-code-sm text-label-code-sm font-medium">
                        {"Distinction"}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8 flex flex-col justify-between flex-grow space-y-4">
                    <div>
                      <div className="flex items-center justify-between text-secondary font-label-code-sm text-label-code-sm font-semibold mb-1">
                        <span className="">{"GOOGLE, GOTO, & TRAVELOKA"}</span>
                        <span className="text-outline font-normal font-mono">
                          {"September 2024 - Desember 2024"}
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-2">
                        {"Bangkit Academy - Cloud Computing Graduate"}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        {
                          "Sertifikasi kelulusan kurikulum komputasi awan tingkat nasional. Memvalidasi keahlian perancangan arsitektur cloud Google Cloud Platform (GCP), microservices backend REST API, dan deployment serverless."
                        }
                      </p>
                    </div>
                    <div className="pt-4 border-t border-border-hairline flex items-center justify-between">
                      <Button
                        variant="portfolio"
                        size="reference"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary rounded-lg font-body-sm text-body-sm font-medium hover:bg-primary-container transition-colors shadow-sm text-on-primary"
                        data-action="openCertModal('https://lh3.googleusercontent.com/aida-public/AB6AXuCJf8e3fpk6UKYWGNndZ7iCi2O0QjSXhi23wd1V0Woz_nD8FgJcBhPpwExqMX9XK7JY7WT1bYSMA4iN87kfi1_0A4RZN1tdvz4bzHT7I2fDCHPIMGG0J4lYZW5L1xWy9MK2sFUWDy2GO7h8ManbRcx4R5xAMsmRc_20lhQGCAmDx5ppX4H--CY0L7nWObQv8cluM6RhvofJtRXSE4IxlMcgL-pgbcrqpge4yE9ykR3Z2hvLklolO_1o9w', 'Bangkit Academy - Cloud Computing Graduate', 'Google, GoTo, & Traveloka', 'September 2024 - Desember 2024', 'ID Kredensial: BANGKIT-CC-2024-8841')"
                      >
                        <span className="">{"Lihat Dokumen Lengkap"}</span>
                        <span className="material-symbols-outlined text-sm">{"open_in_new"}</span>
                      </Button>
                      <span className="font-label-code-sm text-xs text-outline font-mono">
                        {"VERIFIKASI AKTIF"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-card rounded-xl border border-border-hairline overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                  <div
                    className="relative w-full h-64 bg-surface-container overflow-hidden border-b border-border-hairline cursor-pointer"
                    data-action="openCertModal('https://lh3.googleusercontent.com/aida-public/AB6AXuDBY1iQ_RJFOUuaevMiQeodKzHjEkUH9DncVgvPXoVW_1muCQH30lSvFwTbVcEOur1rWKTEzhW520AtBkzuhVuNDg45dAew4Twt0qcrLl5dKmAN3U-epTMGI0yX2Q7xl7ERiiEm8t2QpkJPfI6KU3BGjr_8BaTJ4XX5wrVaqLLOE1LXhY00x0vQ-_c_2OcYA0Djph7lmymB6rtIzSzpvenu6YBzgBUzXsee2nIxQoBAzpv9bWPUAwJqIA', 'MagangHub Kemnaker RI - Program Magang Nasional', 'Kementerian Ketenagakerjaan RI', 'Januari 2024 - Juni 2024', 'ID Kredensial: KEMNAKER-MH/2024/7740')"
                  >
                    <img
                      alt="MagangHub Kemnaker RI - Program Magang Nasional"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBY1iQ_RJFOUuaevMiQeodKzHjEkUH9DncVgvPXoVW_1muCQH30lSvFwTbVcEOur1rWKTEzhW520AtBkzuhVuNDg45dAew4Twt0qcrLl5dKmAN3U-epTMGI0yX2Q7xl7ERiiEm8t2QpkJPfI6KU3BGjr_8BaTJ4XX5wrVaqLLOE1LXhY00x0vQ-_c_2OcYA0Djph7lmymB6rtIzSzpvenu6YBzgBUzXsee2nIxQoBAzpv9bWPUAwJqIA"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-2.5 py-1 bg-surface-card/90 backdrop-blur rounded font-label-code-sm text-label-code-sm font-semibold text-primary">
                        {"Kemnaker RI"}
                      </span>
                      <span className="px-2.5 py-1 bg-secondary text-on-secondary rounded font-label-code-sm text-label-code-sm font-medium">
                        {"High Distinction"}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8 flex flex-col justify-between flex-grow space-y-4">
                    <div>
                      <div className="flex items-center justify-between text-secondary font-label-code-sm text-label-code-sm font-semibold mb-1">
                        <span className="">{"KEMENTERIAN KETENAGAKERJAAN RI"}</span>
                        <span className="text-outline font-normal font-mono">
                          {"Januari 2024 - Juni 2024"}
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-2">
                        {"MagangHub Kemnaker RI - Program Magang Nasional"}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        {
                          "Sertifikat kelulusan program magang bersertifikat nasional Kemenaker RI dengan predikat Sangat Memuaskan (With High Distinction) dalam efisiensi operasional digital dan analisis alur kerja sistem."
                        }
                      </p>
                    </div>
                    <div className="pt-4 border-t border-border-hairline flex items-center justify-between">
                      <Button
                        variant="portfolio"
                        size="reference"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary rounded-lg font-body-sm text-body-sm font-medium hover:bg-primary-container transition-colors shadow-sm text-on-primary"
                        data-action="openCertModal('https://lh3.googleusercontent.com/aida-public/AB6AXuDBY1iQ_RJFOUuaevMiQeodKzHjEkUH9DncVgvPXoVW_1muCQH30lSvFwTbVcEOur1rWKTEzhW520AtBkzuhVuNDg45dAew4Twt0qcrLl5dKmAN3U-epTMGI0yX2Q7xl7ERiiEm8t2QpkJPfI6KU3BGjr_8BaTJ4XX5wrVaqLLOE1LXhY00x0vQ-_c_2OcYA0Djph7lmymB6rtIzSzpvenu6YBzgBUzXsee2nIxQoBAzpv9bWPUAwJqIA', 'MagangHub Kemnaker RI - Program Magang Nasional', 'Kementerian Ketenagakerjaan RI', 'Januari 2024 - Juni 2024', 'ID Kredensial: KEMNAKER-MH/2024/7740')"
                      >
                        <span className="">{"Lihat Dokumen Lengkap"}</span>
                        <span className="material-symbols-outlined text-sm">{"open_in_new"}</span>
                      </Button>
                      <span className="font-label-code-sm text-xs text-outline font-mono">
                        {"KEMNAKER RI"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-card rounded-xl border border-border-hairline overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                  <div
                    className="relative w-full h-64 bg-surface-container overflow-hidden border-b border-border-hairline cursor-pointer"
                    data-action="openCertModal('https://lh3.googleusercontent.com/aida-public/AB6AXuCYsSfYueWSbeDsijkeJs-P5CFMJHW4JO9dmzBc-A7Yp6pyozFApQV3D_8f-FrtcBj36awBvpquDR4YQfp7OxuAE_RORgTKdtw-j0iVwA0bkivOqA0rHNnjB-Q6Np1nnwnTGlj4EG5pHbp1q9jojlrb4glmlf-0vd79uLXWCF2R2BDWFx6RJ9SGdKnrLj8JapRCKUvgYw65Uh9y58pP5o-sxcn_FxmfMzR5SZtHjDZvzEUXKmYj5V3MgQ', 'Surat Keterangan Kinerja & Dedikasi Digitalisasi', 'BAPAS OKU Induk (Kemenimipas RI)', 'Desember 2024 - Juni 2025', 'ID Kredensial: W6.PAS.21-KP.04.01-1402')"
                  >
                    <img
                      alt="Surat Keterangan Kinerja & Dedikasi Digitalisasi"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYsSfYueWSbeDsijkeJs-P5CFMJHW4JO9dmzBc-A7Yp6pyozFApQV3D_8f-FrtcBj36awBvpquDR4YQfp7OxuAE_RORgTKdtw-j0iVwA0bkivOqA0rHNnjB-Q6Np1nnwnTGlj4EG5pHbp1q9jojlrb4glmlf-0vd79uLXWCF2R2BDWFx6RJ9SGdKnrLj8JapRCKUvgYw65Uh9y58pP5o-sxcn_FxmfMzR5SZtHjDZvzEUXKmYj5V3MgQ"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-2.5 py-1 bg-surface-card/90 backdrop-blur rounded font-label-code-sm text-label-code-sm font-semibold text-primary">
                        {"Kemenimipas RI"}
                      </span>
                      <span className="px-2.5 py-1 bg-status-active text-on-secondary rounded font-label-code-sm text-label-code-sm font-medium">
                        {"Surat Resmi"}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8 flex flex-col justify-between flex-grow space-y-4">
                    <div>
                      <div className="flex items-center justify-between text-secondary font-label-code-sm text-label-code-sm font-semibold mb-1">
                        <span className="">{"BAPAS OKU INDUK (KEMENIMIPAS RI)"}</span>
                        <span className="text-outline font-normal font-mono">
                          {"Desember 2024 - Juni 2025"}
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-2">
                        {"Surat Keterangan Kinerja & Dedikasi Digitalisasi"}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        {
                          "Surat rekomendasi & penghargaan resmi atas dedikasi dan kontribusi signifikan dalam perancangan dan implementasi aplikasi Buku Agenda Surat Digital serta Portal Publik Balai Pemasyarakatan."
                        }
                      </p>
                    </div>
                    <div className="pt-4 border-t border-border-hairline flex items-center justify-between">
                      <Button
                        variant="portfolio"
                        size="reference"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary rounded-lg font-body-sm text-body-sm font-medium hover:bg-primary-container transition-colors shadow-sm text-on-primary"
                        data-action="openCertModal('https://lh3.googleusercontent.com/aida-public/AB6AXuCYsSfYueWSbeDsijkeJs-P5CFMJHW4JO9dmzBc-A7Yp6pyozFApQV3D_8f-FrtcBj36awBvpquDR4YQfp7OxuAE_RORgTKdtw-j0iVwA0bkivOqA0rHNnjB-Q6Np1nnwnTGlj4EG5pHbp1q9jojlrb4glmlf-0vd79uLXWCF2R2BDWFx6RJ9SGdKnrLj8JapRCKUvgYw65Uh9y58pP5o-sxcn_FxmfMzR5SZtHjDZvzEUXKmYj5V3MgQ', 'Surat Keterangan Kinerja & Dedikasi Digitalisasi', 'BAPAS OKU Induk (Kemenimipas RI)', 'Desember 2024 - Juni 2025', 'ID Kredensial: W6.PAS.21-KP.04.01-1402')"
                      >
                        <span className="">{"Lihat Dokumen Lengkap"}</span>
                        <span className="material-symbols-outlined text-sm">{"open_in_new"}</span>
                      </Button>
                      <span className="font-label-code-sm text-xs text-outline font-mono">
                        {"REKOMENDASI"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 mt-10 border-t border-border-hairline font-label-code-sm text-label-code-sm text-on-surface-variant">
                <div className="flex items-center gap-2"></div>
                <Button
                  variant="portfolio"
                  size="reference"
                  className="px-3.5 py-1.5 rounded-lg border border-border-hairline bg-surface-card hover:bg-surface-subtle text-primary font-semibold transition-colors flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-base">{"grid_view"}</span>
                  <span className="">{"Tampilkan Semua (Grid View 4 Sertifikat)"}</span>
                </Button>
              </div>
            </div>
          </section>

          <section className="w-full py-16 max-w-7xl mx-auto px-6 lg:px-12" id="contact">
            <div className="flex flex-col gap-2 mb-12">
              <div className="flex items-center gap-2 text-secondary font-label-code-md text-label-code-md font-semibold">
                <span className="">{"06."}</span>
                <span className="">{"MARI BERKOLABORASI"}</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
                {
                  "\n        Terbuka untuk peluang kerja full-time, kontrak, maupun kemitraan proyek sistem.\n      "
                }
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="bg-surface-card p-6 rounded-xl border border-border-hairline shadow-sm">
                  <span className="font-label-code-sm text-label-code-sm text-on-surface-variant">
                    {"SURAT ELEKTRONIK UTAMA"}
                  </span>
                  <div className="flex items-center justify-between mt-2">
                    <span
                      className="font-title-md text-title-md text-primary font-semibold truncate"
                      id="email-text"
                    >
                      {"haikalalbanna2313@gmail.com"}
                    </span>
                    <Button
                      variant="portfolio"
                      size="reference"
                      className="p-2 text-on-surface-variant hover:text-primary transition-colors shrink-0"
                      title="Salin Email"
                      data-action="navigator.clipboard.writeText('haikalalbanna2313@gmail.com'); const b = this.querySelector('span'); b.innerText = 'done'; setTimeout(() => b.innerText = 'content_copy', 2000);"
                    >
                      <span className="material-symbols-outlined text-lg">{"content_copy"}</span>
                    </Button>
                  </div>
                </div>
                <div className="bg-surface-card p-6 rounded-xl border border-border-hairline shadow-sm">
                  <span className="font-label-code-sm text-label-code-sm text-on-surface-variant">
                    {"DOMISILI & KESIAPAN"}
                  </span>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center gap-2 text-primary font-medium">
                      <span className="material-symbols-outlined text-secondary text-lg">
                        {"location_on"}
                      </span>
                      <span className="">{"Palembang, Sumatera Selatan, Indonesia"}</span>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                      <span className="material-symbols-outlined text-status-active text-lg">
                        {"schedule"}
                      </span>
                      <span className="">
                        {"Siap bergabung segera (On-site / Remote / Hybrid)"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-card p-6 rounded-xl border border-border-hairline shadow-sm">
                  <span className="font-label-code-sm text-label-code-sm text-on-surface-variant">
                    {"JEJARING PROFESIONAL"}
                  </span>
                  <div className="grid grid-cols-3 gap-3 mt-3">
                    <a
                      className="p-3 rounded-lg border border-border-hairline bg-surface-subtle hover:bg-surface-card text-center font-label-code-sm text-label-code-sm text-primary transition-colors flex flex-col items-center gap-1.5"
                      href="https://github.com"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path>
                      </svg>
                      <span className="">{"GitHub"}</span>
                    </a>
                    <a
                      className="p-3 rounded-lg border border-border-hairline bg-surface-subtle hover:bg-surface-card text-center font-label-code-sm text-label-code-sm text-primary transition-colors flex flex-col items-center gap-1.5"
                      href="https://linkedin.com"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                      </svg>
                      <span className="">{"LinkedIn"}</span>
                    </a>
                    <a
                      className="p-3 rounded-lg border border-border-hairline bg-surface-subtle hover:bg-surface-card text-center font-label-code-sm text-label-code-sm text-primary transition-colors flex flex-col items-center gap-1.5"
                      href="https://instagram.com"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <span className="material-symbols-outlined text-xl">{"camera_alt"}</span>
                      <span className="">{"Instagram"}</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 bg-surface-card p-8 rounded-xl border border-border-hairline shadow-sm">
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-2">
                  {"Kirim Pesan Langsung"}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
                  {
                    "Silakan isi formulir di bawah ini untuk memulai percakapan atau mendiskusikan peluang kerja sama."
                  }
                </p>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label
                        className="font-label-code-sm text-label-code-sm text-primary font-medium"
                        htmlFor="contact-0"
                      >
                        {"Nama Lengkap *"}
                      </label>
                      <input
                        className="w-full px-3.5 py-2.5 bg-surface rounded-lg border border-border-hairline text-on-surface font-body-sm text-body-sm placeholder:text-outline-variant focus:outline-none focus:border-primary"
                        placeholder="Contoh: Rian Pratama"
                        required={true}
                        type="text"
                        id="contact-0"
                        name="name"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        className="font-label-code-sm text-label-code-sm text-primary font-medium"
                        htmlFor="contact-1"
                      >
                        {"Alamat Email *"}
                      </label>
                      <input
                        className="w-full px-3.5 py-2.5 bg-surface rounded-lg border border-border-hairline text-on-surface font-body-sm text-body-sm placeholder:text-outline-variant focus:outline-none focus:border-primary"
                        placeholder="email@perusahaan.com"
                        required={true}
                        type="email"
                        id="contact-1"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="font-label-code-sm text-label-code-sm text-primary font-medium"
                      htmlFor="contact-2"
                    >
                      {"Subjek / Perihal *"}
                    </label>
                    <input
                      className="w-full px-3.5 py-2.5 bg-surface rounded-lg border border-border-hairline text-on-surface font-body-sm text-body-sm placeholder:text-outline-variant focus:outline-none focus:border-primary"
                      placeholder="Penawaran Kerja / Proyek Pengembangan Sistem"
                      required={true}
                      type="text"
                      id="contact-2"
                      name="subject"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="font-label-code-sm text-label-code-sm text-primary font-medium"
                      htmlFor="contact-3"
                    >
                      {"Pesan Lengkap *"}
                    </label>
                    <textarea
                      className="w-full px-3.5 py-2.5 bg-surface rounded-lg border border-border-hairline text-on-surface font-body-sm text-body-sm placeholder:text-outline-variant focus:outline-none focus:border-primary resize-none"
                      placeholder="Tuliskan gambaran posisi, proyek, atau kebutuhan yang ingin didiskusikan..."
                      required={true}
                      rows={4}
                      id="contact-3"
                      name="message"
                    ></textarea>
                  </div>
                  <Button
                    variant="portfolio"
                    size="reference"
                    className="w-full py-3.5 px-6 bg-primary rounded-lg font-body-md text-body-md font-medium hover:bg-primary-container transition-all flex items-center justify-center gap-2 shadow-sm text-on-primary"
                    type="submit"
                  >
                    <span className="">{"Kirim Pesan"}</span>
                    <span className="material-symbols-outlined text-sm">{"send"}</span>
                  </Button>
                </form>
              </div>
            </div>
          </section>

          <div className="w-full bg-surface-subtle border-t border-border-hairline py-4 px-6 lg:px-12 text-center text-on-surface-variant font-label-code-sm text-label-code-sm flex flex-col sm:flex-row items-center justify-between gap-2 max-w-7xl mx-auto">
            <span className="">
              {"<Haikal Tirta Albanna /> • Built with precision & modern engineering standards."}
            </span>
            <span className="">{"Copyright © 2025 Haikal Albanna. All rights reserved."}</span>
          </div>
        </div>
      </main>
      <footer className="w-full bg-surface-container-lowest border-t border-border-hairline py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-label-code-md text-label-code-md font-semibold text-primary">
              {"<Haikal.dev />"}
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {
                "Full-Stack Developer & Data Analyst engineering scalable web software and data pipelines."
              }
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
              data-path="overview"
              href="#home"
            >
              {"Overview"}
            </a>
            <a
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
              data-path="projects"
              href="#projects"
            >
              {"Case Studies"}
            </a>
            <a
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
              data-path="experience"
              href="#experience"
            >
              {"Career"}
            </a>
            <a
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
              data-path="contact"
              href="#contact"
            >
              {"Get in Touch"}
            </a>
          </div>
          <div className="flex items-center gap-3 text-on-surface-variant font-label-code-sm text-label-code-sm">
            <span className="">{"LATENCY: 24ms"}</span>
            <span className="inline-block w-1 h-1 rounded-full bg-outline-variant"></span>
            <span className="">{"© 2025 Haikal Tirta Albanna"}</span>
          </div>
        </div>
      </footer>

      <div
        className="fixed inset-0 z-50 items-center justify-center bg-primary/70 backdrop-blur-md p-4 overflow-y-auto hidden"
        id="project-modal"
      >
        <div className="relative w-full max-w-4xl bg-surface-card rounded-2xl border border-border-hairline shadow-md overflow-hidden my-8 max-h-[90vh] flex flex-col">
          <div className="flex items-center justify-between px-6 py-4 border-b border-border-hairline bg-surface-subtle">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-outline-variant/60"></span>
              <span className="w-3 h-3 rounded-full bg-outline-variant/60"></span>
              <span className="w-3 h-3 rounded-full bg-outline-variant/60"></span>
              <span className="ml-2 font-mono text-outline font-medium text-xs">
                {"<Project_Detail.vue />"}
              </span>
            </div>
            <Button
              variant="portfolio"
              size="reference"
              className="w-8 h-8 rounded-lg border border-border-hairline bg-surface-card hover:bg-surface-subtle text-on-surface-variant hover:text-primary flex items-center justify-center transition-colors"
              title="Tutup Modal (Esc)"
              data-action="closeProjectModal()"
            >
              <span className="material-symbols-outlined text-lg">{"close"}</span>
            </Button>
          </div>
          <div className="p-6 lg:p-8 overflow-y-auto space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span
                    id="pm-badge-type"
                    className="px-2.5 py-0.5 rounded font-label-code-sm text-label-code-sm font-semibold bg-surface-subtle text-primary border border-border-hairline"
                  >
                    {"Internal System"}
                  </span>
                  <span
                    id="pm-badge-status"
                    className="px-2.5 py-0.5 rounded font-label-code-sm text-label-code-sm font-medium bg-secondary text-on-secondary"
                  >
                    {"Production"}
                  </span>
                </div>
                <h2
                  id="pm-title"
                  className="font-headline-md text-headline-md text-primary font-bold pt-1"
                >
                  {"Buku Agenda Surat Digital - Balai Pemasyarakatan OKU Induk"}
                </h2>
              </div>
              <span
                id="pm-period"
                className="font-label-code-sm text-label-code-sm text-on-surface-variant font-mono bg-surface-subtle px-3 py-1.5 rounded-lg border border-border-hairline"
              >
                {"DES 2024 - JUNI 2025"}
              </span>
            </div>
            <div className="w-full h-72 sm:h-80 rounded-xl overflow-hidden border border-border-hairline bg-surface-container relative">
              <img
                id="pm-image"
                alt="Preview Proyek"
                className="w-full h-full object-cover object-top"
                src="https://lh3.googleusercontent.com/aida/AEtjO1WDyohY0UKCK-2iFZGC5nSO97ZaQQW4mdSHRtoLWReCIG5IuGz76qUEnGo3t1K7dvX3az1nQZARBMcC4ezZHQMswNftTNyVf7U93JrjQrstI_rX1xzSp6EOKRzbB8J6t-a5xs0OzQdQz_hjV1vvSYNMU1FGtqiWIBOyISXeCLYezn6kKakmCyw5kOCFQVYZZKyNfOi9BRHRY5zMYNEw6wKtIZUxfwpH-feCp0Z_T8Hlt_w2Yac0Jhvs6L6b"
              />
              <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-surface-card/90 backdrop-blur border border-border-hairline text-primary font-label-code-sm text-xs font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-base">
                  {"verified"}
                </span>
                <span id="pm-institution-tag" className="">
                  {"Production Deployment • Kemenimipas RI"}
                </span>
              </div>
            </div>
            <div>
              <h4 className="font-label-code-sm text-label-code-sm text-secondary font-semibold uppercase tracking-wider mb-2">
                {"Deskripsi & Latar Belakang"}
              </h4>
              <p
                id="pm-description"
                className="font-body-md text-body-md text-on-surface-variant leading-relaxed"
              >
                {
                  "Platform digital terintegrasi yang dirancang khusus untuk memodernisasi sistem tata kelola persuratan dinas dan pengarsipan birokrasi di lingkungan Balai Pemasyarakatan Kelas II OKU Induk. Sistem ini menggantikan pencatatan manual berbasis buku fisik dengan arsitektur web modern yang menjamin kecepatan penelusuran dokumen, akurasi penomoran surat otomatis terstandar, serta keamanan data persuratan aparatur sipil."
                }
              </p>
            </div>
            <div className="bg-surface-subtle rounded-xl p-5 border border-border-hairline">
              <h4 className="font-label-code-sm text-label-code-sm text-primary font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-base">
                  {"check_circle"}
                </span>
                {" Fitur-Fitur Kunci & Fungsionalitas Sistem"}
              </h4>
              <ul
                id="pm-features"
                className="space-y-2.5 text-body-md font-body-md text-on-surface-variant"
              >
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-base mt-1">
                    {"done"}
                  </span>
                  <span className="">
                    <strong>{"Penomoran Surat Dinas Otomatis:"}</strong>
                    {
                      " Penghasil nomor surat berurutan sesuai pola tata naskah dinas kementerian secara real-time."
                    }
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-base mt-1">
                    {"done"}
                  </span>
                  <span className="">
                    <strong>{"Digitalisasi & Pengarsipan Berkas:"}</strong>
                    {
                      " Penyimpanan berkas PDF surat masuk dan keluar secara terstruktur dengan fitur penelusuran instan."
                    }
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-base mt-1">
                    {"done"}
                  </span>
                  <span className="">
                    <strong>{"Role-Based Access Control (RBAC):"}</strong>
                    {" Hak akses tersegregasi antara Tata Usaha dan Pejabat Penandatangan."}
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-label-code-sm text-label-code-sm text-secondary font-semibold uppercase tracking-wider mb-3">
                {"Teknologi & Framework"}
              </h4>
              <div id="pm-tech-stack" className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                <div className="p-3 rounded-lg border border-border-hairline bg-surface-subtle flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-tech-badge-cyan text-xl">
                    {"devices"}
                  </span>
                  <div>
                    <span className="font-label-code-sm font-semibold text-primary block">
                      {"React.js"}
                    </span>
                    <span className="text-[10px] text-outline font-label-code-sm block">
                      {"Frontend SPA"}
                    </span>
                  </div>
                </div>
                <div className="p-3 rounded-lg border border-border-hairline bg-surface-subtle flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-primary text-xl">{"code"}</span>
                  <div>
                    <span className="font-label-code-sm font-semibold text-primary block">
                      {"TypeScript"}
                    </span>
                    <span className="text-[10px] text-outline font-label-code-sm block">
                      {"Type Safety"}
                    </span>
                  </div>
                </div>
                <div className="p-3 rounded-lg border border-border-hairline bg-surface-subtle flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-tech-badge-cyan text-xl">
                    {"palette"}
                  </span>
                  <div>
                    <span className="font-label-code-sm font-semibold text-primary block">
                      {"Tailwind CSS"}
                    </span>
                    <span className="text-[10px] text-outline font-label-code-sm block">
                      {"Styling"}
                    </span>
                  </div>
                </div>
                <div className="p-3 rounded-lg border border-border-hairline bg-surface-subtle flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-xl">{"dns"}</span>
                  <div>
                    <span className="font-label-code-sm font-semibold text-primary block">
                      {"Node.js"}
                    </span>
                    <span className="text-[10px] text-outline font-label-code-sm block">
                      {"REST Service"}
                    </span>
                  </div>
                </div>
                <div className="p-3 rounded-lg border border-border-hairline bg-surface-subtle flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-xl">
                    {"database"}
                  </span>
                  <div>
                    <span className="font-label-code-sm font-semibold text-primary block">
                      {"MySQL"}
                    </span>
                    <span className="text-[10px] text-outline font-label-code-sm block">
                      {"ACID RDBMS"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 py-4 border-t border-border-hairline bg-surface-subtle flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-label-code-sm text-outline">
              {"Tekan "}
              <kbd className="px-1.5 py-0.5 rounded bg-surface-card border border-border-hairline text-primary font-mono">
                {"ESC"}
              </kbd>
              {" untuk menutup"}
            </div>
            <div className="flex items-center gap-3">
              <a
                className="inline-flex items-center gap-2 px-4 py-2 border border-border-hairline bg-surface-card rounded-lg font-body-sm text-body-sm font-medium text-on-surface hover:bg-surface-subtle transition-colors"
                href="https://github.com"
                rel="noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-base">{"code"}</span>
                <span className="">{"Source Code GitHub"}</span>
              </a>
              <Button
                variant="portfolio"
                size="reference"
                className="px-4 py-2 rounded-lg border border-border-hairline bg-surface-card text-on-surface-variant hover:text-primary font-body-sm text-body-sm font-medium transition-colors"
                data-action="closeProjectModal()"
              >
                {"Tutup"}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="fixed inset-0 z-50 items-center justify-center bg-primary/70 backdrop-blur-md p-4 overflow-y-auto hidden"
        id="certModal"
      >
        <div className="relative w-full max-w-4xl bg-surface-card rounded-2xl border border-border-hairline shadow-md overflow-hidden my-8 max-h-[90vh] flex flex-col">
          <div className="flex items-center justify-between px-6 py-4 border-b border-border-hairline bg-surface-subtle">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-outline-variant/60"></span>
              <span className="w-3 h-3 rounded-full bg-outline-variant/60"></span>
              <span className="w-3 h-3 rounded-full bg-outline-variant/60"></span>
              <span className="ml-2 font-mono text-outline font-medium text-xs">
                {"<Certificate_Preview.vue />"}
              </span>
            </div>
            <Button
              variant="portfolio"
              size="reference"
              className="w-8 h-8 rounded-lg border border-border-hairline bg-surface-card hover:bg-surface-subtle text-on-surface-variant hover:text-primary flex items-center justify-center transition-colors"
              title="Tutup Modal (Esc)"
              data-action="closeCertModal()"
            >
              <span className="material-symbols-outlined text-lg">{"close"}</span>
            </Button>
          </div>
          <div className="p-6 lg:p-8 overflow-y-auto space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span
                    className="px-2.5 py-0.5 rounded font-label-code-sm text-label-code-sm font-semibold bg-surface-subtle text-primary border border-border-hairline"
                    id="cert-modal-issuer"
                  >
                    {"Kemendikbudristek & LLDIKTI"}
                  </span>
                  <span className="px-2.5 py-0.5 rounded font-label-code-sm text-label-code-sm font-medium bg-secondary text-on-secondary">
                    {"Terverifikasi Resmi"}
                  </span>
                </div>
                <h2
                  className="font-headline-md text-headline-md text-primary font-bold pt-1"
                  id="cert-modal-title"
                >
                  {"Sertifikat Kelulusan Program MSIB Batch 6"}
                </h2>
              </div>
              <span
                className="font-label-code-sm text-label-code-sm text-on-surface-variant font-mono bg-surface-subtle px-3 py-1.5 rounded-lg border border-border-hairline"
                id="cert-modal-date"
              >
                {"Februari 2024 - Juni 2024"}
              </span>
            </div>
            <div className="w-full h-80 sm:h-[440px] rounded-xl overflow-hidden border border-border-hairline bg-surface-container relative flex items-center justify-center">
              <img
                alt="Dokumen Sertifikat Preview"
                className="w-full h-full object-contain bg-surface-container-high"
                id="cert-modal-image"
                src="https://lh3.googleusercontent.com/aida/AEtjO1VsyrBbsGyPdZMjoNldtswax2iZhkTMEuMW46pmbnhoGqr65vpY_Y2yGZImGV31uvmqvPxKTXU3NPyHdp29jYucvxz8Lno1RWhO52oUn9bY50WjL7V8STXFEKVpMn7bAZmkxM8uhN2OVxqy4_k_P7hB8sY3auETYzWuIQctnaCKGDjc5vwqZnTF7KA5Bg9T9NbH4hJWKUzsLXsWmSeEU_yPkQy7f23JE_1xNEBAaV4yhJfUnDlf5Rf_-lI"
              />
              <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-surface-card/90 backdrop-blur border border-border-hairline text-primary font-label-code-sm text-xs font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-base">
                  {"verified"}
                </span>
                <span id="cert-modal-cred" className="">
                  {"ID Kredensial: MSIB-6/LL2/2024/0912"}
                </span>
              </div>
            </div>
          </div>
          <div className="px-6 py-4 border-t border-border-hairline bg-surface-subtle flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-label-code-sm text-outline">
              {"Tekan "}
              <kbd className="px-1.5 py-0.5 rounded bg-surface-card border border-border-hairline text-primary font-mono">
                {"ESC"}
              </kbd>
              {" untuk menutup"}
            </div>
            <div className="flex items-center gap-3">
              <a
                className="inline-flex items-center gap-2 px-4 py-2 border border-border-hairline bg-surface-card rounded-lg font-body-sm text-body-sm font-medium text-on-surface hover:bg-surface-subtle transition-colors"
                href="https://lh3.googleusercontent.com/aida/AEtjO1VsyrBbsGyPdZMjoNldtswax2iZhkTMEuMW46pmbnhoGqr65vpY_Y2yGZImGV31uvmqvPxKTXU3NPyHdp29jYucvxz8Lno1RWhO52oUn9bY50WjL7V8STXFEKVpMn7bAZmkxM8uhN2OVxqy4_k_P7hB8sY3auETYzWuIQctnaCKGDjc5vwqZnTF7KA5Bg9T9NbH4hJWKUzsLXsWmSeEU_yPkQy7f23JE_1xNEBAaV4yhJfUnDlf5Rf_-lI"
                id="cert-modal-download"
                rel="noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-base">{"download"}</span>
                <span className="">{"Unduh Berkas PDF"}</span>
              </a>
              <Button
                variant="portfolio"
                size="reference"
                className="px-5 py-2 rounded-lg bg-primary hover:bg-primary-container font-body-sm text-body-sm font-medium transition-colors shadow-sm text-on-primary"
                data-action="closeCertModal()"
              >
                {"Tutup"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
