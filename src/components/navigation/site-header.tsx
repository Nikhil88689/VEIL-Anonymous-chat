"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";

import { useUIStore } from "@/stores/ui-store";

const navItems = [
  { label: "The idea", href: "/#the-idea" },
  { label: "Privacy", href: "/#privacy" },
];

export function SiteHeader() {
  const menuOpen = useUIStore((state) => state.mobileMenuOpen);
  const setMenuOpen = useUIStore((state) => state.setMobileMenuOpen);

  return (
    <header className="relative z-30 mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 py-5 sm:px-8 lg:px-14 lg:py-7">
      <Link
        aria-label="VEIL home"
        className="group flex items-center gap-3"
        href="/"
        onClick={() => setMenuOpen(false)}
      >
        <span className="relative grid size-9 place-items-center rounded-xl border border-violet-300/20 bg-violet-400/[0.09] shadow-[0_0_24px_-13px_rgba(168,85,247,0.9)]">
          <span className="h-[17px] w-[11px] rounded-[50%] border border-cyan-200/90 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
        </span>
        <span className="font-display text-[15px] font-semibold tracking-[0.27em] text-white">VEIL</span>
      </Link>

      <nav aria-label="Main navigation" className="hidden items-center gap-9 md:flex">
        {navItems.map((item) => (
          <Link
            className="text-[13px] text-slate-400 transition hover:text-white"
            href={item.href}
            key={item.label}
          >
            {item.label}
          </Link>
        ))}
        <Link
          className="inline-flex h-10 items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-4 text-[13px] font-medium text-white transition hover:border-violet-300/25 hover:bg-white/[0.08]"
          href="/sign-in"
        >
          Enter VEIL <ArrowUpRight aria-hidden="true" className="size-3.5 text-cyan-200" />
        </Link>
      </nav>

      <button
        aria-controls="mobile-navigation"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-slate-200 md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        type="button"
      >
        {menuOpen ? <X aria-hidden="true" className="size-4" /> : <Menu aria-hidden="true" className="size-4" />}
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            animate={{ opacity: 1, y: 0 }}
            aria-label="Mobile navigation"
            className="absolute inset-x-5 top-[calc(100%-0.5rem)] rounded-2xl border border-white/10 bg-[#101018]/95 p-3 shadow-2xl shadow-black/40 backdrop-blur-2xl md:hidden"
            exit={{ opacity: 0, y: -6 }}
            id="mobile-navigation"
            initial={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.16 }}
          >
            {navItems.map((item) => (
              <Link
                className="block rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
                href={item.href}
                key={item.label}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              className="mt-1 flex items-center justify-between rounded-xl bg-violet-500/15 px-4 py-3 text-sm font-medium text-white"
              href="/sign-in"
              onClick={() => setMenuOpen(false)}
            >
              Enter VEIL <ArrowUpRight aria-hidden="true" className="size-4 text-cyan-200" />
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
