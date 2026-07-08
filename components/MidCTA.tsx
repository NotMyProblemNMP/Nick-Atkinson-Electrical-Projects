import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function MidCTA() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-[radial-gradient(ellipse_at_top_left,rgba(245,185,66,0.12),transparent_60%)] px-8 py-12 sm:px-12">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Planning a project, or just need a fault fixing?
              </h2>
              <p className="mt-3 max-w-xl text-muted">
                Speak directly to Nick for a free, no-obligation quote — clear
                pricing agreed before any work begins.
              </p>
            </div>
            <a
              href={`tel:${site.phone}`}
              className="inline-flex shrink-0 items-center gap-3 rounded-full border border-accent/50 px-7 py-3.5 text-sm font-semibold text-accent transition-all hover:bg-accent hover:text-background hover:shadow-[0_0_32px_rgba(245,185,66,0.35)]"
            >
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
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
