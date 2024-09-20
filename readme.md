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
- **Analytics**: [Umami](https://umami.is/) +
  [Vercel Analytics](https://vercel.com/analytics)

#### Everything else

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fyeskunall%2Fwww)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/yeskunall/www/tree/latest/)
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/yeskunall/www/tree/latest/)

#### Locally

```sh
pnpm dev --host
```

#### Building (Using Vercel CLI)

```sh
vc build
```

<!-- prettier-ignore -->
> [!CAUTION]
> If you don’t build with `vc`, you will have to manually copy over the security headers (CSP) defined in `astro.config.ts` into `.vercel/output/config.json`

#### Deploying

```sh
vc deploy --prebuilt
```

#### License

The source code is available under the [MIT](./license.md) license. Content is
licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
If you **must** adapt, or share my content, please give appropriate credit and
ensure you distribute your adapted content under the same license. You also
**cannot** apply legal terms or technological measures that legally restrict
others from doing anything the license permits. **While the content I write is
posted on the Internet, it is _not_ public domain**. Therefore, you **must**
comply with the terms of the license.
