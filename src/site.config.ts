type SiteConfig = {
  author: string;
  title: string;
  description: string;
  lang: string;
  ogLocale: string;
  themeColorLight?: string;
  themeColorDark?: string;
  date: {
    locale: string | string[] | undefined;
    options: Intl.DateTimeFormatOptions;
  };
};

export type SiteMeta = {
  articleDate?: string | undefined;
  description?: string;
  ogImage?: string | undefined;
  title: string;
};

export const siteConfig: SiteConfig = {
  author: "Kunall Banerjee",
  date: {
    locale: "en-CA",
    options: {
      day: "numeric",
      month: "short",
      year: "numeric",
    },
  },
  description:
    "Digital craftsman, building modest software & websites on the internet",
  lang: "en-CA",
  ogLocale: "en_CA",
  title: "Kunall Banerjee / @yeskunall",
};
