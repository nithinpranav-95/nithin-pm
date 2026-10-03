import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Download,
  ExternalLink,
  Award,
  FileText,
  CheckCircle2,
  ChevronRight,
  Eye,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { AskAssistant } from "@/components/AskAssistant";

import certIhkPage1 from "@/assets/cert-ihk-page-1.jpg";
import certIhkPage2 from "@/assets/cert-ihk-page-2.jpg";
import certIhkFoundationsPage1 from "@/assets/cert-ihk-foundations-page-1.jpg";
import certIhkFoundationsPage2 from "@/assets/cert-ihk-foundations-page-2.jpg";
import certIhkFoundationsPage3 from "@/assets/cert-ihk-foundations-page-3.jpg";
import certHfAgents from "@/assets/cert-huggingface-agents.png";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Nithin Pranav, Product Manager" },
      {
        name: "description",
        content:
          "Professional certifications in Data Science, Machine Learning, and AI Agents — including IHK / HZA Data Science & AI and Hugging Face AI Agents.",
      },
      { property: "og:title", content: "Certifications — Nithin Pranav" },
      {
        property: "og:description",
        content:
          "Verified credentials in Data Science, AI Agents, and Machine Learning by IHK / neue fische and Hugging Face.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Certifications,
});

interface CertItem {
  id: string;
  badge: string;
  number: string;
  title: string;
  issuer: string;
  organization: string;
  date: string;
  duration: string;
  credentialId?: string;
  description: string;
  skills: string[];
  pdfUrl?: string;
  externalUrl?: string;
  pages: { label: string; src: string; caption: string }[];
}

const certificationsData: CertItem[] = [
  {
    id: "ihk-data-ai-foundations",
    badge: "STATE ACCREDITED (IHK)",
    number: "01",
    title: "Data & AI Foundations IHK / CCI",
    issuer: "Handelskammer Hamburg (HKBiS Bildungs-Service)",
    organization: "neue fische — School and Pool for Digital Talent",
    date: "April 2026 – May 2026",
    duration: "240 lessons (Unterrichtsstunden à 45 min)",
    credentialId: "182468EECAF88-351D-4321-AFC3-4C0CF21DC040013",
    description:
      "Official IHK / CCI certification in Data & AI Foundations. Completed 240 lessons covering Python fundamentals, UNIX, data wrangling with Pandas and SQL, data extraction and cleaning, data ethics and responsible AI use, data visualization, and an exploratory data analysis project.",
    skills: [
      "Python Fundamentals",
      "Pandas & SQL Wrangling",
      "Exploratory Data Analysis (EDA)",
      "Responsible AI & Data Ethics",
      "Data Cleaning & Extraction",
      "Visualization Techniques",
      "Git & GitHub",
      "UNIX Environment",
      "AI Concepts & Applied Logic",
    ],
    pdfUrl: "/ihk-data-ai-foundations-certificate.pdf",
    externalUrl: "https://hkbis.de/zertifikatscheck/182468EECAF88-351D-4321-AFC3-4C0CF21DC040013",
    pages: [
      {
        label: "Certificate (Page 1)",
        src: certIhkFoundationsPage1,
        caption:
          "Official IHK Completion Certificate — 240 lessons (signed by Philipp Fischbeck, HKBiS Handelskammer Hamburg)",
      },
      {
        label: "Curriculum (Page 2)",
        src: certIhkFoundationsPage2,
        caption: "Covered Subjects — Python, Data Wrangling, SQL, Data Ethics & AI Concepts",
      },
      {
        label: "Digital CCI (Page 3)",
        src: certIhkFoundationsPage3,
        caption:
          "Digitales IHK-Zertifikat with QR Verification Code (Valid until December 31, 2032)",
      },
    ],
  },
  {
    id: "hugging-face-ai-agents",
    badge: "FOUNDATIONAL EXCELLENCE",
    number: "02",
    title: "AI Agents Course — Fundamentals of Agents",
    issuer: "Hugging Face",
    organization: "Hugging Face Hub (agents-course)",
    date: "August 2026",
    duration: "Comprehensive Coursework & Benchmark",
    credentialId: "Hugging Face ID: Nithinpranav95",
    description:
      "Rigorous coursework on autonomous AI agents, tool creation and function calling, multi-agent coordination, smolagents framework, agentic RAG systems, and benchmark evaluations.",
    skills: [
      "Autonomous AI Agents",
      "smolagents & Tool Calling",
      "ReAct & Multi-Step Reasoning",
      "Agentic RAG & Routing",
      "Multi-Agent Orchestration",
      "Agent Evaluation & Benchmarks",
      "Safe Execution Sandboxes",
      "Prompt Engineering for Agents",
    ],
    externalUrl: "https://huggingface.co/learn/agents-course",
    pages: [
      {
        label: "Certificate",
        src: certHfAgents,
        caption: "Verified Certificate of Completion — Hugging Face AI Agents Course",
      },
    ],
  },
  {
    id: "ihk-data-science-ai",
    badge: "STATE ACCREDITED",
    number: "03",
    title: "Data Science & AI",
    issuer: "IHK / Hanseatische Zertifizierungsagentur (HZA)",
    organization: "neue fische | SPICED Academy",
    date: "April 2026 – August 2026",
    duration: "960 hours (720 intensive lessons)",
    credentialId: "HZA Certified — Nithin Balasubramanian",
    description:
      "Full-time intensive program covering end-to-end data science, applied machine learning, deep learning, and generative AI systems with extensive hands-on programming and a 4-week capstone project.",
    skills: [
      "AI Agents & Workflows",
      "LLMs & Prompt Engineering",
      "RAG Architecture",
      "Python & Data Science Stack",
      "PyTorch / TensorFlow",
      "Scikit-Learn & ML Algorithms",
      "Exploratory Data Analysis (EDA)",
      "Time Series & Predictive Modeling",
      "SQL & Relational Databases",
      "Streamlit App Deployment",
    ],
    pdfUrl: "/ihk-data-science-ai-certificate.pdf",
    pages: [
      {
        label: "Certificate (Page 1)",
        src: certIhkPage1,
        caption: "Official Completion Certificate — 960 hours of programming practice",
      },
      {
        label: "Curriculum (Page 2)",
        src: certIhkPage2,
        caption: "Curriculum Breakdown — Data Science, Machine Learning & AI Modules",
      },
    ],
  },
];

