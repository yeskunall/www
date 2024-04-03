import type { CollectionEntry } from "astro:content";

export function sortByDate(posts: CollectionEntry<"post">[] = []) {
  return posts.sort(
    (a, b) =>
      new Date(b.data.publishDate).valueOf() -
      new Date(a.data.publishDate).valueOf(),
  );
}

export function getUniqueTags(posts: CollectionEntry<"post">[] = []) {
  const uniqueTags = new Set<string>();
  posts.forEach(post => {
    post.data.tags.map(tag => uniqueTags.add(tag));
  });

  return Array.from(uniqueTags);
}

export function getUniqueTagsWithCount(
  posts: CollectionEntry<"post">[] = [],
): Record<string, number> {
  return posts.reduce((prev, post) => {
    const runningTags: Record<string, number> = { ...prev };

    post.data.tags.forEach(tag => {
      runningTags[tag] = (runningTags[tag] ?? 0) + 1;
    });

    return runningTags;
  }, {});
}

export function removeDupsAndLowerCase(tags: string[]) {
  if (!tags.length) return tags;

  const distinctItems = new Set(tags.map(tag => tag.toLowerCase()));
  return Array.from(distinctItems);
}
