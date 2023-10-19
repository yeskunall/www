import { CommandIcon } from "lucide-react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;
const TabsList = TabsPrimitive.List;
const TabsTrigger = TabsPrimitive.TabsTrigger;

const TABS = [
  {
    id: "about",
    name: "About",
    href: "/",
  },
  {
    id: "writing",
    name: "Blog",
    href: "/writing",
  },
  {
    id: "now",
    name: "Now",
    href: "/now",
  },
];

export default function Navigation() {
  const tabsRef = useRef<(HTMLElement | null)[]>([]);
  const [activeTabIndex, setActiveTabIndex] = useState<number | null>(null);
  const [activeTabWidth, setActiveTabWidth] = useState(0);
  const [tabOffset, setTabOffset] = useState(0);

  useEffect(() => {
    const currentPath = window.location.pathname.split("/")[1];
    const currentTab = TABS.findIndex(tab => tab.href === `/${currentPath}`);

    setActiveTabIndex(currentTab);
  }, []);

  useEffect(() => {
    if (activeTabIndex === null) {
      return;
    }

    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex] as HTMLElement;

      setActiveTabWidth(currentTab?.clientWidth ?? 0);
      setTabOffset(currentTab?.offsetLeft ?? 0);
    };

    setTabPosition();

    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-20",
        "mx-auto mb-4 h-12 w-fit max-w-sm sm:h-16 sm:max-w-md",
      )}
    >
      <div
        className={cn(
          "relative mx-auto flex h-12 items-center rounded-full px-2",
          "bg-sky-200/60 backdrop-blur-[8px]",
        )}
      >
        <span
          className={cn(
            "absolute bottom-0 top-0 -z-10 flex rounded-3xl py-2",
            "overflow-hidden transition-all delay-150 duration-500",
          )}
          style={{ left: tabOffset, width: activeTabWidth }}
        >
          <span className="h-full w-full rounded-full bg-sky-300/60" />
        </span>
        <Tabs>
          <TabsList className="flex items-center justify-around gap-x-4">
            {TABS.map((tab, index) => {
              const isActive = activeTabIndex === index;
              const { id, href, name } = tab;

              // NOTE(yeskunall): it’s not in use yet, but keep this logic
              if (href === "#") {
                return (
                  <button
                    key={index}
                    ref={$element => (tabsRef.current[index] = $element)}
                    className={cn(
                      isActive ? "" : "hover:text-sky-950/70",
                      "cursor-pointer select-none font-display font-medium",
                      "my-auto rounded-full px-4 text-center text-sky-950/90",
                    )}
                    onClick={() => setActiveTabIndex(index)}
                  >
                    <CommandIcon strokeWidth={1.5} />
                  </button>
                );
              }

              return (
                <TabsTrigger
                  key={id}
                  value={id}
                  className={cn(
                    isActive ? "" : "transition-colors hover:text-sky-950/80",
                    "cursor-pointer select-none font-display font-medium",
                    "my-auto rounded-full px-4 text-center text-sky-950/90",
                  )}
                  asChild
                >
                  <a
                    href={href}
                    ref={el => (tabsRef.current[index] = el)}
                    onClick={() => {
                      // NOTE(yeskunall): this is needed because Astro’s
                      // view transition kicks in immediately, and using
                      // a delay doesn’t help either. It’s shitty, I know,
                      // but can’t help it.
                      // Maybe I’ll look into it later down the line
                      setTimeout(() => {
                        setActiveTabIndex(index);
                      }, 100);
                    }}
                  >
                    {name}
                  </a>
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
