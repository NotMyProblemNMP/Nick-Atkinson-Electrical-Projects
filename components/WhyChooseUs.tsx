"use client";

import { motion, useReducedMotion } from "framer-motion";
import { featuredReviews, scoreBreakdown } from "@/lib/data";
import { site } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function WhyChooseUs() {
  const reduce = useReducedMotion();

  return (
    <section id="why-us" className="border-y border-white/10 bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Why choose Nick"
              title="Don't just take my word for it."
              intro="Hear from other happy customers around the North East. All reviews and customer satisfaction scores independently verified by Checked and Vetted."
            />

            <Reveal delay={0.15} className="mt-10">
              <div className="grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-3">
                {scoreBreakdown.map((item, i) => (
                  <div key={item.label}>
                    <p className="font-display text-2xl font-semibold text-foreground">
                      {item.score}
                      <span className="text-sm text-muted">/10</span>
                    </p>
                    <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={reduce ? { width: "100%" } : { width: 0 }}
                        whileInView={{
                          width: `${Number(item.score) * 10}%`,
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + i * 0.08 }}
                        className="h-full rounded-full bg-accent"
                      />
                    </div>
                    <p className="mt-2 text-xs uppercase tracking-[0.12em] text-muted">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
              <a
                href={site.checkedAndVettedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-strong"
              >
                See the full profile on Checked &amp; Vetted
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4"
                >
                  <path strokeLinecap="round" d="M7 17 17 7m0 0H8m9 0v9" />
                </svg>
              </a>
            </Reveal>
          </div>

          <div className="flex flex-col gap-6">
            {featuredReviews.map((review, i) => (
              <motion.blockquote
                key={review.location + review.date}
                initial={reduce ? false : { opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                  ease: [0.21, 0.65, 0.32, 0.99],
                }}
                className="rounded-2xl border border-white/10 bg-background p-7"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="flex gap-0.5 text-accent">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <svg
                        key={s}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <path d="M10 1.6 12.5 7l5.9.5-4.5 3.9 1.4 5.8L10 14.1l-5.3 3.1 1.4-5.8L1.6 7.5 7.5 7 10 1.6Z" />
                      </svg>
                    ))}
                  </span>
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-accent">
                    10/10 Rating
                  </span>
                </div>
                <p className="mt-5 text-[0.95rem] leading-relaxed text-foreground/90">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <footer className="mt-5 border-t border-white/10 pt-4 text-sm">
                  <p className="font-medium text-foreground">{review.job}</p>
                  <p className="mt-1 text-muted">
                    Customer in {review.location} · {review.date}
                  </p>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
