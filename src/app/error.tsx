"use client";

import { AlertTriangle } from "lucide-react";
import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="relative grid min-h-[100svh] place-items-center overflow-hidden px-5 text-center">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_35%,rgba(126,34,206,0.14),transparent_55%)]" />
      <div className="max-w-md">
        <span className="mx-auto grid size-12 place-items-center rounded-2xl border border-amber-100/10 bg-amber-100/[0.05] text-amber-100/80">
          <AlertTriangle aria-hidden="true" className="size-5" />
        </span>
        <h1 className="mt-6 font-display text-3xl font-medium tracking-[-0.05em] text-white">A moment of quiet.</h1>
        <p className="mt-3 text-sm leading-6 text-slate-400">This part of VEIL could not load. Try again, or return to the beginning.</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button onClick={reset} type="button" variant="secondary">Try again</Button>
          <Link className={buttonVariants({ variant: "ghost" })} href="/">Return home</Link>
        </div>
      </div>
    </main>
  );
}
