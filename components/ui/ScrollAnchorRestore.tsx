"use client";

import { useEffect } from "react";
import { SESSION_KEY } from "@/components/ui/ServiceLink";

/**
 * Place this once in app/page.tsx.
 * On mount it checks sessionStorage for a saved anchor ID, scrolls
 * to that element, then clears the key so it only fires once.
 */
export function ScrollAnchorRestore() {
  useEffect(() => {
    const anchorId = sessionStorage.getItem(SESSION_KEY);
    if (!anchorId) return;
    sessionStorage.removeItem(SESSION_KEY);

    function tryScroll(attemptsLeft: number) {
      const el = document.getElementById(anchorId as string);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      } else if (attemptsLeft > 0) {
        // retry until the element is in the DOM (dynamic content may still be loading)
        setTimeout(() => tryScroll(attemptsLeft - 1), 150);
      }
    }

    // Wait one frame for layout to settle, then attempt
    requestAnimationFrame(() => tryScroll(10));
  }, []);

  return null;
}
