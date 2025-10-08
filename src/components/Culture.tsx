import { Button } from "@/components/ui/button";
import teamImg from "@/assets/team.jpg"; // 🔸 เปลี่ยนเป็นรูปจริงที่หวานใช้

interface CultureSectionProps {
  language: "EN" | "TH";
}

const CultureSection = ({ language }: CultureSectionProps) => {
  return (
    <section className="w-full">
      <div className="grid md:grid-cols-2">
        {/* 🔹 Left: Image */}
        <div>
          <img
            src={teamImg}
            alt="Chan MR Team"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 🔸 Right: Color background */}
        <div className="bg-secondary/95 text-primary flex flex-col justify-center px-8 md:px-16 py-12 md:py-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {language === "EN" ? "Chan MR Group" : "ชาญ เอ็มอาร์ กรุ๊ป"}
          </h2>
          <p className="text-lg text-primary/90 mb-8 max-w-2xl">
            {language === "EN"
              ? "Committed to improving communities, empowering employees, and delivering projects that build a better future for Thailand."
              : "เรามุ่งมั่นพัฒนาองค์กร พนักงาน และสังคม พร้อมส่งมอบผลงานที่สร้างอนาคตที่ดีกว่าให้ประเทศไทย"}
          </p>

          {/* Divider */}
          <div className="border-t border-primary/30 my-8 w-full max-w-xl"></div>

          {/* Sub-sections */}
          <div className="space-y-10 max-w-2xl">
            {/* Culture */}
            <div>
              <h3 className="text-2xl font-semibold text-accent mb-2">
                {language === "EN" ? "Culture" : "วัฒนธรรมองค์กร"}
              </h3>
              <p className="text-primary/80 mb-4">
                {language === "EN"
                  ? "We foster teamwork, responsibility, and innovation to deliver excellence in every construction project."
                  : "เราส่งเสริมการทำงานเป็นทีม ความรับผิดชอบ และนวัตกรรม เพื่อความเป็นเลิศในทุกโครงการก่อสร้าง"}
              </p>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-white hover:text-primary"
              >
                {language === "EN" ? "Learn more" : "ดูเพิ่มเติม"}
              </Button>
            </div>

            {/* Careers */}
            <div>
              <h3 className="text-2xl font-semibold text-accent mb-2">
                {language === "EN" ? "Careers" : "ร่วมงานกับเรา"}
              </h3>
              <p className="text-primary/80 mb-4">
                {language === "EN"
                  ? "Join our growing team of engineers, architects, and project managers dedicated to building Thailand’s future."
                  : "ร่วมเป็นส่วนหนึ่งกับทีมวิศวกร สถาปนิก และผู้จัดการโครงการของเรา เพื่อสร้างอนาคตประเทศไทยไปด้วยกัน"}
              </p>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-white hover:text-primary"
              >
                {language === "EN" ? "Explore jobs" : "ดูตำแหน่งงาน"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;
