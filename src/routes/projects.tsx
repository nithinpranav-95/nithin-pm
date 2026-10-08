import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { agentProjects, mlProjects, githubProfile, type SideProject } from "@/lib/side-projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Nithin Pranav, Product Manager" },
      {
        name: "description",
        content:
          "Things Nithin Pranav is currently building: AI agents and ML/AI products, with links to the GitHub repositories.",
      },
      { property: "og:title", content: "Projects — Nithin Pranav" },
      {
        property: "og:description",
        content: "AI agents and ML/AI products currently in build, with GitHub repositories.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});

function ProjectCard({ project }: { project: SideProject }) {
  return (
    <a
      href={project.repo}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col border border-paper/15 bg-panel p-5 transition-all duration-300 hover:-translate-y-1 hover:border-signal"
    >
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
        <h3 className="font-display text-xl font-medium">{project.name}</h3>
        <span className="shrink-0 font-mono text-[10px] text-signal">{project.status}</span>
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-paper/65">{project.summary}</p>
      <div className="mt-5 flex items-center justify-between border-t border-paper/10 pt-3 font-mono text-[10px] text-paper/45">
        <span>{project.stack}</span>
        <span className="text-signal transition-transform duration-300 group-hover:translate-x-1">
          GITHUB →
        </span>
      </div>
    </a>
  );
}

function Section({
  label,
  title,
  blurb,
  items,
}: {
  label: string;
  title: string;
  blurb: string;
  items: SideProject[];
}) {
  return (
    <section className="border-t border-paper/10 py-14">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-4">
          <span className="font-mono text-[11px] text-signal">{label}</span>
          <h2 className="mt-4 font-display text-4xl font-medium leading-none">{title}</h2>
          <p className="mt-5 max-w-[32ch] text-sm leading-relaxed text-paper/60">{blurb}</p>
        </div>
        <div className="col-span-12 grid grid-cols-1 gap-5 md:col-span-8 md:grid-cols-2">
          {items.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-paper antialiased">
      <Navbar />

      <main className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <section className="grid grid-cols-12 gap-6 pb-10 pt-9 sm:pb-12 sm:pt-14">
          <div className="col-span-12 md:col-span-8">
            <p className="font-mono text-[11px] text-signal">(a) — BUILD LOG</p>
            <h1 className="mt-4 text-balance font-display text-5xl font-semibold leading-[0.9] sm:text-6xl md:text-8xl">
              Projects
            </h1>
            <p className="mt-6 max-w-[52ch] text-pretty text-lg font-light leading-snug text-paper/75">
              What I'm building right now — agents that do real work, and ML/AI products that turn
              messy data into decisions. Every project links to its repository.
            </p>
          </div>
          <div className="col-span-12 flex flex-col justify-end gap-2 border-paper/15 font-mono text-[10px] text-paper/45 md:col-span-4 md:border-l md:border-dashed md:pl-6">
            <span>
              COUNT — {String(agentProjects.length + mlProjects.length).padStart(2, "0")} PROJECTS
            </span>
            <a
              href={githubProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-signal"
            >
              GITHUB — /NITHINPRANAV-95 →
            </a>
          </div>
        </section>

        <Section
          label="(01) — AGENTS & APPS"
          title="Agents & Apps"
          blurb="Autonomous agents and web applications built to handle coordination, user workflows, and multi-step tasks end to end."
          items={agentProjects}
        />

        <Section
          label="(02) — ML / AI PRODUCTS"
          title="ML / AI products"
          blurb="Models and tools wrapped in a product: the insight matters only if someone can act on it."
          items={mlProjects}
        />
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
