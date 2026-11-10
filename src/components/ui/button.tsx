import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary:
    "border border-violet-300/20 bg-violet-500 text-white shadow-[0_0_32px_-12px_rgba(168,85,247,0.8)] hover:bg-violet-400 focus-visible:ring-violet-300",
  secondary:
    "border border-white/10 bg-white/[0.045] text-slate-100 hover:border-cyan-300/25 hover:bg-white/[0.08] focus-visible:ring-cyan-300",
  ghost:
    "border border-transparent bg-transparent text-slate-300 hover:bg-white/[0.06] hover:text-white focus-visible:ring-violet-300",
};

export function buttonVariants({
  variant = "primary",
  className,
}: {
  variant?: ButtonVariant;
  className?: string;
} = {}) {
  return cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold tracking-[-0.01em] transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07070b] disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    className,
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return <button className={buttonVariants({ variant, className })} {...props} />;
}
