import { useEffect, useState } from "react";

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
      className="group inline-flex items-center gap-2 font-mono text-[10px] text-paper/50 transition-colors hover:text-signal"
    >
      <span
        className={`relative block h-5 w-9 border transition-colors duration-300 ${
          light ? "border-signal bg-signal/20" : "border-paper/25 bg-transparent"
        }`}
      >
        <span
          className={`absolute top-[2px] block h-[14px] w-[14px] transition-all duration-300 ${
            light ? "left-[20px] bg-signal" : "left-[2px] bg-paper/60"
          }`}
        />
      </span>
      <span className="hidden sm:inline">{light ? "ON" : "OFF"}</span>
    </button>
  );
}
