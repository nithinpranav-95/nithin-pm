import caseYoutube from "@/assets/case-youtube.jpg";
import caseN26 from "@/assets/case-n26.jpg";
import caseDuolingo from "@/assets/case-duolingo.jpg";
import caseDoctolib from "@/assets/case-doctolib.jpg";
import caseSynthflow from "@/assets/case-synthflow.jpg";
import caseMaritime from "@/assets/case-maritime.jpg";
import caseNomerra from "@/assets/case-nomerra.jpg";
import caseReonic from "@/assets/case-reonic.jpg";

export interface ProjectSection {
  heading: string;
  body: string;
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  company: string;
  year: string;
  image: string;
  description: string;
  role: string;
  outcome: string;
  canvaUrl: string;
  hideOnHome?: boolean;
  sections: ProjectSection[];
}

export const projects: Project[] = [
  {
    slug: "youtube",
    image: caseYoutube,
    number: "01",
    title: "Youtube",
    company: "YouTube",
    year: "2026",
    description:
      "A product teardown and growth case study on how discovery and creator retention shape the viewing experience.",
    role: "LEAD PM",
    outcome: "CASE STUDY",
    canvaUrl: "https://www.canva.com/design/DAHRh_cv6CA/eUG7EeDvL48z4Y2ku9kXMA/view",
    sections: [
      {
        heading: "Context",
        body: "The study starts from the viewer's job to be done: find something worth the next twenty minutes. I mapped the current discovery surfaces, the signals behind them, and where attention leaks between them.",
      },
      {
        heading: "Approach",
        body: "I ran a structured teardown of the core flows, framed the problem as a two-sided marketplace between viewers and creators, and sized the opportunity with public metrics and reasonable assumptions stated up front.",
      },
      {
        heading: "What I proposed",
        body: "A prioritised set of product bets, each with the hypothesis, the metric it moves, the experiment that would prove or kill it, and the cost of being wrong.",
      },
      {
        heading: "How to read the deck",
        body: "The deck above walks through the full argument in order: context, user problems, opportunity sizing, proposed solutions, success metrics, and risks.",
      },
    ],
  },
  {
    slug: "n26",
    image: caseN26,
    number: "02",
    title: "N26",
    company: "N26",
    year: "2026",
    description:
      "A case study on trust, onboarding friction, and support load in a mobile-first bank.",
    role: "PRODUCT MANAGER",
    outcome: "CASE STUDY",
    canvaUrl: "https://www.canva.com/design/DAHRmt8gpMs/pjv762svfq6p3VILJA8vDA/view",
    sections: [
      {
        heading: "Context",
        body: "Digital banking wins on speed but loses on trust at the exact moments money moves. I looked at where new customers hesitate, drop off, or reach for support.",
      },
      {
        heading: "Approach",
        body: "I walked the onboarding and first-transaction journeys end to end, catalogued every friction point, and grouped them by whether they were regulatory, technical, or purely design choices.",
      },
      {
        heading: "What I proposed",
        body: "Changes that remove avoidable friction without weakening compliance, plus a rules-led approach to the edge cases that generate the most support contacts.",
      },
      {
        heading: "How to read the deck",
        body: "The deck above covers the journey map, the friction inventory, the prioritised fixes, and the metrics that would show the change worked.",
      },
    ],
  },
  {
    slug: "duolingo",
    image: caseDuolingo,
    number: "03",
    title: "Duolingo",
    company: "Duolingo",
    year: "2026",
    description:
      "A case study on habit formation, streak mechanics, and where gamification stops helping learners.",
    role: "PRODUCT MANAGER",
    outcome: "CASE STUDY",
    canvaUrl: "https://www.canva.com/design/DAHSV92aUo4/8MtMkKE8lbNtcT1mk6IGRA/view",
    sections: [
      {
        heading: "Context",
        body: "Daily engagement is the headline metric, but the real goal is learning. I examined where those two diverge and what that costs long term.",
      },
      {
        heading: "Approach",
        body: "I segmented learners by intent, traced the reward loops each segment responds to, and looked for the point where motivation mechanics start to substitute for progress.",
      },
      {
        heading: "What I proposed",
        body: "Adjustments to the loop that keep the habit intact while tying rewards more tightly to demonstrated learning, with guardrail metrics so retention isn't traded away blindly.",
      },
      {
        heading: "How to read the deck",
        body: "The deck above sets out the segments, the loop analysis, the proposed changes, and the experiment design.",
      },
    ],
  },
  {
    slug: "doctolib",
    image: caseDoctolib,
    number: "04",
    title: "Doctolib",
    company: "Doctolib",
    year: "2026",
    description:
      "A case study on booking reliability, no-shows, and the two-sided balance between patients and practitioners.",
    role: "PRODUCT MANAGER",
    outcome: "CASE STUDY",
    canvaUrl: "https://www.canva.com/design/DAHSS0_o3LI/pFIaYKtaLX7_jCwA4UCyPg/view",
    sections: [
      {
        heading: "Context",
        body: "Every empty slot is a cost to a practice and a delay to a patient. I looked at the booking funnel from both sides and where their incentives pull apart.",
      },
      {
        heading: "Approach",
        body: "I broke the funnel into search, selection, confirmation, and attendance, then identified which drop-offs are demand problems and which are supply-side configuration problems.",
      },
      {
        heading: "What I proposed",
        body: "Interventions targeted at the attendance step, sequenced from reversible and cheap to structural, each tied to a measurable reduction in unused capacity.",
      },
      {
        heading: "How to read the deck",
        body: "The deck above presents the funnel breakdown, the two-sided analysis, the proposed interventions, and the risks.",
      },
    ],
  },
  {
    slug: "synthflow-voice-agent",
    image: caseSynthflow,
    number: "05",
    title: "Synthflow — Voice Agent",
    company: "Synthflow",
    year: "2026",
    description:
      "A case study on building a reliable AI voice agent: call flows, hand-off to humans, and the quality bar that makes people trust it.",
    role: "PRODUCT MANAGER",
    outcome: "CASE STUDY",
    canvaUrl: "https://www.canva.com/design/DAHRsrWpv88/qLt9f6H8TKZo9mfNJLF06A/view",
    sections: [
      {
        heading: "Context",
        body: "Voice agents fail quietly: callers hang up, intents get misread, and the business never sees why. I started from the call itself and what a caller expects within the first ten seconds.",
      },
      {
        heading: "Approach",
        body: "I mapped the conversation flows end to end, separated model failures from product failures, and defined where the agent must hand off to a human instead of guessing.",
      },
      {
        heading: "What I proposed",
        body: "A containment-versus-satisfaction framing, guardrails on high-risk intents, and an evaluation loop that scores real calls rather than scripted demos.",
      },
      {
        heading: "How to read the deck",
        body: "The deck above walks through the caller problems, the flow design, the quality metrics, and the risks of over-automation.",
      },
    ],
  },
  {
    slug: "maritime-ai-agent",
    image: caseMaritime,
    number: "06",
    title: "Zauber — AI Agent for Ship Companies",
    company: "Zauber",
    year: "2026",
    description:
      "A case study on bringing an AI agent into maritime operations at Zauber (gozauber.com) — where it can take work off the crew and shore teams, and where it must not.",
    role: "PRODUCT MANAGER",
    outcome: "CASE STUDY",
    canvaUrl: "https://www.canva.com/design/DAHSKlPBLSY/kbRvv4ZoBHQiOgROjNf8Pw/view",
    sections: [
      {
        heading: "Context",
        body: "Shipping runs on documents, schedules, and exception handling spread across email, spreadsheets, and legacy systems. I looked at where operators lose hours to coordination rather than judgement.",
      },
      {
        heading: "Approach",
        body: "I mapped the operational workflows end to end, separated the tasks that are rule-bound from the ones that need human accountability, and scoped the agent to the first group only.",
      },
      {
        heading: "What I proposed",
        body: "An agent that handles routine coordination and document work with a clear escalation path, plus the guardrails and audit trail a safety- and compliance-heavy industry needs before it will trust automation.",
      },
      {
        heading: "How to read the deck",
        body: "The deck above covers the operational context, the workflow analysis, the agent scope, the guardrails, and the risks.",
      },
    ],
  },
  {
    slug: "auxilius",
    image: caseMaritime,
    number: "07",
    title: "Auxilius",
    company: "Auxilius",
    year: "2026",
    description:
      "A case study on clinical trial financial operations — where manual spend tracking breaks down and what a product can do about it.",
    role: "PRODUCT MANAGER",
    outcome: "CASE STUDY",
    canvaUrl: "https://www.canva.com/design/DAHTaVvRdhY/_8x6TIP7OlJSskxjvEgJ6A/view",
    hideOnHome: true,
    sections: [
      {
        heading: "Context",
        body: "Trial finance teams reconcile budgets, vendor invoices, and accruals across spreadsheets and systems that were never designed to talk to each other.",
      },
      {
        heading: "Approach",
        body: "I mapped the end-to-end spend workflow, separated the steps that are rule-bound from the ones that need finance judgement, and looked for where errors compound.",
      },
      {
        heading: "What I proposed",
        body: "A workflow that keeps a single source of truth for trial spend, automates the repeatable reconciliation work, and keeps an audit trail finance and compliance can defend.",
      },
      {
        heading: "How to read the deck",
        body: "The deck above walks through the context, the workflow analysis, the proposed product, the metrics, and the risks.",
      },
    ],
  },
  {
    slug: "nomerra",
    image: caseNomerra,
    number: "08",
    title: "Nomerra — Agent for Private Market Operations",
    company: "Nomerra",
    year: "2026",
    description:
      "A case study on an AI agent for private market operations — where deal, fund, and investor workflows can be automated, and where they cannot.",
    role: "PRODUCT MANAGER",
    outcome: "CASE STUDY",
    canvaUrl: "https://www.canva.com/design/DAHU58crEic/LFVSxn8f9Gzl7UOg2eScaA/view",
    hideOnHome: true,
    sections: [
      {
        heading: "Context",
        body: "Private market teams run on documents, data rooms, and manual reconciliation across funds, deals, and LPs. Most of the effort goes into moving information rather than judging it.",
      },
      {
        heading: "Approach",
        body: "I mapped the operating workflows end to end, split the rule-bound steps from the ones that carry fiduciary weight, and scoped the agent to the first group with a clear escalation path.",
      },
      {
        heading: "What I proposed",
        body: "An agent that handles document extraction, reconciliation, and routine reporting, with an audit trail and review gates that a compliance-heavy industry can defend.",
      },
      {
        heading: "How to read the deck",
        body: "The deck above covers the operating context, the workflow analysis, the agent scope, the guardrails, and the risks.",
      },
    ],
  },
  {
    slug: "reonic",
    image: caseReonic,
    number: "09",
    title: "Reonic — AI Operating System for Renewable Installers",
    company: "Reonic",
    year: "2026",
    description:
      "A case study on an AI operating system for renewable installers — from quoting and site design to scheduling and handover.",
    role: "PRODUCT MANAGER",
    outcome: "CASE STUDY",
    canvaUrl: "https://www.canva.com/design/DAHSYRbFKUo/ADmwSOR_03_whW59XySSmQ/view",
    sections: [
      {
        heading: "Context",
        body: "Installers lose margin between the first customer enquiry and the finished installation: quoting is slow, site data is inconsistent, and scheduling collapses when reality shifts.",
      },
      {
        heading: "Approach",
        body: "I walked the installer journey from lead to commissioning, measured where hours and rework accumulate, and separated the steps that need field judgement from the ones software should own.",
      },
      {
        heading: "What I proposed",
        body: "An operating layer that turns site input into an accurate quote and design fast, keeps scheduling honest as jobs change, and hands crews a single source of truth on site.",
      },
      {
        heading: "How to read the deck",
        body: "The deck above walks through the market context, the workflow analysis, the proposed product, the metrics, and the risks.",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
