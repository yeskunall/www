import { siteConfig } from "@/site-config";

const dateFormat = new Intl.DateTimeFormat(
  siteConfig.date.locale,
  siteConfig.date.options,
);

const pluralRules = new Intl.PluralRules("en", { type: "ordinal" });
const suffixes = new Map([
  ["one", "st"],
  ["two", "nd"],
  ["few", "rd"],
  ["other", "th"],
]);

const formatOrdinals = (n: number) => {
  const rule = pluralRules.select(n);
  const suffix = suffixes.get(rule);
  return `${n}${suffix}`;
};

export function getFormattedDate(
  date: string | number | Date,
  options?: Intl.DateTimeFormatOptions,
) {
  if (typeof options !== "undefined") {
    const day = new Date(date).getDate();
    const month = new Date(date).toLocaleString("default", { month: "short" });
    const year = new Date(date).getFullYear();

    return `${formatOrdinals(day)} ${month}, ${year}`;
  }

  return dateFormat.format(new Date(date));
}

export function relativeDate(date: Date) {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const hour = 1000 * 60 * 60;
  const day = hour * 24;
  const week = day * 7;
  const rtf = new Intl.RelativeTimeFormat("en", { style: "narrow" });

  if (diff < hour) {
    return rtf.format(-Math.floor(diff / 60000), "minute");
  } else if (diff < day) {
    return rtf.format(-Math.floor(diff / hour), "hour");
  } else if (diff < week) {
    return rtf.format(-Math.floor(diff / day), "day");
  } else {
    return;
  }
}
