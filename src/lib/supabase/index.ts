import { createClient } from "@supabase/supabase-js";

import type { AstroCookies } from "astro";

const supabase = (cookies: AstroCookies) =>
  createClient(
    import.meta.env.SUPABASE_URL,
    import.meta.env.SUPABASE_PUBLIC_ANON_KEY,
    {
      auth: {
        // See https://supabase.com/docs/guides/auth/server-side-rendering for more
        // Also helpful: https://supabase.com/blog/supabase-auth-sso-pkce
        detectSessionInUrl: false,
        flowType: "pkce",
        storageKey: "pkce",
        storage: {
          setItem(key, value) {
            cookies.set(key, value, {
              maxAge: 60 * 60 * 24 * 7 * 1000,
              path: "/",
              sameSite: "lax",
            });
          },
          getItem(key) {
            const cookie = cookies.get(key)?.value ?? null;

            // NOTE(yeskunall): Figure this out
            // Why is `getItem` being called intermittently?
            // console.log("getItem", cookie);

            return cookie;
          },
          removeItem(key) {
            cookies.delete(key, {
              path: "/",
            });
          },
        },
      },
    },
  );

export { supabase };
