import { useState } from "react";
import clsx from "clsx";

import sOneLogo from "../../assets/nav/SOne_index_logo.png";
import thaiLang from "../../assets/nav/SOne_index_iconthai.jpg";
import engLang from "../../assets/nav/SOne_index_iconeng.jpg";
import searchIcon from "../../assets/nav/SOne_index_btsearch.jpg";

interface NavLink {
  title: string;
  href: string;
}

const NAV_ITEMS: NavLink[] = [
  {
    title: "About S-ONE",
    href: "#",
  },
  {
    title: "Job Oppotunity",
    href: "#",
  },
  {
    title: "Contact Us",
    href: "#",
  },
  {
    title: "Site Map",
    href: "#",
  },
];

export default function TopNavbar() {
  const [activeLang, setActiveLang] = useState<"en" | "th">("th");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className="p-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center bg-white gap-4 md:gap-12">
        {/* Logo */}
        <div className="flex justify-between items-center">
          <img
            src={sOneLogo}
            alt="S-one Logo"
            className="h-12 md:h-20 object-contain"
          />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            title="Mobile navbar toggle"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Right Side Content */}
        <div
          className={clsx(
            "flex-1 flex flex-col gap-2",
            "md:flex md:flex-col md:justify-end md:items-end",
            isMenuOpen ? "block" : "hidden md:flex"
          )}
        >
          {/* Language Switcher */}
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setActiveLang("th")}
              className="cursor-pointer"
            >
              <img
                src={thaiLang}
                alt="Thai language change"
                className={clsx(
                  "transition-all duration-200",
                  activeLang !== "th" && "[filter:grayscale(100%)]" // Apply grayscale when NOT active
                )}
              />
            </button>
            <button
              onClick={() => setActiveLang("en")}
              className="transition-all duration-200 cursor-pointer"
            >
              <img
                src={engLang}
                alt="English language change"
                className={clsx(
                  "transition-all duration-200",
                  activeLang !== "en" && "[filter:grayscale(100%)]" // Apply grayscale when NOT active
                )}
              />
            </button>
          </div>

          {/* Search Bar */}
          <div className="bg-primary p-px w-full md:w-auto">
            <div className="flex bg-white items-center border-primary-orange border-solid border-2">
              <input
                type="text"
                placeholder="Search..."
                className="w-full md:w-[210px] h-[23px] outline-none px-2"
              />
              <button className="border-primary-orange border-solid border-[1px]">
                <img src={searchIcon} alt="Search" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row items-center gap-2">
            {NAV_ITEMS.map((item, index) => (
              <div
                key={item.title}
                className="flex items-center w-full md:w-auto"
              >
                <a
                  href={item.href}
                  className="text-[#252525] text-center text-nowrap hover:text-primary-orange text-xs no-underline w-full md:w-auto"
                >
                  {item.title}
                </a>
                {index !== NAV_ITEMS.length - 1 && (
                  <span className="ml-2 hidden md:inline">|</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
