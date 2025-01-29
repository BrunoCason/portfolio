import { navLinks } from "@/lib/data";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Moon, Sun, Menu } from "lucide-react";
import SideMenu from "./SideMenu";

const Header = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <header className="hidden md:flex justify-between items-center">
        <p className="font-bold text-3xl text-gray-900">Logo</p>
        <nav className="flex items-center gap-6">
          <ul className="flex list-none items-center gap-6 text-gray-600">
            {navLinks.map((link, index) => (
              <li key={index} className="font-medium text-base">
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className="h-6 w-0.5 bg-gray-100"></div>
          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === "light" ? (
                <Sun className="w-5 h-5 text-gray-600" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
            <button className="bg-gray-900 px-4 py-1.5 rounded-xl text-gray-50">
              Download CV
            </button>
          </div>
        </nav>
      </header>

      <header className="flex md:hidden justify-between items-center">
        <p className="font-bold text-3xl text-gray-900">Logo</p>
        <button onClick={toggleSidebar} aria-label="Open Menu">
          <Menu className="w-6 h-6 text-gray-600" />
        </button>
      </header>

      <SideMenu
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
        theme={theme}
        toggleTheme={toggleTheme}
      />
    </>
  );
};

export default Header;
