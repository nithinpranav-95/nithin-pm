import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Linkedin, Download, Award } from "lucide-react";
import headshot from "@/assets/headshot.jpg.asset.json";
import certIhkPage1 from "@/assets/cert-ihk-page-1.jpg";
import certIhkFoundationsPage1 from "@/assets/cert-ihk-foundations-page-1.jpg";
import certHfAgents from "@/assets/cert-huggingface-agents.png";
import { CaseStudyGrid } from "@/components/CaseStudyGrid";
import { ExperienceList } from "@/components/ExperienceList";
import { Navbar } from "@/components/Navbar";
import { AskAssistant } from "@/components/AskAssistant";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nithin Pranav — Product Manager" },
      {
        name: "description",
        content:
          "Berlin-based product builder working on AI-driven products. Case studies, projects, and experience.",
      },
      { property: "og:title", content: "Nithin Pranav — Product Manager" },
      {
        property: "og:description",
        content: "Product case studies, AI projects in build, and experience.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-paper antialiased">
      <Navbar />

      <main id="top" className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <section className="grid grid-cols-12 items-stretch gap-6 pb-12 pt-8 sm:pb-16 sm:pt-14">
          <div className="col-span-12 flex flex-col justify-center md:col-span-8">
            <h1 className="rise-in mt-3 text-balance font-display text-[21vw] font-semibold leading-[0.84] [animation-delay:120ms] sm:mt-5 sm:text-[20vw] md:text-[11rem]">
              Nithin
              <br />
              Pranav
            </h1>
            <p className="rise-in mt-7 text-pretty text-base font-light leading-relaxed text-paper/75 [animation-delay:240ms] sm:text-justify sm:text-lg md:mt-9 md:text-xl">
              Berlin-based Product Manager with a background in sales and business operations, now
              focused on building AI-driven products that solve real user problems. I’m passionate
              about understanding customer pain points, validating ideas quickly, and turning
              insights into products that create meaningful value. I enjoy working
              cross-functionally with engineering, design, and business teams to turn ideas into
              impactful products and ship solutions that people actually want to use.
            </p>
            <div className="rise-in mt-6 max-w-[54ch] [animation-delay:440ms]">
              <AskAssistant variant="bar" />
            </div>
          </div>
            <div className="rise-in col-span-12 flex flex-col gap-4 [animation-delay:300ms] sm:gap-6 md:col-span-4">
            <figure className="h-full border border-paper/15 bg-panel p-2">
              <img
                src={headshot.url}
                alt="Portrait of Nithin Pranav"
                width={1080}
                height={1620}
                loading="lazy"
                className="h-full min-h-[300px] w-full object-cover md:min-h-[440px]"
              />
              <figcaption className="px-1 pb-1 pt-3 font-mono text-[10px] text-paper/40">
                         MOSELLE VALLEY - 2024
              </figcaption>
            </figure>
            <div className="flex flex-wrap items-center gap-3 [animation-delay:380ms]">
              <a
                href="https://calendly.com/nithin-pranav/95"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 border border-signal bg-signal/10 px-4 py-2.5 font-mono text-[11px] font-medium tracking-wide text-signal transition-colors hover:bg-signal hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
              >
                <Calendar className="h-3.5 w-3.5" />
                <span>SCHEDULE A CALL</span>
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="https://www.linkedin.com/in/nithinpranav/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 border border-paper/25 bg-panel/60 px-4 py-2.5 font-mono text-[11px] tracking-wide text-paper/80 transition-colors hover:border-signal hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
              >
                <Linkedin className="h-3.5 w-3.5" />
                <span>LINKEDIN</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
            <Link
              to="/certifications"
              className="grid min-h-11 grid-cols-[minmax(0,1fr)_auto] items-center gap-2 border border-paper/15 bg-panel/70 px-3.5 py-2 font-mono text-[10px] text-paper/75 transition-colors hover:border-signal hover:text-signal sm:text-[11px]"
            >
              <span className="flex min-w-0 items-center gap-2">
                <Award className="h-3.5 w-3.5 shrink-0 text-signal" />
                <span className="min-w-0">CERTIFIED: IHK DATA SCIENCE & AI · FOUNDATIONS · HF AGENTS</span>
              </span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <div className="relative border-t border-paper/10">
          <div className="lead-line absolute inset-x-0 top-0 h-px bg-signal" />
        </div>

        <section id="work" className="scroll-mt-16 py-16">
          <div className="mb-8 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-3 sm:mb-10">
            <h2 className="text-balance font-display text-3xl font-medium">Case studies</h2>
            <Link to="/case-studies" className="font-mono text-[11px] text-signal hover:text-paper">
              ALL CASE STUDIES →
            </Link>
          </div>

          <CaseStudyGrid />
        </section>

        <div className="border-t border-paper/10" />
        <section id="experience" className="grid scroll-mt-16 grid-cols-12 gap-8 py-16">
          <div className="col-span-12 md:col-span-4">
            <span className="font-mono text-[11px] text-paper/40"></span>
            <h2 className="mt-4 font-display text-4xl font-medium leading-none">Experience</h2>
          </div>
          <div className="col-span-12 md:col-span-8">
            <ExperienceList />
          </div>
        </section>

        <div className="border-t border-paper/10" />
        <section id="certifications" className="scroll-mt-16 py-16">
          <div className="mb-10 flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <span className="font-mono text-[11px] text-signal">(c) — VERIFIED CREDENTIALS</span>
              <h2 className="mt-2 text-balance font-display text-3xl font-medium sm:text-4xl">
                Certifications & Credentials
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/certifications"
                className="inline-flex items-center gap-1.5 font-mono text-[11px] text-signal transition-colors hover:text-paper"
              >
                <span>ALL CERTIFICATIONS (03)</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Card 3: IHK Data Science & AI */}
            <div className="group order-3 flex flex-col justify-between border border-paper/15 bg-panel p-5 transition-all duration-300 hover:border-signal">
              <div>
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className="border border-signal/30 bg-signal/10 px-2 py-0.5 text-signal">
                    STATE ACCREDITED
                  </span>
                  <span className="text-paper/40">2026</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-medium leading-snug text-paper transition-colors group-hover:text-signal">
                  Data Science & AI
                </h3>
                <p className="mt-1 font-mono text-[10px] text-signal/80">IHK / HZA · neue fische</p>
                <Link
                  to="/certifications"
                  className="mt-4 block overflow-hidden border border-paper/10 bg-ink/70"
                  title="View full certificate"
                >
                  <img
                    src={certIhkPage1}
                    alt="IHK Data Science & AI Certificate Preview"
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </Link>
                <p className="mt-3 text-xs leading-relaxed text-paper/70">
                  960 hours of intensive programming practice covering machine learning, deep
                  learning, AI agents, RAG, and production systems.
                </p>
                <div className="mt-4 flex flex-wrap gap-1 font-mono text-[9px]">
                  <span className="border border-paper/10 bg-ink/40 px-2 py-0.5 text-paper/80">
                    AI Agents
                  </span>
                  <span className="border border-paper/10 bg-ink/40 px-2 py-0.5 text-paper/80">
                    LLMs & RAG
                  </span>
                  <span className="border border-paper/10 bg-ink/40 px-2 py-0.5 text-paper/80">
                    Python Stack
                  </span>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-paper/10 pt-3 font-mono text-[10px]">
                <span className="text-paper/45">960 HRS / 720 LESSONS</span>
                <Link
                  to="/certifications"
                  className="inline-flex items-center gap-1 text-signal transition-transform duration-200 group-hover:translate-x-1"
                >
                  <span>DETAILS</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Card 1: IHK Data & AI Foundations */}
            <div className="group order-1 flex flex-col justify-between border border-paper/15 bg-panel p-5 transition-all duration-300 hover:border-signal">
              <div>
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className="border border-signal/30 bg-signal/10 px-2 py-0.5 text-signal">
                    STATE ACCREDITED (IHK)
                  </span>
                  <span className="text-paper/40">2026</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-medium leading-snug text-paper transition-colors group-hover:text-signal">
                  Data & AI Foundations
                </h3>
                <p className="mt-1 font-mono text-[10px] text-signal/80">
                  Handelskammer Hamburg (HKBiS) · neue fische
                </p>
                <Link
                  to="/certifications"
                  className="mt-4 block overflow-hidden border border-paper/10 bg-ink/70"
                  title="View full certificate"
                >
                  <img
                    src={certIhkFoundationsPage1}
                    alt="IHK Data & AI Foundations Certificate Preview"
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </Link>
                <p className="mt-3 text-xs leading-relaxed text-paper/70">
                  240 lessons covering Python fundamentals, data wrangling with Pandas & SQL, data
                  extraction, ethics, and an exploratory data analysis project.
                </p>
                <div className="mt-4 flex flex-wrap gap-1 font-mono text-[9px]">
                  <span className="border border-paper/10 bg-ink/40 px-2 py-0.5 text-paper/80">
                    Python & SQL
                  </span>
                  <span className="border border-paper/10 bg-ink/40 px-2 py-0.5 text-paper/80">
                    EDA Project
                  </span>
                  <span className="border border-paper/10 bg-ink/40 px-2 py-0.5 text-paper/80">
                    Data Ethics
                  </span>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-paper/10 pt-3 font-mono text-[10px]">
                <span className="text-paper/45">240 LESSONS / CCI CERT</span>
                <Link
                  to="/certifications"
                  className="inline-flex items-center gap-1 text-signal transition-transform duration-200 group-hover:translate-x-1"
                >
                  <span>DETAILS</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Card 2: Hugging Face AI Agents */}
            <div className="group order-2 flex flex-col justify-between border border-paper/15 bg-panel p-5 transition-all duration-300 hover:border-signal">
              <div>
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className="border border-paper/20 bg-panel px-2 py-0.5 text-paper/80">
                    FOUNDATIONAL EXCELLENCE
                  </span>
                  <span className="text-paper/40">2026</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-medium leading-snug text-paper transition-colors group-hover:text-signal">
                  AI Agents Course
                </h3>
                <p className="mt-1 font-mono text-[10px] text-signal/80">
                  Hugging Face Hub (agents-course)
                </p>
                <Link
                  to="/certifications"
                  className="mt-4 block overflow-hidden border border-paper/10 bg-ink/70"
                  title="View full certificate"
                >
                  <img
                    src={certHfAgents}
                    alt="Hugging Face AI Agents Certificate Preview"
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </Link>
                <p className="mt-3 text-xs leading-relaxed text-paper/70">
                  Certified coursework covering autonomous agents, function calling, smolagents
                  framework, agentic RAG, and benchmark evaluations.
                </p>
                <div className="mt-4 flex flex-wrap gap-1 font-mono text-[9px]">
                  <span className="border border-paper/10 bg-ink/40 px-2 py-0.5 text-paper/80">
                    Autonomous Agents
                  </span>
                  <span className="border border-paper/10 bg-ink/40 px-2 py-0.5 text-paper/80">
                    smolagents
                  </span>
                  <span className="border border-paper/10 bg-ink/40 px-2 py-0.5 text-paper/80">
                    Tool Calling
                  </span>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-paper/10 pt-3 font-mono text-[10px]">
                <span className="text-paper/45">VERIFIED CREDENTIAL</span>
                <Link
                  to="/certifications"
                  className="inline-flex items-center gap-1 text-signal transition-transform duration-200 group-hover:translate-x-1"
                >
                  <span>DETAILS</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-paper/10" />
        <section id="contact" className="grid scroll-mt-16 grid-cols-12 items-end gap-8 py-20">
          <div className="col-span-12 md:col-span-7">
            <span className="font-mono text-[11px] text-signal"></span>
            <h2 className="mt-5 text-balance font-display text-4xl font-medium leading-[0.95] sm:text-5xl md:text-6xl">
              Let's build the next thing.
            </h2>
            <a
              href="mailto:nithin.pranav@gmail.com"
              className="mt-7 inline-flex max-w-full break-all border-b border-signal pb-1 font-mono text-lg text-paper transition-colors hover:text-signal md:text-2xl"
            >
              nithin.pranav@gmail.com
            </a>
            <div className="mt-8 grid grid-cols-1 gap-3 min-[380px]:grid-cols-2 sm:flex sm:flex-wrap">
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
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-4 px-5 py-6 font-mono text-[10px] sm:flex-row sm:items-center sm:px-6">
          <div className="flex flex-wrap items-center gap-4 text-paper/60">
            <Link to="/case-studies" className="transition-colors hover:text-signal">
              CASE STUDIES
            </Link>
            <span className="text-paper/20">·</span>
            <Link to="/projects" className="transition-colors hover:text-signal">
              PROJECTS
            </Link>
            <span className="text-paper/20">·</span>
            <Link to="/certifications" className="text-signal transition-colors hover:text-paper">
              CERTIFICATIONS
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
