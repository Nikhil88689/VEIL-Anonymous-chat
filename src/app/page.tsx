import { SiteFooter } from "@/components/navigation/site-footer";
import { SiteHeader } from "@/components/navigation/site-header";
import { LandingHero } from "@/features/landing/components/landing-hero";
import { LandingPrinciples } from "@/features/landing/components/landing-principles";

export default function HomePage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[850px] overflow-hidden">
        <div className="absolute left-[52%] top-[-33rem] size-[60rem] -translate-x-1/2 rounded-full bg-violet-700/[0.13] blur-[145px]" />
        <div className="absolute right-[-27rem] top-[10rem] size-[55rem] rounded-full bg-cyan-500/[0.05] blur-[155px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,transparent_0%,#07070b_78%)]" />
      </div>
      <SiteHeader />
      <LandingHero />
      <LandingPrinciples />
      <section className="mx-auto max-w-[1440px] px-5 pb-24 sm:px-8 lg:px-14" id="privacy">
        <div className="relative overflow-hidden rounded-[28px] border border-violet-200/10 bg-[linear-gradient(115deg,rgba(168,85,247,0.09),rgba(255,255,255,0.02)_52%,rgba(34,211,238,0.055))] px-6 py-10 sm:px-10 sm:py-12">
          <div aria-hidden="true" className="absolute -right-10 -top-32 size-72 rounded-full border border-white/[0.05] sm:right-16" />
          <div aria-hidden="true" className="absolute -right-3 -top-24 size-56 rounded-full border border-dashed border-cyan-100/[0.08] sm:right-24" />
          <div className="relative max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.23em] text-cyan-100/75">Privacy is a starting point</p>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.05em] text-white sm:text-4xl">Anonymity should be a choice you understand.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
              VEIL is being shaped around pseudonymous connection: your public presence can be separate from your offline identity. Like every online service, account data is still handled by the platform and its infrastructure.
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
