import { useEffect, useState } from "react";

function Screw({ className }: { className: string }) {
  return (
    <span
      className={`absolute h-[3px] w-[3px] rounded-full border border-paper/40 ${className}`}
    >
      <span className="absolute left-1/2 top-1/2 h-[3px] w-px -translate-x-1/2 -translate-y-1/2 rotate-45 bg-paper/40" />
    </span>
  );
}

export function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isLight = stored === "light";
    setLight(isLight);
    document.documentElement.classList.toggle("light", isLight);
  }, []);

  const toggle = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("theme", next ? "light" : "dark");
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={light}
      onClick={toggle}
      aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
      className="group relative inline-flex h-[42px] w-[30px] items-center justify-center border border-paper/30 bg-panel transition-colors hover:border-signal"
    >
      <Screw className="left-[3px] top-[3px]" />
      <Screw className="right-[3px] top-[3px]" />
      <Screw className="bottom-[3px] left-[3px]" />
      <Screw className="bottom-[3px] right-[3px]" />

      <span className="pointer-events-none absolute left-1/2 top-[4px] -translate-x-1/2 font-mono text-[5px] leading-none tracking-[0.1em] text-paper/60">
        ON
      </span>
      <span className="pointer-events-none absolute bottom-[4px] left-1/2 -translate-x-1/2 font-mono text-[5px] leading-none tracking-[0.1em] text-paper/60">
        OFF
      </span>

      {/* switch body */}
      <span className="relative block h-[20px] w-[13px] border border-paper/35">
        <span
          className={`absolute inset-x-0 block h-[9px] bg-signal transition-all duration-300 ${
            light ? "top-0" : "top-[9px]"
          }`}
        />
      </span>
    </button>
  );
}
