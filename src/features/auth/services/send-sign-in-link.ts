import { createClient } from "@/lib/supabase/client";

export async function sendSignInLink(email: string) {
  const supabase = createClient();
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${window.location.origin}/auth/callback`,
      shouldCreateUser: true,
    },
  });

  if (error) {
    throw error;
  }
}
