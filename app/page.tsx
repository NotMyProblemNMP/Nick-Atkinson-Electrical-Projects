import About from "@/components/About";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MidCTA from "@/components/MidCTA";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import TrustBar from "@/components/TrustBar";
import WhyChooseUs from "@/components/WhyChooseUs";
import { buildJsonLd } from "@/lib/jsonld";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()) }}
      />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyChooseUs />
        <MidCTA />
        <Process />
        <About />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
