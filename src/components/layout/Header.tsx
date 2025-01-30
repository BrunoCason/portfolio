import Link from "next/link";
import { useState, useRef } from "react";
import { Moon, Sun, Menu } from "lucide-react";
import SideMenu from "./SideMenu";
import { useTheme } from "@/context/ThemeProvider";
import { useLanguage } from "@/context/LanguageContext";
import { navLinks, cv } from "@/locales/header";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage } = useLanguage();

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLanguageChange = (lang: "en" | "pt") => {
    setLanguage(lang);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <header className="hidden md:flex justify-between items-center py-4">
        <p className="font-bold text-3xl text-gray-900">Logo</p>
        <nav className="flex items-center gap-6">
          <ul className="flex list-none items-center gap-6 text-gray-600 dark:text-gray-400">
            {navLinks[language].map((link, index) => (
              <li key={index} className="font-medium text-base">
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className="h-6 w-0.5 bg-gray-100 dark:bg-gray-700"></div>
          <div className="relative flex items-center gap-4">
            <button
              onClick={toggleDropdown}
              className="text-gray-600 dark:text-gray-400 font-medium"
            >
              {language === "en" ? "En" : "Pt"}
            </button>

            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute top-full left-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <button
                  onClick={() =>
                    handleLanguageChange(language === "en" ? "pt" : "en")
                  }
                  className="block w-full text-left px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  English
                </button>
                <button
                  onClick={() =>
                    handleLanguageChange(language === "en" ? "pt" : "en")
                  }
                  className="block w-full text-left px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Português
                </button>
              </div>
            )}

            <button onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === "light" ? (
                <Sun className="w-5 h-5 text-gray-600" />
              ) : (
                <Moon className="w-5 h-5 text-gray-400" />
              )}
            </button>
            <button className="bg-gray-900 dark:bg-gray-100 px-4 py-1.5 rounded-xl font-medium text-gray-50 dark:text-gray-950">
              {cv[language]}
            </button>
          </div>
        </nav>
      </header>

      <header className="flex md:hidden justify-between items-center py-4">
        <p className="font-bold text-3xl text-gray-900">Logo</p>
        <button onClick={toggleSidebar} aria-label="Open Menu">
          <Menu className="w-6 h-6 text-gray-600 dark:text-gray-400" />
        </button>
      </header>

      <SideMenu isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </>
  );
};

export default Header;
