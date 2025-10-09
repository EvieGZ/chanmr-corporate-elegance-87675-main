import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import img1 from "@/assets/news/1.jpg";
import img2 from "@/assets/news/2.jpg";
import img3 from "@/assets/news/3.jpg";
import img4 from "@/assets/news/4.jpg";
import img5 from "@/assets/news/5.jpg";
import img6 from "@/assets/news/6.jpg";

interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  index: number;
  image: string;
}

const NewsCard = ({
  title,
  excerpt,
  date,
  category,
  index,
  image,
}: NewsCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 150);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`bg-card rounded-lg w-full h-full shadow-card hover:shadow-elegant transition-all duration-500 overflow-hidden group cursor-pointer ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-3">
          <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full">
            {category}
          </span>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 mr-1" />
            {date}
          </div>
        </div>

        <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-muted-foreground mb-4 leading-relaxed">{excerpt}</p>

        <Button variant="link" className="p-0 h-auto text-primary group/btn">
          Read more
          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

interface NewsProps {
  language: "EN" | "TH";
}

const News = ({ language }: NewsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevCard = () => {
    setActiveIndex(activeIndex - 1);
  };

  const nextCard = () => {
    setActiveIndex(activeIndex + 1);
  };

  const isMobile = () => window.innerWidth <= 768;

  const articles =
    language === "EN"
      ? [
          {
            title: "Chanmr Wins Excellence Award for Digital Transformation",
            excerpt:
              "Recognition for outstanding achievement in helping Thai enterprises modernize their operations through innovative digital solutions.",
            date: "May 15, 2024",
            category: "Awards",
            image: img1,
          },
          {
            title: "New Partnership Expands ASEAN Market Presence",
            excerpt:
              "Strategic collaboration strengthens our regional consulting capabilities and brings world-class expertise to Southeast Asian businesses.",
            date: "April 28, 2024",
            category: "Partnership",
            image: img2,
          },
          {
            title: "Sustainability in Thai Manufacturing: A 2024 Outlook",
            excerpt:
              "Explore key trends and strategies for integrating sustainable practices into manufacturing operations across Thailand.",
            date: "April 12, 2024",
            category: "Insights",
            image: img3,
          },
          {
            title: "New Project Launch: Green Construction Initiative",
            excerpt:
              "A new step toward sustainable design and eco-friendly construction for urban developments in Bangkok.",
            date: "June 01, 2024",
            category: "Project",
            image: img4,
          },
          {
            title: "Employee Spotlight: Meet Our Engineering Team",
            excerpt:
              "Behind every great structure is a passionate team — get to know the engineers who make it happen.",
            date: "June 15, 2024",
            category: "People",
            image: img5,
          },
          {
            title: "Digital Engineering Trends 2025",
            excerpt:
              "Discover how AI and smart design tools are transforming the future of construction management.",
            date: "July 10, 2024",
            category: "Tech",
            image: img6,
          },
        ]
      : [
          {
            title: "Chanmr ได้รับรางวัลความเป็นเลิศด้านการเปลี่ยนแปลงดิจิทัล",
            excerpt:
              "การยอมรับในความสำเร็จที่โดดเด่นในการช่วยองค์กรไทยปรับปรุงการดำเนินงานผ่านโซลูชันดิจิทัลที่เป็นนวัตกรรม",
            date: "15 พฤษภาคม 2567",
            category: "รางวัล",
            image: img1,
          },
          {
            title: "ความร่วมมือใหม่ขยายการแสดงตนในตลาดอาเซียน",
            excerpt:
              "ความร่วมมือเชิงกลยุทธ์เสริมสร้างความสามารถในการให้คำปรึกษาในภูมิภาคและนำความเชี่ยวชาญระดับโลกมาสู่ธุรกิจในเอเชียตะวันออกเฉียงใต้",
            date: "28 เมษายน 2567",
            category: "ความร่วมมือ",
            image: img2,
          },
          {
            title: "ความยั่งยืนในการผลิตไทย: มุมมอง 2567",
            excerpt:
              "สำรวจแนวโน้มและกลยุทธ์หลักในการบูรณาการแนวทางปฏิบัติที่ยั่งยืนในการดำเนินงานการผลิตทั่วประเทศไทย",
            date: "12 เมษายน 2567",
            category: "ข้อมูลเชิงลึก",
            image: img3,
          },
          {
            title: "เปิดตัวโครงการ Green Construction Initiative",
            excerpt:
              "ก้าวใหม่สู่การออกแบบและการก่อสร้างที่เป็นมิตรต่อสิ่งแวดล้อม สำหรับการพัฒนาเมืองในอนาคต",
            date: "1 มิถุนายน 2567",
            category: "โครงการ",
            image: img4,
          },
          {
            title: "เบื้องหลังทีมวิศวกรของเรา",
            excerpt:
              "ทุกโครงสร้างที่ยิ่งใหญ่ มาจากทีมงานที่มุ่งมั่น — มาทำความรู้จักกับทีมวิศวกรของเรากันเถอะ",
            date: "15 มิถุนายน 2567",
            category: "บุคลากร",
            image: img5,
          },
          {
            title: "เทรนด์วิศวกรรมดิจิทัล 2025",
            excerpt:
              "ค้นพบว่า AI และเครื่องมือออกแบบอัจฉริยะกำลังเปลี่ยนอนาคตของการจัดการก่อสร้างอย่างไร",
            date: "10 กรกฎาคม 2567",
            category: "เทคโนโลยี",
            image: img6,
          },
        ];

  return (
    <section className="relative pb-24 pt-14 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-6 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {language === "EN"
              ? "Latest News & Insights"
              : "ข่าวสารและข้อมูลเชิงลึกล่าสุด"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            {language === "EN"
              ? "Stay informed with our latest updates, industry insights, and success stories"
              : "รับทราบข้อมูลล่าสุด ข้อมูลเชิงลึกในอุตสาหกรรม และเรื่องราวความสำเร็จของเรา"}
          </p>
        </div>

        <div className="relative flex w-full mx-auto h-[500px] overflow-hidden gap-2 rounded-2xl transition-all duration-500">
          <button
            onClick={prevCard}
            disabled={activeIndex <= 0} // disable at the start
            className={`absolute top-12 right-0 z-50 bg-black/50 text-white p-3 transition
      ${
        activeIndex <= 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-black/70"
      }`}
          >
            ‹
          </button>
          <button
            onClick={nextCard}
            disabled={
              isMobile()
                ? activeIndex >= articles.length - 1
                : activeIndex >= articles.length - 3
            }
            className={`absolute top-0 right-0 z-50 bg-black/50 text-white p-3 transition
    ${
      isMobile()
        ? activeIndex >= articles.length - 1
          ? "opacity-30 cursor-not-allowed"
          : "hover:bg-black/70"
        : activeIndex >= articles.length - 3
        ? "opacity-30 cursor-not-allowed"
        : "hover:bg-black/70"
    }`}
          >
            ›
          </button>

          <div
            className="flex h-full transition-transform ease-in-out"
            style={{
              transform: `translateX(-${activeIndex * 25}%)`, // slide left by 25% per card
              transitionDuration: "1500ms",
            }}
          >
            {articles.map((article, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={article.title}
                  className={`flex-shrink-0 h-full transition-all ease-in-out ${
                    index !== articles.length - 1 && "pr-2"
                  } r-2 ${isActive ? "w-1/2" : "w-1/4"}`}
                  style={{
                    transformOrigin: "left",
                    transitionDuration: "1500ms",
                  }}
                >
                  <NewsCard {...article} index={index} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 🔹 Watermark */}
      <div className="absolute bottom-0 left-0 w-full -mb-4">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:text-[5rem] font-semibold text-secondary tracking-wide select-none uppercase leading-none"
        >
          {language === "EN" ? "Our highlight news" : "ข่าวเด่นของเรา"}
        </motion.h3>
      </div>
    </section>
  );
};

export default News;
