import { defineCollection, z } from "astro:content";

function removeDupsAndLowerCase(tags: string[]) {
  if (!tags.length) return tags;

  const lowercaseItems = tags.map(tag => tag.toLowerCase());
  const distinctItems = new Set(lowercaseItems);

  return Array.from(distinctItems);
}

const post = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().max(60),
    description: z.string().max(160).or(z.string().max(0)),
    featured: z.boolean().optional(),
    heroImage: z.string().optional(),
    ogImage: z.string().optional(),
    publishDate: z.string().transform(string => new Date(string)),
    tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
  }),
});

export const collections = { post };
