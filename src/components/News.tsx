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
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.02 }}
      className="bg-card rounded-xl w-full h-full shadow-card hover:shadow-elegant transition-all duration-500 overflow-hidden group cursor-pointer flex flex-col"
    >
      {/* 🔹 ภาพด้านบน */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* 🔹 เนื้อหาด้านล่าง */}
      <div className="flex flex-col justify-between flex-grow p-6">
        <div>
          <div className="flex items-center space-x-4 mb-3">
            <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full">
              {category}
            </span>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 mr-1" />
              {date}
            </div>
          </div>

          <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>

          <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
            {excerpt}
          </p>
        </div>

        <Button
          variant="link"
          className="p-0 h-auto text-primary group/btn self-start"
        >
          Read more
          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>
    </motion.div>
  );
};

interface NewsProps {
  language: "EN" | "TH";
}

const News = ({ language }: NewsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevCard = () => setActiveIndex((prev) => Math.max(prev - 1, 0));
  const nextCard = () => setActiveIndex((prev) => Math.min(prev + 1, 3));

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
      <div className="container px-6">
        {/* Header */}
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

        {/* Cards */}
        <div className="relative flex w-full h-[550px] overflow-hidden gap-4 rounded-2xl transition-all duration-500">
          {/* Prev */}
          <button
            onClick={prevCard}
            disabled={activeIndex <= 0}
            className={`absolute top-1/2 left-0 -translate-y-1/2 z-50 bg-black/40 text-white p-3 rounded-r-lg transition
            ${
              activeIndex <= 0
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-black/70"
            }`}
          >
            ‹
          </button>

          {/* Next */}
          <button
            onClick={nextCard}
            disabled={activeIndex >= articles.length - 3}
            className={`absolute top-1/2 right-0 -translate-y-1/2 z-50 bg-black/40 text-white p-3 rounded-l-lg transition
            ${
              activeIndex >= articles.length - 3
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-black/70"
            }`}
          >
            ›
          </button>

          {/* News Cards */}
          <div
            className="flex h-full transition-transform duration-200 ease-in-out gap-4"
            style={{
              transform: `translateX(-${activeIndex * 25}%)`,
            }}
          >
            {articles.map((article, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={article.title}
                  className={`flex-shrink-0 h-full transition-all duration-200 ease-in-out ${
                    isActive ? "w-1/2" : "w-1/4"
                  }`}
                >
                  <NewsCard {...article} index={index} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Watermark */}
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
