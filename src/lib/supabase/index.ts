import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.SUPABASE_URL,
  import.meta.env.SUPABASE_PUBLIC_ANON_KEY,
  {
    auth: {
      // TODO(yeskunall): use PKCE instead as it is recommended for SSR apps
      // See https://supabase.com/docs/guides/auth/server-side-rendering for more
      flowType: "implicit",
    },
  },
);
