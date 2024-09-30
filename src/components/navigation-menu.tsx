import { ArrowSquareIn, CaretDown } from "@phosphor-icons/react";
import { PopoverArrow } from "@radix-ui/react-popover";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover.tsx";
import { cn } from "~/lib/utils";

export default function Component() {
  return (
    <Popover>
      <PopoverTrigger className={cn(
        "inline-flex items-center justify-center rounded-full bg-gray-3 p-2 max-sm:mr-4",
        "transition-transform duration-moderate-02 ease-expressive-standard data-[state=open]:rotate-180",
      )}
      >
        <CaretDown weight="bold" />
      </PopoverTrigger>
      <PopoverContent className="w-fit rounded-2xl bg-gray-1 shadow-md shadow-gray-3 ring-inset ring-gray-3">
        <ul className="flex flex-col gap-px text-gray-11">
          <li><button title="I’m working on it" disabled type="button" className="disabled:cursor-not-allowed disabled:opacity-80"><small className="font-medium">/about</small></button></li>
          <li><a href="/defaults"><small className="font-medium">/default-apps</small></a></li>
          <li><a href="/feed"><small className="font-medium">/feed</small></a></li>
          <li><button title="I’m working on it" disabled type="button" className="disabled:cursor-not-allowed disabled:opacity-80"><small className="font-medium">/uses</small></button></li>
          <li className="inline-flex items-center gap-1.5">
            <a href="https://www.cosmos.so/yeskunall/" rel="nofollow noopener noreferrer">
              <small className="font-medium">Cosmos</small>
            </a>
            <ArrowSquareIn weight="bold" />
          </li>
          <li className="inline-flex items-center gap-1.5">
            <a href="https://github.com/yeskunall/" rel="nofollow noopener noreferrer">
              <small className="font-medium">GitHub</small>
            </a>
            <ArrowSquareIn weight="bold" />
          </li>
          <li className="inline-flex items-center gap-1.5">
            <a href="https://read.cv/yeskunall/" rel="nofollow noopener noreferrer">
              <small className="font-medium">Read.cv</small>
            </a>
            <ArrowSquareIn weight="bold" />
          </li>
          <li className="inline-flex items-center gap-2">
            <a href="https://kunall.dev?ref=kimchiii.space" rel="nofollow noopener noreferrer">
              <small className="font-medium">.dev</small>
            </a>
            <ArrowSquareIn weight="bold" />
          </li>
        </ul>
        <PopoverArrow className="fill-gray-4" />
      </PopoverContent>
    </Popover>
  );
}
