/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

import type { Config } from "tailwindcss";

import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

module.exports = {
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
    lineClamp: false,
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
        display: ["var(--font-medieval-sharp)"],
        mono: ["var(--font-kode-mono)", ...fontFamily.mono],
        sans: ["var(--font-kode-mono)", ...fontFamily.sans],
        serif: ["var(--font-libre-caslon)", ...fontFamily.serif],
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
            "--tw-prose-body": "var(--olive-11)",
            "--tw-prose-bold": "var(--olive-11)",
            "--tw-prose-code": "var(--olive-11)",
            "--tw-prose-headings": "var(--olive-11)",
            "--tw-prose-links": "var(--olive-11)",
            ":where(h1, h2, h3, h4, h5, h6):not(:where([class~='not-prose'], [class~='not-prose'] *))":
              {
                "> a": {
                  textDecoration: "none",
                },
              },
            blockquote: {
              "& > p": {
                "--font-size": "24px",
                "--line-height": "110%",
                "& > a": {
                  textDecoration: "none",
                },
                color: "var(--lime-12)",
                font: "normal 420 var(--font-size) / var(--line-height) var(--font-libre-caslon)",
                letterSpacing: "-0.05em",
              },
              "&::before": {
                backgroundImage:
                  "linear-gradient(30deg,#191919,#3f3f3f,#e1e1e1)",
                boxShadow: "1px 10px 5px 0 #e1e1e1",
                content: "''",
                height: "calc(100% + 1px)",
                left: "0px",
                position: "absolute",
                top: "0px",
                width: "1px",
              },
              borderLeftWidth: "0",
              paddingRight: theme("spacing.5"),
              position: "relative",
              quotes: "none",
            },
            "p:has(img)": {
              "@apply wide-wrapper": {},
              "@media (min-width: 640px)": {
                "--wrap-wide": "65vw",
              },
              "> em": {
                "@apply mx-3 block text-center font-sans text-[16px] font-medium not-italic sm:mx-0":
                  {},
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
} satisfies Config;

function generateScale(name: string) {
  const scale = Array.from({ length: 12 }, (_, i) => {
    const id = i + 1;

    return [
      [id, `var(--${name}-${id})`],
      [`a${id}`, `var(--${name}-a${id})`],
    ];
  }).flat();

  return Object.fromEntries(scale) as Record<string, string>;
}
