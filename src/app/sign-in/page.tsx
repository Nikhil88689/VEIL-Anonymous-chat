import type { Metadata } from "next";

import { SignInForm } from "@/features/auth/components/sign-in-form";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export const metadata: Metadata = {
  title: "Enter VEIL",
  description: "Sign in to VEIL with a secure link sent to your email.",
  robots: { index: false, follow: false },
};

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;

  return (
    <main className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden px-5 py-14">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-28rem] size-[48rem] -translate-x-1/2 rounded-full bg-violet-600/[0.12] blur-[120px]" />
        <div className="absolute bottom-[-34rem] right-[-8rem] size-[48rem] rounded-full bg-cyan-500/[0.07] blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#07070b_72%)]" />
      </div>

      <div className="absolute left-5 top-5 flex items-center gap-2.5 sm:left-8 sm:top-7">
        <span className="grid size-8 place-items-center rounded-lg border border-violet-300/20 bg-violet-400/[0.09]">
          <span className="h-4 w-2.5 rounded-[50%] border border-cyan-200/90" />
        </span>
        <span className="font-display text-xs font-semibold tracking-[0.27em] text-white">VEIL</span>
      </div>

      <div className="w-full max-w-[520px] rounded-[28px] border border-white/[0.09] bg-white/[0.025] p-6 shadow-[0_24px_90px_-45px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-10">
        <SignInForm
          hasAuthError={params.error === "callback"}
          supabaseConfigured={isSupabaseConfigured()}
        />
      </div>
    </main>
  );
}
