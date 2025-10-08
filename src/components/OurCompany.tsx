import { motion } from "framer-motion";
import construction from "@/assets/icon/construction.svg";
import detailing from "@/assets/icon/detailing.svg";
import engineering from "@/assets/icon/engineering.svg";
import rental from "@/assets/icon/rental.svg";
import stt from "@/assets/icon/st&t.svg";
import trading from "@/assets/icon/trading.svg";

interface AffiliatesSectionProps {
  language: "EN" | "TH";
}

export default function AffiliatesSection({ language }: Readonly<AffiliatesSectionProps>) {
  const affiliates = [
    { nameEN: "Construction", nameTH: "ก่อสร้าง", logo: construction },
    { nameEN: "Detailing", nameTH: "รายละเอียดโครงสร้าง", logo: detailing },
    { nameEN: "Engineering", nameTH: "วิศวกรรม", logo: engineering },
    { nameEN: "Rental", nameTH: "ให้เช่าเครื่องจักร", logo: rental },
    { nameEN: "ST&T", nameTH: "บริการเทคโนโลยี", logo: stt },
    { nameEN: "Trading", nameTH: "การค้า", logo: trading },
  ];

  const title = language === "EN" ? "Our Affiliated Companies" : "บริษัทในเครือของเรา";
  const subtitle =
    language === "EN"
      ? "Together with our partners and subsidiaries, we build a stronger future."
      : "รวมพันธมิตรและบริษัทในเครือของ Chan Mr Group ที่ร่วมสร้างสรรค์ความสำเร็จไปด้วยกัน";

  return (
    <section className="py-12 bg-[#fef9ec]/50">
      <div className="container mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-primary mb-4"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-600 mb-12"
        >
          {subtitle}
        </motion.p>

        {/* Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {affiliates.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-3 group transition-transform hover:scale-105"
            >
              <img
                src={company.logo}
                alt={language === "EN" ? company.nameEN : company.nameTH}
                className="h-16 w-auto grayscale group-hover:grayscale-0 hover:cursor-pointer transition-all duration-300"
              />
              <p className="text-sm font-medium text-accent">
                {language === "EN" ? company.nameEN : company.nameTH}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
