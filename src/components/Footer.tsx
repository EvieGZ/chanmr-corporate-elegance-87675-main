import { Facebook, Phone, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/chanmr-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Services",
      links: [
        "Construction",
        "Mechanical Engineering",
        "Electrical Engineering",
        "System Design",
        "Maintenance",
        "Ongoing Projects",
        "Completed Projects",
        "Case Studies",
        "Innovation",
      ],
    },
    {
      title: "About Us",
      links: [
        "Company Profile",
        "Careers",
        "Contact Us",
        "Corporate Responsibility",
        "Investors",
        "Maintenance",
        "Ongoing Projects",
        "Completed Projects",
        "Case Studies",
        "Innovation",
      ],
    },
  ];

  const socials = [
    {
      icon: <Facebook size={18} />,
      href: "https://www.facebook.com/ChanMR.GROUP/",
    },
    {
      icon: <Youtube size={18} />,
      href: "https://www.youtube.com/channel/UCEq-QMRClwE9kVxWHc82hVw",
    },
    { icon: <Phone size={18} />, href: "#" },
  ];

  const bottomLinks = [
    "Privacy",
    "Terms",
    "Security",
    "Certifications",
    "Sitemap",
    "Cookie Preferences",
  ];

  return (
    <footer className="bg-white text-primary px-6 sm:px-12 md:px-24 lg:px-44 py-8 sm:py-12">
      <div className="container-custom">
        {/* Logo & Socials */}
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-6 sm:gap-0 -ml-0 sm:-ml-14 mb-8">
          <img src={logo} alt="CHANMR Logo" className="h-20 sm:h-32 w-auto" />
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="w-8 h-8 rounded-md bg-primary/10 hover:bg-accent hover:text-white flex items-center justify-center transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mb-10 w-full">
          {sections.map((section) => (
            <div key={section.title} className="w-full">
              <h4 className="text-lg font-semibold text-primary mb-3 relative block w-full">
                {section.title}
                <span className="absolute -bottom-1 left-0 w-10 h-[2px] bg-accent rounded-full"></span>
              </h4>
              <ul
                className={`mt-4 grid ${
                  section.links.length > 5 ? "grid-cols-2" : "grid-cols-1"
                } gap-2`}
              >
                {section.links.map((link) => (
                  <li key={link} className="break-inside-avoid">
                    <Link
                      to="#"
                      className="text-sm text-primary/70 hover:text-accent transition-colors inline-block"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider & Bottom Links */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap justify-center md:justify-start text-sm text-primary/70 gap-x-4 gap-y-2">
            {bottomLinks.map((link, index) => (
              <span key={index} className="flex items-center gap-2">
                <Link to="#" className="hover:text-accent transition-colors">
                  {link}
                </Link>
                {index < bottomLinks.length - 1 && (
                  <span className="text-primary/40">|</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-xs text-primary/60 text-center md:text-left">
          © {currentYear} CHANMR Co., Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
