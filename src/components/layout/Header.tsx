import { useState, useRef, useEffect } from "react";
import { Moon, Sun, Menu } from "lucide-react";
import SideMenu from "./SideMenu";
import { useTheme } from "@/context/ThemeProvider";
import { useLanguage } from "@/context/LanguageContext";
import { navLinks, cv } from "@/locales/header/header";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLanguageChange = (lang: "en" | "pt") => {
    if (lang !== language) {
      setLanguage(lang);
    }
    setIsDropdownOpen(false);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      if (id === "skills") {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      } else {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 hidden 850px:flex py-4 px-4 md:px-10 lg:px-20 2xl:px-32 bg-white dark:bg-gray-950 transition-colors duration-500 ease-in-out ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-7xl w-full mx-auto flex justify-between items-center">
          <p
            onClick={handleScrollToTop}
            className="font-bold text-3xl text-gray-900 cursor-pointer dark:text-gray-100"
          >
            {"<BC />"}
          </p>
          <nav className="flex items-center gap-6">
            <ul className="flex list-none items-center gap-6 text-gray-600 dark:text-gray-400">
              {navLinks[language].map((link, index) => (
                <li
                  key={index}
                  className="font-medium text-base hover:text-gray-400 dark:hover:text-gray-600 transition-colors duration-500 ease-in-out"
                >
                  <button
                    onClick={() => handleScrollToSection(link.href.slice(1))}
                    className="cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="h-6 w-0.5 bg-gray-100 dark:bg-gray-700 transition-colors duration-500 ease-in-out"></div>
            <div className="relative flex items-center gap-4">
              <button
                onClick={toggleDropdown}
                className="text-gray-600 dark:text-gray-400 font-medium hover:text-gray-400 dark:hover:text-gray-600 transition-colors duration-500 ease-in-out"
              >
                {language === "en" ? "En" : "Pt"}
              </button>

              {isDropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute top-full left-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <button
                    onClick={() => handleLanguageChange("en")}
                    className="block w-full text-left px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleLanguageChange("pt")}
                    className="block w-full text-left px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Português
                  </button>
                </div>
              )}

              <button onClick={toggleTheme} aria-label="Toggle Theme">
                {theme === "light" ? (
                  <Sun className="w-5 h-5 text-gray-600 hover:text-gray-400 dark:hover:text-gray-600 transition-colors duration-500 ease-in-out" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-400 hover:text-gray-400 dark:hover:text-gray-600 transition-colors duration-500 ease-in-out" />
                )}
              </button>
              <a
                href="/assets/cv_BrunoCason.pdf"
                download="Curriculo_BC.pdf"
                className="bg-gray-900 dark:bg-gray-100 px-4 py-1.5 rounded-xl font-medium text-gray-50 dark:text-gray-950 transition-colors duration-500 ease-in-out"
              >
                {cv[language]}
              </a>
            </div>
          </nav>
        </div>
      </header>

      <header
        className={`flex 850px:hidden justify-between items-center py-4 fixed top-0 left-0 right-0 z-10 px-4 bg-white dark:bg-gray-950 transition-colors duration-500 ease-in-out ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <p
          onClick={handleScrollToTop}
          className="font-bold text-3xl text-gray-900 cursor-pointer dark:text-gray-100"
        >
          {"<BC />"}
        </p>
        <button onClick={toggleSidebar} aria-label="Open Menu">
          <Menu className="w-6 h-6 text-gray-600 dark:text-gray-400" />
        </button>
      </header>

      <SideMenu isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </>
  );
};

export default Header;
