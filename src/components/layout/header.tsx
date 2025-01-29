import { navLinks } from "@/lib/data";
import Link from "next/link";
import { useState } from "react";
import { Moon, Sun, Menu } from "lucide-react";
import SideMenu from "./SideMenu";
import { useTheme } from "@/context/ThemeProvider";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <header className="hidden md:flex justify-between items-center py-4">
        <p className="font-bold text-3xl text-gray-900">Logo</p>
        <nav className="flex items-center gap-6">
          <ul className="flex list-none items-center gap-6 text-gray-600 dark:text-gray-400">
            {navLinks.map((link, index) => (
              <li key={index} className="font-medium text-base">
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className="h-6 w-0.5 bg-gray-100 dark:bg-gray-700"></div>
          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === "light" ? (
                <Sun className="w-5 h-5 text-gray-600" />
              ) : (
                <Moon className="w-5 h-5 text-gray-400" />
              )}
            </button>
            <button className="bg-gray-900 dark:bg-gray-100 px-4 py-1.5 rounded-xl font-medium text-gray-50 dark:text-gray-950">
              Download CV
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
