import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CanvaEmbed } from "@/components/CanvaEmbed";
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
        <Link to="/" className="mt-6 inline-block border-b border-signal pb-1 font-mono text-[11px] text-signal">
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
      <header className="sticky top-0 z-20 border-b border-paper/10 bg-ink/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-6">
          <Link to="/" className="font-mono text-[11px] text-paper/70 transition-colors hover:text-signal">
            NITHIN PRANAV — PRODUCT
          </Link>
          <Link to="/" hash="work" className="font-mono text-[11px] text-signal transition-colors hover:text-paper">
            ← ALL WORK
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-[1440px] px-5 sm:px-6">
        <section className="grid grid-cols-12 gap-6 pb-10 pt-12">
          <div className="col-span-12 md:col-span-8">
            <p className="font-mono text-[11px] text-signal">
              {project.number} — CASE STUDY / {project.year}
            </p>
            <h1 className="mt-4 text-balance font-display text-5xl font-semibold leading-[0.9] md:text-7xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-[52ch] text-pretty text-lg font-light leading-snug text-paper/75">
              {project.description}
            </p>
          </div>
          <div className="col-span-12 flex flex-col justify-end gap-2 border-paper/15 font-mono text-[10px] text-paper/45 md:col-span-4 md:border-l md:border-dashed md:pl-6">
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
            <h2 className="mt-4 font-display text-4xl font-medium leading-none">How this study was done</h2>
          </div>
          <div className="col-span-12 md:col-span-8">
            {project.sections.map((section) => (
              <div key={section.heading} className="border-t border-paper/15 py-6">
                <h3 className="font-display text-lg font-medium">{section.heading}</h3>
                <p className="mt-2 max-w-[68ch] text-sm leading-relaxed text-paper/65">{section.body}</p>
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
                className="group flex items-baseline gap-4 py-5"
              >
                <span className="font-mono text-[11px] text-signal">{item.number}</span>
                <span className="font-display text-2xl font-medium transition-colors group-hover:text-signal">
                  {item.title}
                </span>
                <span className="ml-auto font-mono text-[10px] text-paper/40">{item.year}</span>
              </Link>
            ))}
          </div>
        </section>
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
