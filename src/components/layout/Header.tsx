"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { t } from "@/i18n/localize";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";
import { LocaleSwitcher } from "./LocaleSwitcher";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  const home = localePath(locale, "/");

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* The blur lives on its own layer: a backdrop-filter on the header itself would become the
          containing block of the fixed mobile menu and collapse it to the header's height. */}
      <div
        aria-hidden
        className={`absolute inset-0 border-b bg-bg/85 backdrop-blur-md transition-opacity duration-300 ${
          scrolled || open ? "border-line opacity-100" : "border-transparent opacity-0"
        }`}
      />
      <div className="container-x relative flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
        <Link href={home} className="group flex items-center gap-3" aria-label={`${t(profile.displayName, locale)} — ${dict.a11y.home}`}>
          <span className="grid h-9 w-9 place-items-center rounded-full border border-line-strong font-serif text-[1.05rem] leading-none transition-colors group-hover:border-accent group-hover:text-accent">
            {profile.initials}
          </span>
          <span className="hidden text-sm font-medium tracking-tight sm:block">{t(profile.displayName, locale)}</span>
        </Link>

        <nav aria-label={dict.a11y.primaryNav} className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link key={item.id} href={`${home}${item.hash}`} className="link text-sm text-muted hover:text-fg">
              {dict.nav[item.labelKey]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LocaleSwitcher current={locale} label={dict.a11y.language} />
          <ThemeToggle toLight={dict.a11y.switchToLight} toDark={dict.a11y.switchToDark} />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-fg lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? dict.a11y.closeMenu : dict.a11y.menu}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
          </button>
        </div>
      </div>

      {/* Mobile menu: large editorial links */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto border-t border-line bg-bg lg:hidden"
      >
        <nav aria-label={dict.a11y.primaryNav} className="container-x flex min-h-full flex-col justify-between py-8">
          <ul>
            {navigation.map((item, i) => (
              <li key={item.id} className="border-b border-line">
                <Link
                  href={`${home}${item.hash}`}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-5 font-serif text-[2.4rem] leading-tight transition-colors hover:text-accent"
                >
                  <span>{dict.nav[item.labelKey]}</span>
                  <span className="font-mono text-xs text-subtle">0{i + 1}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="eyebrow mt-10">{t(profile.headline, locale)}</p>
        </nav>
      </div>
    </header>
  );
}
