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
    plugin(function wideWrapperPlugin({ addComponents }) {
      addComponents({
        ".wide-wrapper": {
          "--wrap-wide": "100vw",
          marginLeft: "calc((min(100vw, var(--wrap-wide)) - 100%) / -2)",
          maxWidth: "min(100vw, var(--wrap-wide))",
          width: "min(100vw, var(--wrap-wide))",
        },
      });
    }),
  ],
  theme: {
    extend: {
      colors: {
        accent: generateScale("red"),
        gray: generateScale("sand"),
      },
      fontFamily: {
        sans: ["var(--font-sohne)", ...fontFamily.sans],
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
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error: remove once Tailwind exposes the type
      typography: theme => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": "var(--sand-11)",
            "--tw-prose-bold": "var(--sand-12)",
            "--tw-prose-code": "var(--sand-11)",
            "--tw-prose-headings": "var(--sand-12)",
            "--tw-prose-links": "var(--sand-12)",
            ":where(h1, h2, h3, h4, h5, h6):not(:where([class~='not-prose'], [class~='not-prose'] *))":
              {
                "> a": {
                  textDecoration: "none",
                },
              },
            "p:has(img)": {
              "@apply wide-wrapper": {},
              "@media (min-width: 640px)": {
                "--wrap-wide": "65vw",
              },
              "> img": {
                "@apply sm:rounded-md": {},
                aspectRatio: "16 / 9",
                marginBottom: theme("spacing.3"),
                objectFit: "cover",
                width: "100%",
              },
            },
          },
        },
      }),
    },
  },
  // }
};

function generateScale(name) {
  const scale = Array.from({ length: 12 }, (_, i) => {
    const id = i + 1;

    return [
      [id, `var(--${name}-${id})`],
      [`a${id}`, `var(--${name}-a${id})`],
    ];
  }).flat();

  return Object.fromEntries(scale);
}
