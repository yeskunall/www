// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
/// <reference types="@astrojs/image/client" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SUPABASE_PUBLIC_ANON_KEY: string;
  readonly SUPABASE_URL: string;
}
