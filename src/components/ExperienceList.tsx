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
    date: "JUL 2023 — JUN 2026",
    title: "Product Manager",
    company: "TeamViewer",
    type: "Full-time",
    duration: "3 yrs",
    location: "Berlin, Germany",
    summary: "Owned product discovery and delivery for enterprise remote connectivity workflows.",
    details: [
      "Jul 2023 - Jun 2026 · 3 yrs",
      "Berlin, Germany · Full-time",
      "LinkedIn helped me get this job.",
    ],
  },
  {
    date: "MAY 2022 — JUN 2023",
    title: "Product Operations",
    company: "SoSafe",
    type: "Full-time",
    duration: "1 yr 2 mos",
    location: "Berlin, Germany",
    summary: "Ran product operations cadence, tooling and reporting across the product organisation.",
    details: ["May 2022 - Jun 2023 · 1 yr 2 mos", "Berlin, Germany · Full-time"],
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
