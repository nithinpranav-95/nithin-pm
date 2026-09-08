import { useEffect, useState } from "react";
import { ModalPortal } from "@/components/ModalPortal";


type Role = {
  date: string;
  title: string;
  company: string;
  type: string;
  duration: string;
  location: string;
  summary: string;
  details: string[];
};

const roles: Role[] = [
  {
    date: "JUL 2025 — JUL 2026",
    title: "Product Manager",
    company: "TeamViewer",
    type: "Full-time",
    duration: "1 yr",
    location: "Berlin, Germany",
    summary: "Owned roadmap and delivery for an enterprise remote connectivity platform, focusing on API surfaces, onboarding, compliance automation, and cross-team execution.",
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
    summary: "Led product analytics for AI/AR features, defining success metrics, measurement frameworks, and A/B tests across the product lifecycle.",
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
    summary: "Operational bridge between customer-facing teams and product/engineering for cybersecurity awareness products.",
    details: [
      "Jun 2021 - Jun 2023 · 2 yrs · Berlin, Germany · Full-time",
      "Cut customer escalation response time by 4% by building a structured triage process between support and engineering, reducing hand-off delays on time-sensitive security issues.",
      "Owned release coordination in Jira across engineering, sales, and support — aligning rollout timing and readiness for cybersecurity awareness product updates.",
      "Served as the operational bridge between customer-facing teams and product/engineering, surfacing recurring customer pain points that fed directly into prioritization decisions.",
    ],
  },
];

export function ExperienceList() {
  const [active, setActive] = useState<Role | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <div className="divide-y divide-paper/10">
        {roles.map((role) => (
          <button
            key={role.title + role.company}
            type="button"
            onClick={() => setActive(role)}
            className="grid w-full grid-cols-12 items-baseline gap-4 border-transparent py-5 text-left transition-all duration-300 ease-out hover:-translate-y-1 hover:border-signal hover:pl-3 focus-visible:-translate-y-1"
          >
            <span className="col-span-4 font-mono text-[11px] text-paper/50 sm:col-span-3">{role.date}</span>
            <div className="col-span-8 sm:col-span-9">
              <h3 className="font-display text-lg font-medium">
                {role.title} — {role.company}
              </h3>
              <p className="mt-1 text-sm text-paper/60">
                {role.type} · {role.duration} · {role.location}
              </p>
            </div>
          </button>
        ))}
      </div>

      {active ? (
        <ModalPortal>
        <div

          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} at ${active.company}`}
          className="fixed inset-0 z-50 overflow-y-auto bg-ink/90 px-4 py-10 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div
            className="mx-auto max-w-2xl border border-paper/20 bg-ink p-6 sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="font-mono text-[11px] text-signal">{active.date}</p>
                <h3 className="mt-3 font-display text-3xl font-semibold leading-none">{active.title}</h3>
                <p className="mt-2 font-mono text-[11px] text-paper/60">
                  {active.company} · {active.type}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="font-mono text-[11px] text-paper/60 transition-colors hover:text-signal"
                aria-label="Close experience details"
              >
                CLOSE ✕
              </button>
            </div>

            <p className="mt-6 leading-relaxed text-paper/75">{active.summary}</p>
            <ul className="mt-6 space-y-2 border-t border-paper/15 pt-5 text-sm text-paper/65">
              {active.details.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
        </ModalPortal>
      ) : null}

    </>
  );
}
