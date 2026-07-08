import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
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
            </div>
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
              {["NAPIT Approved", "Checked & Vetted", "AVIVA Insured"].map(
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
            © {new Date().getFullYear()} {site.legalName}. Registered company
            No. {site.companyNumber}.
          </p>
          <p>Fully insured &amp; guaranteed electrical work.</p>
        </div>
      </div>
    </footer>
  );
}
