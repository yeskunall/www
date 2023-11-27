import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

export default function ScrollArea({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <ScrollAreaPrimitive.Root type="always" className={className}>
      <ScrollAreaPrimitive.Viewport className="h-full w-full">
        {children}
        <ScrollAreaPrimitive.Scrollbar
          className="mx-auto -mb-2 flex w-[calc(100%-6px)] touch-none select-none rounded-md bg-gray-800 transition-colors duration-100 ease-out hover:bg-[white]/20 data-[orientation=horizontal]:h-0.5 data-[orientation=horizontal]:flex-col"
          orientation="horizontal"
        >
          <ScrollAreaPrimitive.Thumb className="bg-gray-11 relative flex-1 rounded-md before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
        </ScrollAreaPrimitive.Scrollbar>
      </ScrollAreaPrimitive.Viewport>
    </ScrollAreaPrimitive.Root>
  );
}
