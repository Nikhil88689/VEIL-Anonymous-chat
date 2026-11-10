import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

export function TextField({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "min-h-12 w-full rounded-xl border border-white/10 bg-[#090910] px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/65 focus:ring-2 focus:ring-violet-400/15 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
