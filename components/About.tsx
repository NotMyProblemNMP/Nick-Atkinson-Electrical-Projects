import Image from "next/image";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

const points = [
  "NAPIT approved and Checked & Vetted verified since 2020",
  "Fully insured with AVIVA: £1,000,000 public liability cover",
  "Registered limited company (No. 14644304)",
  "Free, no-obligation quotes with prices agreed up front",
];

export default function About() {
  return (
    <section id="about" className="border-y border-white/10 bg-surface">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:py-32">
        <Reveal className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="/images/about-van.jpg"
              alt="Nick Atkinson Electrical Projects van on site in the North East"
              width={444}
              height={783}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 rounded-2xl border border-white/10 bg-background/95 px-6 py-4 shadow-xl shadow-black/50 backdrop-blur sm:-right-8">
            <p className="font-display text-lg font-semibold text-foreground">
              Based in {site.base}
            </p>
            <p className="text-sm text-muted">Covering the North East</p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
              About Nick
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              The electrician your neighbours already recommend.
            </h2>
            <div className="keyline mt-6 w-24" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 leading-relaxed text-muted">
              Nick runs every project personally, from the first phone call to
              the final handover. Based in {site.base} and working across
              Newcastle upon Tyne, North Tyneside and Northumberland, he's
              built his reputation one job at a time: turning up when
              arranged, explaining all options (including the cheaper ones),
              and leaving every property clean and tidy.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Customers keep coming back, some for over six years, because the
              work is done properly, certified and guaranteed. Domestic or
              commercial, no job is too big or small.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-8 space-y-3.5">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-foreground/90">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
