import type { APIContext } from "astro";

import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { micromark } from "micromark";
import { gfm, gfmHtml } from "micromark-extension-gfm";
import sanitizeHtml from "sanitize-html";

import { siteConfig } from "~/config/site-config";
import { sortByDate } from "~/lib/post";

export const GET = async (context: APIContext) => {
  const posts = await getCollection("post");
  const allPostsByDate = sortByDate(posts);

  return rss({
    description: siteConfig.description,
    items: allPostsByDate.map(post => ({
      content: sanitizeHtml(
        micromark(post.body, {
          extensions: [gfm()],
          htmlExtensions: [gfmHtml()],
        }),
      ),
      description: post.data.description,
      link: `writing/${post.slug}`,
      pubDate: post.data.publishDate,
      title: post.data.title,
    })),
    // This should be OK because Astro warns you if you don’t define `site`,
    // so I should be able to catch that, which will implicitly correct this
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    site: context.site!.toString(),
    title: siteConfig.title,
  });
};
