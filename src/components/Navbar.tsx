import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/chanmr-logo.png";

interface NavbarProps {
  language: "EN" | "TH";
  onLanguageToggle: () => void;
}

const Navbar = ({ language, onLanguageToggle }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [showSecondary, setShowSecondary] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hideTopNav, setHideTopNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // ถ้ามี dropdown เปิดอยู่ และคลิกนอก dropdown
      if (
        activeMenu &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveMenu(null); // ปิดเมนู
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeMenu]);

  const toggleMenu = (menu: string) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScrollY && current > 60) {
        setHideTopNav(true);
      } else if (current < lastScrollY) {
        setHideTopNav(false);
      }

      setScrolled(current > 50);
      setShowSecondary(current > 100);
      setLastScrollY(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const mainMenuItems =
    language === "EN"
      ? ["Home", "About Us", "Services", "Projects", "Contact"]
      : ["หน้าแรก", "เกี่ยวกับเรา", "บริการ", "โครงการ", "ติดต่อเรา"];

  const secondaryMenuItems =
    language === "EN"
      ? [
          "Who we are",
          "How we help",
          "Customer stories",
          "Our expertise",
          "Q&A",
        ]
      : [
          "เราคือใคร",
          "เราช่วยอย่างไร",
          "เรื่องราวลูกค้า",
          "ความเชี่ยวชาญ",
          "คำถาม",
        ];

  const topNav = [
    { name: language === "EN" ? "Jobs" : "ร่วมงานกับเรา", path: "#" },
    { name: language === "EN" ? "E-brochure" : "อีโบรชัวร์", path: "#" },
    {
      name: language === "EN" ? "TH" : "EN",
      onClick: onLanguageToggle,
    },
  ];

  return (
    <>
      {/* 🌤️ Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm"
            : "bg-background/95 backdrop-blur-sm"
        } ${hideTopNav ? "h-24" : "h-36"}`}
      >
        {/* 🔹 TopNav */}
        <div
          className={`flex justify-end text-xs text-primary py-2 px-6 space-x-6 transition-all duration-500 transform-gpu ${
            hideTopNav
              ? "-translate-y-[100%] opacity-0 pointer-events-none"
              : "translate-y-0 opacity-100"
          }`}
        >
          {topNav.map((item) =>
            item.onClick ? (
              <button
                key={item.name}
                onClick={item.onClick}
                className="hover:text-accent transition-colors duration-300"
              >
                {item.name}
              </button>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                className="hover:text-accent transition-colors duration-300"
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        {/* 🔸 Main Navbar */}
        <div
          className={`px-2 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            hideTopNav ? "translate-y-[-32px]" : "translate-y-0"
          }`}
        >
          <div className="flex items-center container mx-auto justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center -mx-12">
              <img src={logo} alt="CHANMR Logo" className="h-36 w-auto" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8 ml-auto">
              {mainMenuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => toggleMenu(item)}
                  className={`text-foreground hover:text-primary transition-colors duration-300 font-medium ${
                    activeMenu === item ? "underline text-primary" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>

          {/* 🔻 Active Dropdown Menu */}
          {activeMenu && (
            <div
              ref={dropdownRef}
              className={`absolute left-0 ${
                hideTopNav ? "top-[140px]" : "top-[112px]"
              } w-full bg-white shadow-xl grid grid-cols-3 gap-8 z-50 animate-fade-in`}
            >
              {/* Column 1 */}
              <div className="p-8 bg-slate-50">
                <h3 className="text-2xl font-semibold mb-4">Lorem ipsum</h3>
                <ul className="space-y-3 text-lg">
                  <li>Lorem ipsum is placeholder</li>
                  <li>Lorem ipsum is placeholder text commonly</li>
                  <li>Lorem ipsum is placeholder text</li>
                </ul>
              </div>

              {/* Column 2 */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-6">
                  Lorem ipsum is placeholder text commonly
                </h3>
                <ul className="space-y-3 text-lg">
                  <li>Lorem ipsum</li>
                  <li>Lorem</li>
                  <li>Lorem ipsum is placeholder</li>
                  <li>Lorem ipsum is</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum is</li>
                  <li>Lorem ipsum is</li>
                </ul>
              </div>

              {/* Column 3 */}
              <div className="m-8 ml-0 pl-8 border-l">
                <h3 className="text-2xl font-semibold mb-4">Lorem ipsum</h3>
                <div className="space-y-6 text-lg">
                  <div>
                    <p className="font-medium">Lorem ipsum</p>
                    <p className="text-gray-500">
                      Lorem ipsum is placeholder text commonly used in design
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Lorem ipsum is placeholder</p>
                    <p className="text-gray-500">
                      Lorem ipsum is placeholder text commonly used in graphics
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Lorem ipsum is</p>
                    <p className="text-gray-500">
                      Lorem ipsum is placeholder text commonly used in UI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 🔻 Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 animate-fade-in">
              <div className="flex flex-col space-y-3">
                {mainMenuItems.map((item) => (
                  <Link
                    key={item}
                    to="#"
                    className="text-foreground hover:text-primary transition-colors py-2 font-medium"
                  >
                    {item}
                  </Link>
                ))}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onLanguageToggle}
                  className="justify-start"
                >
                  <span>{language === "EN" ? "ไทย" : "English"}</span>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* 🔹 Secondary Navbar */}
      <div
        className={`fixed left-0 right-0 z-40 bg-secondary border-b border-border transition-all duration-500 ${
          showSecondary
            ? "top-[95px] opacity-100"
            : "top-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center space-x-6 py-3 overflow-x-auto">
            {secondaryMenuItems.map((item) => (
              <Link
                key={item}
                to="#"
                className="text-sm text-muted-foreground hover:text-primary whitespace-nowrap transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
