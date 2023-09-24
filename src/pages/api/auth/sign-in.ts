import { supabase } from "@/lib/supabase";

import type { APIContext, APIRoute } from "astro";
import { AuthApiError } from "@supabase/supabase-js";

export const GET: APIRoute = async ({ cookies, redirect }: APIContext) => {
  try {
    const { data, error } = await supabase(cookies).auth.signInWithOAuth({
      provider: "github",
    });

    if (error instanceof AuthApiError) {
      throw error;
    }

    const { url } = data;

    return redirect(url ?? "/");
  } catch (error) {
    return new Response("Internal server error", { status: 500 });
  }
};
