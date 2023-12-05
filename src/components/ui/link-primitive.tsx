import { cva } from "class-variance-authority";
import React from "react";

import { cn } from "@/lib/utils";

export const link = cva(["flex", "items-center", "gap-x-0.5", "w-fit"], {
  variants: {
    variant: {
      default: [
        "after:content-[''] after:absolute after:bottom-px after:left-0 after:w-full after:h-px after:bg-accent relative inline-flex",
      ],
      route: [
        "text-neutral-600 transition-colors text-sm hover:bg-[#b3fc03] hover:text-neutral-900/80 px-1.5 py-1 rounded-sm -mx-1.5 font-medium border border-neutral-800 hover:border-[#b3fc03]",
      ],
    },
    popOver: {
      true: ["bg-[#b3fc03]/20"],
    },
  },
  defaultVariants: {
    variant: "default",
    popOver: false,
  },
});

type Props = {
  children: React.ReactNode;
  className?: string;
  href: string;
  external?: boolean;
  popOver?: boolean;
  variant?: "default" | "route";
};

export default function Link({
  href,
  external,
  className,
  variant = "default",
  popOver,
  children,
  ...rest
}: Props) {
  return (
    <a
      className={cn(link({ variant, popOver }), className)}
      href={href}
      rel={external ? "nofollow noopener noreferrer" : ""}
      target={external ? "_blank" : undefined}
      {...rest}
    >
      {children}
    </a>
  );
}
