import { useDrag } from "@use-gesture/react";
import { useState } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";

// These two are just helpers, they curate spring data, values that are later being interpolated into CSS
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.2, y: -100 });
const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const transform = (r: number, s: number) =>
  `perspective(2100px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

export default function Deck({ books }: { books: Record<string, unknown>[] }) {
  const [gone] = useState(() => new Set());
  const [props, api] = useSprings(books.length, i => ({
    ...to(i),
    from: from(i),
  })); // Create a bunch of springs using the helpers above

  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(
    ({ args: [index], direction: [xDir], down, movement: [mx], velocity }) => {
      const trigger = velocity[0] > 0.2; // If you flick hard enough it should trigger the card to fly out
      const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right

      // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      if (!down && trigger) gone.add(index);

      api.start(i => {
        if (index !== i) return; // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index);
        const x = isGone ? (10 + window.innerWidth) * dir : down ? mx : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = mx / 100 + (isGone ? dir * 10 * velocity[0] : 0); // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 1.1 : 1; // Active cards lift up a bit

        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });

      if (!down && gone.size === books.length) {
        setTimeout(() => {
          gone.clear();
          api.start(i => to(i));
        }, 600);
      }
    },
  );

  return (
    <div className="h-full w-full place-self-center overflow-hidden">
      {props.map(({ x, y, rot, scale }, i) => {
        return (
          <animated.div
            // eslint-disable-next-line max-len
            className="absolute z-10 flex h-full w-full cursor-grab place-items-center will-change-transform"
            key={i}
            style={{ x, y }}
          >
            <animated.div
              {...bind(i)}
              // eslint-disable-next-line max-len
              className="h-full w-full touch-none rounded-lg bg-sky-50/95 bg-[auto_75%] bg-[center_center] bg-no-repeat shadow-md shadow-neutral-700/70 will-change-transform sm:bg-[auto_85%]"
              style={{
                backgroundImage: `url(${books[i]?.cover})`,
                transform: interpolate([rot, scale], transform),
              }}
            />
          </animated.div>
        );
      })}
    </div>
  );
}
