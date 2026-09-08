import { createFileRoute, Link } from "@tanstack/react-router";
import headshot from "@/assets/headshot.jpg.asset.json";
import { CaseStudyGrid } from "@/components/CaseStudyGrid";
import { ExperienceList } from "@/components/ExperienceList";
import { ThemeToggle } from "@/components/ThemeToggle";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nithin Pranav — Product Manager" },
      {
        name: "description",
        content: "Product manager for complex, trust-critical systems. Selected work, principles, and experience.",
      },
      { property: "og:title", content: "Nithin Pranav — Product Manager" },
      { property: "og:description", content: "Selected product work, operating principles, and experience." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const principles = [
  ["P1", "Decide on evidence, not seniority", "Every contested call gets a number, a user, or a test behind it."],
  ["P2", "Ship the reversible thing first", "Small, cheap, and undoable beats grand and permanent."],
  ["P3", "Write the decision down", "If it isn't documented, it wasn't decided."],
  ["P4", "Protect the team's attention", "Fewer meetings, sharper artifacts, more building."],
];



function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-paper antialiased">
      <header className="sticky top-0 z-20 border-b border-paper/10 bg-ink/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-6">
          <a href="#top" className="font-mono text-[11px] text-paper/70 transition-colors hover:text-signal">
            NITHIN PRANAV — PRODUCT
          </a>
          <nav aria-label="Portfolio sections" className="hidden items-center gap-6 font-mono text-[11px] sm:flex">
            <Link to="/case-studies" className="text-paper/60 transition-colors hover:text-signal">
              CASE STUDIES
            </Link>

            <a href="#principles" className="text-paper/60 transition-colors hover:text-signal">
              PRINCIPLES
            </a>
            <a href="#record" className="text-paper/60 transition-colors hover:text-signal">
              RECORD
            </a>
            <a href="#contact" className="text-signal transition-colors hover:text-paper">
              CONTACT
            </a>
            <ThemeToggle />
          </nav>
          <div className="flex items-center gap-3 sm:hidden">
            <a href="#work" className="font-mono text-[11px] text-signal">
              INDEX ↓
            </a>
            <ThemeToggle />
          </div>

        </div>
      </header>

      <main id="top" className="mx-auto max-w-[1440px] px-5 sm:px-6">
        <section className="grid grid-cols-12 items-stretch gap-6 pb-16 pt-14">
          <div className="col-span-12 flex flex-col justify-center md:col-span-8">
            <p className="rise-in font-mono text-[11px] text-signal">A PRODUCT MONOGRAPH</p>
            <h1 className="rise-in mt-5 text-balance font-display text-[25vw] font-semibold leading-[0.82] [animation-delay:120ms] sm:text-[20vw] md:text-[11rem]">
              Nithin
              <br />
              Pranav
            </h1>
            <div className="mt-9 grid grid-cols-12 gap-6">
              <p className="rise-in col-span-12 max-w-[34ch] text-pretty text-lg font-light leading-snug text-paper/75 [animation-delay:240ms] md:col-span-7 md:text-xl">
                Product manager for complex, trust-critical systems. I turn ambiguous problems into shipped decisions —
                and leave the room with fewer, clearer questions.
              </p>
              <div className="rise-in col-span-12 flex flex-col justify-center gap-2 border-paper/15 font-mono text-[10px] text-paper/45 [animation-delay:360ms] md:col-span-5 md:border-l md:border-dashed md:py-4 md:pl-4">
                <span>BASED — BERLIN</span>
                <span>FOCUS — COMPLEX SYSTEMS</span>
                <span className="text-signal">AVAILABLE Q3 — 2026</span>
              </div>
            </div>
          </div>
          <div className="rise-in col-span-12 [animation-delay:300ms] md:col-span-4">
            <figure className="h-full border border-paper/15 bg-panel p-2">
              <img
                src={headshot.url}
                alt="Portrait of Nithin Pranav"
                width={1080}
                height={1620}
                loading="lazy"
                className="h-full min-h-[300px] w-full object-cover md:min-h-[440px]"
              />
              <figcaption className="px-1 pb-1 pt-3 font-mono text-[10px] text-paper/40">PORTRAIT — Taken in 2024</figcaption>
            </figure>
          </div>
        </section>

        <div className="relative border-t border-paper/10">
          <div className="lead-line absolute inset-x-0 top-0 h-px bg-signal" />
        </div>

        <section id="work" className="scroll-mt-16 py-16">
          <div className="mb-10 flex items-baseline justify-between">
            <h2 className="text-balance font-display text-3xl font-medium">Case studies</h2>
            <Link to="/case-studies" className="font-mono text-[11px] text-signal hover:text-paper">
              ALL CASE STUDIES →
            </Link>
          </div>

          <CaseStudyGrid />
        </section>

        <div className="border-t border-paper/10" />
        <section id="principles" className="grid scroll-mt-16 grid-cols-12 gap-8 py-16">
          <div className="col-span-12 md:col-span-4">
            <span className="font-mono text-[11px] text-paper/40"></span>
            <h2 className="mt-4 text-balance font-display text-4xl font-medium leading-none">Operating principles</h2>
            <p className="mt-5 max-w-[30ch] text-sm leading-relaxed text-paper/60">
              Four rules I hold to on every engagement. They are the constraints that make the work faster, not slower.
            </p>
          </div>
          <div className="col-span-12 grid grid-cols-1 md:col-span-8 sm:grid-cols-2">
            {principles.map(([number, title, copy]) => (
              <div key={number} className="border-t border-paper/15 py-6 pr-6">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[11px] text-signal">{number}</span>
                  <h3 className="font-display text-lg font-medium">{title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-paper/60">{copy}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-paper/10" />
        <section id="record" className="grid scroll-mt-16 grid-cols-12 gap-8 py-16">
          <div className="col-span-12 md:col-span-4">
            <span className="font-mono text-[11px] text-paper/40"></span>
            <h2 className="mt-4 font-display text-4xl font-medium leading-none">Experience</h2>
          </div>
          <div className="col-span-12 md:col-span-8">
            <ExperienceList />
          </div>
        </section>

        <div className="border-t border-paper/10" />
        <section id="contact" className="grid scroll-mt-16 grid-cols-12 items-end gap-8 py-20">
          <div className="col-span-12 md:col-span-7">
            <span className="font-mono text-[11px] text-signal"></span>
            <h2 className="mt-5 text-balance font-display text-5xl font-medium leading-[0.95] md:text-6xl">
              Let's build the next thing.
            </h2>
            <a
              href="mailto:nithin.pranav@gmail.com"
              className="mt-7 inline-flex max-w-full break-all border-b border-signal pb-1 font-mono text-lg text-paper transition-colors hover:text-signal md:text-2xl"
            >
              nithin.pranav@gmail.com
            </a>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://calendly.com/nithin-pranav/95"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-signal px-5 py-3 font-mono text-[11px] text-signal transition-colors hover:bg-signal hover:text-ink"
              >
                SCHEDULE A CALL →
              </a>
              <a
                href="https://www.linkedin.com/in/nithinpranav/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-paper/25 px-5 py-3 font-mono text-[11px] text-paper/70 transition-colors hover:border-signal hover:text-signal"
              >
                LINKEDIN →
              </a>
            </div>
          </div>
          <div className="col-span-12 flex flex-col gap-2 border-paper/15 font-mono text-[10px] text-paper/45 md:col-span-5 md:border-l md:border-dashed md:pl-6">
            <a
              href="https://www.linkedin.com/in/nithinpranav/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-signal"
            >
              LINKEDIN — /IN/NITHINPRANAV
            </a>
            <a
              href="https://calendly.com/nithin-pranav/95"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-signal"
            >
              CALENDLY — BOOK 15 MIN
            </a>
            <span>REPLIES — WITHIN 48H</span>
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
