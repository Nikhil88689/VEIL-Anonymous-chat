import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="relative grid min-h-[100svh] place-items-center overflow-hidden px-5 text-center">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_35%,rgba(126,34,206,0.18),transparent_55%)]" />
      <div className="max-w-md">
        <p className="font-display text-sm tracking-[0.32em] text-cyan-100/80">VEIL · 404</p>
        <h1 className="mt-5 font-display text-4xl font-medium tracking-[-0.05em] text-white">This corner is quiet.</h1>
        <p className="mt-3 text-sm leading-6 text-slate-400">That page is not part of VEIL yet, or it may have moved.</p>
        <Link className={`${buttonVariants({ className: "mt-7" })}`} href="/">
          <ArrowLeft aria-hidden="true" className="size-4" /> Back to the beginning
        </Link>
      </div>
    </main>
  );
}