function Certifications() {
  const [activePages, setActivePages] = useState<Record<string, number>>({
    "ihk-data-science-ai": 0,
    "ihk-data-ai-foundations": 0,
    "hugging-face-ai-agents": 0,
  });

  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const setPage = (certId: string, pageIdx: number) => {
    setActivePages((prev) => ({ ...prev, [certId]: pageIdx }));
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-paper antialiased">
      <Navbar />

      <main className="mx-auto max-w-[1440px] px-4 sm:px-6">
        {/* Header Hero Section */}
        <section className="grid grid-cols-12 gap-6 pb-10 pt-9 sm:pb-12 sm:pt-14">
          <div className="col-span-12 md:col-span-8">
            <p className="font-mono text-[11px] text-signal">(a) — CREDENTIALS</p>
            <h1 className="mt-4 text-balance font-display text-5xl font-semibold leading-[0.9] sm:text-6xl md:text-8xl">
              Certifications
            </h1>
            <p className="mt-6 max-w-[54ch] text-pretty text-lg font-light leading-snug text-paper/75">
              Verified certifications in Data Science, Machine Learning, and AI Agents — reflecting
              deep technical fluency across models, code, and systems.
            </p>
          </div>
          <div className="col-span-12 flex flex-col justify-end gap-2 border-paper/15 font-mono text-[10px] text-paper/45 md:col-span-4 md:border-l md:border-dashed md:pl-6">
            <span>
              COUNT — {String(certificationsData.length).padStart(2, "0")} VERIFIED CREDENTIALS
            </span>
            <span>DOMAINS — DATA SCIENCE · AI AGENTS · ML</span>
            <span className="text-signal">STATUS — ALL COMPLETE & VERIFIED</span>
          </div>
        </section>

        <div className="border-t border-paper/10" />

        {/* Certifications List */}
        <div className="divide-y divide-paper/10 pb-20">
          {certificationsData.map((cert) => {
            const activePageIdx = activePages[cert.id] ?? 0;
            const activePage = cert.pages[activePageIdx]!;

            return (
              <section key={cert.id} className="py-16">
                <div className="grid grid-cols-12 gap-8 lg:gap-12">
                  {/* Left Column: Details & Metadata */}
                  <div className="col-span-12 flex flex-col justify-between lg:col-span-6">
                    <div>
                      {/* Top Monograph Meta */}
                      <div className="flex flex-wrap items-center gap-3 font-mono text-[10px]">
                        <span className="text-signal">{cert.number}</span>
                        <span className="text-paper/30">/</span>
                        <span className="border border-paper/15 bg-panel px-2 py-0.5 uppercase tracking-wider text-paper/70">
                          {cert.badge}
                        </span>
                        <span className="text-paper/40">[{cert.date}]</span>
                      </div>

                      {/* Main Title & Organization */}
                      <h2 className="mt-4 font-display text-3xl font-medium sm:text-4xl">
                        {cert.title}
                      </h2>
                      <p className="mt-2 font-mono text-[12px] text-signal">
                        {cert.issuer} <span className="text-paper/40">·</span> {cert.organization}
                      </p>

                      {/* Description */}
                      <p className="mt-5 text-pretty text-base leading-relaxed text-paper/70">
                        {cert.description}
                      </p>

                      {/* Core Specs Grid */}
                      <div className="mt-6 grid grid-cols-1 gap-4 border-y border-paper/10 py-4 font-mono text-[11px] min-[420px]:grid-cols-2">
                        <div>
                          <span className="block text-[9px] uppercase tracking-wider text-paper/40">
                            PRACTICE & LESSONS
                          </span>
                          <span className="mt-0.5 block text-paper/85">{cert.duration}</span>
                        </div>
                        <div>
                          <span className="block text-[9px] uppercase tracking-wider text-paper/40">
                            CREDENTIAL IDENTITY
                          </span>
                          <span className="mt-0.5 block text-paper/85">{cert.credentialId}</span>
                        </div>
                      </div>

                      {/* Skills Tags */}
                      <div className="mt-6">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-paper/45">
                          CURRICULUM & KEY TOPICS
                        </span>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {cert.skills.map((skill) => (
                            <span
                              key={skill}
                              className="inline-flex items-center gap-1.5 border border-paper/10 bg-panel/70 px-2.5 py-1 font-mono text-[10px] text-paper/80"
                            >
                              <CheckCircle2 className="h-3 w-3 text-signal" />
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Actions & Links */}
                    <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-paper/10 pt-6">
                      {cert.pdfUrl && (
                        <a
                          href={cert.pdfUrl}
                          download={cert.pdfUrl.split("/").pop()}
                          className="inline-flex items-center gap-2 border border-signal bg-signal/10 px-4 py-2.5 font-mono text-[11px] font-medium tracking-wide text-signal transition-colors hover:bg-signal hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
                        >
                          <Download className="h-3.5 w-3.5" />
                          <span>DOWNLOAD FULL PDF</span>
                          <span aria-hidden="true">↓</span>
                        </a>
                      )}
                      {cert.pdfUrl && (
                        <a
                          href={cert.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 border border-paper/20 bg-panel px-4 py-2.5 font-mono text-[11px] tracking-wide text-paper/80 transition-colors hover:border-signal hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
                        >
                          <FileText className="h-3.5 w-3.5" />
                          <span>VIEW PDF IN TAB</span>
                          <span aria-hidden="true">↗</span>
                        </a>
                      )}
                      {cert.externalUrl && (
                        <a
                          href={cert.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 border border-signal bg-signal/10 px-4 py-2.5 font-mono text-[11px] font-medium tracking-wide text-signal transition-colors hover:bg-signal hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          <span>
                            {cert.externalUrl.includes("zertifikatscheck")
                              ? "VERIFY ON IHK PORTAL"
                              : "VIEW COURSE HUB"}
                          </span>
                          <span aria-hidden="true">→</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Visual Certificate Card */}
                  <div className="col-span-12 lg:col-span-6">
                    <div className="border border-paper/15 bg-panel p-3">
                      {/* Tab Selector if multi-page */}
                      {cert.pages.length > 1 && (
                        <div className="mb-3 flex flex-wrap items-center gap-2 border-b border-paper/10 pb-3 font-mono text-[10px] sm:text-[11px]">
                          {cert.pages.map((p, idx) => (
                            <button
                              key={p.label}
                              type="button"
                              onClick={() => setPage(cert.id, idx)}
                              className={`px-3 py-1.5 transition-all ${
                                activePageIdx === idx
                                  ? "border border-signal bg-signal/10 font-medium text-signal"
                                  : "text-paper/50 hover:text-paper"
                              }`}
                            >
                              {p.label}
                            </button>
                          ))}
                            <span className="w-full text-[9px] text-paper/40 sm:ml-auto sm:w-auto sm:text-[10px]">
                            CLICK IMAGE TO ENLARGE
                          </span>
                        </div>
                      )}

                      {/* Image Preview Plate */}
                      <button
                        type="button"
                        onClick={() => setExpandedImage(activePage.src)}
                        className="group relative block w-full overflow-hidden border border-paper/10 bg-ink/80 text-left transition-all hover:border-signal/50"
                        title="Click to view full resolution"
                      >
                        <img
                          src={activePage.src}
                          alt={`${cert.title} - ${activePage.label}`}
                          className="h-auto w-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-ink/40 opacity-0 backdrop-blur-[2px] transition-opacity group-hover:opacity-100">
                          <span className="inline-flex items-center gap-2 border border-signal bg-ink px-4 py-2 font-mono text-[11px] text-signal shadow-lg">
                            <Eye className="h-3.5 w-3.5" />
                            <span>CLICK TO EXPAND</span>
                          </span>
                        </div>
                      </button>

                      {/* Caption */}
                      <div className="mt-3 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 px-1 font-mono text-[10px] text-paper/50">
                        <span className="min-w-0">{activePage.caption}</span>
                        <span className="shrink-0 text-signal">FIG. {cert.number}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </main>

      {/* Lightbox Modal for Full View */}
      {expandedImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 backdrop-blur-md"
          onClick={() => setExpandedImage(null)}
        >
          <div className="relative max-h-[95vh] max-w-[95vw] overflow-auto border border-paper/20 bg-panel p-2 shadow-2xl">
            <button
              type="button"
              onClick={() => setExpandedImage(null)}
              className="absolute right-4 top-4 z-10 border border-paper/20 bg-ink px-3 py-1 font-mono text-xs text-paper transition-colors hover:border-signal hover:text-signal"
            >
              CLOSE [ESC]
            </button>
            <img
              src={expandedImage}
              alt="Expanded Certificate"
              className="max-h-[90vh] w-auto object-contain"
            />
          </div>
        </div>
      )}

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

      <AskAssistant />
    </div>
  );
}
