import { fontFamily } from "tailwindcss/defaultTheme";

import type { Config } from "tailwindcss";

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        "slide-down": "slide-down 210ms cubic-bezier(0.3, 0, 0.5, 1)",
        "slide-up": "slide-up 210ms cubic-bezier(0.3, 0, 0.5, 1)",
      },
      colors: {
        textColor: "rgb(var(--theme-text) / <alpha-value>)",
      },
      fontFamily: {
        display: [
          "Inter",
          {
            fontFeatureSettings:
              // eslint-disable-next-line max-len
              '"calt","case","clig","cpsp" 1,"cv01" 1,"cv02","cv03" 1,"cv04" 1,"dlig" 1,"kern","liga"',
          },
        ],
        mono: ["Martian Mono", ...fontFamily.mono],
        sans: ["Scto Grotesk A", ...fontFamily.sans],
        serif: ["Newsreader", ...fontFamily.serif],
      },
      keyframes: {
        },
        "slide-down": {
          from: {
            height: "0",
            opacity: "0",
          },
          to: {
            height: "var(--radix-collapsible-content-height)",
            opacity: "1",
          },
        },
        "slide-up": {
          from: {
            height: "var(--radix-collapsible-content-height)",
            opacity: "1",
          },
          to: {
            height: "0",
            opacity: "0",
          },
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
