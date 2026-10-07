import { createFileRoute, Link } from "@tanstack/react-router";
import { CaseStudyGrid } from "@/components/CaseStudyGrid";
import { Navbar } from "@/components/Navbar";

import { projects } from "@/lib/projects";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case studies — Nithin Pranav, Product Manager" },
      {
        name: "description",
        content:
          "Product case studies on discovery, trust, habit loops, and marketplace balance — each with a deck and a written walkthrough.",
      },
      { property: "og:title", content: "Case studies — Nithin Pranav" },
      {
        property: "og:description",
        content: "Product teardowns and case studies, each with a deck and a written walkthrough.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CaseStudies,
});

function CaseStudies() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-paper antialiased">
      <Navbar />

      <main className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <section className="grid grid-cols-12 gap-6 pb-10 pt-9 sm:pb-12 sm:pt-14">
          <div className="col-span-12 md:col-span-8">
            <p className="font-mono text-[11px] text-signal">(a) — LIBRARY</p>
            <h1 className="mt-4 text-balance font-display text-5xl font-semibold leading-[0.9] sm:text-6xl md:text-8xl">
              Case studies
            </h1>
            <p className="mt-6 max-w-[52ch] text-pretty text-lg font-light leading-snug text-paper/75">
              Product teardowns and structured studies. Open any one to read the deck and the
              walkthrough without leaving the page.
            </p>
          </div>
          <div className="col-span-12 flex flex-col justify-end gap-2 border-paper/15 font-mono text-[10px] text-paper/45 md:col-span-4 md:border-l md:border-dashed md:pl-6">
            <span>COUNT — {String(projects.length).padStart(2, "0")} STUDIES</span>
            <span>FORMAT — DECK + WALKTHROUGH</span>
          </div>
        </section>

        <CaseStudyGrid includeHidden />
      </main>

      <footer className="border-t border-paper/10">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-4 px-5 py-6 font-mono text-[10px] sm:flex-row sm:items-center sm:px-6">
          <div className="flex flex-wrap items-center gap-4 text-paper/60">
            <Link to="/certifications" className="transition-colors hover:text-signal">
              CERTIFICATIONS
            </Link>
            <span className="text-paper/20">·</span>
            <Link to="/projects" className="transition-colors hover:text-signal">
              PROJECTS
            </Link>
            <span className="text-paper/20">·</span>
            <Link to="/" className="transition-colors hover:text-signal">
              HOME
            </Link>
            <span className="text-paper/20">·</span>
            <a
              href="https://calendly.com/nithin-pranav/95"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-signal"
            >
              BOOK 15 MIN →
            </a>
          </div>
          <div className="flex flex-col gap-1 text-paper/35 sm:text-right">
            <span>NITHIN PRANAV — PRODUCT MONOGRAPH / 2026</span>
            <span>SPACE GROTESK · DM SANS · JETBRAINS MONO</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
