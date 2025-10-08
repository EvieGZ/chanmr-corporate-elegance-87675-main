"use client";

import { motion } from "framer-motion";

interface FacebookPost {
  id: string;
  messageEN?: string;
  messageTH?: string;
  full_picture?: string;
  permalink_url: string;
  created_time: string;
}

interface InsightsSectionProps {
  language: "EN" | "TH";
}

const mockFacebookPosts: FacebookPost[] = [
  {
    id: "1",
    messageEN:
      "🏗️ Our latest project — a modern logistics warehouse — is almost complete! Stay tuned for the grand opening.",
    messageTH:
      "🏗️ โครงการล่าสุดของเรา — คลังสินค้าลอจิสติกส์สมัยใหม่ กำลังจะเสร็จสมบูรณ์แล้ว! รอติดตามวันเปิดตัวเร็ว ๆ นี้",
    created_time: "2025-10-07T09:00:00+0000",
    full_picture: "https://via.placeholder.com/600x400?text=Warehouse+Project",
    permalink_url: "https://facebook.com",
  },
  {
    id: "2",
    messageEN:
      "👷 Safety first! Our team conducts weekly inspections to ensure every project runs smoothly.",
    messageTH:
      "👷 ความปลอดภัยมาก่อนเสมอ! ทีมของเราตรวจสอบความปลอดภัยทุกสัปดาห์เพื่อให้ทุกโครงการดำเนินไปอย่างราบรื่น",
    created_time: "2025-10-06T14:30:00+0000",
    full_picture: "https://www.facebook.com/photo/?fbid=1352147173582907&set=pcb.1352150863582538",
    permalink_url: "https://facebook.com",
  },
  {
    id: "3",
    messageEN:
      "🌱 Building a greener future — we’re integrating eco-friendly materials in every project.",
    messageTH:
      "🌱 สร้างอนาคตที่ยั่งยืน — เรานำวัสดุที่เป็นมิตรต่อสิ่งแวดล้อมมาใช้ในทุกโครงการ",
    created_time: "2025-10-05T18:45:00+0000",
    full_picture: "https://via.placeholder.com/600x400?text=Green+Building",
    permalink_url: "https://facebook.com",
  },
];

export default function InsightsSection({ language }: InsightsSectionProps) {
  return (
    <section className="bg-secondary py-20 px-6 md:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* 🔹 Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="text-xl font-bold text-primary uppercase tracking-wide mb-2">
            {language === "EN" ? "Facebook Updates" : "อัปเดตจาก Facebook"}
          </p>
          <div className="border-[#F4C025] border-b-2 w-10"></div>
        </motion.div>

        {/* 🔸 Facebook Posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {mockFacebookPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              {/* Image */}
              {post.full_picture && (
                <div className="overflow-hidden">
                  <img
                    src={post.full_picture}
                    alt={language === "EN" ? post.messageEN : post.messageTH}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">
                  {new Date(post.created_time).toLocaleDateString(
                    language === "EN" ? "en-GB" : "th-TH",
                    {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    }
                  )}
                </p>
                <p className="text-gray-800 text-base leading-relaxed line-clamp-3">
                  {language === "EN" ? post.messageEN : post.messageTH}
                </p>

                <a
                  href={post.permalink_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 border border-[#F4C025] text-[#F4C025] font-medium text-sm px-4 py-2 rounded hover:bg-[#F4C025] hover:text-white transition-colors"
                >
                  {language === "EN" ? "Read More →" : "อ่านเพิ่มเติม →"}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
