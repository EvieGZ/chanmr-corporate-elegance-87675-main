import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

interface HeroProps {
  language: "EN" | "TH";
}

const Hero = ({ language }: HeroProps) => {
  const content =
    language === "EN"
      ? {
          headline: "Transform Your Business",
          subheadline: "Excellence in Thai",
          description:
            "Leading corporate consulting and engineering solutions that drive innovation and sustainable growth across Thailand and beyond.",
          cta: "Discover Our Solutions",
          secondaryCta: "Contact Us",
        }
      : {
          headline: "เปลี่ยนธุรกิจของคุณ",
          subheadline: "ความเป็นเลิศในรูปแบบไทย",
          description:
            "บริการที่ปรึกษาองค์กรและวิศวกรรมชั้นนำที่ขับเคลื่อนนวัตกรรมและการเติบโตอย่างยั่งยืนทั่วประเทศไทยและต่างประเทศ",
          cta: "ค้นพบโซลูชันของเรา",
          secondaryCta: "ติดต่อเรา",
        };

  return (
    <section className="relative lg:pt-0 pt-10 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${
            typeof window !== "undefined" ? window.scrollY * 0.5 : 0
          }px) scale(1.05)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
        <div className="max-w-4xl animate-fade-in">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent font-semibold rounded-full text-sm backdrop-blur-sm">
              {content.subheadline}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            {content.headline}
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-2xl leading-relaxed">
            {content.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold shadow-glow hover:shadow-glow transition-all duration-300 group"
            >
              {content.cta}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary font-semibold backdrop-blur-sm"
            >
              {content.secondaryCta}
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
