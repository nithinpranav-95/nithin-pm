import { createFileRoute } from "@tanstack/react-router";
import { CanvaEmbed } from "@/components/CanvaEmbed";
import atlasImage from "@/assets/atlas-cobalt.jpg";
import halyardImage from "@/assets/halyard-amber.jpg";
import northwindImage from "@/assets/northwind-forest.jpg";
import headshot from "@/assets/headshot.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nithin Praav — Product Manager" },
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

const projects = [
  {
    number: "01",
    title: "Youtube",
    year: "2024",
    description: "Rebuilt the onboarding ledger for a fintech — cut activation drop-off by 38% in one quarter.",
    role: "LEAD PM",
    outcome: "−38% DROP",
    image: atlasImage,
    alt: "Abstract cobalt stained-glass grid representing the Atlas Ledger product system",
    dimensions: "md:col-span-7",
    ratio: "aspect-[16/10]",
    width: 1400,
    height: 900,
    // Paste a Canva "Share → Embed" link here to render the deck inside this case study.
    canvaUrl: undefined as string | undefined,
  },
  {
    number: "02",
    title: "N26",
    year: "2023",
    description: "Shipped a rules engine that halved support tickets on routing edge cases.",
    role: "PRODUCT MANAGER",
    outcome: "−52% TICKETS",
    image: northwindImage,
    alt: "Abstract forest-green stained-glass grid representing the Northwind routing engine",
    dimensions: "md:col-span-5 md:mt-10",
    ratio: "aspect-[4/3]",
    width: 1200,
    height: 900,
    canvaUrl: undefined as string | undefined,
  },
  {
    number: "03",
    title: "Halyard Console",
    year: "2022",
    description: "Designed an operations console used daily by 400 engineers; NPS 61 at launch.",
    role: "FOUNDER PM",
    outcome: "NPS 61",
    image: halyardImage,
    alt: "Abstract amber stained-glass lattice representing the Halyard operations console",
    dimensions: "md:col-span-5 md:mt-4",
    ratio: "aspect-[4/3]",
    width: 1200,
    height: 900,
    canvaUrl: undefined as string | undefined,
  },
];

const principles = [
  ["P1", "Decide on evidence, not seniority", "Every contested call gets a number, a user, or a test behind it."],
  ["P2", "Ship the reversible thing first", "Small, cheap, and undoable beats grand and permanent."],
  ["P3", "Write the decision down", "If it isn't documented, it wasn't decided."],
  ["P4", "Protect the team's attention", "Fewer meetings, sharper artifacts, more building."],
];

const experience = [
  ["2023 — NOW", "Lead Product Manager — Ledgerline", "Owns the payments core and a team of six."],
  ["2020 — 2023", "Product Manager — Northwind", "Growth and routing across three markets."],
  ["2017 — 2020", "Associate PM — Halyard", "First product hire; built the founding operations console."],
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
            <a href="#work" className="text-paper/60 transition-colors hover:text-signal">
              WORK
            </a>
            <a href="#principles" className="text-paper/60 transition-colors hover:text-signal">
              PRINCIPLES
            </a>
            <a href="#record" className="text-paper/60 transition-colors hover:text-signal">
              RECORD
            </a>
            <a href="#contact" className="text-signal transition-colors hover:text-paper">
              CONTACT
            </a>
          </nav>
          <a href="#work" className="font-mono text-[11px] text-signal sm:hidden">
            INDEX ↓
          </a>
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
                <span>BASED — COPENHAGEN</span>
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
              <figcaption className="px-1 pb-1 pt-3 font-mono text-[10px] text-paper/40">PORTRAIT — 2026</figcaption>
            </figure>
          </div>
        </section>

        <div className="relative border-t border-paper/10">
          <div className="lead-line absolute inset-x-0 top-0 h-px bg-signal" />
        </div>

        <section id="work" className="scroll-mt-16 py-16">
          <div className="mb-10 flex items-baseline justify-between">
            <h2 className="text-balance font-display text-3xl font-medium">Selected work</h2>
            <span className="font-mono text-[11px] text-paper/40">(a) — 03 PLATES</span>
          </div>
          <div className="grid grid-cols-12 gap-6">
            {projects.map((project) => (
              <article key={project.number} className={`group col-span-12 ${project.dimensions}`}>
                <div className={`${project.ratio} overflow-hidden border border-paper/15 bg-panel`}>
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    width={project.width}
                    height={project.height}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.015]"
                  />
                </div>
                <div className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-2">
                  <span className="font-mono text-[11px] text-signal">{project.number}</span>
                  <h3 className="font-display text-2xl font-medium leading-none transition-colors group-hover:text-signal">
                    {project.title}
                  </h3>
                  <span className="font-mono text-[11px] text-paper/40">{project.year}</span>
                </div>
                <p className="mt-2 max-w-[46ch] text-sm leading-relaxed text-paper/65">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 font-mono text-[10px] text-paper/40">
                  <span>ROLE — {project.role}</span>
                  <span>OUTCOME — {project.outcome}</span>
                </div>
                {project.canvaUrl && <CanvaEmbed url={project.canvaUrl} title={`${project.title} deck`} />}
              </article>
            ))}
          </div>
        </section>

        <div className="border-t border-paper/10" />
        <section id="principles" className="grid scroll-mt-16 grid-cols-12 gap-8 py-16">
          <div className="col-span-12 md:col-span-4">
            <span className="font-mono text-[11px] text-paper/40">(b) — METHOD</span>
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
            <span className="font-mono text-[11px] text-paper/40">(c) — RECORD</span>
            <h2 className="mt-4 font-display text-4xl font-medium leading-none">Experience</h2>
          </div>
          <div className="col-span-12 divide-y divide-paper/10 md:col-span-8">
            {experience.map(([date, title, copy]) => (
              <div key={date} className="grid grid-cols-12 items-baseline gap-4 py-5">
                <span className="col-span-4 font-mono text-[11px] text-paper/40 sm:col-span-3">{date}</span>
                <div className="col-span-8 sm:col-span-9">
                  <h3 className="font-display text-lg font-medium">{title}</h3>
                  <p className="mt-1 text-sm text-paper/55">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-paper/10" />
        <section id="contact" className="grid scroll-mt-16 grid-cols-12 items-end gap-8 py-20">
          <div className="col-span-12 md:col-span-7">
            <span className="font-mono text-[11px] text-signal">(d) — WRITE</span>
            <h2 className="mt-5 text-balance font-display text-5xl font-medium leading-[0.95] md:text-6xl">
              Let's build the next thing.
            </h2>
            <a
              href="mailto:mara@voss.pm"
              className="mt-7 inline-flex max-w-full break-all border-b border-signal pb-1 font-mono text-lg text-paper transition-colors hover:text-signal md:text-2xl"
            >
              mara@voss.pm
            </a>
          </div>
          <div className="col-span-12 flex flex-col gap-2 border-paper/15 font-mono text-[10px] text-paper/45 md:col-span-5 md:border-l md:border-dashed md:pl-6">
            <span>LINKEDIN — /IN/MARAVOSS</span>
            <span>READING — /NOTES</span>
            <span>REPLIES — WITHIN 48H</span>
          </div>
        </section>
      </main>

      <footer className="border-t border-paper/10">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-2 px-5 py-6 font-mono text-[10px] text-paper/35 sm:flex-row sm:px-6">
          <span>MARA VOSS — PRODUCT MONOGRAPH / 2026</span>
          <span>SPACE GROTESK · DM SANS · JETBRAINS MONO</span>
        </div>
      </footer>
    </div>
  );
}
