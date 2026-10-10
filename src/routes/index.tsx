import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/portfolio/portfolio-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Haikal Tirta Albanna | Full-Stack Developer & Data Analyst" },
      {
        name: "description",
        content:
          "Portfolio Haikal Tirta Albanna: pengembangan web, analisis data, proyek digitalisasi institusi, dan pengalaman profesional.",
      },
      { property: "og:title", content: "Haikal Tirta Albanna | Portfolio" },
      {
        property: "og:description",
        content:
          "Full-Stack Developer & Data Analyst di Palembang. Jelajahi proyek, keahlian, dan kredensial profesional Haikal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});
