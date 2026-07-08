"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Nick" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About Nick" },
  { href: "#reviews", label: "Reviews" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-background">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M13 2 4.5 13.5H11L9.5 22 19 10h-6.5L13 2Z" />
            </svg>
          </span>
          <span className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
            Nick Atkinson
            <span className="block text-[0.65rem] font-medium tracking-[0.3em] text-muted">
              Electrical Projects
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${site.phone}`}
            className="hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-background transition-all hover:bg-accent-strong hover:shadow-[0_0_28px_rgba(245,185,66,0.35)] sm:flex"
          >
            <PhoneIcon />
            Call Nick
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-foreground lg:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
            >
              {open ? (
                <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-muted transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${site.phone}`}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-background"
            >
              <PhoneIcon />
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.6 3h2.2l1.4 4.2-1.8 1.4a13.4 13.4 0 0 0 6 6l1.4-1.8L20 14.2v2.2A2.6 2.6 0 0 1 17.4 19 14.9 14.9 0 0 1 5 6.6 2.6 2.6 0 0 1 6.6 3Z"
      />
    </svg>
  );
}
