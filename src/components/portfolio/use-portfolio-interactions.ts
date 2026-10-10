import { useEffect, type RefObject } from "react";
import { projectData } from "./project-data";

const active = "bg-primary text-on-primary";
const inactive = "bg-surface-card text-on-surface-variant";
const translations: Record<string, string> = {
  "Haikal Tirta Albanna": "Haikal Tirta Albanna",
  "Lihat Proyek": "View Projects",
  "Unduh CV": "Download CV",
  "01. TENTANG SAYA": "01. ABOUT ME",
  "TENTANG SAYA": "ABOUT ME",
  "Latar Belakang & Filosofi Rekayasa": "Background & Engineering Philosophy",
  "Pendidikan Formal": "Education",
  "Komitmen Kualitas & Clean Code": "Quality & Clean Code",
  "Pengalaman Nyata Institusi": "Institutional Experience",
  "PROYEK UNGGULAN": "FEATURED PROJECTS",
  "Detail Proyek": "Project Details",
  "MARI BERKOLABORASI": "LET’S COLLABORATE",
  "Kirim Pesan Langsung": "Send a Message",
  "Kirim Pesan": "Send Message",
  "Nama Lengkap *": "Full Name *",
  "Alamat Email *": "Email Address *",
  "Subjek / Perihal *": "Subject *",
  "Pesan Lengkap *": "Message *",
  "Lihat Dokumen Lengkap": "View Full Document",
  Tutup: "Close",
  "Mengubah ide menjadi aplikasi yang bermanfaat.": "Turning ideas into useful applications.",
  "Terbuka untuk peluang kerja full-time, kontrak, maupun kemitraan proyek sistem.":
    "Open to full-time roles, contracts, and project partnerships.",
  "Implementasi nyata penyelesaian masalah data & transformasi digital instansi.":
    "Real-world solutions for data challenges and institutional digital transformation.",
  "Selamat datang di portofolio pribadi saya! Saya merupakan seorang Full-Stack Developer dan Data Analyst yang memiliki ketertarikan dalam mengembangkan solusi digital yang fungsional dan inovatif. Melalui portofolio ini, Anda dapat melihat berbagai proyek yang telah saya kerjakan, mulai dari website, landing page, hingga aplikasi berbasis web dengan pengembangan frontend maupun backend. Setiap proyek dirancang dengan mengutamakan kualitas, tampilan yang responsif, serta pengalaman pengguna yang optimal untuk memberikan solusi yang efektif dan bernilai.":
    "Welcome to my portfolio! I am a Full-Stack Developer and Data Analyst interested in creating functional and innovative digital solutions. Explore projects I have worked on, from websites and landing pages to web applications with frontend and backend development. Each project prioritizes quality, responsive design, and an optimal user experience to deliver effective, valuable solutions.",
};

