import { defineCollection, z } from "astro:content";

import { removeDupsAndLowerCase } from "~/lib/post";

const post = defineCollection({
  schema: ({ image }) =>
    z.object({
      coverImage: z
        .object({
          alt: z.string(),
          src: image(),
        })
        .optional(),
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

const socials = defineCollection({
  schema: z.array(
    z.object({
      href: z.string().url(),
      title: z.string(),
    }),
  ),
  type: "data",
});

const work = defineCollection({
  schema: z.array(
    z.object({
      href: z.string().url(),
      project: z.string(),
      role: z.string(),
      year: z.number(),
    }),
  ),
  type: "data",
});

export const collections = {
  post,
  socials,
  work,
};
