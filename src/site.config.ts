type SiteConfig = {
  author: string;
  description: string;
  lang: string;
  ogImage: string;
  ogLocale: string;
  title: string;
  url: string;
};

export type SiteMeta = {
  description?: string;
  publishDate?: string;
  title?: string;
};

export const siteConfig: SiteConfig = {
  author: "Kunall Banerjee",
  description:
    "Digital craftsman, building modest software & websites on the internet",
  lang: "en-CA",
  ogImage: "default-og.png",
  ogLocale: "en_CA",
  title: "Kunall Banerjee — I create",
  url: "https://kimchiii.space",
};
