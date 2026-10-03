import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CanvaEmbed } from "@/components/CanvaEmbed";
import { CompanyLogo } from "@/components/CompanyLogos";
import { Navbar } from "@/components/Navbar";
import { getProject, projects } from "@/lib/projects";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Case study unavailable" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} — Case study by Nithin Pranav`;
    return {
      meta: [
        { title },
        { name: "description", content: project.description },
        { property: "og:title", content: title },
        { property: "og:description", content: project.description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CaseStudy,
  notFoundComponent: CaseStudyNotFound,
});

function CaseStudyNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ink px-5 text-paper">
      <div className="text-center">
        <h1 className="font-display text-3xl font-medium">Case study not found</h1>
        <Link
          to="/"
          className="mt-6 inline-block border-b border-signal pb-1 font-mono text-[11px] text-signal"
        >
          ← BACK TO WORK
        </Link>
      </div>
    </div>
  );
}

function CaseStudy() {
  const { project } = Route.useLoaderData();
  const others = projects.filter((item) => item.slug !== project.slug);

  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-paper antialiased">
      <Navbar />

      <main className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <section className="grid grid-cols-12 gap-6 pb-10 pt-9 sm:pt-12">
          <div className="col-span-12 md:col-span-8">
            <p className="font-mono text-[11px] text-signal">
              {project.number} — CASE STUDY / {project.year}
            </p>
            <div className="mt-4 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 sm:gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-paper/20 bg-panel text-signal">
                <CompanyLogo slug={project.slug} className="h-6 w-6" />
              </div>
              <h1 className="min-w-0 text-balance font-display text-4xl font-semibold leading-[0.95] sm:text-5xl md:text-7xl">
                {project.title}
              </h1>
            </div>
            <p className="mt-6 max-w-[52ch] text-pretty text-lg font-light leading-snug text-paper/75">
              {project.description}
            </p>
          </div>
          <div className="col-span-12 flex flex-col justify-end gap-2 border-paper/15 font-mono text-[10px] text-paper/45 md:col-span-4 md:border-l md:border-dashed md:pl-6">
            <span>COMPANY — {project.company}</span>
            <span>ROLE — {project.role}</span>
            <span>OUTCOME — {project.outcome}</span>
            <span className="text-signal">DECK — CANVA</span>
          </div>
        </section>

        <section aria-label="Presentation deck" className="pb-14">
          <CanvaEmbed url={project.canvaUrl} title={`${project.title} deck`} />
        </section>

        <div className="border-t border-paper/10" />
        <section className="grid grid-cols-12 gap-8 py-14">
          <div className="col-span-12 md:col-span-4">
            <span className="font-mono text-[11px] text-paper/40">(a) — WALKTHROUGH</span>
            <h2 className="mt-4 font-display text-4xl font-medium leading-none">
              How this study was done
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8">
            {project.sections.map((section) => (
              <div key={section.heading} className="border-t border-paper/15 py-6">
                <h3 className="font-display text-lg font-medium">{section.heading}</h3>
                <p className="mt-2 max-w-[68ch] text-sm leading-relaxed text-paper/65">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-paper/10" />
        <section className="py-14">
          <span className="font-mono text-[11px] text-paper/40">(b) — NEXT</span>
          <div className="mt-6 divide-y divide-paper/10 border-t border-paper/15">
            {others.map((item) => (
              <Link
                key={item.slug}
                to="/work/$slug"
                params={{ slug: item.slug }}
                className="group grid min-h-14 grid-cols-[auto_auto_minmax(0,1fr)_auto] items-center gap-3 py-4 sm:gap-4 sm:py-5"
              >
                <span className="font-mono text-[11px] text-signal">{item.number}</span>
                <CompanyLogo
                  slug={item.slug}
                  className="h-4 w-4 shrink-0 text-paper/50 transition-colors group-hover:text-signal"
                />
                <span className="min-w-0 text-pretty font-display text-lg font-medium transition-colors group-hover:text-signal sm:text-2xl">
                  {item.title}
                </span>
                <span className="shrink-0 font-mono text-[9px] text-paper/40 sm:text-[10px]">{item.year}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-paper/10">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-4 px-5 py-6 font-mono text-[10px] sm:flex-row sm:items-center sm:px-6">
          <div className="flex flex-wrap items-center gap-4 text-paper/60">
            <Link to="/certifications" className="transition-colors hover:text-signal">
              CERTIFICATIONS
            </Link>
            <span className="text-paper/20">·</span>
            <Link to="/case-studies" className="transition-colors hover:text-signal">
              CASE STUDIES
            </Link>
            <span className="text-paper/20">·</span>
            <Link to="/projects" className="transition-colors hover:text-signal">
              PROJECTS
            </Link>
            <span className="text-paper/20">·</span>
            <Link to="/" className="transition-colors hover:text-signal">
              HOME
            </Link>
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
