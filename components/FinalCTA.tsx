"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

// The form sends in the background, with no email client involved.
// Delivery service, in order of preference:
// 1. Web3Forms, when NEXT_PUBLIC_WEB3FORMS_KEY is set in Vercel
//    (create a free key at https://web3forms.com pointed at Nick's inbox).
// 2. FormSubmit (https://formsubmit.co), keyless: it emails site.email
//    directly. The first submission triggers a one-click activation email
//    to that address.
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

type Status = "idle" | "sending" | "sent" | "error";

export default function FinalCTA() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const message = String(data.get("message") ?? "");

    setStatus("sending");
    try {
      const res = WEB3FORMS_KEY
        ? await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              access_key: WEB3FORMS_KEY,
              subject: `Website enquiry from ${name}`,
              name,
              email,
              phone,
              message,
            }),
          })
        : await fetch(`https://formsubmit.co/ajax/${site.email}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              _subject: `Website enquiry from ${name}`,
              name,
              email,
              phone,
              message,
            }),
          });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 left-1/2 h-[32rem] w-[56rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]"
      />
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
              Get in touch
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Ready when you are. Call Nick today.
            </h2>
            <div className="keyline mt-6 w-24" />
            <p className="mt-6 max-w-md leading-relaxed text-muted">
              Free quotes on every job, big or small, domestic or commercial,
              anywhere in the North East.
            </p>

            <a
              href={`tel:${site.phone}`}
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-semibold text-background transition-all hover:bg-accent-strong hover:shadow-[0_0_40px_rgba(245,185,66,0.45)]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5 transition-transform group-hover:rotate-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.6 3h2.2l1.4 4.2-1.8 1.4a13.4 13.4 0 0 0 6 6l1.4-1.8L20 14.2v2.2A2.6 2.6 0 0 1 17.4 19 14.9 14.9 0 0 1 5 6.6 2.6 2.6 0 0 1 6.6 3Z"
                />
              </svg>
              Call Nick
            </a>

            <div className="mt-10 space-y-3 text-sm text-muted">
              <p className="flex items-center gap-3">
                <MailIcon />
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {site.email}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <PinIcon />
                {site.base}, {site.region}, covering all over the North East
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            {status === "sent" ? (
              <div className="flex min-h-[28rem] flex-col items-center justify-center rounded-3xl border border-accent/40 bg-surface p-8 text-center shadow-[0_0_44px_rgba(245,185,66,0.14)] sm:p-10">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/15">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    className="h-8 w-8 text-accent"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m5 13 4 4L19 7"
                    />
                  </svg>
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">
                  Enquiry sent!
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
                  Thank you. Your enquiry is on its way and Nick will be in
                  touch soon.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-sm font-semibold text-accent transition-colors hover:text-accent-strong"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/10 bg-surface p-8 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_44px_rgba(245,185,66,0.14)] sm:p-10"
            >
              <h3 className="font-display text-xl font-semibold text-foreground">
                Prefer to email? Send a brief enquiry.
              </h3>
              <p className="mt-2 text-sm text-muted">
                A few details and Nick will get back to you.
              </p>

              <div className="mt-7 space-y-5">
                <Field label="Your name" name="name" type="text" required />
                <Field
                  label="Email address"
                  name="email"
                  type="email"
                  required
                />
                <Field label="Phone number" name="phone" type="tel" required />
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    What do you need doing?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="e.g. EICR for a rental flat in Whitley Bay"
                    className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:border-accent/60 focus:outline-none focus:ring-1 focus:ring-accent/40"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-7 w-full rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-background transition-all hover:bg-accent-strong disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send enquiry"}
              </button>

              {status === "error" ? (
                <p className="mt-4 text-center text-sm text-red-400">
                  Something went wrong. Please call {site.phoneDisplay}{" "}
                  instead.
                </p>
              ) : null}
            </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 text-sm text-foreground focus:border-accent/60 focus:outline-none focus:ring-1 focus:ring-accent/40"
      />
    </div>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4 text-accent"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path strokeLinecap="round" d="m4 7 8 6 8-6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4 text-accent"
    >
      <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
