import { useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InteractiveNumbers from "@/components/InteractiveNumbers";
import Services from "@/components/Services";
import About from "@/components/About";
import News from "@/components/News";
import Footer from "@/components/Footer";
import VideoSection from "@/components/Video";
import ConnectWithUs from "@/components/ConnectWithUs";
import Quote from "@/components/Quote";
import Carousel from "@/components/Carousel";
import FAQSection from "@/components/FAQ";
import CultureSection from "@/components/Culture";
import AffiliatesSection from "@/components/OurCompany";
import InsightsSection from "@/components/Facebook";

const Index = () => {
  const [language, setLanguage] = useState<"EN" | "TH">("EN");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "TH" : "EN"));
  };

  const refs = {
    whoWeAre: useRef<HTMLElement>(null),
    core: useRef<HTMLElement>(null),
    services: useRef<HTMLElement>(null),
    news: useRef<HTMLElement>(null),
    faq: useRef<HTMLElement>(null),
  };

  return (
    <div className="min-h-screen">
      <Navbar
        language={language}
        onLanguageToggle={toggleLanguage}
        sectionRefs={refs}
      />
      <Hero language={language} />

      <section ref={refs.whoWeAre}>
        <VideoSection />
        <Quote language={language} />
        <AffiliatesSection language={language} />
      </section>

      <section ref={refs.core}>
        <InteractiveNumbers language={language} />
        <Carousel language={language} />
      </section>

      <section ref={refs.services}>
        <Services language={language} />
      </section>
      <section ref={refs.news}>
        <About language={language} />
        <News language={language} />
        <InsightsSection language={language} />
        <CultureSection language={language} />
      </section>
      <section ref={refs.faq}>
        <FAQSection language={language} />
      </section>
      <ConnectWithUs language={language} />
      <Footer />
    </div>
  );
};

export default Index;
