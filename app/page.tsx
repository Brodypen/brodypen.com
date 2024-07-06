"use client";
import React from "react";
import { BackgroundBeams } from "@/ui/background-beams";
import { BentoGridComponent } from "./components/bentoGridComponent";
import MarqueeDemo from "./components/bentoBoxes/MarqueeBox";

export default function Home() {
  return (
    <div className="min-h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased dark">
      <div className="max-h-full max-w-7xl md:max-w-5xl selection:mx-auto z-50">
        <BentoGridComponent/>
      </div>
      <BackgroundBeams />
    </div>
  );
}
