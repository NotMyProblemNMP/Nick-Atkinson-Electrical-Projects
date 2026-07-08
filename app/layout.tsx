import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

const description = `NAPIT-approved electrician in ${site.base}, covering Newcastle upon Tyne and the North East. Rewires, lighting design, EICR testing, kitchen & bathroom electrics, garden lighting and smart home installation. Rated ${site.rating}/10 from ${site.reviewCount} verified Checked & Vetted reviews. Free quotes.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Electrician in North Shields & Newcastle`,
    template: `%s | ${site.name}`,
  },
  description,
  keywords: [
    "electrician North Shields",
    "electrician Newcastle upon Tyne",
    "electrician North East",
    "electrical contractor Tyne and Wear",
    "house rewire Newcastle",
    "EICR North Shields",
    "consumer unit upgrade",
    "garden lighting installation",
    "NAPIT approved electrician",
    "Nick Atkinson Electrical Projects",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Premium Electrical Services, North East England`,
    description,
    locale: "en_GB",
    images: [
      {
        url: "/images/hero-garden.jpg",
        width: 600,
        height: 450,
        alt: "Garden lighting installation by Nick Atkinson Electrical Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Electrician in North Shields & Newcastle`,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <body className={`${inter.variable} ${grotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
