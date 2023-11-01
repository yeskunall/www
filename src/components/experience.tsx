import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { cn } from "@/lib/utils";
import { EXPERIENCES } from "@/data/constants";

export default function Experience() {
  return (
    <>
      {EXPERIENCES.map(({ company, description, range, role, skills }) => (
        <Accordion type="single" collapsible key={role}>
          <AccordionItem value={company}>
            <AccordionTrigger
              className={cn(
                "data-[state=open]:bg-lime/20 data-[state=open]:text-gray-700",
                "focus-visible:ring-2 focus-visible:ring-offset-transparent",
                // eslint-disable-next-line max-len
                "focus-visible:bg-lime focus-visible:text-gray-700 focus-visible:outline-none",
                "rounded-sm hover:bg-lime hover:text-gray-800",
                // eslint-disable-next-line max-len
                "group grid grid-cols-4 items-center justify-items-start py-2.5 text-sm transition duration-100",
              )}
            >
              <span className="col-span-2 ml-1">{role}</span>
              <span className="justify-self-center text-xs text-gray-500">
                {company}
              </span>
              <span
                className={cn(
                  "transition duration-100",
                  "mr-1 justify-self-end text-sm text-gray-400",
                  // eslint-disable-next-line max-len
                  "group-hover:text-gray-700 group-focus-visible:text-gray-700 group-data-[state=open]:text-gray-700",
                )}
              >
                {range}
              </span>
            </AccordionTrigger>
            <AccordionContent
              className={cn(
                "overflow-hidden transition-all",
                // eslint-disable-next-line max-len
                "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
              )}
            >
              <div className="flex flex-col gap-y-2 px-2 py-3">
                <p>{description}</p>
                <div className="mx-auto flex flex-1 gap-x-1.5">
                  {skills?.map(skill => {
                    return (
                      // eslint-disable-next-line max-len
                      <div className="inline-flex items-center rounded-sm py-0.5 text-sm text-gray-500">
                        {/* eslint-disable-next-line max-len */}
                        <span className="inline-block h-1.5 w-1.5 rounded-[100%] bg-lime"></span>
                        &nbsp;
                        {skill}
                      </div>
                    );
                  })}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </>
  );
}
