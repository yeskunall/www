import { fontFamily } from "tailwindcss/defaultTheme";

import type { Config } from "tailwindcss";

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "eye-movement": "eye-movement 12s infinite ease",
        "rotate-head": "rotate-head 12s infinite ease",
        "slide-down": "slide-down 210ms cubic-bezier(0.3, 0, 0.5, 1)",
        "slide-up": "slide-up 210ms cubic-bezier(0.3, 0, 0.5, 1)",
      },
      backgroundColor: {
        lime: "rgb(179 252 3 / 0.75)",
      },
      fontFamily: {
        mono: ["Martian Mono", ...fontFamily.mono],
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        serif: ["Newsreader", ...fontFamily.serif],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "eye-movement": {
          "0%": {
            transform: "translateX(0px) translateY(0) scaleY(1)",
          },
          "20%": {
            transform: "translateX(2px) translateY(0) scaleY(1)",
          },
          "30%": {
            transform: "translateX(-2px) translateY(0) scaleY(1)",
          },
          "55%": {
            transform: "translateX(0px) translateY(4px) scaleY(1)",
          },
          "65%": {
            transform: "translateX(0px) translateY(0px) scaleY(0.5)",
          },
          "70%": {
            transform: "translateX(0px) translateY(0px) scaleY(1)",
          },
          "100%": {
            transform: "translateX(0px) translateY(0px) scaleY(1)",
          },
        },
        "rotate-head": {
          "0%": {
            "box-shadow": "inset 2px -2px 3px var(--text-secondary)",
          },
          "20%": {
            "box-shadow": "inset 4px -2px 3px var(--text-secondary)",
          },
          "30%": {
            "box-shadow": "inset 2px -2px 3px var(--text-secondary)",
          },
          "55%": {
            "box-shadow": "inset 4px 1px 3px var(--text-secondary)",
          },
          "65%": {
            "box-shadow": "inset 2px -2px 3px var(--text-secondary)",
          },
          "100%": {
            "box-shadow": "inset 2px -2px 3px var(--text-secondary)",
          },
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
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
