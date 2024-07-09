import React from "react";

import { Dock, DockIcon } from "@/ui/Dock";

export type IconProps = React.HTMLAttributes<SVGElement>;
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import Link from "next/link";
export function SocialBoxes() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <span className="pointer-events-none absolute whitespace-pre-wrap opacity-75 bg-gradient-to-b bg-clip-text text-center text-9xl font-semibold leading-none text-transparent from-amber-500 to-pink-500">
        Socials
      </span>
      <Dock>
        <DockIcon href="https://github.com/Brodypen" ariaLabel="GitHub link">
          <IconBrandGithub className="h-6 w-6" />
        </DockIcon>
        <DockIcon
          href="https://www.linkedin.com/in/brodypen/"
          ariaLabel="LinkedIn link"
        >
          <IconBrandLinkedin className="h-6 w-6" />
        </DockIcon>
        <DockIcon href="mailto:penbrody@gmail.com" ariaLabel="Mail">
          <IconMail className="h-6 w-6" />
        </DockIcon>
      </Dock>
    </div>
  );
}
