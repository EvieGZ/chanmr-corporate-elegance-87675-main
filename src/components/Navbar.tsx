import { useState, useEffect } from "react";
import { Search, Menu, X, Globe } from "lucide-react";
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
    { name: "Jobs", path: "/jobs" },
    { name: "E-brochure", path: "/e-brochure" },
    { name: "EN / TH", path: "#" },
  ];

  return (
    <>
      {/* 🌤️ Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm"
            : "bg-background/95 backdrop-blur-sm"
        }
          ${hideTopNav ? "h-16" : "h-28"}
          `}
      >
        {/* 🔹 TopNav */}
        <div
          className={`flex justify-end text-xs text-primary py-2 px-6 space-x-6 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] transform-gpu ${
            hideTopNav
              ? "-translate-y-[100%] opacity-0 pointer-events-none"
              : "translate-y-0 opacity-100"
          }`}
        >
          {topNav.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="hover:text-accent transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* 🔸 Main Navbar */}
        <div
          className={`px-2 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            hideTopNav ? "translate-y-[-32px]" : "translate-y-0"
          }`}
        >
          <div className="flex items-center container mx-auto justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Link to="/" className="flex items-center space-x-3 -mx-12">
                <img src={logo} alt="CHANMR Logo" className="h-20 w-auto" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {mainMenuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => toggleMenu(item)}
                  className={`text-foreground hover:text-primary transition-colors duration-300 font-medium ${
                    activeMenu === item ? "underline" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {activeMenu && (
              <div
                className={`absolute left-0 ${
                  hideTopNav ? "top-16" : "top-20"
                } w-full bg-white shadow-xl  grid grid-cols-3 gap-8 z-50`}
              >
                {/* Column 1 */}
                <div className=" p-8 bg-slate-50">
                  <h3 className="text-2xl font-semibold mb-4">Lorem ipsum</h3>
                  <ul className="space-y-3 text-lg">
                    <li>Lorem ipsum is placeholder</li>
                    <li>Lorem ipsum is placeholder text commonly</li>
                    <li>Lorem ipsum is placeholder text</li>
                  </ul>
                </div>

                {/* Column 2 */}
                <div className=" p-8">
                  <h3 className="text-2xl font-semibold mb-4">
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
                <div className="m-8 ml-0 pl-8 border-l ">
                  <h3 className="text-2xl font-semibold mb-4">Lorem ipsum</h3>
                  <div className="space-y-6 text-lg">
                    <div>
                      <p className="font-medium">Lorem ipsum</p>
                      <p className="text-gray-500">
                        Lorem ipsum is placeholder text commonly used in the graphic
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Lorem ipsum is placeholder</p>
                      <p className="text-gray-500">
                        Lorem ipsum is placeholder text commonly used in the graphic
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Lorem ipsum is</p>
                      <p className="text-gray-500">
                        Lorem ipsum is placeholder text commonly used in the
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-muted">
                <Search className="h-5 w-5" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={onLanguageToggle}
                className="hidden sm:flex items-center space-x-2 hover:bg-muted"
              >
                <Globe className="h-4 w-4" />
                <span className="font-medium">{language}</span>
              </Button>

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

          {/* 🔻 Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 animate-fade-in">
              <div className="flex flex-col space-y-3">
                {mainMenuItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-foreground hover:text-primary transition-colors py-2 font-medium"
                  >
                    {item}
                  </a>
                ))}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onLanguageToggle}
                  className="justify-start"
                >
                  <Globe className="h-4 w-4 mr-2" />
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
            ? "top-[60px] opacity-100"
            : "top-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center space-x-6 py-3 overflow-x-auto">
            {secondaryMenuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-muted-foreground hover:text-primary whitespace-nowrap transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
