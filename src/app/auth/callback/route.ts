import { NextResponse, type NextRequest } from "next/server";

import { createClient } from "@/lib/supabase/server";

function signInError(request: NextRequest) {
  const url = new URL("/sign-in", request.url);
  url.searchParams.set("error", "callback");
  return NextResponse.redirect(url);
}

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  if (!code) {
    return signInError(request);
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      return signInError(request);
    }

    return NextResponse.redirect(new URL("/", request.url));
  } catch {
    return signInError(request);
  }
}
