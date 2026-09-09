import { createFileRoute, Link } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AskAssistant } from "@/components/AskAssistant";
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
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-display text-xl font-medium">{project.name}</h3>
        <span className="font-mono text-[10px] text-signal">{project.status}</span>
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-paper/65">{project.summary}</p>
      <div className="mt-5 flex items-center justify-between border-t border-paper/10 pt-3 font-mono text-[10px] text-paper/45">
        <span>{project.stack}</span>
        <span className="text-signal transition-transform duration-300 group-hover:translate-x-1">GITHUB →</span>
      </div>
    </a>
  );
}

function Section({ label, title, blurb, items }: { label: string; title: string; blurb: string; items: SideProject[] }) {
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
      <header className="sticky top-0 z-20 border-b border-paper/10 bg-ink/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-6">
          <Link to="/" className="font-mono text-[11px] text-paper/70 transition-colors hover:text-signal">
            NITHIN PRANAV — PRODUCT
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/case-studies" className="font-mono text-[11px] text-paper/60 transition-colors hover:text-signal">
              CASE STUDIES
            </Link>
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
            <p className="font-mono text-[11px] text-signal">(a) — BUILD LOG</p>
            <h1 className="mt-4 text-balance font-display text-6xl font-semibold leading-[0.9] md:text-8xl">Projects</h1>
            <p className="mt-6 max-w-[52ch] text-pretty text-lg font-light leading-snug text-paper/75">
              What I'm building right now — agents that do real work, and ML/AI products that turn messy data into
              decisions. Every project links to its repository.
            </p>
          </div>
          <div className="col-span-12 flex flex-col justify-end gap-2 border-paper/15 font-mono text-[10px] text-paper/45 md:col-span-4 md:border-l md:border-dashed md:pl-6">
            <span>COUNT — {String(agentProjects.length + mlProjects.length).padStart(2, "0")} PROJECTS</span>
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
          label="(01) — AGENTS"
          title="Agents"
          blurb="Autonomous and semi-autonomous systems that take a task end to end, with clear limits on what they're allowed to decide."
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
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-2 px-5 py-6 font-mono text-[10px] text-paper/35 sm:flex-row sm:px-6">
          <span>NITHIN PRANAV — PRODUCT MONOGRAPH / 2026</span>
          <span>SPACE GROTESK · DM SANS · JETBRAINS MONO</span>
        </div>
      </footer>

      <AskAssistant />
    </div>
  );
}
