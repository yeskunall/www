import { Check } from "@phosphor-icons/react";
import clipboard from "clipboardy";
import React, { useState } from "react";
import { toast } from "sonner";
import * as Tooltip from "@radix-ui/react-tooltip";
import UseKey from "react-use/lib/component/UseKey";

import { Paperclip as Copy } from "@/components/icons";

import { cn } from "@/lib/utils";

export default function CopyToClipboard() {
  const [clicked, setClicked] = useState(false);

  const handleCopy: React.MouseEventHandler<
    HTMLButtonElement
  > = async event => {
    event?.preventDefault();

    await clipboard.write(window.location.href);
    toast.success("Copied URL to clipboard");
    setClicked(true);

    // Clear timeout?
    setTimeout(() => {
      setClicked(false);
    }, 1200);
  };

  return (
    <Tooltip.Provider delayDuration={200} skipDelayDuration={50}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button
            className="inline-flex h-6 w-6 items-center justify-center rounded-[100%] bg-neutral-700/70 outline-none sm:h-7 sm:w-7"
            onClick={handleCopy}
          >
            {!clicked && (
              <Copy className="h-3 w-3 text-lime-300 sm:h-4 sm:w-4" />
            )}
            {!!clicked && (
              <Check className="h-3 w-3 text-lime-300 sm:h-4 sm:w-4" />
            )}
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className={cn(
              "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
              "select-none rounded-md px-3 py-2 leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]",
              "bg-neutral-800/95 text-xs font-medium text-neutral-100/80",
            )}
            sideOffset={5}
          >
            Copy link to post&nbsp;
            <kbd className="rounded-lg border border-neutral-600 bg-neutral-600/95 px-2 py-0.5 font-semibold text-neutral-100 shadow-sm">
              C
            </kbd>
            <Tooltip.Arrow className="fill-neutral-800/95" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
      <UseKey filter="c" fn={handleCopy} />
    </Tooltip.Provider>
  );
}
