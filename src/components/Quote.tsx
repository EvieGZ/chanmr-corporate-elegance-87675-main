import { useEffect, useRef, useState } from "react";

interface QuoteProps {
  language: "EN" | "TH";
}

const Quote = ({ language }: QuoteProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 relative bg-gradient-to-b from-[#f6f9fe] to-[#fef9ec]"
    >
      {/* Soft overlay for depth */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]" />

      <div
        className={`container relative z-10 mx-auto px-6 text-center transition-all duration-700 ease-smooth ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* 🔹 Section Title */}
        <div className="mb-8">
          <h3 className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">
            {language === "EN"
              ? "Vision of Chan MR Group"
              : "วิสัยทัศน์ของ Chan MR Group"}
          </h3>
        </div>

        {/* 🔸 Quote Section */}
        <blockquote className="max-w-3xl mx-auto relative">
          {/* Large decorative quotes */}
          <span className="absolute -top-10 left-8 text-8xl text-accent/30 select-none">
            “
          </span>
          <span className="absolute -bottom-14 -right-16 text-8xl text-accent/30 select-none">
            ”
          </span>

          {/* Quote Text */}
          <p className="text-3xl md:text-3xl font-semibold text-primary leading-relaxed whitespace-pre-line">
            {language === "EN"
              ? `We focus on building trust
partners at all levels with quality work,
deliver on time and after sales service.
Looking beyond to the future 
with modern technology,
awareness of the environment and working safely.`
              : `เรามุ่งเน้นในการสร้างความไว้วางใจ
และความร่วมมือกับพันธมิตรทุกระดับ
ด้วยงานคุณภาพ ส่งมอบตรงเวลา
พร้อมบริการหลังการขาย
มองไปสู่อนาคตด้วยเทคโนโลยีที่ทันสมัย
ใส่ใจสิ่งแวดล้อม และทำงานอย่างปลอดภัย`}
          </p>

          {/* Accent Line */}
          <div className="mt-12 w-24 h-[3px] bg-accent mx-auto rounded-full" />
        </blockquote>
      </div>
    </section>
  );
};

export default Quote;
