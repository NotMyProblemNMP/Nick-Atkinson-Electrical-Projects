import Reveal from "./Reveal";

const badges = [
  "NAPIT Approved",
  "Checked & Vetted Verified",
  "AVIVA Insured to £1,000,000",
  "Free No-Obligation Quotes",
  "Domestic & Commercial",
  "Fully Certified Work",
];

export default function TrustBar() {
  return (
    <div className="border-y border-white/10 bg-surface">
      <Reveal y={12}>
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 py-6 sm:px-8">
          {badges.map((badge) => (
            <span
              key={badge}
              className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.18em] text-muted"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-3.5 w-3.5 text-accent"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
              </svg>
              {badge}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
