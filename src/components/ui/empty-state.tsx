import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export function EmptyState({
  icon: Icon,
  eyebrow,
  title,
  description,
  action,
}: {
  icon: LucideIcon;
  eyebrow?: string;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.015] px-6 py-10 text-center">
      <span className="mb-5 grid size-11 place-items-center rounded-2xl border border-violet-200/10 bg-violet-300/[0.06] text-violet-100">
        <Icon aria-hidden="true" className="size-[18px]" />
      </span>
      {eyebrow && <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-100/65">{eyebrow}</p>}
      <h2 className="font-display text-lg font-medium tracking-[-0.03em] text-slate-100">{title}</h2>
      <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">{description}</p>
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
