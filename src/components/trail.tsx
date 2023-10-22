import React from "react";
import { a, useTrail } from "@react-spring/web";

import { cn } from "@/lib/utils";

const Trail: React.FC<{ children?: React.ReactNode; open: boolean }> = ({
  open,
  children,
}) => {
  const items = React.Children.toArray(children);

  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 450 },
    delay: 800,
    opacity: open ? 1 : 0,
    x: open ? 0 : -150,
    height: open ? 175 : 0,
    from: { opacity: 0, x: -150, height: 0 },
  });

  return (
    <>
      {trail.map(({ height, ...style }, index) => (
        <a.div
          key={index}
          className={cn(
            "w-full select-none overflow-hidden will-change-auto",
            // eslint-disable-next-line max-len
            "bg-gradient-to-t from-black via-neutral-950/70 to-[#3e3f3f] bg-clip-text text-transparent",
          )}
          style={style}
        >
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </>
  );
};

export default Trail;
