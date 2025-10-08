import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Handshake from "@/assets/slide/Handshake.jpg";
import Future from "@/assets/slide/future.jpg";
import Safety from "@/assets/slide/safety.avif";

interface CarouselProps {
  language: "EN" | "TH";
}

const Carousel = ({ language }: CarouselProps) => {
  const slides =
    language === "EN"
      ? [
          {
            title: "Trusted Construction Partner",
            text: "Delivering high-quality projects with professionalism and reliability.",
            image: Handshake,
          },
          {
            title: "Building for the Future",
            text: "Combining modern technology with sustainable practices.",
            image: Future,
          },
          {
            title: "Safety and Quality First",
            text: "Ensuring every project meets the highest safety and quality standards.",
            image: Safety,
          },
        ]
      : [
          {
            title: "พันธมิตรด้านการก่อสร้างที่คุณไว้วางใจ",
            text: "เรามุ่งมั่นส่งมอบงานคุณภาพสูง ด้วยความเป็นมืออาชีพและเชื่อถือได้",
            image: Handshake,
          },
          {
            title: "สร้างสรรค์เพื่ออนาคต",
            text: "ผสมผสานเทคโนโลยีสมัยใหม่กับแนวทางที่ยั่งยืน",
            image: Future,
          },
          {
            title: "ความปลอดภัยและคุณภาพมาก่อน",
            text: "เรายึดมั่นในมาตรฐานสูงสุดของความปลอดภัยและคุณภาพในทุกโครงการ",
            image: Safety,
          },
        ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      {/*  Section ข้อความก่อนสไลด์ */}
      <section className="py-8 bg-white px-6">
        {language === "EN" ? (
          <>
            <h3 className="text-3xl md:text-4xl font-semibold text-primary mb-4 animate-fade-in">
              Delivering progress for each customer
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              We work hand-in-hand with customers and our strategic partners to
              run and transform their essential systems.
            </p>
          </>
        ) : (
          <>
            <h3 className="text-3xl md:text-4xl font-semibold text-primary mb-4 animate-fade-in">
              สร้างความก้าวหน้าให้กับลูกค้าทุกคน
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              เราทำงานเคียงข้างลูกค้าและพันธมิตรเชิงกลยุทธ์เพื่อพัฒนาและเปลี่ยนแปลงระบบหลักของพวกเขาให้ดียิ่งขึ้น
            </p>
          </>
        )}
      </section>

      {/* Section Carousel (รูปภาพ) */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {/* Background image */}
            <img
              src={slides[current].image}
              alt={slides[current].title}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Text in center */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 text-accent animate-fade-in">
                {slides[current].title}
              </h2>
              <p className="text-lg md:text-xl max-w-2xl leading-relaxed">
                {slides[current].text}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                i === current
                  ? "bg-accent scale-125"
                  : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Carousel;
