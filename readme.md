[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)
![Vercel](https://img.shields.io/github/deployments/yeskunall/www/production?logo=vercel&logoColor=white&label=Vercel)
[![CI](https://github.com/yeskunall/www/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/yeskunall/www/actions/workflows/ci.yml)

#### Stack

- **Framework**: [Astro](https://astro.build/)
- **Colors**: [Radix UI](https://www.radix-ui.com/colors/)
- **Content**: Markdown / MDX
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: [Vercel](https://vercel.com/docs/deployments/overview)
- **Analytics**: [Shynet](https://github.com/milesmcc/shynet) +
  [Vercel Analytics](https://vercel.com/analytics)

#### Everything else

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/yeskunall/www/tree/latest/)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/yeskunall/www/tree/latest/)

#### Locally

This application runs on Node LTS, which is currently `v20.12.2`. This matches
the configuration set on Vercel.

```sh
bun dev --host
```

#### Building

##### Using Astro

```sh
bun run build
```

##### Using Vercel CLI

```sh
bunx vc build
```

#### Deploying

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fyeskunall%2Fwww)

###### The goal is to ultimately deploy the site to Cloudflare Pages using [`@astrojs/cloudflare`](https://docs.astro.build/en/guides/integrations-guide/cloudflare).

#### License

Content is licensed under
[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). The source code
is available under the [MIT](./license.md) license. As for the written content,
if you **must** adapt, or share my content, please give appropriate credit and
ensure you distribute your adapted content under the same license. You also
**cannot** apply legal terms or technological measures that legally restrict
others from doing anything the license permits. **While the content I write is
posted on the Internet, it is _not_ public domain**. Therefore, you **must**
comply with the terms of the license.

##### The plan is to replace Astro’s [Content Collections](https://docs.astro.build/en/guides/content-collections/) with Keystatic’s [Reader API](https://keystatic.com/docs/reader-api), so the former license will not apply in the long run when you are cloning / forking / this repository.
