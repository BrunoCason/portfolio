import { NavLinks } from "@/lib/data";
import Link from "next/link";
import { Moon, Sun, X } from "lucide-react";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const SideMenu = ({ isOpen, onClose, theme, toggleTheme }: SideMenuProps) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 transform text-gray-600 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <p className="text-lg font-bold">Menu</p>
          <button onClick={onClose} aria-label="Close Menu">
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <nav className="flex flex-col gap-4 p-4">
          <ul className="flex flex-col gap-4">
            {NavLinks.map((link, index) => (
              <li key={index} className="font-medium text-base">
                <Link href={link.href} onClick={onClose}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col gap-4 border-t">
          <div className="flex items-center justify-between pt-4 px-4">
            <span className="font-normal text-base">Switch Theme</span>
            <button onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === "light" ? (
                <Sun className="w-5 h-5 text-gray-600" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
          <div className="px-4">
            <button className="bg-gray-900 w-full py-1.5 rounded-xl text-gray-50">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
