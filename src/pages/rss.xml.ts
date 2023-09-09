import { getCollection } from "astro:content";
import MarkdownIt from "markdown-it";
import rss from "@astrojs/rss";
import sanitizeHtml from "sanitize-html";

import { siteConfig } from "@/site-config";
import { sortByDate } from "@/utils";

import type { APIContext } from "astro";

// TODO(yeskunall): Replace with [`micromark`](https://github.com/micromark/micromark) maybe?
const parser = new MarkdownIt();

export const GET = async (context: APIContext) => {
  const posts = await getCollection("post");
  const allPostsByDate = sortByDate(posts);

  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    items: allPostsByDate.map(post => ({
      content: sanitizeHtml(parser.render(post.body)),
      description: post.data.description,
      link: `writing/${post.slug}`,
      pubDate: post.data.publishDate,
      title: post.data.title,
    })),
    // This should be OK because Astro warns you if you don’t define `site`,
    // so I should be able to catch that, which will implicitly correct this
    site: context.site!.toString(),
    stylesheet: "/rss/styles.xsl",
  });
};