export function usePortfolioInteractions(container: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const root = container.current;
    if (!root) return;
    const q = <T extends HTMLElement = HTMLElement>(selector: string) =>
      root.querySelector<T>(selector);
    const all = (selector: string) => Array.from(root.querySelectorAll<HTMLElement>(selector));
    const certificateGrid = q<HTMLElement>("#certificate-grid");
    if (certificateGrid) {
      const cards = Array.from(certificateGrid.children);
      cards
        .sort((left, right) => {
          const leftOrder = Number(left.querySelector("img")?.getAttribute("data-certificate-order"));
          const rightOrder = Number(right.querySelector("img")?.getAttribute("data-certificate-order"));
          return leftOrder - rightOrder;
        })
        .forEach((card) => certificateGrid.append(card));
    }
    let filter = "all",
      query = "",
      page = 1,
      showAll = false;
    let lastFocus: HTMLElement | null = null;
    let certificatePages: string[] = [];
    let certificateTitle = "";
    let certificatePageIndex = 0;
    const setText = (id: string, text: string) => {
      const el = q("#" + id);
      if (el) el.textContent = text;
    };
    const showCertificatePage = () => {
      const pageUrl = certificatePages[certificatePageIndex];
      if (!pageUrl) return;
      const image = q<HTMLImageElement>("#cert-modal-image");
      if (image) {
        image.src = pageUrl;
        image.alt = `${certificateTitle} - Halaman ${certificatePageIndex + 1}`;
      }
      const controls = q<HTMLElement>("#cert-modal-page-controls");
      if (controls) controls.hidden = certificatePages.length < 2;
      const previous = q<HTMLButtonElement>("#cert-modal-page-previous");
      const next = q<HTMLButtonElement>("#cert-modal-page-next");
      if (previous) previous.disabled = certificatePageIndex === 0;
      if (next) next.disabled = certificatePageIndex === certificatePages.length - 1;
      setText(
        "cert-modal-page-count",
        `Halaman ${certificatePageIndex + 1} dari ${certificatePages.length}`,
      );
      const download = q<HTMLAnchorElement>("#cert-modal-download");
      if (download) {
        download.href = pageUrl;
        download.textContent = certificatePages.length > 1
          ? `Buka Halaman ${certificatePageIndex + 1}`
          : "Buka Gambar Asli";
      }
    };
    const selectButton = (el: HTMLElement, selected: boolean) => {
      el.classList.remove(...(selected ? inactive : active).split(" "));
      el.classList.add(...(selected ? active : inactive).split(" "));
      el.setAttribute("aria-pressed", String(selected));
    };
    const renderProjects = () => {
      const cards = all(".project-card");
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
        showAll ? "Mode Paginasi (4 per Halaman)" : `Tampilkan Semua (${matches.length} Proyek)`,
      );
      let empty = q("[data-empty='projects']");
      if (!empty) {
        empty = document.createElement("p");
        empty.dataset["empty"] = "projects";
        empty.textContent = "Tidak ada proyek yang ditemukan.";
        q("#projects-grid")?.after(empty);
      }
      empty.classList.toggle("hidden", matches.length > 0);
    };
    const close = () => {
      all("#project-modal,#certModal").forEach((m) => {
        m.classList.add("hidden");
        m.classList.remove("flex");
      });
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
    const originalNodes: [Text, string][] = [];
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode as Text;
      if (translations[node.textContent?.trim() || ""])
        originalNodes.push([node, node.textContent || ""]);
    }
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
        const d = id && id in projectData ? projectData[id as keyof typeof projectData] : undefined;
        if (!d) return;
        for (const [id, value] of Object.entries({
          "pm-title": d.title,
          "pm-badge-type": d.badgeType,
          "pm-badge-status": d.badgeStatus,
          "pm-period": d.period,
          "pm-institution-tag": d.institution,
          "pm-description": d.desc,
        }))
          setText(id, value);
        const img = q<HTMLImageElement>("#pm-image");
        if (img) {
          img.src = d.img;
          img.alt = d.title;
        }
        const features = q("#pm-features");
        if (features) {
          features.replaceChildren(
            ...d.features.map((f) => {
              const li = document.createElement("li");
              li.textContent = "✓  " + f;
              return li;
            }),
          );
        }
        const tech = q("#pm-tech-stack");
        if (tech)
          tech.replaceChildren(
            ...d.tech.map((t) => {
              const el = document.createElement("div");
              el.className =
                "p-3 rounded-lg border border-border-hairline bg-surface-subtle font-label-code-sm text-label-code-sm";
              el.textContent = t.name + " · " + t.role;
              return el;
            }),
          );
        open("project-modal");
      } else if (action.startsWith("openCertModal")) {
        const card = b.closest<HTMLElement>("#certificates .group");
        const preview = card?.querySelector<HTMLImageElement>("img");
        const imageUrl = preview?.getAttribute("src") || "";
        const secondPage = preview?.dataset["certImageTwo"] || "";
        const title = card?.querySelector("h3")?.textContent?.trim() || "Dokumen Sertifikat";
        const issuer =
          card?.querySelector(".certificate-issuer, div.text-secondary")?.textContent?.trim() || "";
        const date = card?.querySelector(".certificate-date")?.textContent?.trim() || "";
        certificateTitle = title;
        certificatePages = [imageUrl, secondPage].filter((pageUrl) => Boolean(pageUrl));
        certificatePageIndex = 0;
        setText("cert-modal-title", title);
        setText("cert-modal-issuer", issuer);
        setText("cert-modal-date", date);
        setText("cert-modal-cred", certificatePages.length > 1 ? "Dokumen Multi-Halaman" : title);
        showCertificatePage();
        open("certModal");
      } else if (action === "certificate-page-previous") {
        certificatePageIndex = Math.max(0, certificatePageIndex - 1);
        showCertificatePage();
      } else if (action === "certificate-page-next") {
        certificatePageIndex = Math.min(certificatePages.length - 1, certificatePageIndex + 1);
        showCertificatePage();
      } else if (action === "showAllCertificates()") {
        q("#certificate-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (action.startsWith("close")) close();
      else if (action.includes("classList.toggle('dark')"))
        document.documentElement.classList.toggle("dark");
      else if (action === "mobile-menu") {
        const nav = q("header nav");
        nav?.classList.toggle("mobile-open");
        b.setAttribute("aria-expanded", String(nav?.classList.contains("mobile-open")));
      } else if (action.startsWith("language-")) {
        const english = action === "language-en";
        originalNodes.forEach(([node, text]) => {
          node.textContent = english ? translations[text.trim()] || text : text;
        });
        document.documentElement.lang = english ? "en" : "id";
        all('[data-action^="language-"]').forEach((el) =>
          selectButton(el, el.dataset["action"] === action),
        );
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
    all('#home a[href="#contact"]').forEach((a) => {
      if (a.textContent?.includes("Minta CV")) {
        a.setAttribute(
          "href",
          "mailto:haikalalbanna2313@gmail.com?subject=Permintaan%20CV%20Haikal%20Tirta%20Albanna",
        );
        a.setAttribute("title", "Minta CV melalui email");
      }
    });
    renderProjects();
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
