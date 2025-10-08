import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  language: "EN" | "TH";
}

const FAQSection = ({ language }: FAQProps) => {
  const faqs: FAQItem[] =
    language === "EN"
      ? [
          {
            question: "What services does Chan Mr Group provide?",
            answer:
              "We offer comprehensive construction services including civil, structural, and architectural works with a focus on quality and safety.",
          },
          {
            question: "How long has the company been operating?",
            answer:
              "Chan Mr Group has been operating for over 10 years, delivering trusted and professional construction solutions across Thailand.",
          },
          {
            question: "Do you handle both private and government projects?",
            answer:
              "Yes, we specialize in both private and public sector construction projects, ensuring compliance and high standards.",
          },
          {
            question: "How can I request a project quotation?",
            answer:
              "You can contact us through our website or email. Our team will respond promptly to discuss your project requirements.",
          },
        ]
      : [
          {
            question: "บริษัท Chan Mr Group ให้บริการด้านใดบ้าง?",
            answer:
              "เรามีบริการรับเหมาก่อสร้างครบวงจร ทั้งงานโยธา โครงสร้าง และสถาปัตยกรรม โดยเน้นคุณภาพและความปลอดภัยเป็นหลัก",
          },
          {
            question: "บริษัทเปิดดำเนินการมานานเท่าไรแล้ว?",
            answer:
              "Chan Mr Group ดำเนินธุรกิจมากว่า 10 ปี ด้วยความเชื่อมั่นและความเป็นมืออาชีพในโครงการก่อสร้างทั่วประเทศไทย",
          },
          {
            question: "รับงานภาครัฐและเอกชนหรือไม่?",
            answer:
              "รับทั้งโครงการภาครัฐและเอกชน โดยเรามีมาตรฐานในการทำงานตามข้อกำหนดและความปลอดภัยอย่างเคร่งครัด",
          },
          {
            question: "สามารถขอใบเสนอราคาได้อย่างไร?",
            answer:
              "สามารถติดต่อเราได้ผ่านทางเว็บไซต์หรืออีเมล ทีมงานจะติดต่อกลับโดยเร็วเพื่อพูดคุยรายละเอียดโครงการของคุณ",
          },
        ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {language === "EN"
                ? "Frequently Asked Questions about"
                : "คำถามที่พบบ่อยเกี่ยวกับ"}
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
              CHAN MR
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              {language === "EN"
                ? "Here are some of the most common questions from our clients about our construction services."
                : "รวมคำถามที่ลูกค้ามักสอบถามเกี่ยวกับบริการก่อสร้างของเรา"}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white shadow-card rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold text-primary focus:outline-none"
                >
                  {faq.question}
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180 text-accent" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4 text-muted-foreground text-base leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
