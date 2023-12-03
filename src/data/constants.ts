import { ArrowUpRight, Copy } from "@phosphor-icons/react";

import type { ImageMetadata } from "astro";

import gelato from "../assets/dcim/gelato-ottawa.jpg";
import hotpot from "../assets/dcim/hotpot.jpg";
import wagyu from "../assets/dcim/famu-wagyu.jpeg";

export type Picture = { image: ImageMetadata; alt: string };

export const EXPERIENCES = [
  {
    company: "(self-employed)",
    role: "Freelancer",
    range: "2021 -",
    description:
      "I do freelance work on the side from clients that I get based on referrals",
    skills: ["Astro", "React", "Next.js", "Tailwind", "Ghost", "Stripe"],
  },
  {
    company: "Case IQ",
    role: "Senior Software Engineer",
    range: "2021 - 2023",
    description:
      "As the most senior engineer on the Support team, I mentored ~10 juniors, offering support through pair programming, and delivering constructive feedback during code reviews, while maintaining the highest CSAT on the team & successfully keeping up with team OKRs",
  },
  {
    company: "Case IQ",
    role: "Software Engineer",
    range: "2019 - 2021",
    description:
      "As a Solutions Engineer, I built bespoke solutions for brands like CareSource, Corning Inc., Electronic Arts, GSK plc, Haleon plc, among several others. Drove significant business advancements by taking ownership of projects, aiding the team in achieving $1MM in revenue",
  },
];

export const PICTURES: Picture[] = [
  {
    image: gelato,
    alt: "Pistachio gelato I had in downtown Ottawa",
  },
  {
    image: hotpot,
    alt: "Hotpot with friends in the cold winters of Canada",
  },
  {
    image: wagyu,
    alt: "An assortment of wagyu (beef) from Japan and iberico (pork) from Portugal",
  },
];

export const PROJECTS = [
  {
    name: "Raycast extension for Anilist",
    description: "Get the airing schedule of anime from Anilist.co",
    href: "https://www.raycast.com/yeskunall/anilist-airing-schedule",
    logo: "https://logo.clearbit.com/raycast.com",
  },
  {
    name: "Deep Rainforest",
    description:
      "A VS Code theme with lush green hues & serene blue undertones",
    href: "https://marketplace.visualstudio.com/items?itemName=yeskunall.deep-rainforest",
    logo: "https://logo.clearbit.com/marketplace.visualstudio.com",
  },
  {
    name: "HN jobs digest",
    description: "Daily digest of top jobs from Hacker News",
    href: "https://www.val.town/v/yeskunall/hnLatestJobs",
    logo: "https://logo.clearbit.com/news.ycombinator.com",
  },
];

export const routes = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Writing",
    href: "/writing",
  },
  {
    name: "Now",
    href: "/now",
  },
];

export const SOCIALS = [
  {
    name: "Email",
    href: "mailto:hey@kimchiiii.space",
    title: "Email",
    icon: Copy,
  },
  {
    name: "GitHub",
    href: "https://github.com/yeskunall",
    title: "Code",
    icon: ArrowUpRight,
  },
  {
    name: "Literal*",
    href: "https://literal.club/yeskunall",
    title: "Book shelf",
    icon: ArrowUpRight,
  },
  {
    name: "Rep.ly",
    href: "https://rep.ly/yeskunall",
    title: "FAQ",
    icon: ArrowUpRight,
  },
  {
    name: "CV",
    href: "https://read.cv/yeskunall",
    title: "CV",
    icon: ArrowUpRight,
  },
];
