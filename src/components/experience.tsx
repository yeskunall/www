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
                "focus-visible:bg-lime focus-visible:text-gray-700 focus-visible:outline-none",
                "hover:text-gray-12 hover:bg-lime",
                "group grid grid-cols-4 items-center justify-items-start px-3 py-2.5 text-sm transition duration-100",
              )}
            >
              <span className="col-span-2">{role}</span>
              <span className="justify-self-center text-gray-500">
                {company}
              </span>
              <span
                className={cn(
                  "transition duration-100",
                  "justify-self-end text-sm text-gray-400",
                  "group-hover:text-gray-700 group-focus-visible:text-gray-700 group-data-[state=open]:text-gray-700",
                )}
              >
                {range}
              </span>
            </AccordionTrigger>
            <AccordionContent
              className={cn(
                "overflow-hidden transition-all",
                "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
              )}
            >
              <div className="flex flex-col gap-y-2 px-2 py-3">
                <p>{description}</p>
                <div className="mx-auto flex flex-1 gap-x-1.5">
                  {skills?.map(skill => {
                    return (
                      <div className="inline-flex items-center rounded-sm py-0.5 text-sm text-gray-500">
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

// const AccordionItem = ({
//   role,
//   company,
//   description,
//   range,
//   skills,
// }: {
//   role: string;
//   company: string;
//   description: string;
//   range: string;
//   skills?: string[];
// }) => {
//   return (
//     <AccordionPrimitive.Item value={company}>
//       <AccordionPrimitive.Trigger className="focus-visible:bg-accent focus-visible:ring-accent/20 focus-visible:text-gray-12 hover:bg-accent hover:text-gray-12 data-[state=open]:bg-accent/20 data-[state=open]:text-gray-1 group grid w-full grid-cols-3 items-center justify-items-start rounded-sm px-2 py-1 transition duration-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-transparent">
//         <span>{role}</span>
//         <span>{company}</span>
//         <span className="text-gray-10 group-hover:text-gray-12 group-focus-visible:text-gray-12 duraiton-100 group-data-[state=open]:text-gray-1 ml-auto block text-sm transition">
//           {range}
//         </span>
//       </AccordionPrimitive.Trigger>
//       <AccordionPrimitive.Content className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden transition-all">
//         <div className="flex flex-col gap-y-2 px-2 py-3">
//           <p>{description}</p>
//           <div className="flex gap-x-1.5">
//             {skills?.map(skill => {
//               return (
//                 <div className="text-gray-10 rounded-sm py-0.5 text-sm">
//                   {skill}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </AccordionPrimitive.Content>
//     </AccordionPrimitive.Item>
//   );
// };
