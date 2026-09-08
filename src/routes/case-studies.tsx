import { createFileRoute, Link } from "@tanstack/react-router";
import { CaseStudyGrid } from "@/components/CaseStudyGrid";
import { ThemeToggle } from "@/components/ThemeToggle";

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
      <header className="sticky top-0 z-20 border-b border-paper/10 bg-ink/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-6">
          <Link to="/" className="font-mono text-[11px] text-paper/70 transition-colors hover:text-signal">
            NITHIN PRANAV — PRODUCT
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/" className="font-mono text-[11px] text-signal transition-colors hover:text-paper">
              ← HOME
            </Link>
            <ThemeToggle />
          </div>

        </div>
      </header>

      <main className="mx-auto max-w-[1440px] px-5 sm:px-6">
        <section className="grid grid-cols-12 gap-6 pb-12 pt-14">
          <div className="col-span-12 md:col-span-8">
            <p className="font-mono text-[11px] text-signal">(a) — LIBRARY</p>
            <h1 className="mt-4 text-balance font-display text-6xl font-semibold leading-[0.9] md:text-8xl">
              Case studies
            </h1>
            <p className="mt-6 max-w-[52ch] text-pretty text-lg font-light leading-snug text-paper/75">
              Product teardowns and structured studies. Open any one to read the deck and the walkthrough without
              leaving the page.
            </p>
          </div>
          <div className="col-span-12 flex flex-col justify-end gap-2 border-paper/15 font-mono text-[10px] text-paper/45 md:col-span-4 md:border-l md:border-dashed md:pl-6">
            <span>COUNT — {String(projects.length).padStart(2, "0")} STUDIES</span>
            <span>FORMAT — DECK + WALKTHROUGH</span>
          </div>
        </section>

        <CaseStudyGrid />
      </main>

      <footer className="border-t border-paper/10">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-2 px-5 py-6 font-mono text-[10px] text-paper/35 sm:flex-row sm:px-6">
          <span>NITHIN PRANAV — PRODUCT MONOGRAPH / 2026</span>
          <span>SPACE GROTESK · DM SANS · JETBRAINS MONO</span>
        </div>
      </footer>
    </div>
  );
}
