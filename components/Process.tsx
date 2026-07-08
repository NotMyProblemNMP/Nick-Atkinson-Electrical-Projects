"use client";

import { motion, useReducedMotion } from "framer-motion";
import { processSteps } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Process() {
  const reduce = useReducedMotion();

  return (
    <section id="process" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <SectionHeading
        eyebrow="How it works"
        title="Straightforward from first call to final certificate."
        intro="No chasing, no surprises — a clear four-step process that keeps you informed at every stage."
      />

      <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {processSteps.map((step, i) => (
          <motion.li
            key={step.title}
            initial={reduce ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.65,
              delay: i * 0.14,
              ease: [0.21, 0.65, 0.32, 0.99],
            }}
            className="relative"
          >
            {/* Connector line between steps on desktop */}
            {i < processSteps.length - 1 ? (
              <div
                aria-hidden
                className="absolute left-14 right-0 top-6 hidden h-px bg-gradient-to-r from-accent/40 to-white/5 lg:block"
              />
            ) : null}
            <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-surface font-display text-lg font-semibold text-accent">
              {i + 1}
            </span>
            <h3 className="mt-6 font-display text-lg font-semibold text-foreground">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {step.description}
            </p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
