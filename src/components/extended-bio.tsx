/* eslint-disable max-len */

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

export default function ExtendedBio({
  children,
}: {
  children: React.ReactNode;
}) {
  const [text, setText] = useState("More");

  const handleOpenChange = (open: boolean) => {
    if (open) {
      return setText("Hide");
    }

    setText("More");
  };

  return (
    <Collapsible onOpenChange={handleOpenChange}>
      <CollapsibleTrigger className="group select-none font-display text-sm font-medium text-neutral-500">
        <span className="inline-flex items-center justify-center transition-colors duration-150 group-hover:text-neutral-700">
          {text}&nbsp;
          <ChevronDownIcon
            aria-hidden="true"
            className="h-4 w-4 text-neutral-400 transition-transform duration-300 group-hover:text-neutral-700 group-data-[state=open]:rotate-180"
          />
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent className="wide-words font-display text-sm text-neutral-500 data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
}
