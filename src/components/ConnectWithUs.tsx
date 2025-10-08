import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

interface ConnectWithUsProps {
  language: "EN" | "TH";
}

const ConnectWithUs = ({ language }: ConnectWithUsProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-secondary via-primary/60 to-primary">
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
            {language === "EN" ? "Connect with us" : "เชื่อมต่อกับเรา"}
          </h2>
          <p className="text-xl text-white max-w-2xl whitespace-pre-line mb-10">
            {language === "EN"
              ? "Planning a construction project or looking for a reliable contractor? We’d love to hear from you!"
              : `กำลังวางแผนโครงการก่อสร้าง หรือต้องการผู้รับเหมาที่ไว้ใจได้ใช่ไหมครับ?\nเรายินดีพูดคุยกับคุณเสมอ!`}
          </p>

          {/* 🔹 สองบรรทัดใหม่ (Let's talk / Subscribe) */}
          <div className="flex flex-col space-y-4">
            <a
              href="#contact"
              className="text-2xl font-base text-accent hover:text-accent-light hover:underline transition-colors flex items-center group"
            >
              {language === "EN" ? "Let’s talk" : "พูดคุยกับเรา"}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#newsletter"
              className="text-2xl font-base text-white/70 hover:text-white transition-colors flex items-center group"
            >
              {language === "EN"
                ? "Subscribe to our newsletter"
                : "สมัครรับจดหมายข่าวจากเรา"}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithUs;
