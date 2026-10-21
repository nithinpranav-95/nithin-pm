import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, ExternalLink, ArrowLeft, Briefcase, GraduationCap, Cpu, Cloud, RefreshCw } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { RESUME_CONFIG } from "@/lib/resume";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Nithin Pranav, Product Manager" },
      {
        name: "description",
        content:
          "Resume and career summary of Nithin Pranav — AI Product Manager focused on enterprise B2B SaaS, agentic workflows, and machine learning.",
      },
      { property: "og:title", content: "Resume — Nithin Pranav" },
      {
        property: "og:description",
        content:
          "Resume and career summary of Nithin Pranav: Product Manager at TeamViewer and SoSafe.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResumePage,
});

function ResumePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-paper antialiased">
      <Navbar />

      <main className="mx-auto max-w-[1440px] px-4 sm:px-6">
        {/* Header Hero */}
        <section className="grid grid-cols-12 gap-6 pb-10 pt-9 sm:pb-12 sm:pt-14">
          <div className="col-span-12 md:col-span-8">
            <div className="flex items-center gap-3">
              <Link
                to="/"
                className="inline-flex items-center gap-1 font-mono text-[11px] text-paper/60 transition-colors hover:text-signal"
              >
                <ArrowLeft className="h-3 w-3" />
                <span>BACK TO HOME</span>
              </Link>
              <span className="text-paper/20">·</span>
              <p className="font-mono text-[11px] text-signal">(a) — CURRICULUM VITAE</p>
            </div>

            <h1 className="mt-4 text-balance font-display text-5xl font-semibold leading-[0.9] sm:text-6xl md:text-8xl">
              Resume
            </h1>

            <p className="mt-6 max-w-[58ch] text-pretty text-lg font-light leading-snug text-paper/75">
              AI Product Manager with a track record across enterprise B2B SaaS (TeamViewer, SoSafe),
              onboarding, retention, and partner integrations. Hands-on with agentic AI, LLM tool
              calling, and production evaluation frameworks.
            </p>

            {/* Quick Actions Bar */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={RESUME_CONFIG.driveDownloadUrl}
                download={RESUME_CONFIG.fileName}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-signal bg-signal/10 px-5 py-3 font-mono text-[11px] font-medium tracking-wide text-signal transition-colors hover:bg-signal hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
              >
                <Download className="h-3.5 w-3.5" />
                <span>DOWNLOAD RESUME (PDF)</span>
                <span aria-hidden="true">↓</span>
              </a>

              <a
                href={RESUME_CONFIG.driveViewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-paper/20 bg-panel px-5 py-3 font-mono text-[11px] tracking-wide text-paper/80 transition-colors hover:border-signal hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span>OPEN IN GOOGLE DRIVE</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="col-span-12 flex flex-col justify-end gap-2 border-paper/15 font-mono text-[10px] text-paper/45 md:col-span-4 md:border-l md:border-dashed md:pl-6">
            <span>DOCUMENT — NITHIN PRANAV / RESUME 2026</span>
            <span>LOCATION — BERLIN, GERMANY</span>
            <span>CONTACT — NITHIN.PRANAV@GMAIL.COM</span>
            <span className="text-signal">STATUS — LIVE CLOUD SYNCED (GOOGLE DRIVE)</span>
          </div>
        </section>

        <div className="border-t border-paper/10" />

        {/* Embedded Resume Viewer */}
        <section aria-label="Resume Document Viewer" className="py-12 sm:py-16">
          <div className="border border-paper/15 bg-panel p-3 sm:p-5">
            {/* Monograph Top Bar */}
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-paper/10 pb-3 font-mono text-[10px] text-paper/40">
              <div className="flex items-center gap-3">
                <span className="text-signal">+CV-2026</span>
                <span>FIG. 01 — OFFICIAL DOCUMENT (CLOUD SYNCED)</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-1.5 text-signal">
                  <Cloud className="h-3 w-3" />
                  <span>SYNCED</span>
                </span>
                <span>FORMAT: PDF</span>
                <a
                  href={RESUME_CONFIG.driveDownloadUrl}
                  download={RESUME_CONFIG.fileName}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-signal hover:underline"
                >
                  <Download className="h-3 w-3" />
                  <span>DOWNLOAD</span>
                </a>
              </div>
            </div>

            {/* Document Frame */}
            <div className="relative aspect-[1/1.414] min-h-[640px] w-full overflow-hidden border border-paper/10 bg-ink sm:min-h-[850px] lg:min-h-[1100px]">
              <iframe
                src={RESUME_CONFIG.drivePreviewUrl}
                title="Nithin Pranav Resume PDF Preview"
                className="h-full w-full border-0"
                allow="autoplay"
              />
            </div>

            {/* Document Footer helper */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] text-paper/40">
              <span>GOOGLE DRIVE CLOUD SYNC · ALWAYS SHOWS LATEST VERSION</span>
              <a
                href={RESUME_CONFIG.driveDownloadUrl}
                download={RESUME_CONFIG.fileName}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-signal hover:underline"
              >
                <span>DIRECT DOWNLOAD (PDF)</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>

        <div className="border-t border-paper/10" />

        {/* Summary Highlights Grid */}
        <section className="py-14 sm:py-16">
          <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <span className="font-mono text-[11px] text-signal">(b) — AT A GLANCE</span>
              <h2 className="mt-2 font-display text-3xl font-medium sm:text-4xl">
                Profile Highlights
              </h2>
            </div>
            <Link
              to="/"
              hash="experience"
              className="font-mono text-[11px] text-signal transition-colors hover:text-paper"
            >
              EXPLORE TIMELINE ON HOME →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Experience Summary */}
            <div className="border border-paper/15 bg-panel p-6">
              <div className="flex items-center gap-2 font-mono text-[10px] text-signal">
                <Briefcase className="h-3.5 w-3.5" />
                <span>EXPERIENCE</span>
              </div>
              <h3 className="mt-3 font-display text-xl font-medium">B2B SaaS & Growth</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-paper/70">
                <li className="flex items-start gap-2">
                  <span className="text-signal">·</span>
                  <span><strong>TeamViewer (Product Manager)</strong> — Led enterprise onboarding redesign cutting time-to-value from 14 to 3 days (79% reduction).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-signal">·</span>
                  <span><strong>TeamViewer (Product Analyst)</strong> — Closed feature onboarding funnel leaks, achieving estimated 8% lift in activation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-signal">·</span>
                  <span><strong>SoSafe (Product Operations)</strong> — Managed Jira release cycles and support-to-engineering triage across security products.</span>
                </li>
              </ul>
            </div>

            {/* AI & ML Skills */}
            <div className="border border-paper/15 bg-panel p-6">
              <div className="flex items-center gap-2 font-mono text-[10px] text-signal">
                <Cpu className="h-3.5 w-3.5" />
                <span>TECHNICAL & AI</span>
              </div>
              <h3 className="mt-3 font-display text-xl font-medium">Agentic AI & ML</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-paper/70">
                <li className="flex items-start gap-2">
                  <span className="text-signal">·</span>
                  <span><strong>AI Agents</strong> — LangChain, LangGraph, tool calling, smolagents, eval pipelines and guardrail design.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-signal">·</span>
                  <span><strong>Machine Learning</strong> — XGBoost, LightGBM, PyTorch, Transformers, NLP, and scikit-learn.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-signal">·</span>
                  <span><strong>Credentialed</strong> — IHK Data Science & AI (960 hrs) + Hugging Face AI Agents Certified.</span>
                </li>
              </ul>
            </div>

            {/* Education & Creds */}
            <div className="border border-paper/15 bg-panel p-6">
              <div className="flex items-center gap-2 font-mono text-[10px] text-signal">
                <GraduationCap className="h-3.5 w-3.5" />
                <span>EDUCATION</span>
              </div>
              <h3 className="mt-3 font-display text-xl font-medium">Academic Foundation</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-paper/70">
                <li className="flex items-start gap-2">
                  <span className="text-signal">·</span>
                  <span><strong>ESCP Business School (Berlin/Paris)</strong> — M.Sc. in International Sales Management (2018 – 2021).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-signal">·</span>
                  <span><strong>IHK Berlin / HZA</strong> — Certified Data Scientist & AI Specialist (State-accredited, 2026).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-signal">·</span>
                  <span><strong>Hugging Face Hub</strong> — Certified in AI Agents Fundamentals (2026).</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="border-t border-paper/10" />

        {/* Cloud Sync & Manage Section */}
        <section aria-label="Resume Cloud Sync Management" className="py-14 sm:py-16">
          <div className="border border-paper/15 bg-panel p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-paper/10 pb-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-2 w-2 rounded-full bg-signal animate-pulse" />
                <span className="font-mono text-[11px] text-signal font-medium">
                  LIVE CLOUD SYNC · GOOGLE DRIVE
                </span>
              </div>
              <span className="font-mono text-[10px] text-paper/40">STATUS: CONNECTED & SYNCED</span>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <h2 className="font-display text-2xl font-medium sm:text-3xl">
                  Update your resume anytime via Google Drive
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-paper/75">
                  This portfolio is configured with a live Google Drive cloud sync. Whenever you upload a new version to the file in Google Drive, this page’s viewer and all download links across the website update immediately — without needing to push new code or redeploy.
                </p>

                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3 font-mono text-[11px] text-paper/70">
                  <div className="border border-paper/10 bg-ink/50 p-3">
                    <span className="text-signal block font-semibold mb-1">01 / OPEN FILE</span>
                    <span>Click the manage button to open this resume in Google Drive.</span>
                  </div>
                  <div className="border border-paper/10 bg-ink/50 p-3">
                    <span className="text-signal block font-semibold mb-1">02 / MANAGE VERSIONS</span>
                    <span>Click More actions (⋮) or File info → <strong className="text-paper">Manage versions</strong>.</span>
                  </div>
                  <div className="border border-paper/10 bg-ink/50 p-3">
                    <span className="text-signal block font-semibold mb-1">03 / UPLOAD NEW</span>
                    <span>Upload your updated PDF. The file ID remains unchanged and the site updates live!</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 lg:col-span-4 lg:pl-4">
                <a
                  href={RESUME_CONFIG.driveViewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-signal bg-signal px-5 py-3.5 font-mono text-[11px] font-medium tracking-wide text-ink transition-all hover:bg-signal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>MANAGE IN GOOGLE DRIVE</span>
                  <span aria-hidden="true">↗</span>
                </a>

                <a
                  href={RESUME_CONFIG.driveDownloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-paper/20 bg-panel px-5 py-3 font-mono text-[11px] tracking-wide text-paper/80 transition-colors hover:border-signal hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>TEST LIVE CLOUD DOWNLOAD</span>
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
            <Link to="/certifications" className="transition-colors hover:text-signal">
              CERTIFICATIONS
            </Link>
            <span className="text-paper/20">·</span>
            <Link to="/resume" className="text-signal transition-colors hover:text-paper">
              RESUME
            </Link>
            <span className="text-paper/20">·</span>
            <a
              href="mailto:nithin.pranav@gmail.com"
              className="transition-colors hover:text-signal"
            >
              EMAIL →
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
