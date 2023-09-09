import { readFileSync } from "node:fs";

import type { Options } from "rehype-pretty-code";

export const rehypePrettyCodeOptions: Partial<Options> = {
  grid: true,
  theme: JSON.parse(
    readFileSync(
      new URL("./themes/one-hunter-vercel.json", import.meta.url),
    ).toString(),
  ),
};
