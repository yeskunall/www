import { supabase } from "@/lib/supabase";

import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ redirect }) => {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });

    if (error) {
      throw error;
    }

    const { url } = data;

    return redirect(url);
  } catch (error) {
    return new Response("Internal server error", { status: 500 });
  }
};
