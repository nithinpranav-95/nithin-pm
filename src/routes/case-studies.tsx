import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Plus, FileSpreadsheet, ExternalLink, Sparkles, RefreshCw } from "lucide-react";
import { CaseStudyGrid } from "@/components/CaseStudyGrid";
import { Navbar } from "@/components/Navbar";
import { AddCaseStudyModal } from "@/components/AddCaseStudyModal";
import { useAllCaseStudies } from "@/lib/case-studies-sync";

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
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CaseStudies,
});

function CaseStudies() {
  const { allProjects, sheetId, isLoading, refresh } = useAllCaseStudies();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

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

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setIsAddModalOpen(true)}
                className="inline-flex items-center gap-2 border border-signal bg-signal/15 px-5 py-3 font-mono text-[11px] font-medium tracking-wide text-signal transition-colors hover:bg-signal hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>ADD CASE STUDY (PASTE CANVA LINK)</span>
                <span aria-hidden="true">+</span>
              </button>

              {sheetId && (
                <a
                  href={`https://docs.google.com/spreadsheets/d/${sheetId}/edit`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-paper/20 bg-panel px-4 py-3 font-mono text-[11px] tracking-wide text-paper/80 transition-colors hover:border-signal hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
                >
                  <FileSpreadsheet className="h-3.5 w-3.5 text-signal" />
                  <span>OPEN GOOGLE SHEET</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          </div>

          <div className="col-span-12 flex flex-col justify-end gap-2 border-paper/15 font-mono text-[10px] text-paper/45 md:col-span-4 md:border-l md:border-dashed md:pl-6">
            <span>COUNT — {String(allProjects.length).padStart(2, "0")} STUDIES</span>
            <span>FORMAT — CANVA EMBED + WALKTHROUGH</span>
            <span className={sheetId ? "text-signal" : "text-paper/40"}>
              CLOUD SYNC — {sheetId ? "ACTIVE (GOOGLE SHEET)" : "READY TO CONNECT"}
            </span>
          </div>
        </section>

        <CaseStudyGrid includeHidden />

        <div className="border-t border-paper/10" />

        {/* Bottom Cloud Sync & Management Section */}
        <section aria-label="Case Study Cloud Sync Management" className="py-14 sm:py-16">
          <div className="border border-paper/15 bg-panel p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-paper/10 pb-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-2 w-2 rounded-full bg-signal animate-pulse" />
                <span className="font-mono text-[11px] font-medium text-signal">
                  LIVE CANVA EMBED · GOOGLE SHEET CLOUD SYNC
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-paper/40">
                  {sheetId ? "STATUS: CONNECTED" : "STATUS: LOCAL & CONFIGURABLE"}
                </span>
                {sheetId && (
                  <button
                    type="button"
                    onClick={() => refresh()}
                    className="inline-flex items-center gap-1 font-mono text-[10px] text-signal hover:underline"
                    title="Refresh data from Google Sheet"
                  >
                    <RefreshCw className={`h-2.5 w-2.5 ${isLoading ? "animate-spin" : ""}`} />
                    <span>REFRESH</span>
                  </button>
                )}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <h2 className="font-display text-2xl font-medium sm:text-3xl">
                  Add new case studies anytime with a Canva link
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-paper/75">
                  Whenever you create a new case study in Canva, simply paste its share or embed link.
                  With Google Sheet Cloud Sync, every new row you add is automatically fetched and rendered
                  on the home page and library without needing to touch code or push deployments!
                </p>

                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3 font-mono text-[11px] text-paper/70">
                  <div className="border border-paper/10 bg-ink/50 p-3">
                    <span className="mb-1 block font-semibold text-signal">01 / COPY CANVA LINK</span>
                    <span>Click Share → Embed in Canva, or copy the direct view link.</span>
                  </div>
                  <div className="border border-paper/10 bg-ink/50 p-3">
                    <span className="mb-1 block font-semibold text-signal">02 / PASTE IN SHEET</span>
                    <span>Paste the link into your Google Sheet (or use the Add dialog).</span>
                  </div>
                  <div className="border border-paper/10 bg-ink/50 p-3">
                    <span className="mb-1 block font-semibold text-signal">03 / INSTANT REFLECTION</span>
                    <span>The website immediately creates the page, card, and interactive player!</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 lg:col-span-4 lg:pl-4">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 border border-signal bg-signal px-5 py-3.5 font-mono text-[11px] font-medium tracking-wide text-ink transition-all hover:bg-signal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>PASTE CANVA LINK (DIALOG)</span>
                  <span aria-hidden="true">+</span>
                </button>

                {sheetId ? (
                  <a
                    href={`https://docs.google.com/spreadsheets/d/${sheetId}/edit`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-paper/20 bg-panel px-5 py-3 font-mono text-[11px] tracking-wide text-paper/80 transition-colors hover:border-signal hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>MANAGE IN GOOGLE SHEETS</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(true)}
                    className="inline-flex items-center justify-center gap-2 border border-paper/20 bg-panel px-5 py-3 font-mono text-[11px] tracking-wide text-paper/80 transition-colors hover:border-signal hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
                  >
                    <FileSpreadsheet className="h-3.5 w-3.5 text-signal" />
                    <span>CONNECT GOOGLE SHEET SYNC</span>
                    <span aria-hidden="true">→</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <AddCaseStudyModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />

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
