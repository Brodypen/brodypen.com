"use client";
import { cn } from "@/lib/utils";
import {
  IconPaw
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import AboutMe from "./bentoBoxes/AboutMe";
import Hero from "./bentoBoxes/Hero";
import MadeWithLove from "./bentoBoxes/MadeWithLove";
import MarqueeDemo from "./bentoBoxes/MarqueeBox";
import { AnimatedPinDemo } from "./bentoBoxes/Resume";
import { SocialBoxes } from "./bentoBoxes/SocialBoxes";
export function BentoGridComponent() {
  return (
    <BentoGrid className="max-w-7xl mx-auto py-8 px-4 auto-rows-max">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          header={item.header}
          className={
            i === 2
              ? cn(
                  "dark:hover:bg-black/0 dark:hover:border-none pb-2",
                  item.className
                )
              : item.className
          }
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    header: <Hero />,
    className: "md:col-span-3 md:row-span-3",
  },
  {
    header: <AboutMe />,
    className: "md:col-span-1 md:row-span-9",
    icon: <IconPaw className="h-6 w-6 text-neutral-500" />,
  },
  {
    header: <AnimatedPinDemo />,
    className: "md:col-span-1 md:row-span-5",
  },
  {
    header: <MarqueeDemo />,
    className: "md:col-span-2 md:row-span-4",
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

  // {
  //   header: <MadeWithLove />,
  //   className: "md:col-span-1 md:row-span-1",
  // },
  {
    header: <SocialBoxes />,
    className: "md:col-span-2 md:row-span-2",
  },
  // {
  //   header: <ContactCard />,
  //   className: "md:col-span-1 md:row-span-2",
  //   icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  // },
  {
    header: <MadeWithLove />,
    className: "md:col-span-1 md:row-span-1",
  },
];
