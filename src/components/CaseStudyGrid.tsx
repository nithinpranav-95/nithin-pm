import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { CanvaEmbed } from "@/components/CanvaEmbed";
import { projects, type Project } from "@/lib/projects";

export function CaseStudyGrid() {
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
    <>
      <section className="grid grid-cols-1 gap-6 pb-20 pt-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <button
            key={project.slug}
            type="button"
            onClick={() => setActive(project)}
            className="group border border-paper/15 bg-panel p-3 text-left transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-signal hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.85)] focus-visible:-translate-y-1.5 focus-visible:border-signal"
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
    </>
  );
}
