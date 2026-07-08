"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/site";

const ease = [0.21, 0.65, 0.32, 0.99] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) => ({
    initial: reduce ? undefined : { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease },
  });

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(245,185,66,0.06),transparent_55%)]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28 lg:pt-44">
        <div>
          <motion.div {...fade(0.05)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Rated {site.rating}/10 on Checked &amp; Vetted
            </span>
          </motion.div>

          <motion.h1
            {...fade(0.15)}
            className="mt-7 font-display text-4xl font-semibold leading-[1.06] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Premium electrical work for North East homes &amp; businesses.
          </motion.h1>

          <motion.p
            {...fade(0.25)}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            Nick Atkinson Electrical Projects is a NAPIT-approved electrician
            based in {site.base}, serving Newcastle upon Tyne and the wider
            North East. Covering all electrical projects, maintenance and
            inspections including rewires, lighting designs, smart home
            installations and more. All fully insured, guaranteed and
            certified.
          </motion.p>

          <motion.div {...fade(0.35)} className="mt-9 flex flex-wrap gap-4">
            <a
              href={`tel:${site.phone}`}
              className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-background transition-all hover:bg-accent-strong hover:shadow-[0_0_36px_rgba(245,185,66,0.4)]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4 transition-transform group-hover:rotate-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.6 3h2.2l1.4 4.2-1.8 1.4a13.4 13.4 0 0 0 6 6l1.4-1.8L20 14.2v2.2A2.6 2.6 0 0 1 17.4 19 14.9 14.9 0 0 1 5 6.6 2.6 2.6 0 0 1 6.6 3Z"
                />
              </svg>
              Call Nick on {site.phoneDisplay}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-accent/50 hover:text-accent"
            >
              Request a free quote
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4"
              >
                <path strokeLinecap="round" d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </a>
          </motion.div>

          <motion.dl
            {...fade(0.45)}
            className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8"
          >
            {[
              { value: "100s", label: "Happy customers" },
              { value: site.reviewCountDisplay, label: "Verified reviews" },
              { value: "100%", label: "Customer satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-xs uppercase tracking-[0.15em] text-muted">
                  {stat.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Layered photo composition */}
        <div className="relative mx-auto hidden w-full max-w-md sm:block lg:max-w-none">
          <motion.div
            initial={reduce ? undefined : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="/images/hero-garden.jpg"
                alt="Architectural garden lighting scheme installed by Nick Atkinson Electrical Projects"
                width={600}
                height={450}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
            <motion.div
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease }}
              className="absolute -bottom-10 -left-8 w-56 overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/60 lg:w-64"
            >
              <Image
                src="/images/hero-kitchen.jpg"
                alt="Kitchen LED strip lighting installation"
                width={600}
                height={450}
                className="h-auto w-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={reduce ? undefined : { opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease }}
              className="absolute -right-4 -top-6 rounded-2xl border border-white/10 bg-surface/95 px-5 py-4 shadow-xl shadow-black/50 backdrop-blur"
            >
              <div className="flex items-center gap-2">
                <span className="flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-3.5 w-3.5"
                    >
                      <path d="M10 1.6 12.5 7l5.9.5-4.5 3.9 1.4 5.8L10 14.1l-5.3 3.1 1.4-5.8L1.6 7.5 7.5 7 10 1.6Z" />
                    </svg>
                  ))}
                </span>
              </div>
              <p className="mt-1.5 font-display text-xl font-semibold text-foreground">
                {site.rating}
                <span className="text-sm text-muted"> / 10</span>
              </p>
              <p className="text-[0.65rem] uppercase tracking-[0.15em] text-muted">
                {site.reviewCountDisplay} verified reviews
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
