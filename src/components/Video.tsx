import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ArrowLeft } from "lucide-react";

import videoFile from "@/assets/main.mp4";
import Slide1 from "@/assets/slide1.png";
import Slide2 from "@/assets/slide2.png";
import Slide3 from "@/assets/slide3.png";
import Slide4 from "@/assets/slide4.png";

interface VideoSectionProps {
  language: "EN" | "TH";
}

export default function VideoSection({ language }: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: Slide1 },
    { image: Slide2 },
    { image: Slide3 },
    { image: Slide4 },
  ];

  useEffect(() => {
    if (isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  // 🩵 เพิ่มเนื้อหาแปลไทย-อังกฤษ
  const content = {
    EN: {
      sectionTitle: "Who we are",
      heading: "Delivering excellence through innovation, safety, and trust.",
      description:
        "At CHAN MR Group, we focus on precision, sustainability, and client satisfaction.",
      watchVideo: "Watch Video",
      backToSlides: "Back to Slides",
    },
    TH: {
      sectionTitle: "เราคือใคร",
      heading: "ส่งมอบความเป็นเลิศผ่านนวัตกรรม ความปลอดภัย และความไว้วางใจ",
      description:
        "ที่กลุ่มบริษัท CHAN MR เรามุ่งเน้นความแม่นยำ ความยั่งยืน และความพึงพอใจของลูกค้า",
      watchVideo: "ชมวิดีโอ",
      backToSlides: "กลับไปที่สไลด์",
    },
  };

  const t = content[language];

  return (
    <section className="py-16 bg-[#f6f9fe]/50">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Left Side */}
        <div className="col-span-1 flex flex-col justify-end px-8 lg:px-24">
          <div className="mb-6">
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
              {t.sectionTitle}
            </p>
            <div className="w-8 h-[2px] bg-[#F4C025] mt-1"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 leading-snug">
            {t.heading}
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8">{t.description}</p>

          {!isPlaying ? (
            <button
              onClick={() => setIsPlaying(true)}
              className="inline-flex items-center space-x-2 bg-[#F4C025] text-gray-900 font-medium px-6 py-3 rounded-full shadow hover:bg-[#e4b222] transition-all"
            >
              <Play className="w-5 h-5" />
              <span>{t.watchVideo}</span>
            </button>
          ) : (
            <button
              onClick={() => setIsPlaying(false)}
              className="inline-flex items-center space-x-2 text-gray-700 font-medium px-6 py-3 rounded-full border border-gray-400 hover:bg-gray-100 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>{t.backToSlides}</span>
            </button>
          )}
        </div>

        {/* Right Side */}
        <div className="col-span-2 bg-black relative overflow-hidden h-[500px]">
          <AnimatePresence mode="wait">
            {!isPlaying ? (
              <motion.div
                key="carousel"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-full"
              >
                <img
                  src={slides[currentSlide].image}
                  alt={`Slide ${currentSlide + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ) : (
              <motion.div
                key="video"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-full"
              >
                {/* <video
                  className="w-full h-full object-cover"
                  src={videoFile}
                  controls
                  autoPlay
                /> */}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
