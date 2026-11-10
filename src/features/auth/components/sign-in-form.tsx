"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight, Check, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { TextField } from "@/components/ui/text-field";
import { sendSignInLink } from "@/features/auth/services/send-sign-in-link";
import { signInSchema, type SignInValues } from "@/lib/validations/auth";

export function SignInForm({
  supabaseConfigured,
  hasAuthError,
}: {
  supabaseConfigured: boolean;
  hasAuthError: boolean;
}) {
  const [sentTo, setSentTo] = useState<string | null>(null);
  const form = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: "" },
    mode: "onBlur",
  });

  const onSubmit = form.handleSubmit(async ({ email }) => {
    try {
      await sendSignInLink(email);
      setSentTo(email);
      toast.success("Your sign-in link is on its way.");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Please try again in a moment.";
      toast.error("We couldn't send your link", { description: message });
    }
  });

  return (
    <div className="w-full max-w-[440px]">
      <Link
        className="mb-10 inline-flex items-center gap-2 text-xs text-slate-500 transition hover:text-slate-200"
        href="/"
      >
        <ArrowLeft aria-hidden="true" className="size-3.5" /> Back to VEIL
      </Link>

      <div className="mb-8 flex size-12 items-center justify-center rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.06] text-cyan-100 shadow-[0_0_36px_-18px_rgba(34,211,238,0.8)]">
        <ShieldCheck aria-hidden="true" className="size-5" />
      </div>

      {sentTo ? (
        <div aria-live="polite">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-200">Check your inbox</p>
          <h1 className="font-display text-3xl font-medium tracking-[-0.045em] text-white sm:text-4xl">
            Your next step is in the mail.
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-400">
            We sent a secure sign-in link to <span className="font-medium text-slate-200">{sentTo}</span>. Open it on this device to continue.
          </p>
          <button
            className="mt-7 text-sm text-slate-400 underline decoration-white/20 underline-offset-4 transition hover:text-white"
            onClick={() => setSentTo(null)}
            type="button"
          >
            Use a different email
          </button>
        </div>
      ) : (
        <>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-200">Your voice, your terms</p>
          <h1 className="font-display text-3xl font-medium tracking-[-0.045em] text-white sm:text-4xl">
            Enter without an introduction.
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-400">
            Start with a private sign-in link. You can choose how you show up after you arrive.
          </p>

          {hasAuthError && (
            <div className="mt-6 rounded-xl border border-rose-300/15 bg-rose-300/[0.06] px-4 py-3 text-sm leading-6 text-rose-100" role="alert">
              That sign-in link could not be verified. Request a fresh one and try again.
            </div>
          )}

          <form className="mt-8 space-y-3" noValidate onSubmit={onSubmit}>
            <label className="mb-2 block text-xs font-medium text-slate-300" htmlFor="email">
              Email address
            </label>
            <div className="relative">
              <Mail aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
              <TextField
                autoComplete="email"
                aria-describedby={form.formState.errors.email ? "email-error" : undefined}
                aria-invalid={Boolean(form.formState.errors.email)}
                className="pl-11"
                id="email"
                inputMode="email"
                placeholder="you@example.com"
                type="email"
                {...form.register("email")}
              />
            </div>
            {form.formState.errors.email && (
              <p className="text-xs text-rose-300" id="email-error" role="alert">
                {form.formState.errors.email.message}
              </p>
            )}

            <Button className="mt-3 w-full" disabled={!supabaseConfigured || form.formState.isSubmitting} type="submit">
              {form.formState.isSubmitting ? "Sending your link…" : "Continue with email"}
              {!form.formState.isSubmitting && <ArrowRight aria-hidden="true" className="size-4" />}
            </Button>
          </form>

          {!supabaseConfigured && (
            <p className="mt-4 rounded-xl border border-amber-200/10 bg-amber-100/[0.04] px-4 py-3 text-xs leading-5 text-amber-100/75">
              Email sign-in is ready to connect. Add your Supabase URL and publishable key from <code className="font-mono text-amber-50">.env.example</code> to enable it.
            </p>
          )}

          <p className="mt-6 flex items-start gap-2 text-[11px] leading-5 text-slate-500">
            <Check aria-hidden="true" className="mt-0.5 size-3.5 shrink-0 text-cyan-200/70" />
            No password to remember. Your email is used for sign-in, not shown on your public profile.
          </p>
        </>
      )}
    </div>
  );
}
