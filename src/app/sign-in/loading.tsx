import { Skeleton } from "@/components/ui/skeleton";

export default function SignInLoading() {
  return (
    <main aria-busy="true" aria-label="Loading sign-in" className="relative grid min-h-[100svh] place-items-center overflow-hidden px-5">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_35%,rgba(126,34,206,0.14),transparent_55%)]" />
      <div className="w-full max-w-[520px] rounded-[28px] border border-white/[0.09] bg-white/[0.025] p-6 sm:p-10">
        <Skeleton className="size-12 rounded-2xl" />
        <Skeleton className="mt-8 h-3 w-32" />
        <Skeleton className="mt-4 h-9 w-4/5" />
        <Skeleton className="mt-3 h-4 w-full max-w-sm" />
        <Skeleton className="mt-10 h-12 w-full rounded-xl" />
        <Skeleton className="mt-4 h-11 w-full" />
      </div>
    </main>
  );
}
