import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-[1440px] px-5 pb-8 sm:px-8 lg:px-14">
      <div className="flex flex-col gap-5 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link className="flex items-center gap-2.5" href="/">
          <span className="grid size-7 place-items-center rounded-lg border border-violet-300/15 bg-violet-400/[0.07]">
            <span className="h-3.5 w-2 rounded-[50%] border border-cyan-200/80" />
          </span>
          <span className="font-display text-[11px] font-semibold tracking-[0.25em] text-slate-300">VEIL</span>
        </Link>
        <p className="text-[10px] text-slate-600">Speak Freely. Connect Deeply. Remain Unknown.</p>
        <Link className="inline-flex items-center gap-1.5 text-[11px] text-slate-500 transition hover:text-slate-200" href="/sign-in">
          Step inside <ArrowUpRight aria-hidden="true" className="size-3" />
        </Link>
      </div>
    </footer>
  );
}
