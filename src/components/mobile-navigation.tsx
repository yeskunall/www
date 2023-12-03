import { Drawer } from "vaul";
import { List } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

import { routes } from "@/data/constants";

export default function MobileNavigation() {
  const [pathname, setPathname] = useState("/");

  useEffect(() => {
    setPathname(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <nav className="fixed bottom-0 left-0 top-[unset] z-50 w-full bg-[oklch(0%_0.1_120)] sm:hidden">
      <Drawer.Root>
        <Drawer.Trigger className="flex w-full items-center justify-between gap-2 whitespace-nowrap p-4 text-left text-black text-neutral-200/90">
          <span>{pathname}</span>
          <span>
            <List className="h-5 w-5 text-neutral-100" weight="duotone" />
          </span>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed left-0 top-0 h-full w-full bg-neutral-900/90" />
          <Drawer.Content className="fixed bottom-0 left-0 right-0 flex h-full max-h-[30%] flex-col rounded-t-[10px] bg-[oklch(0%_0.1_240)] text-sm font-medium text-neutral-300/75">
            <ul className="flex flex-col gap-2 p-6">
              {routes.map(({ name, href }) => (
                <li key={name} className="flex w-full flex-col gap-2">
                  <a href={href} data-astro-prefetch="viewport">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
            <hr className="mx-6 bg-neutral-50/10" />
            <ul className="flex flex-col gap-2 p-6">
              <li className="flex w-full flex-col gap-2">
                <a href="/colophon" data-astro-prefetch="viewport">
                  Colophon
                </a>
              </li>
              <li className="flex w-full flex-col gap-2">
                <a href="/imprint" data-astro-prefetch="viewport">
                  Imprint
                </a>
              </li>
            </ul>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </nav>
  );
}
