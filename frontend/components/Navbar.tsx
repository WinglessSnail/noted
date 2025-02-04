"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="flex items-center justify-between p-4 bg-secondaryLight dark:bg-secondaryDark shadow-md">
      {/* Left: Logo */}
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">Noted</h1>

      {/* Center: Navigation Links */}
      <div className="hidden md:flex space-x-6">
        {[
          { name: "Home", path: "/" },
          { name: "Todo", path: "/todo" },
        ].map(({ name, path }) => (
          <Link
            key={path}
            href={path}
            className={`px-4 py-2 rounded-md text-lg font-medium transition ${
              pathname === path
                ? "bg-primaryDark text-white dark:bg-primaryLight dark:text-gray-900"
                : "text-gray-800 dark:text-white"
            }`}
          >
            {name}
          </Link>
        ))}
      </div>

      {/* Right: Dark Mode Toggle & Mobile Menu */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-primaryLight dark:bg-primaryDark text-gray-800 dark:text-white transition"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu size={24} className="text-gray-800 dark:text-white" />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 right-4 w-40 bg-white dark:bg-[#3E5879] shadow-lg rounded-lg flex flex-col p-3 space-y-3 md:hidden">
          {[
            { name: "Home", path: "/" },
            { name: "Todo", path: "/todo" },
          ].map(({ name, path }) => (
            <Link
              key={path}
              href={path}
              className={`px-4 py-2 rounded-md text-lg font-medium transition ${
                pathname === path
                  ? "bg-primaryDark text-white dark:bg-primaryLight dark:text-gray-900"
                  : "text-gray-800 dark:text-white"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
