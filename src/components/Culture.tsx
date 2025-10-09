import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

// 🔹 ใส่ภาพหลายภาพ
import team1 from "@/assets/slide5.jpg";
import team2 from "@/assets/slide6.png";
import team3 from "@/assets/slide7.png";
import team4 from "@/assets/slide8.jpg";
import team5 from "@/assets/slide9.jpg";
import team6 from "@/assets/slide10.jpg";
import team7 from "@/assets/slide11.jpg";

interface CultureSectionProps {
  language: "EN" | "TH";
}

const CultureSection = ({ language }: CultureSectionProps) => {
  // 🔸 รายการภาพที่จะวนสไลด์
  const images = [team1, team2, team3, team4, team5, team6, team7];

  const [current, setCurrent] = useState(0);

  // 🔸 สไลด์อัตโนมัติทุก 4 วินาที
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

   return (
    <section className="w-full flex flex-col md:flex-row">
      {/* 🔹 Left: Image Carousel */}
      <div className="relative w-full md:w-2/6 md:h-auto overflow-hidden">
        <AnimatePresence>
          <motion.img
            key={images[current]}
            src={images[current]}
                alt={`Slide ${current + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* 🔸 Middle: Brand Block */}
      <div className="bg-primary flex items-center justify-center text-white w-full md:w-[27%] h-[150px] md:h-auto">
        <h2 className="text-5xl md:text-7xl font-medium tracking-wide text-center">
          {language === "EN" ? "CHAN MR" : "ชาญเอ็มอาร์"}
        </h2>
      </div>

      {/* 🔸 Right: Content */}
      <div className="bg-white text-primary flex flex-col justify-center px-8 md:px-16 py-12 md:py-20 w-full md:w-[35%]">
        <div className="max-w-md mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            {language === "EN" ? "Culture" : "วัฒนธรรมองค์กร"}
          </h2>
          <p className="text-lg text-primary/80 mb-8">
            {language === "EN"
              ? "We foster teamwork, responsibility, and innovation to deliver excellence in every construction project."
              : "เราส่งเสริมการทำงานเป็นทีม ความรับผิดชอบ และนวัตกรรม เพื่อความเป็นเลิศในทุกโครงการก่อสร้าง"}
          </p>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white mb-16"
          >
            {language === "EN" ? "Learn more" : "ดูเพิ่มเติม"}
          </Button>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            {language === "EN" ? "Careers" : "ร่วมงานกับเรา"}
          </h2>
          <p className="text-lg text-primary/80 mb-8">
            {language === "EN"
              ? "Join our growing team of engineers, architects, and project managers dedicated to building Thailand’s future."
              : "ร่วมเป็นส่วนหนึ่งกับทีมวิศวกร สถาปนิก และผู้จัดการโครงการของเรา เพื่อสร้างอนาคตประเทศไทยไปด้วยกัน"}
          </p>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            {language === "EN" ? "Explore jobs" : "ดูตำแหน่งงาน"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;