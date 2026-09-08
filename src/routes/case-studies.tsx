import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { CanvaEmbed } from "@/components/CanvaEmbed";
import { projects, type Project } from "@/lib/projects";

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
  const [active, setActive] = useState<Project | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-paper antialiased">
      <header className="sticky top-0 z-20 border-b border-paper/10 bg-ink/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-6">
          <Link to="/" className="font-mono text-[11px] text-paper/70 transition-colors hover:text-signal">
            NITHIN PRANAV — PRODUCT
          </Link>
          <Link to="/" className="font-mono text-[11px] text-signal transition-colors hover:text-paper">
            ← HOME
          </Link>
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

        <section className="grid grid-cols-1 gap-6 border-t border-paper/15 pb-20 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <button
              key={project.slug}
              type="button"
              onClick={() => setActive(project)}
              className="group border border-paper/15 bg-panel p-3 text-left transition-colors hover:border-signal focus-visible:border-signal"
            >
              <img
                src={project.image}
                alt={`${project.title} case study cover`}
                width={1200}
                height={900}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="flex items-baseline gap-3 px-1 pt-4">
                <span className="font-mono text-[11px] text-signal">{project.number}</span>
                <h2 className="font-display text-2xl font-medium transition-colors group-hover:text-signal">
                  {project.title}
                </h2>
                <span className="ml-auto font-mono text-[10px] text-paper/40">{project.year}</span>
              </div>
              <p className="mt-2 px-1 pb-1 text-sm leading-relaxed text-paper/65">{project.description}</p>
            </button>
          ))}
        </section>
      </main>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} case study`}
          className="fixed inset-0 z-50 overflow-y-auto bg-ink/90 px-4 py-10 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div
            className="mx-auto max-w-4xl border border-paper/20 bg-ink p-5 sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="font-mono text-[11px] text-signal">
                  {active.number} — CASE STUDY / {active.year}
                </p>
                <h2 className="mt-3 font-display text-4xl font-semibold leading-none">{active.title}</h2>
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="font-mono text-[11px] text-paper/60 transition-colors hover:text-signal"
                aria-label="Close case study"
              >
                CLOSE ✕
              </button>
            </div>

            <CanvaEmbed url={active.canvaUrl} title={`${active.title} deck`} />

            <p className="mt-6 text-pretty leading-snug text-paper/75">{active.description}</p>
            <div className="mt-6">
              {active.sections.map((section) => (
                <div key={section.heading} className="border-t border-paper/15 py-5">
                  <h3 className="font-display text-lg font-medium">{section.heading}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/65">{section.body}</p>
                </div>
              ))}
            </div>

            <Link
              to="/work/$slug"
              params={{ slug: active.slug }}
              className="mt-4 inline-block border-b border-signal pb-1 font-mono text-[11px] text-signal"
            >
              OPEN FULL PAGE →
            </Link>
          </div>
        </div>
      ) : null}

      <footer className="border-t border-paper/10">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-2 px-5 py-6 font-mono text-[10px] text-paper/35 sm:flex-row sm:px-6">
          <span>NITHIN PRANAV — PRODUCT MONOGRAPH / 2026</span>
          <span>SPACE GROTESK · DM SANS · JETBRAINS MONO</span>
        </div>
      </footer>
    </div>
  );
}
