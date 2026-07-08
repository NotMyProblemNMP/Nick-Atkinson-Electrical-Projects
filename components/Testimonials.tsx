import Image from "next/image";
import { moreReviews } from "@/lib/data";
import { site } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const workPhotos = [
  { src: "/images/work-chandelier.jpg", alt: "Crystal chandelier installation in a period home" },
  { src: "/images/work-stairs-blue.jpg", alt: "Colour-changing LED staircase lighting" },
  { src: "/images/work-garden-sofa.jpg", alt: "Garden seating area with landscape lighting at dusk" },
  { src: "/images/work-bathroom.jpg", alt: "Marble bathroom with freestanding bath and recessed spotlights" },
  { src: "/images/work-garden-room.jpg", alt: "Garden room with full electrical installation" },
  { src: "/images/work-pendant-trio.jpg", alt: "Coloured glass pendant light cluster" },
  { src: "/images/work-exterior-dusk.jpg", alt: "Exterior house lighting scheme at dusk" },
  { src: "/images/work-stairs-red.jpg", alt: "Warm LED stair tread lighting" },
  { src: "/images/work-cabin-night.jpg", alt: "Illuminated garden cabin at night" },
  { src: "/images/work-garden-day.jpg", alt: "Landscaped garden with planter lighting" },
];

export default function Testimonials() {
  // Strictly alternate photo → review in the marquee strip (duplicated for a
  // seamless loop), pairing each review with one photo.
  const strip = moreReviews.map((review, i) => ({
    photo: workPhotos[i % workPhotos.length],
    review,
  }));

  return (
    <section id="reviews" className="overflow-hidden py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Recent work & reviews"
          title="Real jobs. Real homes. Real reviews."
          intro="A look at recent projects across the North East, alongside what the customers behind them said. Every review is independently verified by Checked & Vetted."
        />
      </div>

      <Reveal delay={0.15} className="mt-14">
        <div className="group relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
          <div className="marquee flex w-max gap-6 group-hover:[animation-play-state:paused]">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1}
                className="flex shrink-0 gap-6"
              >
                {strip.map((item, i) => (
                  <div key={i} className="flex shrink-0 gap-6">
                    <div className="relative h-72 w-56 shrink-0 overflow-hidden rounded-2xl border border-white/10">
                      <Image
                        src={item.photo.src}
                        alt={copy === 0 ? item.photo.alt : ""}
                        fill
                        sizes="224px"
                        className="object-cover"
                      />
                    </div>
                    <figure className="flex h-72 w-80 shrink-0 flex-col justify-between rounded-2xl border border-white/10 bg-surface p-6">
                      <blockquote className="text-sm leading-relaxed text-foreground/90">
                        &ldquo;{truncate(item.review.quote, 200)}&rdquo;
                      </blockquote>
                      <figcaption className="mt-4 border-t border-white/10 pt-4">
                        <p className="text-xs font-medium text-foreground">
                          {item.review.job}
                        </p>
                        <p className="mt-1 text-xs text-muted">
                          {item.review.location} · {item.review.date} ·{" "}
                          <span className="text-accent">10/10</span>
                        </p>
                      </figcaption>
                    </figure>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.2} className="mt-12 text-center">
        <a
          href={`${site.checkedAndVettedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-strong"
        >
          Read all {site.reviewCount}{" "}verified reviews on Checked &amp;
          Vetted
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
    </section>
  );
}

function truncate(text: string, max: number) {
  if (text.length <= max) return text;
  return text.slice(0, text.lastIndexOf(" ", max)) + "…";
}
