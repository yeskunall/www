import type { Properties } from "hast";

import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import { toString } from "mdast-util-to-string";
import getReadingTime from "reading-time";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import {
  defListHastHandlers,
  remarkDefinitionList,
} from "remark-definition-list";
import remarkAdmonitions from "remark-github-beta-blockquote-admonitions";
import remarkUnwrapImages from "remark-unwrap-images";
import { visit } from "unist-util-visit";

// Although setting `default-src` would cover some of the following CSP headers,
// I’ve set them explicitly _because I can_. Bite me.
const contentSecurityPolicy = `
  child-src 'none';
  connect-src *;
  default-src blob: data: 'self';
  font-src 'self';
  frame-ancestors 'self';
  frame-src 'self';
  img-src blob: data: 'self' https://assets.literal.club;
  manifest-src 'self';
  media-src 'self';
  object-src 'none';
  sandbox allow-forms allow-popups allow-same-origin allow-scripts;
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
    imageService: true,
    webAnalytics: { enabled: true },
  }),
  experimental: {
    directRenderScript: true,
  },
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
  integrations: [
    icon(),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
      nesting: true,
    }),
  ],
  markdown: {
    rehypePlugins: [
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      rehypeAccessibleEmojis,
      rehypeHeadingIds,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: { ariaHidden: true },
        },
      ],
      [
        rehypeExternalLinks,
        {
          rel({ properties }: { properties: Properties }) {
            const allowList = ["/", "#", "mailto:"];
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            const href = properties.href as string;

            if (allowList.some(start => href.startsWith(start))) return [];

            return "nofollow noopener noreferrer";
          },
          target: "_blank",
        },
      ],
      // Remove `tabindex` from `<pre />` elements
      () => tree => {
        visit(tree, "element", node => {
          if (node.tagName === "pre" && node.properties.tabIndex === 0)
            delete node.properties.tabIndex;
        });
      },
      // Add reading time to frontmatter
      () => (tree, vfile) => {
        const data = vfile.data as {
          astro: { frontmatter: Record<string, unknown> };
        };
        const readingTime = getReadingTime(toString(tree));

        data.astro.frontmatter.readingTime = readingTime.text;
        data.astro.frontmatter.words = readingTime.words;
      },
    ],
    remarkPlugins: [
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
      // @ts-ignore
      [
        remarkAdmonitions,
        {
          classNameMaps: {
            block: (title: string) =>
              `admonition admonition--${title.toLowerCase()}`,
            title: (title: string) =>
              `admonition-title admonition-title--${title.toLowerCase()}`,
          },
        },
      ],
      remarkDefinitionList,
      remarkUnwrapImages,
    ],
    remarkRehype: {
      footnoteLabelProperties: { className: [""] },
      handlers: {
        ...defListHastHandlers,
      },
    },
    syntaxHighlight: false,
  },
  output: "static",
  prefetch: true,
  // These headers are duped in `vercel.json`, from where they are _actually_
  // applied in production.
  // NOTE(yeskunall): if I ever switch hosting providers (Cloudflare Pages),
  // I will (most likely) have to do this all over again
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
});
