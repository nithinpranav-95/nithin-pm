import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUp, ArrowRight } from "lucide-react";
import { CompanyLogo } from "@/components/CompanyLogos";

import { projects } from "@/lib/projects";

export function CaseStudyGrid({
  includeHidden = false,
  initialCount,
}: {
  includeHidden?: boolean;
  initialCount?: number;
}) {
  const all = includeHidden ? projects : projects.filter((project) => !project.hideOnHome);
  const limited = typeof initialCount === "number" && initialCount < all.length;
  const [showAll, setShowAll] = useState(false);
  const visible = limited && !showAll ? all.slice(0, initialCount) : all;
  const remaining = all.length - initialCount;

  return (
    <>
      <section className="grid grid-cols-1 gap-5 pb-14 pt-6 sm:grid-cols-2 sm:gap-6 sm:pb-20 sm:pt-10 lg:grid-cols-3">
        {visible.map((project) => (
        <Link
          key={project.slug}
          to="/work/$slug"
          params={{ slug: project.slug }}
          className="group block border border-paper/15 bg-panel p-3 text-left transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-signal hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.85)] focus-visible:-translate-y-1.5 focus-visible:border-signal"
        >
            <div className="relative flex aspect-[4/3] w-full flex-col items-center justify-center overflow-hidden border border-paper/10 bg-ink/70 p-6 transition-all duration-300 group-hover:border-signal/40 group-hover:bg-ink">
              {/* Monograph editorial background grid */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.06] transition-opacity duration-300 group-hover:opacity-[0.14]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />

              {/* Monograph editorial markings */}
              <span className="absolute left-2.5 top-2.5 font-mono text-[9px] text-paper/30 transition-colors group-hover:text-signal">
                +{project.number}
              </span>
              <span className="absolute right-2.5 top-2.5 font-mono text-[9px] uppercase tracking-wider text-paper/30 transition-colors group-hover:text-signal">
                FIG. {project.number}
              </span>
              <span className="absolute bottom-2.5 left-2.5 font-mono text-[9px] uppercase tracking-widest text-paper/30">
                CASE STUDY
              </span>
              <span className="absolute bottom-2.5 right-2.5 font-mono text-[9px] text-paper/30">
                [{project.year}]
              </span>

              {/* Center Company Logo Plate */}
              <div className="relative flex flex-col items-center justify-center text-center">
                <div className="flex h-24 w-24 items-center justify-center border border-paper/15 bg-panel/90 p-4 text-paper/85 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:border-signal/60 group-hover:text-signal group-hover:shadow-[0_0_30px_-5px_rgba(235,94,40,0.25)]">
                  <CompanyLogo slug={project.slug} className="h-14 w-14" />
                </div>
                <span className="mt-3 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-paper/55 transition-colors group-hover:text-signal">
                  {project.company}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-2.5 px-1 pt-4">
              <span className="font-mono text-[11px] text-signal">{project.number}</span>
              <h2 className="min-w-0 text-pretty font-display text-xl font-medium transition-colors group-hover:text-signal sm:text-2xl">
                {project.title}
              </h2>
              <span className="shrink-0 font-mono text-[10px] text-paper/40">{project.year}</span>
            </div>
            <p className="mt-2 px-1 pb-1 text-sm leading-relaxed text-paper/65">
              {project.description}
            </p>
          </Link>
        ))}
      </section>
      {limited && (
        <div className="mb-14 flex flex-col items-center gap-4 sm:mb-20">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="flex min-h-11 items-center gap-2 border border-paper/20 px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-paper/70 transition-colors hover:border-signal hover:text-signal"
          >
            <span>
              {showAll ? "Show fewer" : `View ${remaining} more case studies`}
            </span>
            {showAll ? (
              <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            ) : (
              <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
            )}
          </button>
          <Link
            to="/case-studies"
            className="flex min-h-11 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-signal transition-colors hover:text-paper"
          >
            <span>All case studies</span>
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      )}
    </>
  );
}
