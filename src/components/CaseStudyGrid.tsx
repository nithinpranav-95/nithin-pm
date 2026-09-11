import { Link } from "@tanstack/react-router";
import { CompanyLogo } from "@/components/CompanyLogos";

import { projects } from "@/lib/projects";

export function CaseStudyGrid({ includeHidden = false }: { includeHidden?: boolean }) {
  const visible = includeHidden ? projects : projects.filter((project) => !project.hideOnHome);

  return (
    <>
      <section className="grid grid-cols-1 gap-6 pb-20 pt-10 sm:grid-cols-2 lg:grid-cols-3">
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
            <div className="flex items-center gap-2.5 px-1 pt-4">
              <span className="font-mono text-[11px] text-signal">{project.number}</span>
              <h2 className="font-display text-2xl font-medium transition-colors group-hover:text-signal">
                {project.title}
              </h2>
              <span className="ml-auto font-mono text-[10px] text-paper/40">{project.year}</span>
            </div>
            <p className="mt-2 px-1 pb-1 text-sm leading-relaxed text-paper/65">
              {project.description}
            </p>
          </Link>
        ))}
      </section>
    </>
  );
}
