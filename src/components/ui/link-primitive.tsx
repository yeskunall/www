import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const link = cva(["flex", "items-center", "gap-x-0.5", "w-fit"], {
  variants: {
    variant: {
      default: [
        "after:content-[''] after:absolute after:bottom-px after:left-0 after:w-full after:h-px after:bg-accent relative inline-flex",
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
  children: string;
  className?: string;
  href: string;
  external?: boolean;
  popOver?: boolean;
  variant?: "default";
};

export default function Link({
  href,
  external,
  className,
  variant = "default",
  popOver,
  children,
}: Props) {
  return (
    <a
      className={cn(link({ variant, popOver }), className)}
      href={href}
      rel={external ? "nofollow noopener noreferrer" : "prefetch"}
      target={external ? "_blank" : undefined}
    >
      {children}
    </a>
  );
}
