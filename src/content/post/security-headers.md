---
title: "Securing sites using security headers"
publishDate: "16 January 2022"
description:
  "Proper HTTP response headers can help prevent security vulnerabilities like
  Cross-Site Scripting (XSS), clickjacking, information disclosure and more"
tags: ["engineering", "security"]
---

I’ve been hosting my personal website on Vercel (then ZEIT) since 2015. They
make it easy to build, and deploy a website on their platform, and they place a
huge importance on D/UX. This website is built using Next.js, and deployed on
Vercel at the edge.

But with the growing number of vulnerabilities coming to light, it was time to
look into the security of my site, starting with the
[response headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#security):
those little pieces of information that I’m letting loose into the wild without
giving it much thought.

I headed to Scott Helme’s [Security Headers](https://securityheaders.com/), and
was surprised to see that my site scored a D, and that most security headers
were either missing, or not turned up to the max.

## Why is this important?

Because security headers are designed to limit some of the dangerous
functionality built into web protocols, following best practices when
implementing security headers can prevent common vulnerability exploits, and
improve the overall security of your website.

_“But I’m only serving static content, and not hosting any private content, or
allowing sign-in/ups!”_

You should still serve your static website over HTTPS, as Troy Hunt
[explains](https://www.troyhunt.com/heres-why-your-static-website-needs-https/).

_“Why not just obfuscate any and all headers?”_

Because there are valid
[use-cases](https://wicg.github.io/ua-client-hints/#use-cases) for most, if not
all headers. Plus, the benefits of reducing the possibility of exploiting a
security vulnerability is considered to outweigh the possible benefits of
security through obscurity. This is simply another take on
[Kerchkhoff’s doctrine](https://en.wikipedia.org/wiki/Kerckhoffs%27s_principle).

Ultimately, by applying security headers to your response, hosts can ensure a
much safer browsing experience for end-users, while reducing the risk for
everyone involved. This is a net positive for the Internet.

## Security begins at home

Lee Rob has [suggested](https://github.com/vercel/next.js/issues/23993) adding a
set of security headers to all Next.js applications by default. While that is in
the works, I’m going to follow
[this](https://nextjs.org/docs/pages/api-reference/next-config-js/headers) guide
to add security headers to my website.

Here’s the security headers currently applied to my
[website](https://kimchiii.space):

```ts
const securityHeaders = [
  {
    /**
     * See https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP for more
     */
    key: "Content-Security-Policy",
    value: "frame-ancestors 'none';",
  },
  {
    /**
     * See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy for more
     */
    key: "Permissions-Policy",
    value:
      "autoplay=(), camera=(), geolocation=(), interest-cohort=(), microphone=()",
  },
  {
    /** See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy for more for more */
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    /**
     * See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security for more
     */
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },
  {
    /**
     * See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options for more
     */
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    /**
     * DNS pre-fetching is enabled by Google Chrome and Firefox by default,
     * but AFAICT, it can be disabled by the user manually. There _could_ be
     * ramifications in enabling this site-wide, but I review the content I
     * post on my site myself, ergo, I _technically_ trust the origin of the
     * content as well, so pre-fetching in this instance should not do be
     * a problem.
     *
     * See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control for more
     */
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    /**
     * This is simply here for older browsers, and for a better score
     * on securityheaders.com. The same effect can be achieved using `frame-ancestors`,
     * as seen above in the ‘Content-Security-Policy’ header.
     *
     * See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options for more
     */
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    /**
     * Simply here for older browsers (I’m looking at you, IE users), correct CSP headers override this.
     *
     * See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection for more
     */
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
];
```

If you’re using Next.js, there’s also
[`next-safe`](https://github.com/trezy/next-safe) which sets sane defaults for
the CSP headers. If you don’t have the patience or time to set these yourselves,
this is an option.

<!-- https://github.com/vercel/next.js/issues/256 -->
