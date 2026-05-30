"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type FitMode = "cover" | "none";

export function BannerSection() {
  const [fit, setFit] = useState<FitMode>("cover");

  useEffect(() => {
    const saved = localStorage.getItem("bannerFit") as FitMode | null;
    if (saved === "cover" || saved === "none") setFit(saved);
  }, []);

  function toggle() {
    const next: FitMode = fit === "cover" ? "none" : "cover";
    localStorage.setItem("bannerFit", next);
    setFit(next);
  }

  return (
    <div className="banner">
      <Image
        src="/Spirit_Weekend_Fire.jpg"
        alt="Spirit Weekend bonfire"
        fill
        className="banner-image"
        style={{ objectFit: fit }}
        priority
      />
      <button
        className="banner-toggle"
        onClick={toggle}
        aria-label={`Switch to ${fit === "cover" ? "crop" : "zoom"} mode`}
      >
        {fit === "cover" ? "Crop" : "Zoom"}
      </button>
    </div>
  );
}
