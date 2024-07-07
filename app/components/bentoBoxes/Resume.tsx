"use client";
import React from "react";
import { PinContainer } from "@/ui/3d-pin";
import { IconCertificate } from "@tabler/icons-react";
import { AuroraBackground } from "@/ui/AuroraBackground";
import { motion } from "framer-motion";
export function AnimatedPinDemo() {
  return (
    <PinContainer title="/Brody_Pen_Resume.pdf" href="/Brody_Pen_Resume.pdf">
      <div className="flex basis-full flex-col px-4 pb-8 tracking-tight text-slate-100/50 sm:basis-1/2 md:w-[14rem] h-full w-[20rem] gap-2">
        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
          My resume
        </h3>
        <div className="text-base !m-0 !p-0 font-normal">
          <span className="text-slate-300 ">
            Check out all my experiences here!
          </span>
        </div>
        {/* <div className="flex flex-1 w-full justify-center items-center rounded-lg mt-4 bg-gradient-to-br from-red-400 via-purple-500 to-blue-400"> */}
          <AuroraBackground className="rounded-2xl overflow-hidden">
            <IconCertificate className="h-16 w-16 text-slate-100 z-30" />
          </AuroraBackground>

      </div>
    </PinContainer>
  );
}
