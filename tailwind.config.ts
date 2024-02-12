import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

import type { Config } from "tailwindcss";

module.exports = {
  content: ["./src/**/*.{astro,html,md,mdx,ts,tsx}"],
  corePlugins: {
    aspectRatio: false,
    container: false,
    fontVariantNumeric: false,
    lineClamp: false,
    touchAction: false,
  },
  theme: {
    extend: {
      colors: {
        gray: generateScale("mauve"),
        ruby: generateScale("ruby"),
      },
      fontFamily: {
        sans: ["var(--font-satoshi)", ...fontFamily.sans],
        serif: ["var(--font-newsreader)", ...fontFamily.serif],
      },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: remove once Tailwind exposes the type
      typography: theme => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": "var(--mauve-11)",
            "--tw-prose-bold": "var(--mauve-11)",
            "--tw-prose-code": "var(--mauve-11)",
            "--tw-prose-headings": "var(--mauve-11)",
            "--tw-prose-links": "var(--mauve-11)",
            ":where(h1, h2, h3, h4, h5, h6):not(:where([class~='not-prose'], [class~='not-prose'] *))":
              {
                "--font-weight": "600",
                "--type-heading":
                  "italic var(--font-weight) 21px / 1.2 var(--font-eb-garamond)",
                font: "var(--type-heading)",
                letterSpacing: "-0.05em",
                "> a": {
                  textDecoration: "none",
                },
              },
            blockquote: {
              borderLeftWidth: "0",
              paddingRight: theme("spacing.5"),
              position: "relative",
              quotes: "none",
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
              "& > p": {
                font: "var(--type-ui)",
                color: "var(--mauve-a11)",
                "& > a": {
                  textDecoration: "none",
                },
              },
            },
            li: {
              lineHeight: "1.225",
            },
            p: {
              font: "normal 420 var(--font-size) / var(--line-height) var(--font-newsreader)",
              letterSpacing: "-0.05em",
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
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    plugin(function addBaseStyles({ addBase }) {
      addBase({
        ":root": {
          "--bg": "var(--ruby-1)",
          // Font stack
          "--font-eb-garamond": "EB Garamond",
          "--font-mono": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
          "--font-newsreader": "Newsreader",
          "--font-satoshi": "Satoshi",
          // Defaults
          "--font-size": "1rem", // 16px
          "--font-weight": "400", // normal
          "--line-height": "1.225",
          "--ui-font-weight": "600",
          "--type-ui":
            "normal var(--ui-font-weight) calc(var(--font-size) * 0.875) / 1.2 var(--font-satoshi)",
        },
        ":where(em, i):not(:where([class~='prose'], [class~='prose'] *))": {
          "--font-weight": "390",
          "--type-italic":
            "italic var(--font-weight) calc(var(--font-size) + 2px) / 1.225 var(--font-newsreader)",
          font: "var(--type-italic)",
        },
        ":where(h1, h2, h3, h4, h5, h6)": {
          textWrap: "balance",
        },
        ":where(p):not(:where([class~='not-prose'], [class~='not-prose'] *))": {
          font: "normal 420 calc(var(--font-size) + 2px) / var(--line-height) var(--font-newsreader)",
          letterSpacing: "-0.05em",
        },
        "b, strong": {
          fontWeight: "var(--font-weight)",
        },
        body: {
          color: "var(--mauve-11)",
          fontSynthesis: "none",
          textWrap: "pretty",
        },
        "code, kbd, pre, samp": {
          "--type-mono":
            "normal var(--font-weight) calc(var(--font-size) + 2px) / 1 var(--font-mono)",
          font: "var(--type-mono)",
        },
        html: {
          "@apply selection:bg-ruby-3 selection:text-ruby-11": {},
          "-webkit-font-smoothing": "antialiased",
          "-moz-osx-font-smoothing": "grayscale",
          backgroundColor: "var(--bg)",
          fontSize: "16px", // 1rem
          scrollBehavior: "smooth",
          tabSize: "2",
          touchAction: "manipulation",
        },
      });
    }),
    plugin(function addFontEBGaramond({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "EB Garamond",
          src: `url("/fonts/eb-garamond-subset-italic.woff2") format("woff2")`,
          fontDisplay: "swap",
          fontStyle: "italic",
          fontWeight: "600",
        },
      });
    }),
    plugin(function addFontNewsreader({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "Newsreader",
          src: `url("/fonts/newsreader.woff2") format("woff2")`,
          fontDisplay: "swap",
          fontStyle: "normal",
          fontWeight: "200 800",
        },
      });
    }),
    plugin(function addFontNewsreaderItalic({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "Newsreader",
          src: `url("/fonts/newsreader-italic.woff2") format("woff2")`,
          fontDisplay: "swap",
          fontStyle: "italic",
          fontWeight: "200 800",
        },
      });
    }),
    plugin(function addFontSatoshi({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "Satoshi",
          src: `url("/fonts/satoshi.woff2") format("woff2")`,
          fontDisplay: "swap",
          fontStyle: "normal",
          fontWeight: "300 900",
        },
      });
    }),
    plugin(function wideWrapperPlugin({ addComponents }) {
      addComponents({
        ".wide-wrapper": {
          "--wrap-wide": "100vw",
          maxWidth: "min(100vw, var(--wrap-wide))",
          width: "min(100vw, var(--wrap-wide))",
          marginLeft: "calc((min(100vw, var(--wrap-wide)) - 100%) / -2)",
        },
      });
    }),
  ],
} satisfies Config;

function generateScale(name: string) {
  const scale = Array.from({ length: 12 }, (_, i) => {
    const id = i + 1;

    return [
      [id, `var(--${name}-${id})`],
      [`a${id}`, `var(--${name}-a${id})`],
    ];
  }).flat();

  return Object.fromEntries(scale);
}
