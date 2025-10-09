import { useEffect, useRef, useState } from "react";
import { Hammer, Ruler, Cog, Truck, Layers, ShoppingCart } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ icon, title, description, index }: ServiceCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
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
      className={`bg-card p-8 rounded-lg shadow-card hover:shadow-elegant transition-all duration-500 group cursor-pointer border border-border ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="mb-6 inline-block p-4 bg-primary/10 rounded-lg group-hover:bg-gradient-accent transition-all duration-300">
        <div className="text-primary group-hover:text-primary-foreground transition-colors duration-300">
          {icon}
        </div>
      </div>

      <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>

      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

interface ServicesProps {
  language: "EN" | "TH";
}

const Services = ({ language }: ServicesProps) => {
  const services =
    language === "EN"
      ? [
          {
            icon: <Hammer className="w-8 h-8 text-primary " />,
            title: "Construction",
            description:
              "Delivering high-quality construction projects with precision, safety, and sustainability at every stage.",
          },
          {
            icon: <Ruler className="w-8 h-8 text-primary" />,
            title: "Detailing",
            description:
              "Providing expert structural detailing and fabrication drawings for efficient and accurate builds.",
          },
          {
            icon: <Cog className="w-8 h-8 text-primary" />,
            title: "Engineering",
            description:
              "Offering complete engineering solutions from design to execution by experienced professionals.",
          },
          {
            icon: <Truck className="w-8 h-8 text-primary" />,
            title: "Rental",
            description:
              "Supplying modern and well-maintained equipment for construction and industrial operations.",
          },
          {
            icon: <Layers className="w-8 h-8 text-primary" />,
            title: "ST&T",
            description:
              "Providing specialized services in Steel, Technology, and Testing to ensure quality and reliability.",
          },
          {
            icon: <ShoppingCart className="w-8 h-8 text-primary" />,
            title: "Trading",
            description:
              "Distributing high-quality construction materials and industrial products across multiple sectors.",
          },
        ]
      : [
          {
            icon: <Hammer className="w-8 h-8 text-primary" />,
            title: "งานก่อสร้าง",
            description:
              "ดำเนินโครงการก่อสร้างคุณภาพสูงด้วยความแม่นยำ ปลอดภัย และยั่งยืนในทุกขั้นตอน",
          },
          {
            icon: <Ruler className="w-8 h-8 text-primary" />,
            title: "งานออกแบบรายละเอียด",
            description:
              "ให้บริการจัดทำแบบโครงสร้างและแบบผลิตชิ้นงานอย่างมืออาชีพเพื่อการก่อสร้างที่มีประสิทธิภาพ",
          },
          {
            icon: <Cog className="w-8 h-8 text-primary" />,
            title: "วิศวกรรม",
            description:
              "ให้บริการวิศวกรรมครบวงจร ตั้งแต่การออกแบบไปจนถึงการดำเนินงาน โดยทีมงานผู้เชี่ยวชาญ",
          },
          {
            icon: <Truck className="w-8 h-8 text-primary" />,
            title: "งานให้เช่า",
            description:
              "ให้บริการเช่าอุปกรณ์และเครื่องมือก่อสร้างที่ทันสมัยและดูแลรักษาอย่างดี",
          },
          {
            icon: <Layers className="w-8 h-8 text-primary" />,
            title: "ST&T",
            description:
              "ให้บริการเฉพาะด้านในงานเหล็ก เทคโนโลยี และการทดสอบ เพื่อคุณภาพและความน่าเชื่อถือสูงสุด",
          },
          {
            icon: <ShoppingCart className="w-8 h-8 text-primary" />,
            title: "งานเทรดดิ้ง",
            description:
              "จำหน่ายวัสดุก่อสร้างและผลิตภัณฑ์อุตสาหกรรมคุณภาพสูงให้กับหลายภาคส่วน",
          },
        ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {language === "EN" ? "Our Services" : "บริการของเรา"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === "EN"
              ? "Comprehensive solutions designed to transform your business and achieve sustainable success"
              : "โซลูชันที่ครอบคลุมออกแบบมาเพื่อเปลี่ยนแปลงธุรกิจและบรรลุความสำเร็จอย่างยั่งยืน"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
