import { useEffect, useState } from "react";
import { ModalPortal } from "@/components/ModalPortal";
import { roles, type Role } from "@/lib/experience";

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
            className="flex min-h-20 w-full flex-col gap-2 border-transparent py-5 text-left transition-all duration-300 ease-out hover:-translate-y-1 hover:border-signal focus-visible:-translate-y-1 sm:grid sm:grid-cols-12 sm:items-baseline sm:gap-4 sm:hover:pl-3"
          >
            <span className="font-mono text-[10px] text-signal sm:col-span-3 sm:text-[11px]">{role.date}</span>
            <div className="min-w-0 sm:col-span-9">
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
            className="fixed inset-0 z-50 overflow-y-auto bg-ink/90 px-4 py-5 backdrop-blur-sm sm:py-10"
          onClick={() => setActive(null)}
        >
          <div
            className="mx-auto max-w-2xl border border-paper/20 bg-ink p-5 sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
              <div>
                <p className="font-mono text-[11px] text-signal">{active.date}</p>
                <h3 className="mt-3 text-pretty font-display text-2xl font-semibold leading-tight sm:text-3xl">{active.title}</h3>
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
