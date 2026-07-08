import { featuredReviews, services } from "./data";
import { site } from "./site";

// Structured data for search engines and AI answer engines. Rendered once on
// the landing page.
export function buildJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "@id": `${site.url}/#business`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    description: `NAPIT-approved electrician based in ${site.base}, covering Newcastle upon Tyne and the North East of England. Domestic and commercial electrical projects including rewires, lighting design, EICR testing and smart home installation.`,
    image: `${site.url}/images/hero-garden.jpg`,
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.base,
      addressRegion: site.region,
      addressCountry: "GB",
    },
    areaServed: site.areas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating,
      bestRating: "10",
      worstRating: "0",
      reviewCount: site.reviewCount,
    },
    review: featuredReviews.map((review) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "10",
        bestRating: "10",
      },
      author: { "@type": "Person", name: `Customer in ${review.location}` },
      reviewBody: review.quote,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Electrical services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
    memberOf: [
      {
        "@type": "Organization",
        name: "NAPIT",
      },
      {
        "@type": "Organization",
        name: "Checked & Vetted",
        url: site.checkedAndVettedUrl,
      },
    ],
    sameAs: [site.checkedAndVettedUrl],
  };
}
