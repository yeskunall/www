import { ArrowUpRight, Copy } from "@phosphor-icons/react";

import type { ImageMetadata } from "astro";

import gelato from "../assets/dcim/gelato-ottawa.jpg";
import hotpot from "../assets/dcim/hotpot.jpg";
import wagyu from "../assets/dcim/famu-wagyu.jpeg";

import chair from "../assets/uses/herman-miller-aeron.jpg";
import desk from "../assets/uses/bekant.avif";
import headphones from "../assets/uses/headphones.webp";
import laptop from "../assets/uses/mbp-2017.jpg";
import peeesfour from "../assets/uses/ps4pro.webp";
import phone from "../assets/uses/op7pro.jpg";
import switcherino from "../assets/uses/switch.avif";

export type Picture = { image: ImageMetadata; alt: string };

export const Status = {
  completed: "completed",
  none: "none",
  progress: "progress",
} as const;

export const ETHOS = [
  "Strive for perfection in a world where it doesn’t exist",
  "Indulge in your vices, but more importantly, do not make vices out of your virtues",
  "Be willing to take risks",
  "Show up on days when you have to, not only when you want to",
  "Speak only if it improves upon the silence",
  "Be mindful",
  "Respect those who came before you, listen to their stories, but do not mistake it for wisdom",
];

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

export const IMPOSSIBLE_LIST = [
  {
    item: "Become a global citizen",
    status: Status.progress,
  },
  {
    item: "Build the first ever truly ethical business",
    status: Status.none,
  },
  {
    item: "Visit all 7 continents (5/7)",
    status: Status.progress,
  },
  {
    item: "Visit and dine in at Noma in Copenhagen in-person before the end of 2024",
    status: Status.none,
  },
  {
    item: "Dine in at the Alchemist in Copenhagen",
    status: Status.none,
  },
  {
    item: "Dine in at a Michelin-starred restaurant",
    status: Status.completed,
  },
  {
    item: "Visit Japan during the cherry blossoms",
    status: Status.none,
  },
  {
    item: "Visit Japan during the mid-Autumn festival",
    status: Status.none,
  },
  {
    item: "Play Free Bird by Lynyrd Skynyrd in space",
    status: Status.none,
  },
  {
    item: "Hold multiple passports",
    status: Status.progress,
  },
  {
    item: "Take a selfie with a Quokka",
    status: Status.none,
  },
  {
    item: "Attend Burning Man in Nevada",
    status: Status.none,
  },
  {
    item: "Experience the Northern Lights",
    status: Status.none,
  },
  {
    item: "Become fluent in Japanese",
    status: Status.progress,
  },
  {
    item: "Build a fully off-grid house",
    status: Status.none,
  },
  {
    item: "Get a tattoo (2017)",
    status: Status.completed,
  },
  {
    item: "Participate and complete an Ironman Triathlon",
    status: Status.none,
  },
  {
    item: "Host an art exhibition (2007)",
    status: Status.completed,
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

export const GAMING = [
  {
    name: "Nintendo Switch",
    image: switcherino,
  },
  {
    name: "PlayStation 4 Pro 1TB",
    image: peeesfour,
  },
];

export const OFFICE_TECH = [
  {
    name: "13” Macbook Pro (2017)",
    image: laptop,
  },
  {
    name: "Herman Miller Aeron",
    image: chair,
  },
  {
    name: "IKEA BEKANT Desk",
    image: desk,
  },
  {
    name: "Sony WH-1000XM5",
    image: headphones,
  },
  {
    name: "OnePlus 7 Pro",
    image: phone,
  },
];

export const SOFTWARE = [
  {
    name: "VSCodium",
    url: "https://vscodium.com/",
  },
  {
    name: "Brave",
    url: "https://brave.com/",
  },
  {
    name: "Raycast",
    url: "https://www.raycast.com/",
  },
  {
    name: "CleanShot X",
    url: "https://cleanshot.com/",
  },
  {
    name: "Magnet",
    url: "https://magnet.crowdcafe.com/",
  },
  {
    name: "IINA",
    url: "https://iina.io/",
  },
  {
    name: "Bartender",
    url: "https://www.macbartender.com/",
  },
  {
    name: "Hammerspoon",
    url: "https://www.hammerspoon.org/",
  },
  {
    name: "1Password",
    url: "https://1password.com/",
  },
  {
    name: "NordVPN",
    url: "https://nordvpn.com/",
  },
  {
    name: "Signal",
    url: "https://www.signal.org/",
  },
  {
    name: "Noor",
    url: "https://noor.to/",
  },
  {
    name: "Figma",
    embed: "figma.com",
    url: "figma.com",
  },
  {
    name: "iTerm 2",
    url: "https://iterm2.com/",
  },
  {
    name: "Micro Snitch",
    url: "https://www.obdev.at/products/microsnitch/index.html",
  },
  {
    name: "CleanMyMac X",
    embed: "macpaw.com",
    url: "https://macpaw.com/cleanmymac",
  },
];
