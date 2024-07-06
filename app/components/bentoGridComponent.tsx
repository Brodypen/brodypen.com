"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconHeart,
  IconPaw,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import AboutMe from "./bentoBoxes/AboutMe";
import { AnimatedPinDemo } from "./bentoBoxes/Resume";
import MadeWithLove from "./bentoBoxes/MadeWithLove";
import Hero from "./bentoBoxes/Hero";
import MarqueeDemo from "./bentoBoxes/MarqueeBox";
import ContactCard from "./bentoBoxes/ContactCard";
import QuoteBox from "./bentoBoxes/QuoteBox";
export function BentoGridComponent() {
  return (
    <BentoGrid className="max-w-7xl mx-auto py-8 px-4 auto-rows-max">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={
            i === 2
              ? cn(
                  "dark:hover:bg-black/0 dark:hover:border-none pb-2",
                  item.className
                )
              : i === 0 || i === 3
              ? item.className
              : cn("p-4", item.className)
          }
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div>
      <h1> Hi</h1>
    </div>
    // <motion.div
    //   initial="initial"
    //   whileHover="animate"
    //   className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    // >
    //   <motion.div
    //     variants={variants}
    //     className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
    //   >
    //     <Image
    //       src=""
    //       alt="avatar"
    //       height="100"
    //       width="100"
    //       className="rounded-full h-10 w-10"
    //     />
    //     <p className="text-xs text-neutral-500">
    //       There are a lot of cool framerworks out there like React, Angular,
    //       Vue, Svelte that can make your life ....
    //     </p>
    //   </motion.div>
    //   <motion.div
    //     variants={variantsSecond}
    //     className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
    //   >
    //     <p className="text-xs text-neutral-500">Use PHP.</p>
    //     <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
    //   </motion.div>
    // </motion.div>
  );
};
const items = [
  {
    header: <Hero />,
    className: "md:col-span-3 md:row-span-3",
  },
  {
    header: <AboutMe />,
    className: "md:col-span-1 md:row-span-7",
    icon: <IconPaw className="h-6 w-6 text-neutral-500" />,
  },
  {
    header: <AnimatedPinDemo />,
    className: "md:col-span-1 md:row-span-4",
  },
  {
    header: <MarqueeDemo />,
    className: "md:col-span-2 md:row-span-2",
  },

  // {
  //   title: "Text Summarization",
  //   description: (
  //     <span className="text-sm">
  //       Summarize your lengthy documents with AI technology.
  //     </span>
  //   ),
  //   header: <SkeletonFive />,
  //   className: "md:col-span-1 md:row-span-2",
  //   icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  // },
  {
    header: <ContactCard />,
    className: "md:col-span-1 md:row-span-2",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  // {
  //   header: <MadeWithLove />,
  //   className: "md:col-span-1 md:row-span-1",
  // },
  {
    header: <MadeWithLove />,
    className: "md:col-span-1 md:row-span-1",
  },
];
