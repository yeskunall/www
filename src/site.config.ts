type SiteConfig = {
  author: string;
  title: string;
  description: string;
  lang: string;
  ogImage: string;
  ogLocale: string;
};

export type SiteMeta = {
  articleDate?: string;
  description?: string;
  ogImage?: string;
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
};
