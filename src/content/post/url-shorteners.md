---
title: "I don’t like URL shorteners"
publishDate: "28 July 2023"
description: ""
tags: ["engineering", "privacy", "security"]
---

Yesterday I got an SMS from [Chef’s Plate](https://www.chefsplate.com/), asking
me to resubscribe to their delivery meal program:

> Missing tasty Chefs Plate meals? Get up to 40% off your next 4 boxes and start
> cooking again for a fraction of the cost: bit.ly/456k3CK To opt out reply STOP

Usually, I would have just ignored it, but then I saw the `bit.ly` URL in the
text, and my mind immediately went: “great, these _dumb nuggets_ had a security
breach, and now my phone number is with some _sore loser_ with no other purpose
than to cause grief.”

Not to mention, these promotional offers _usually_ come from **shortcode** (5 or
6-digit) phone numbers. This one came from a **longcode** phone number. I didn’t
even bother to lookup the phone number, and focused directly on that `bit.ly`
link.

```sh /<REDACTED>/ /unsafe-url/
curl --head bit.ly/456k3CK
HTTP/1.1 301 Moved Permanently
Server: nginx
Date: Fri, 28 Jul 2023 05:38:42 GMT
Content-Type: text/html; charset=utf-8
Content-Length: 246
Cache-Control: private, max-age=90
Content-Security-Policy: referrer always;
Location: https://www.chefsplate.com/settings/plan/reactivate?c=<REDACTED>&utm_source=reactivation&utm_medium=sms&utm_campaign=CK-Former-BLAST-Monthly-SMS_Test
Referrer-Policy: unsafe-url
Set-Cookie: _bit=n6s5CG-2970274fbfbd00e5fa-00Y; Domain=bit.ly; Expires=Wed, 24 Jan 2024 05:38:42 GMT
Via: 1.1 google
```

Boy, I did not expect it to be this easy. The `Location` exposes what the
shortened URL is meant to redirect me to. The `REDACTED` part is _my_ code to
get 40% off. Everything else in that URL that follows after the `?` is useless
to me. Not to mention, it is using a Content Security Policy value that is both
[deprecated](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/referrer)
_and_
[incorrect](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/referrer#syntax).
Next, it uses a harmful `Referrer-Policy` value
([`unsafe-url`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy)),
which can leak information to insecure origins. Finally, it also sets a cookie
that expires _6 months_ later. _Can ya’ll just stop already?_

At least the link does point to Chef’s Plate’s website, _right_? But it’s 2023:
why are they still using _URL shorteners_? It’s 2023, and most devices are
capable of handling concatenated SMSes. Don’t tell me: _greedy_ corporations are
trying to save money? _Unbelievable_. Look, I can see the reason(s) behind their
use, _okay_, I just don’t care to agree with it.
[Others](https://www.hanselman.com/blog/this-url-shortener-situation-is-officially-out-of-control)
[don’t](http://joshua.schachter.org/2009/04/on-url-shorteners) either.
