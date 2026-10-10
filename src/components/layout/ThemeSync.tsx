"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * The theme and the `js` flag are applied to <html> by an inline script before first paint.
 * Switching locale re-renders the root layout (a different `[locale]` segment), and React then
 * re-applies the attributes it owns, which could wipe those script-set values. This re-asserts
 * the stored theme (or the OS preference when none is stored) after every navigation, before the browser paints.
 */
export function ThemeSync() {
  const pathname = usePathname();
  useLayoutEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");
    let theme: string | null = null;
    try {
      theme = localStorage.getItem("theme");
    } catch {
      /* storage unavailable: fall back to the OS preference */
    }
    if (theme !== "light" && theme !== "dark") {
      theme = window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark";
    }
    if (root.getAttribute("data-theme") !== theme) root.setAttribute("data-theme", theme);
  }, [pathname]);
  return null;
}
