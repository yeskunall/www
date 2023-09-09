interface SiteConfig {
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
}

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
  description: "Software Engineer",
  lang: "en-CA",
  ogLocale: "en_CA",
  title: "Kunall Banerjee",
};
