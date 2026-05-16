import { CrisisBar } from "@/components/CrisisBar";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Mission } from "@/components/Mission";
import { Problem } from "@/components/Problem";
import { About } from "@/components/About";
import { Method } from "@/components/Method";
import { Areas } from "@/components/Areas";
import { Instagram } from "@/components/Instagram";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { RevealMount } from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <CrisisBar />
      <Nav />
      <Hero copy={{ h1Pre: "Que tu mente crezca,", h1Em: "no que pese." }} />
      <TrustStrip />
      <Mission />
      <Problem />
      <About />
      <Method />
      <Areas />
      <Instagram />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
      <RevealMount />
    </>
  );
}
