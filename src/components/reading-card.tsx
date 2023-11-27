import { Books } from "@phosphor-icons/react";
import React from "react";

import * as HoverCard from "@radix-ui/react-hover-card";

type Props = {
  children: React.ReactNode;
  title: string;
  author: string;
  slug: string;
  cover: string;
};

export default function ReadingCard({
  children,
  title,
  author,
  slug,
  cover,
}: Props) {
  return (
    <HoverCard.Root openDelay={210}>
      <HoverCard.Trigger>{children}</HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          className="h-fit w-40 rounded-[4px] border border-gray-700 bg-[#0f0f0f] px-1 pb-1.5 pt-1 text-gray-500 shadow-sm outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
          sideOffset={5}
        >
          <>
            <div className="aspect-square overflow-hidden rounded-[3px] border">
              <img
                src={cover}
                className="object-cover object-center"
                alt={`Album art for ${title} by ${author}`}
              />
            </div>
            <div className="mb-1 ml-0.5 mt-2 text-gray-100/80">
              <span className="block truncate font-medium leading-none">
                {title}
              </span>
              <span className="text-sm text-gray-100/75">by {author}</span>
            </div>
          </>
          <div className="flex items-center gap-x-0.5">
            <a
              href={`https://literal.club/yeskunall/book/${slug}`}
              rel="nofollow noopener noreferrer"
              target="_blank"
              className="flex w-full items-center justify-center gap-x-1 whitespace-nowrap rounded-sm bg-gray-700 py-1 text-sm font-medium text-neutral-100/95 transition-colors duration-100 hover:bg-gray-800/90"
            >
              <Books className="shrink-0 fill-[#b3fc03]" weight="duotone" />
              See on Literal
            </a>
          </div>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}
