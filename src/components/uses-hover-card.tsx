import * as Popover from "@radix-ui/react-popover";

import { cn } from "@/lib/utils";

import type { ImageMetadata } from "astro";

type Props = {
  name: string;
  image: ImageMetadata;
};

export default function UsesHoverCard({ image, name }: Props) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <li className="text-sm text-neutral-200/80 transition-colors hover:cursor-pointer hover:text-neutral-50/95">
          {name}
        </li>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className={cn(
            "rounded-md bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] transition-all",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-in-from-top-8",
            "data-[side=bottom]:slide-in-from-bottom-8",
          )}
          sideOffset={5}
        >
          <img
            className="aspect-video h-[200px] w-[220px] object-fill object-center"
            src={image.src}
            alt=""
            decoding="async"
            loading="lazy"
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
