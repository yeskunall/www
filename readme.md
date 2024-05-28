[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)
![Vercel](https://img.shields.io/github/deployments/yeskunall/www/production?logo=vercel&logoColor=white&label=Vercel)
[![CI](https://github.com/yeskunall/www/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/yeskunall/www/actions/workflows/ci.yml)
![Repo license](https://img.shields.io/github/license/yeskunall/www)
![Language count](https://img.shields.io/github/languages/count/yeskunall/www)
![Repo size](https://img.shields.io/github/repo-size/yeskunall/www)
![Security headers](https://img.shields.io/badge/securityheaders.com-A-%2300A000)

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

This application runs on Node LTS, which is currently `v20.12.2`. There are some
features (for example, `.toSliced`) this project uses that are only available on
Node.js LTS and above. This matches the configuration set on Vercel.

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

<!-- prettier-ignore -->
> [!CAUTION]
> If you don’t build with `vc`, you will have to manually copy over the security headers (CSP) defined in `astro.config.ts` into `.vercel/output/config.json`

#### Deploying

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fyeskunall%2Fwww)

###### The goal is to ultimately deploy the site to Cloudflare Pages using [`@astrojs/cloudflare`](https://docs.astro.build/en/guides/integrations-guide/cloudflare)

#### License

The source code is available under the [MIT](./license.md) license. Content is
licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
If you **must** adapt, or share my content, please give appropriate credit and
ensure you distribute your adapted content under the same license. You also
**cannot** apply legal terms or technological measures that legally restrict
others from doing anything the license permits. **While the content I write is
posted on the Internet, it is _not_ public domain**. Therefore, you **must**
comply with the terms of the license.
