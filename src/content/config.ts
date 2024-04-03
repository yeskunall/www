import { defineCollection, z } from "astro:content";

import { removeDupsAndLowerCase } from "~/lib/post";

const post = defineCollection({
  schema: z.object({
    description: z.string().max(360).or(z.string().max(0)).optional(),
    lastUpdatedDate: z
      .string()
      .transform(string => new Date(string))
      .optional(),
    publishDate: z.string().transform(string => new Date(string)),
    tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
    title: z.string().max(60),
  }),
  type: "content",
});

export const collections = {
  post,
};
