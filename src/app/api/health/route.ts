import { NextResponse } from "next/server";

// Liveness only: this confirms the route runtime is responding, not Supabase readiness.
export function GET() {
  return NextResponse.json(
    { status: "ok", service: "veil", timestamp: new Date().toISOString() },
    { headers: { "Cache-Control": "no-store" } },
  );
}
