"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import type { RefObject } from "react";

gsap.registerPlugin(useGSAP);

export function useIntroAnimation(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      gsap.fromTo(
        "[data-gsap-intro]",
        { autoAlpha: 0, y: 18 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.09,
          clearProps: "all",
        },
      );
    },
    { scope },
  );
}
