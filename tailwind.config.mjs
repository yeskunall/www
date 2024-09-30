import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,md,mdx,ts,tsx}"],
  // https://tailwindcss.com/docs/configuration#core-plugins
  corePlugins: {
    animation: false,
    aspectRatio: false,
    breakAfter: false,
    breakBefore: false,
    breakInside: false,
    container: false,
    fontVariantNumeric: false,
    scrollMargin: false,
    scrollPadding: false,
    touchAction: false,
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    plugin(({ addComponents }) => {
      addComponents({
        ".wide-wrapper": {
          "--wrap-wide": "100vw",
          "marginLeft": "calc((min(100vw, var(--wrap-wide)) - 100%) / -2)",
          "maxWidth": "min(100vw, var(--wrap-wide))",
          "width": "min(100vw, var(--wrap-wide))",
        },
      });
    }),
  ],
  theme: {
    extend: {
      colors: {
        accent: generateScale("green"),
        gray: generateScale("sage"),
      },
      fontFamily: {
        mono: ["var(--font-mono)", ...fontFamily.mono],
        sans: ["var(--font-sans)", ...fontFamily.sans],
        serif: ["var(--font-serif)", ...fontFamily.serif],
      },
      // https://carbondesignsystem.com/guidelines/motion/overview/
      transitionDuration: {
        "fast-01": "70ms",
        "fast-02": "110ms",
        "moderate-01": "150ms",
        "moderate-02": "240ms",
        "slow-01": "400ms",
        "slow-02": "700ms",
      },
      // https://carbondesignsystem.com/guidelines/motion/overview/
      transitionTimingFunction: {
        "expressive-entrance": "cubic-bezier(0, 0, 0.3, 1)",
        "expressive-exit": "cubic-bezier(0.4, 0.14, 1, 1)",
        "expressive-standard": "cubic-bezier(0.4, 0.14, 0.3, 1)",
        "productive-entrance": "cubic-bezier(0, 0, 0.38, 0.9)",
        "productive-exit": "cubic-bezier(0.2, 0, 1, 0.9)",
        "productive-standard": "cubic-bezier(0.2, 0, 0.38, 0.9)",
      },
      // @ts-expect-error: remove once Tailwind exposes the type
      typography: theme => ({
        DEFAULT: {
          css: {
            ":where(h1, h2, h3, h4, h5, h6):not(:where([class~='not-prose'], [class~='not-prose'] *))":
              {
                "> a": {
                  color: "var(--sage-11)",
                  textDecoration: "none",
                },
              },
            "--tw-prose-body": "var(--sage-12)",
            "--tw-prose-bold": "var(--sage-12)",
            "--tw-prose-code": "var(--sage-12)",
            "--tw-prose-headings": "var(--sage-11)",
            "--tw-prose-hr": "var(--sage-4)",
            "--tw-prose-links": "var(--sage-12)",
            "a": {
              "@apply text-gray-12 underline decoration-gray-6 underline-offset-2 transition-colors duration-moderate-02 ease-productive-standard sm:text-gray-11 sm:hover:text-gray-12 sm:hover:decoration-gray-7":
                {},
            },
            "p:has(img)": {
              "> img": {
                "@apply sm:rounded-md": {},
                "aspectRatio": "16 / 9",
                "marginBottom": theme("spacing.3"),
                "objectFit": "cover",
                "width": "100%",
              },
              "@apply wide-wrapper": {},
              "@media (min-width: 640px)": {
                "--wrap-wide": "65vw",
              },
            },
          },
        },
      }),
    },
  },
};

function generateScale(name) {
  const scale = Array.from({ length: 12 }, (_, i) => {
    const id = i + 1;

    return [
      [id, `var(--${name}-${id})`],
      [`a${id}`, `var(--${name}-a${id})`],
    ];
  }).flat();

  const contrast = ["contrast", `var(--${name}-contrast)`];
  const indicator = ["indicator", `var(--${name}-indicator)`];
  const surface = ["surface", `var(--${name}-surface)`];
  const track = ["track", `var(--${name}-track)`];

  return Object.fromEntries([
    [...contrast],
    [...indicator],
    [...surface],
    [...track],
    ...scale,
  ]);
}
