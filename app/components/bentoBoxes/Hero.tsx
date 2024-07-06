import RetroGrid from "@/ui/RetroGrid";
import React from "react";

const Hero = () => {
  return (
    <div className="relative flex h-full w-full min-h-48 items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <span className="pointer-events-none z-10 whitespace-pre-wrap  text-center text-7xl font-bold leading-none tracking-tighter">
        <span className="bg-gradient-to-b bg-clip-text">
          👋 I&#39;m Brody{" "}
          <span className="bg-gradient-to-b from-red-300 via-purple-300 to-blue-700 bg-clip-text text-transparent">
            !
          </span>
        </span>
      </span>

      <RetroGrid />
    </div>
  );
};

export default Hero;
