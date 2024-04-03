import type { APIContext } from "astro";

import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";

import { sortByDate } from "~/lib/post";
import { siteConfig } from "~/site-config";

// TODO(yeskunall): Replace with [`micromark`](https://github.com/micromark/micromark) maybe?
const parser = new MarkdownIt();

export const GET = async (context: APIContext) => {
  const posts = await getCollection("post");
  const allPostsByDate = sortByDate(posts);

  return rss({
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
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    site: context.site!.toString(),
    stylesheet: "/rss/styles.xsl",
    title: siteConfig.title,
  });
};
