import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  intro,
}: SectionHeadingProps) {
  return (
    <Reveal className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[clamp(2.75rem,3.2vw,3.75rem)] lg:leading-[1.1]">
        {title}
      </h2>
      <div className="keyline mt-6 w-24" />
      {intro ? (
        <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
