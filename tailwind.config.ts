import { fontFamily } from "tailwindcss/defaultTheme";

import type { Config } from "tailwindcss";

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        textColor: "rgb(var(--theme-text) / <alpha-value>)",
      },
      fontFamily: {
        mono: ["MartianMono", ...fontFamily.mono],
        sans: ["Sohne", { fontFeatureSettings: '"kern","frac","kern","ss02"' }],
        serif: ["Newsreader", ...fontFamily.serif],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // Remove above once tailwindcss exposes theme type
      typography: theme => ({
        equinox: {
          css: {
            "--tw-prose-body": theme("colors.textColor / 1"),
            "--tw-prose-headings": theme("colors.accent-2 / 1"),
            "--tw-prose-links": theme("colors.textColor / 1"),
            "--tw-prose-bold": theme("colors.textColor / 1"),
            "--tw-prose-bullets": theme("colors.textColor / 1"),
            "--tw-prose-quotes": theme("colors.quote / 1"),
            "--tw-prose-code": theme("colors.textColor / 1"),
            "--tw-prose-hr": "0.5px dashed #666",
            "--tw-prose-th-borders": "#666",
          },
        },
      }),
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
