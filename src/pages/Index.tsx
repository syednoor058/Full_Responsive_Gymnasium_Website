import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Experience } from "@/components/sections/Experience";
import { Marquee } from "@/components/sections/Marquee";
import { Statistics } from "@/components/sections/Statistics";
import { Philosophy } from "@/components/sections/Philosophy";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonial } from "@/components/sections/Testimonial";
import { FAQ } from "@/components/sections/FAQ";
import { FreeTrial } from "@/components/sections/FreeTrial";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <Experience />
      <Marquee />
      <Statistics />
      <Philosophy />
      <Gallery />
      <Testimonial />
      <FAQ />
      <FreeTrial />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
