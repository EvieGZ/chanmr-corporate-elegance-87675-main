import { useState } from "react";
import { motion } from "framer-motion";
import feature01 from "@/assets/feature-01.jpg";
import feature02 from "@/assets/feature-02.jpg";
import feature03 from "@/assets/feature-03.jpg";
import feature04 from "@/assets/feature-04.jpg";

interface NumberItemProps {
  number: string;
  title: string;
  description: string;
  image: string;
}

const NumberItem = ({ number, title, description, image }: NumberItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer h-80 overflow-hidden rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${
          isHovered ? "scale-110 opacity-100" : "scale-100 opacity-0"
        }`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center p-8 z-10">
        <div
          className={`text-8xl font-bold mb-4 transition-all duration-500 ${
            isHovered
              ? "text-accent drop-shadow-glow"
              : "text-primary/20 group-hover:text-primary/30"
          }`}
          style={{
            WebkitTextStroke: isHovered ? "0" : "2px currentColor",
            WebkitTextFillColor: isHovered ? "currentColor" : "transparent",
          }}
        >
          {number}
        </div>

        <h3
          className={`text-2xl font-bold mb-3 transition-all duration-500 ${
            isHovered ? "text-primary-foreground" : "text-primary"
          }`}
        >
          {title}
        </h3>

        <p
          className={`text-base transition-all duration-500 ${
            isHovered
              ? "text-primary-foreground/90 opacity-100"
              : "text-muted-foreground opacity-80"
          }`}
        >
          {description}
        </p>
      </div>

      {/* Hover Glow Effect */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent pointer-events-none animate-glow" />
      )}
    </div>
  );
};

interface InteractiveNumbersProps {
  language: "EN" | "TH";
}

const InteractiveNumbers = ({ language }: InteractiveNumbersProps) => {
  const items =
    language === "EN"
      ? [
          {
            number: "01",
            title: "Digital Transformation",
            description:
              "Modernize your operations with cutting-edge digital solutions tailored to your business needs.",
            image: feature01,
          },
          {
            number: "02",
            title: "Business Innovation",
            description:
              "Drive growth through strategic innovation and next-generation business models.",
            image: feature02,
          },
          {
            number: "03",
            title: "Engineering Excellence",
            description:
              "World-class engineering solutions delivered by experienced professionals.",
            image: feature03,
          },
          {
            number: "04",
            title: "Technology Integration",
            description:
              "Seamlessly integrate advanced technologies into your existing infrastructure.",
            image: feature04,
          },
        ]
      : [
          {
            number: "01",
            title: "การเปลี่ยนแปลงดิจิทัล",
            description:
              "ทันสมัยการดำเนินงานด้วยโซลูชันดิจิทัลที่ออกแบบมาเพื่อธุรกิจของคุณ",
            image: feature01,
          },
          {
            number: "02",
            title: "นวัตกรรมทางธุรกิจ",
            description:
              "ขับเคลื่อนการเติบโตผ่านนวัตกรรมเชิงกลยุทธ์และโมเดลธุรกิจรุ่นใหม่",
            image: feature02,
          },
          {
            number: "03",
            title: "ความเป็นเลิศทางวิศวกรรม",
            description:
              "โซลูชันวิศวกรรมระดับโลกโดยผู้เชี่ยวชาญที่มีประสบการณ์",
            image: feature03,
          },
          {
            number: "04",
            title: "การบูรณาการเทคโนโลยี",
            description:
              "บูรณาการเทคโนโลยีขั้นสูงเข้ากับโครงสร้างพื้นฐานที่มีอยู่อย่างราบรื่น",
            image: feature04,
          },
        ];

  return (
    <section className="relative py-32 bg-secondary overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {language === "EN"
              ? "Our Core Capabilities"
              : "ความสามารถหลักของเรา"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === "EN"
              ? "Discover how we deliver exceptional value through our specialized expertise"
              : "ค้นพบว่าเราส่งมอบคุณค่าที่โดดเด่นผ่านความเชี่ยวชาญเฉพาะทางของเรา"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <NumberItem key={item.number} {...item} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-2 w-full -mb-4">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:text-[5rem] font-semibold text-white tracking-wide select-none uppercase leading-none"
        >
          {language === "EN" ? "Stories that inspire" : "แรงบรรดาลใจจากเรื่องราว"}
        </motion.h3>
      </div>
    </section>
  );
};

export default InteractiveNumbers;
