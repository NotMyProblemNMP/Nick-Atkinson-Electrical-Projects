"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { services } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Services() {
  const reduce = useReducedMotion();

  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <SectionHeading
        eyebrow="What we do"
        title="Every electrical project, from first fix to final certificate."
        intro="Domestic and commercial work across the North East. No job is too big or small, and every project is carried through from start to completion."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <motion.article
            key={service.title}
            initial={reduce ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.65,
              delay: (i % 3) * 0.12,
              ease: [0.21, 0.65, 0.32, 0.99],
            }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface transition-colors duration-300 hover:border-accent/40"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={service.image}
                alt={service.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-wider text-muted transition-colors group-hover:border-accent/30 group-hover:text-accent"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
