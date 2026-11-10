"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

import { buttonVariants } from "@/components/ui/button";
import { useIntroAnimation } from "@/lib/animations/use-intro-animation";

import { VeilScene } from "./veil-scene";

export function LandingHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  useIntroAnimation(sectionRef);

  return (
    <section
      className="relative mx-auto grid min-h-[650px] w-full max-w-[1440px] items-center gap-4 px-5 pb-16 pt-10 sm:px-8 md:min-h-[690px] md:grid-cols-[1.05fr_0.95fr] md:py-16 lg:px-14 lg:pb-24 lg:pt-9"
      id="top"
      ref={sectionRef}
    >
      <div className="relative z-10 max-w-[670px]">
        <div
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-200/10 bg-violet-100/[0.045] px-3.5 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-violet-100/80 sm:text-[11px]"
          data-gsap-intro
        >
          <Sparkles aria-hidden="true" className="size-3.5 text-cyan-200" />
          A quieter kind of social
        </div>

        <h1
          className="max-w-[650px] font-display text-[clamp(3.3rem,8vw,6.7rem)] font-medium leading-[0.96] tracking-[-0.075em] text-white"
          data-gsap-intro
        >
          Say what you <span className="text-gradient">really mean.</span>
        </h1>

        <p
          className="mt-7 max-w-[490px] text-[15px] leading-7 text-slate-400 sm:text-base sm:leading-8"
          data-gsap-intro
        >
          VEIL is a space for honest conversations and unexpected connection, where your ideas can take the lead.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center" data-gsap-intro>
          <motion.div whileHover={shouldReduceMotion ? undefined : { y: -2 }} whileTap={{ scale: 0.98 }}>
            <Link className={buttonVariants({ className: "w-full sm:w-auto" })} href="/sign-in">
              Find your way in <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </motion.div>
          <Link
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium text-slate-300 transition hover:text-white sm:justify-start"
            href="#the-idea"
          >
            Get to know VEIL <ArrowDown aria-hidden="true" className="size-3.5 text-slate-500" />
          </Link>
        </div>

        <div className="mt-10 flex items-center gap-3 text-[11px] text-slate-500" data-gsap-intro>
          <span aria-hidden="true" className="flex -space-x-1.5">
            <span className="size-2 rounded-full bg-violet-300 shadow-[0_0_12px_rgba(196,181,253,0.7)]" />
            <span className="size-2 rounded-full bg-cyan-200 shadow-[0_0_12px_rgba(103,232,249,0.65)]" />
          </span>
          <span>Speak freely. Connect deeply. Remain unknown.</span>
        </div>
      </div>

      <div className="relative mx-auto mt-2 aspect-square w-full max-w-[540px] md:mt-0 md:max-w-none">
        <div aria-hidden="true" className="absolute inset-[10%] rounded-full border border-white/[0.035]" />
        <div aria-hidden="true" className="absolute inset-[19%] rounded-full border border-dashed border-violet-100/[0.075]" />
        <VeilScene />
        <div className="absolute bottom-[10%] left-[4%] rounded-2xl border border-white/[0.09] bg-[#111019]/75 px-4 py-3 shadow-xl shadow-black/20 backdrop-blur-xl sm:bottom-[15%] sm:left-[8%]">
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-500">A different signal</p>
          <p className="mt-1 font-display text-sm text-slate-100">More listening. Less performing.</p>
        </div>
        <div className="absolute right-[1%] top-[18%] flex items-center gap-2 rounded-full border border-cyan-100/10 bg-[#101018]/70 px-3 py-2 text-[10px] tracking-wide text-cyan-100/85 backdrop-blur-xl sm:right-[4%]">
          <span className="size-1.5 rounded-full bg-cyan-200 shadow-[0_0_10px_rgba(103,232,249,0.8)]" />
          A little more human
        </div>
      </div>
    </section>
  );
}
