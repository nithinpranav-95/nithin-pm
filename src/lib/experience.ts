export type Role = {
  date: string;
  title: string;
  company: string;
  type: string;
  duration: string;
  location: string;
  summary: string;
  details: string[];
};

export const roles: Role[] = [
  {
    date: "JUL 2025 — JUL 2026",
    title: "Product Manager",
    company: "TeamViewer",
    type: "Full-time",
    duration: "1 yr",
    location: "Berlin, Germany",
    summary:
      "Owned roadmap and delivery for an enterprise remote connectivity platform, focusing on API surfaces, onboarding, compliance automation, and cross-team execution.",
    details: [
      "Jul 2025 - Jul 2026 · 1 yr · Berlin, Germany · Full-time",
      "Contributed to roadmap for an enterprise remote connectivity platform, aligning priorities to customer needs, security, reliability, and scalability requirements across global B2B accounts.",
      "Shaped the public API surface for session management and connection reporting — defining endpoint scope, payloads, and error contracts with engineering — cutting enterprise integration time from 3 weeks to 1 week.",
      "Identified friction in authentication and device provisioning flows, improving the enterprise onboarding experience for new customers.",
      "Built and iterated dashboard and workflow prototypes with no-code tools, accelerating stakeholder alignment and shortening iteration cycles by 10–20%.",
      "Automated 5 compliance and audit workflows, reducing manual operational effort by 6–8% and improving audit readiness.",
      "Coordinated multiple product workstreams against quarterly OKRs through structured cross-team updates and dependency tracking.",
    ],
  },
  {
    date: "JUL 2023 — JUN 2025",
    title: "Product Analyst",
    company: "TeamViewer",
    type: "Full-time",
    duration: "2 yrs",
    location: "Berlin, Germany",
    summary:
      "Led product analytics for AI/AR features, defining success metrics, measurement frameworks, and A/B tests across the product lifecycle.",
    details: [
      "Jul 2023 - Jun 2025 · 2 yrs · Berlin, Germany · Full-time",
      "Led product analytics for AI/AR features, defining success metrics and measurement frameworks across the product lifecycle.",
      "Partnered with cross-functional teams to redesign the AR onboarding flow using user research and A/B testing, improving first-session completion rates by 3%.",
      "Worked with PMs, engineers, and UX researchers to define KPIs and scope A/B tests for feature validation.",
      "Translated AI/AR performance data into actionable insights for non-technical stakeholders, improving decision clarity.",
    ],
  },
  {
    date: "JUN 2021 — JUN 2023",
    title: "Product Operations",
    company: "SoSafe",
    type: "Full-time",
    duration: "2 yrs",
    location: "Berlin, Germany",
    summary:
      "Operational bridge between customer-facing teams and product/engineering for cybersecurity awareness products.",
    details: [
      "Jun 2021 - Jun 2023 · 2 yrs · Berlin, Germany · Full-time",
      "Cut customer escalation response time by 4% by building a structured triage process between support and engineering, reducing hand-off delays on time-sensitive security issues.",
      "Owned release coordination in Jira across engineering, sales, and support — aligning rollout timing and readiness for cybersecurity awareness product updates.",
      "Served as the operational bridge between customer-facing teams and product/engineering, surfacing recurring customer pain points that fed directly into prioritization decisions.",
    ],
  },
];
