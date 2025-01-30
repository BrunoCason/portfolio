import { navLinks, cv, switchLanguage, switchTheme } from "@/locales/header";
import Link from "next/link";
import { Moon, Sun, X } from "lucide-react";
import { useTheme } from "@/context/ThemeProvider";
import { useLanguage } from "@/context/LanguageContext";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu = ({ isOpen, onClose }: SideMenuProps) => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: "en" | "pt") => {
    setLanguage(lang);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-gray-50 dark:bg-gray-800 z-50 transform text-gray-600 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-300">
          <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
            Menu
          </p>
          <button onClick={onClose} aria-label="Close Menu">
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <nav className="flex flex-col gap-4 p-4">
          <ul className="flex flex-col gap-4 text-gray-600 dark:text-gray-400">
            {navLinks[language].map((link, index) => (
              <li key={index} className="font-medium text-base">
                <Link href={link.href} onClick={onClose}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col gap-4 border-t border-gray-300 px-4">
          <div
            onClick={() =>
              handleLanguageChange(language === "en" ? "pt" : "en")
            }
            className="flex items-center justify-between pt-4"
          >
            <span className="font-normal text-base text-gray-600 dark:text-gray-400">
            {switchLanguage[language]}
            </span>

            <span className="font-normal text-base text-gray-600 dark:text-gray-400">
              {language === "en" ? "En" : "Pt"}
            </span>
          </div>

          <div
            onClick={toggleTheme}
            className="flex items-center justify-between"
          >
            <span className="font-normal text-base text-gray-600 dark:text-gray-400 ">
            {switchTheme[language]}
            </span>
            <button aria-label="Toggle Theme">
              {theme === "light" ? (
                <Sun className="w-5 h-5 text-gray-600" />
              ) : (
                <Moon className="w-5 h-5 text-gray-400" />
              )}
            </button>
          </div>
          <div>
            <button className="bg-gray-900 w-full py-1.5 rounded-xl text-gray-50 dark:bg-gray-100 px-4 font-medium dark:text-gray-950">
              {cv[language]}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
