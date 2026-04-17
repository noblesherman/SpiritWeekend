"use client";

import { useEffect, useState } from "react";

const themes = [
  { id: "patriot",  label: "Patriot"  },
  { id: "frontier", label: "Frontier" },
  { id: "ember",    label: "Ember"    },
] as const;

type ThemeId = (typeof themes)[number]["id"];

export function ThemeToggle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("sw-theme") as ThemeId | null;
    const i = themes.findIndex((t) => t.id === saved);
    if (i !== -1) {
      setIndex(i);
      document.documentElement.setAttribute("data-theme", saved!);
    }
  }, []);

  function cycle() {
    const next = (index + 1) % themes.length;
    const theme = themes[next];
    setIndex(next);
    document.documentElement.setAttribute("data-theme", theme.id);
    localStorage.setItem("sw-theme", theme.id);
  }

  return (
    <button className="theme-toggle" onClick={cycle} aria-label="Switch color theme">
      {themes[index].label}
    </button>
  );
}
