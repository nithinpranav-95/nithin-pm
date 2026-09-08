import caseYoutube from "@/assets/case-youtube.jpg";
import caseN26 from "@/assets/case-n26.jpg";
import caseDuolingo from "@/assets/case-duolingo.jpg";
import caseDoctolib from "@/assets/case-doctolib.jpg";

export interface ProjectSection {
  heading: string;
  body: string;
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  year: string;
  image: string;
  description: string;
  role: string;
  outcome: string;
  canvaUrl: string;
  sections: ProjectSection[];
}

export const projects: Project[] = [
  {
    slug: "youtube",
    image: caseYoutube,
    number: "01",
    title: "Youtube",
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
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
