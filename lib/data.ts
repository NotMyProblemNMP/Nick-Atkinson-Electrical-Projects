export type Service = {
  title: string;
  description: string;
  image: string;
  alt: string;
  tags: string[];
  /** Optional object-position override for how the photo is cropped. */
  imagePosition?: string;
};

export const services: Service[] = [
  {
    title: "Lighting Design & Installation",
    description:
      "Statement chandeliers, spotlights, LED features and accent lighting, designed and installed to transform how every room looks and feels.",
    image: "/images/service-lighting.jpg",
    alt: "Statement chandelier installed in a period living room with arched windows",
    tags: ["Feature lighting", "Spotlights", "LED design"],
    imagePosition: "center 30%",
  },
  {
    title: "Garden & Outdoor Lighting",
    description:
      "Architectural garden lighting, patio and decking schemes, outdoor sockets and garden room power, built to withstand the North East weather.",
    image: "/images/service-garden.jpg",
    alt: "Architectural outdoor wall lighting on timber cladding at dusk",
    tags: ["Garden schemes", "Outdoor power", "Garden rooms"],
  },
  {
    title: "Kitchen & Bathroom Electrics",
    description:
      "Under-cabinet lighting, induction hob and appliance circuits, extractor fans, shaver points and illuminated mirrors, all installed safely in wet zones.",
    image: "/images/service-kitchen-bathroom.jpg",
    alt: "Induction hob and under-cabinet LED lighting in a modern kitchen",
    tags: ["Kitchen circuits", "Bathroom zones", "Mirrors & fans"],
  },
  {
    title: "Smart Home, CCTV & Media Walls",
    description:
      "Ring doorbells, CCTV systems, smart thermostats and backlit media walls. Modern technology wired in properly, not plugged in as an afterthought.",
    image: "/images/service-smart.jpg",
    alt: "Backlit media wall with recessed TV and LED accent lighting",
    tags: ["CCTV & doorbells", "Smart heating", "Media walls"],
  },
  {
    title: "Full & Partial Rewires",
    description:
      "Complete house rewires, partial rewires and consumer unit upgrades, planned around your home, chased in cleanly and finished with full certification.",
    image: "/images/service-rewires.jpg",
    alt: "Room mid-renovation during a full house rewire in Newcastle",
    tags: ["House rewires", "Consumer units", "Surge protection"],
  },
  {
    title: "Inspection, Testing & Certification",
    description:
      "EICR condition reports, landlord safety certificates and electrical compliance checks, carried out thoroughly and documented properly.",
    image: "/images/service-testing.jpg",
    alt: "Freshly certified room with recessed downlights",
    tags: ["EICR reports", "Landlord certs", "Compliance"],
  },
];

export type Review = {
  quote: string;
  job: string;
  location: string;
  date: string;
};

// Verified customer reviews from Checked & Vetted (all rated 10/10).
export const featuredReviews: Review[] = [
  {
    quote:
      "Nick couldn't have been any more impressive. Gave a number of options for moving forward including cheaper fixes, so in no way just trying to make money. Explained everything he was doing and completed earlier than expected. Genuinely great guy and would highly recommend.",
    job: "Full rewire of a 3-bed house with spotlights, outside lights and kitchen wiring",
    location: "Wallsend",
    date: "April 2026",
  },
  {
    quote:
      "Nick was very helpful and professional throughout, offering solid advice on the best way forward with my electrical issue. Nick seems to really care about the service he provides to customers and I would highly recommend him to others.",
    job: "Downstairs rewire with new surge protection device",
    location: "Blyth",
    date: "January 2026",
  },
  {
    quote:
      "Nick is always very reliable and professional. The work he does is always of a very high standard. We have used him before for a bigger job and six years in have had no problems.",
    job: "Repeat customer over six years",
    location: "Bedlington",
    date: "March 2026",
  },
];

export const moreReviews: Review[] = [
  {
    quote:
      "Very professional service. Came in on price. Would highly recommend Nick. Love supporting North East trades men and women.",
    job: "Consumer unit upgrade, bathroom cabinet and Ring camera",
    location: "Wallsend",
    date: "April 2026",
  },
  {
    quote:
      "Nick is a nice genuine person. He texted me before coming to make sure all was well, and turned up promptly. He worked quickly and efficiently and tidied up after himself. An excellent job on my lights and providing a certificate of electrical compliance.",
    job: "Lighting and electrical compliance certificate",
    location: "Whitley Bay",
    date: "April 2026",
  },
  {
    quote:
      "The work was carried out skilfully and cleanly and we were very pleased with the results. Some time later we had a flashing on some of the spotlights that were fitted. Nick came and changed them free of charge.",
    job: "Multiple jobs inside and outside the house",
    location: "Corbridge",
    date: "March 2026",
  },
  {
    quote:
      "Nick was thorough and very helpful. He answered all my queries and was very tidy. Overall I am very happy with the work.",
    job: "Electrical safety check and socket relocation",
    location: "North Shields",
    date: "February 2026",
  },
  {
    quote:
      "Nick is very punctual, clean and respectful, and prices are discussed before the job. I have no hesitation in recommending him to anyone.",
    job: "Two years of work: hob, spotlights, sockets and switches",
    location: "Newcastle upon Tyne",
    date: "January 2026",
  },
  {
    quote:
      "Nick was very professional. Punctual. Did a fantastic job and I'd highly recommend him to provide any electrical installations or work in your home or business. 100% satisfied.",
    job: "Illuminated anti-fog bathroom mirror with new power supply",
    location: "Newcastle",
    date: "January 2026",
  },
  {
    quote:
      "Work carried out as requested. Nice friendly person to deal with and keeps in touch. Highly recommended.",
    job: "Moving, replacing and adding sockets and switches",
    location: "Whitley Bay",
    date: "January 2026",
  },
];

export const processSteps = [
  {
    title: "Get in touch",
    description:
      "Call Nick directly or send a quick enquiry. You'll speak to the electrician doing the work, not a call centre.",
  },
  {
    title: "Free, no-obligation quote",
    description:
      "Nick visits, talks through what you want and quotes clearly, including cheaper options where they exist. The price is agreed before any work starts.",
  },
  {
    title: "The work, done properly",
    description:
      "Turns up when arranged, keeps you informed throughout and treats your home with respect, with every job carried out from start to completion.",
  },
  {
    title: "Handover & certification",
    description:
      "The site is left clean and tidy, everything is tested, and you receive the certification your insurance and peace of mind depend on.",
  },
];

export const scoreBreakdown = [
  { label: "Workmanship", score: "10" },
  { label: "Timekeeping", score: "10" },
  { label: "Overall impression", score: "10" },
  { label: "Initial impression", score: "9.98" },
  { label: "Cleanliness", score: "9.98" },
  { label: "Value for money", score: "9.98" },
];
