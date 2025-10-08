import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InteractiveNumbers from "@/components/InteractiveNumbers";
import Services from "@/components/Services";
import About from "@/components/About";
import News from "@/components/News";
import Footer from "@/components/Footer";
import VideoSection from "@/components/Video";
import FacebookSection from "@/components/Facebook";
import ConnectWithUs from "@/components/ConnectWithUs";
import Quote from "@/components/Quote";
import Carousel from "@/components/Carousel";
import FAQSection from "@/components/FAQ";
import CultureSection from "@/components/Culture";


const Index = () => {
  const [language, setLanguage] = useState<"EN" | "TH">("EN");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "TH" : "EN"));
  };

  return (
    <div className="min-h-screen">
      <Navbar language={language} onLanguageToggle={toggleLanguage} />
      <Hero language={language} />
      <VideoSection />
      <Quote language={language} />
      <InteractiveNumbers language={language} />
      <Carousel language={language} />
      <Services language={language} />
      <About language={language} />
      <News language={language} />
      <FacebookSection />
      <CultureSection language={language} />
      <FAQSection language={language} />
      <ConnectWithUs language={language} />
      <Footer />
    </div>
  );
};

export default Index;
