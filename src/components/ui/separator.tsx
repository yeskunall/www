import * as RadixSeparator from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

import type { SeparatorProps as Props } from "@radix-ui/react-separator";

export default function Separator(props: Props) {
  const { className, ...rest } = props;
  return (
    <RadixSeparator.Root
      className={cn(
        "my-8",
        "data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px",
        className,
      )}
      {...rest}
      decorative
    />
  );
}
