import ShimmerButton from "@/ui/ShimmerButton";
import React from "react";
import Link from "next/link";
const ContactCard = () => {
  return (
    <div className="text-center flex flex-col gap-4 items-center">
      <p className="font-bold">Let&#39;s Work Together</p>
      <Link href="mailto:penbrody@gmail.com">
          <ShimmerButton className="shadow-2xl px-4">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white from-white to-slate-900/10 lg:text-lg">
              penbrody@gmail.com
            </span>
          </ShimmerButton>
      </Link>
    </div>
  );
};

export default ContactCard;
