import Image from "next/image";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Image
              src="/images/logo.png"
              alt="Nick Atkinson Electrical Projects"
              width={760}
              height={172}
              className="h-9 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              NAPIT-approved electrician in {site.base}, delivering premium
              domestic and commercial electrical projects across Newcastle upon
              Tyne and the North East of England.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Areas covered
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-muted">
              {site.areas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li>
                <a
                  href={`tel:${site.phone}`}
                  className="transition-colors hover:text-accent"
                >
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.checkedAndVettedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  Checked &amp; Vetted profile ↗
                </a>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {["NAPIT Approved", "AVIVA Insured"].map(
                (badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/10 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-muted"
                  >
                    {badge}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}.
          </p>
          <a
            href="https://www.notmyproblem.uk/web-design"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-baseline gap-1.5 opacity-70 transition-opacity hover:opacity-100"
          >
            Built by
            {/* The mark's baseline sits ~72% down the SVG (the rest is the
                p descender), so shift it down to sit on the text baseline. */}
            <Image
              src="/images/nmp-mark-white.svg"
              alt="NMP (Not My Problem)"
              width={36}
              height={14}
              className="h-3.5 w-auto translate-y-[4px]"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
