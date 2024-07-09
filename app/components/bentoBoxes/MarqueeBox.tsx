import { cn } from "@/lib/utils";
import Marquee from "@/ui/Marquee";
import Image from "next/image";

// bg-red-500
const experiences = [
  {
    name: "JPMorganChase",
    username: "SWE Summer Intern 2024",
    body: "Developed solutions to support financial services and operations. ",
    img: "/marqueeAssets/JPMorganChase.jpeg",
    className: "bg-orange-500/[.25]",
  },
  {
    name: "CougarCS",
    username: "Web Master",
    body: "Led web projects development at the biggest CS org in UH",
    img: "/marqueeAssets/cougarCS_WebDev.jpeg",
    className: "bg-pink-500/[.25]",
  },
  {
    name: "University of Houston",
    username: "ConocoPhilips Center Tutor",
    body: "Improved CS Students academic performance.",
    img: "/marqueeAssets/UHNSM_Tutor.jpeg",
    className: "bg-rose-500/[.25]",
  },
];
// bg-blue-500
const projects = [{}];
// bg-purple-500
const reviews = [
  // {
  //   name: "Ashish Job",
  //   username: "SRE @ JPMC, SWE @ NASA",
  //   body: "I've never seen anything like this before. It's amazing. I love it.",
  //   img: "https://avatar.vercel.sh/jack",
  // },
  {
    name: "Jorell Padilla",
    username: "UX Design Intern @ PwC",
    body: "I always trust Brody to turn my designs into something amazing!",
    img: "/marqueeAssets/JorellP.jpeg",
    className: "bg-purple-500/[.25]",
  },
  // {
  //   name: "John",
  //   username: "@john",
  //   body: "I'm at a loss for words. This is amazing. I love it.",
  //   img: "https://avatar.vercel.sh/john",
  // },
  // {
  //   name: "Jane",
  //   username: "@jane",
  //   body: "I'm at a loss for words. This is amazing. I love it.",
  //   img: "https://avatar.vercel.sh/jane",
  // },
  // {
  //   name: "Jenny",
  //   username: "@jenny",
  //   body: "I'm at a loss for words. This is amazing. I love it.",
  //   img: "https://avatar.vercel.sh/jenny",
  // },
  // {
  //   name: "James",
  //   username: "@james",
  //   body: "I'm at a loss for words. This is amazing. I love it.",
  //   img: "https://avatar.vercel.sh/james",
  // },
];

const data = experiences.concat(reviews);
const firstRow = data.slice(0, data.length / 2);
const secondRow = data.slice(data.length / 2);
const ProjectCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        "relative w-64 h-28 cursor-pointer overflow-hidden rounded-xl border",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-red-500/[.25] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <Image
        className="h-full w-full"
        width="32"
        height="32"
        alt=""
        src={img}
      />
    </figure>
  );
};

const ReviewCard = ({
  img,
  name,
  username,
  body,
  className,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  className?: string;
}) => {
  // console.log(className);
  return (
    <figure
      className={cn(
        "relative w-64 h-28 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        // "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "border-gray-50/[.1] bg-red-500/[.25] hover:bg-gray-50/[.05]",
        className
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm line-clamp-2">{body}</blockquote>
    </figure>
  );
};

const MarqueeDemo = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:30s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black/50 from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black/50 from-background"></div>
    </div>
  );
};

export default MarqueeDemo;
