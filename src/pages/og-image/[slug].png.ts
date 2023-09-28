import { getCollection, getEntryBySlug } from "astro:content";
import { html } from "satori-html";
import { readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { Resvg } from "@resvg/resvg-js";
import satori from "satori";

import { siteConfig } from "@/site-config";
import { getFormattedDate } from "@/utils";

import type { APIContext, GetStaticPaths } from "astro";
import type { SatoriOptions } from "satori";

const FONTS_DIRECTORY = resolve("public", "fonts");

const RobotoMonoPath = join(FONTS_DIRECTORY, "roboto-mono-regular.ttf");
const RobotoMonoBoldPath = join(FONTS_DIRECTORY, "roboto-mono-700.ttf");

const RobotoMonoBold = readFileSync(RobotoMonoBoldPath);
const RobotoMonoRegular = readFileSync(RobotoMonoPath);

const ogOptions: SatoriOptions = {
  width: 1200,
  height: 630,
  fonts: [
    {
      name: "Roboto Mono",
      data: Buffer.from(RobotoMonoRegular),
      weight: 400,
      style: "normal",
    },
    {
      name: "Roboto Mono",
      data: Buffer.from(RobotoMonoBold),
      weight: 700,
      style: "normal",
    },
  ],
};

const markup = (title: string, pubDate: string) =>
  html`<div tw="flex flex-col w-full h-full bg-[#1d1f21] text-[#c9cacc]">
    <div tw="flex flex-col flex-1 w-full p-10 justify-center">
      <p tw="text-2xl mb-6">${pubDate}</p>
      <h1 tw="text-6xl font-bold leading-snug text-white">${title}</h1>
    </div>
    <div tw="flex items-center justify-between w-full p-10 text-xl">
      <div tw="flex items-center">
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="75" height="75" rx="12" fill="white" />
          <path
            ${/* eslint-disable-next-line */ ""}
            d="M39.6177 22.675V22.909C41.0607 26.224 40.4367 31.06 37.3557 34.336L35.9127 35.857V25.093L37.9017 22.909V22.675H26.2797V22.909L28.2687 25.093V46.582L26.2797 48.766V49H37.9017V48.766L35.9127 46.582V36.871L36.0687 36.715L41.2947 46.738L39.3837 48.766V49H50.3037V48.727L42.5817 32.932L37.2777 35.818L37.1607 35.662L50.3817 22.909V22.675H39.6177Z"
            fill="black"
          />
        </svg>

        <p tw="ml-3 font-semibold">${siteConfig.title}</p>
      </div>
      <p>by ${siteConfig.author}</p>
    </div>
  </div>`;

export async function GET({ params: { slug } }: APIContext) {
  const post = await getEntryBySlug("post", slug!);
  const title = post?.data.title ?? siteConfig.title;
  const postDate = getFormattedDate(post?.data.publishDate ?? Date.now(), {
    weekday: "long",
    month: "long",
  });
  // @ts-expect-error: look into this later
  const svg = await satori(markup(title, postDate), ogOptions);
  const png = new Resvg(svg).render().asPng();

  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}

export const getStaticPaths = (async () => {
  const posts = await getCollection("post");
  return posts
    .filter(({ data }) => !data.ogImage)
    .map(({ slug }) => ({ params: { slug } }));
}) satisfies GetStaticPaths;
