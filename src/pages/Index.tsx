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
      <InteractiveNumbers language={language} />
      <Services language={language} />
      <About language={language} />
      <News language={language} />
      <FacebookSection />
      <Footer />
    </div>
  );
};

export default Index;
