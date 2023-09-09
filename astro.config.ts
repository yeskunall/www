import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";
import react from "@astrojs/react";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import { rehypePrettyCodeOptions } from "./src/lib/rehype-plugins";

// Although setting `default-src` would cover some of the following CSP headers,
// I’ve set them explicitly _because I can_. Bite me.
const contentSecurityPolicy = `
  child-src 'none';
  connect-src *;
  default-src blob: data: 'self';
  font-src 'self';
  form-action 'self';
  frame-ancestors 'none';
  frame-src 'none';
  ${/* eslint-disable-next-line */ ""}
  img-src blob: data: 'self' https://assets.literal.club https://blog.kimchiii.space https://res.cloudinary.com;
  manifest-src 'self';
  media-src 'self';
  object-src 'none';
  sandbox allow-popups allow-same-origin allow-scripts;
  script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.vercel-insights.com;
  script-src-elem 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  style-src-attr 'self' 'unsafe-inline';
  style-src-elem 'self' 'unsafe-inline';
  worker-src 'self';
`;

// Most permissions here are in experimental phase (eg. `battery`).
// There is a very low chance these will make it out, but I will still keep them.
// In other cases, it makes no sense (for me) to have them here
// (eg. `execution-while-not-rendered`; `frame-ancestors`, `frame-src` are set to
// `none` above) because they are disabled elsewhere.
// If you’re looking to _enhance_ your security, you should most definitely reference the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy)
// on this.
const permissionPolicy = `
  ambient-light-sensor=(),
  autoplay=(),
  battery=(),
  camera=(),
  display-capture=(),
  document-domain=(),
  execution-while-not-rendered=(),
  execution-while-out-of-viewport=(),
  fullscreen=(),
  gamepad=(),
  geolocation=(),
  gyroscope=(),
  hid=(),
  identity-credentials-get=(),
  idle-detection=(),
  interest-cohort=(),
  local-fonts=(),
  magnetometer=(),
  microphone=(),
  midi=(),
  payment=(),
  picture-in-picture=(),
  publickey-credentials-create=(),
  publickey-credentials-get=(),
  screen-wake-lock=(),
  serial=(),
  speaker-selection=(),
  storage-access=(),
  usb=(),
  web-share=(),
  xr-spatial-tracking=()
`;
// https://astro.build/config
export default defineConfig({
  adapter: vercel({
    analytics: true,
    imageService: true,
  }),
  integrations: [
    mdx(),
    prefetch(),
    react(),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  markdown: {
    rehypePlugins: [
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      rehypeAccessibleEmojis,
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel(element: Element) {
            const allowList = ["/", "#", "mailto:"];
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore: this definitely works
            const href = element.properties.href;
            if (allowList.some(start => href.startsWith(start))) {
              return [];
            }
            return "nofollow noopener noreferrer";
          },
        },
      ],
      rehypeHeadingIds,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["anchor"],
          },
        },
      ],
      [rehypePrettyCode, rehypePrettyCodeOptions],
      rehypeSlug,
    ],
    syntaxHighlight: false,
  },
  output: "static",
  server: {
    headers: {
      // Prefer Brotli compression
      // See https://developer.chrome.com/docs/lighthouse/performance/uses-text-compression/
      // & https://vercel.com/docs/concepts/edge-network/compression#gzip-and-brotli for more
      // NB: Look at the documentation for your cloud (deployment) provider on whether
      // it supports Brotli compression (or not)
      "Accept-Encoding": "br, gzip, compress",
      "Content-Security-Policy": contentSecurityPolicy.replace(/\n/g, ""),
      "Permissions-Policy": permissionPolicy.replace(/\n/g, ""),
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Strict-Transport-Security": "max-age=63072000; includeSubDomains",
      "X-Content-Type-Options": "nosniff",
      "X-DNS-Prefetch-Control": "on",
      "X-Frame-Options": "DENY",
      "X-XSS-Protection": "1; mode=block",
    },
  },
  site: "https://kimchiii.space/",
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
});
