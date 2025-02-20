import { useState } from "react";
import clsx from "clsx";

import facebookIcon from "../../assets/nav/SOne_index_btfacebook1.png";
import twitterIcon from "../../assets/nav/SOne_index_bttwitter1.png";
import youtubeIcon from "../../assets/nav/SOne_index_btyoutube1.png";
import playIcon from "../../assets/nav/SOne_index_menu02.png";

interface MainNavLink {
  title: string;
  href: string;
}

interface SocialLink {
  icon: string;
  alt: string;
  href: string;
}

const mainNavItems: MainNavLink[] = [
  { title: "Product & Services", href: "#" },
  { title: "Promotions", href: "#" },
  { title: "News & Events", href: "#" },
  { title: "Safety Tips", href: "#" },
  { title: "FAQS", href: "#" },
  { title: "Location", href: "#" },
];

const socialLinks: SocialLink[] = [
  { icon: facebookIcon, alt: "Facebook Icon", href: "#" },
  { icon: twitterIcon, alt: "Twitter Icon", href: "#" },
  { icon: youtubeIcon, alt: "Youtube Icon", href: "#" },
];

export default function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className="bg-black w-full">
      {/* Desktop Navigation */}
      <div className="mx-auto max-w-7xl hidden md:flex justify-between items-center px-2 md:px-6 lg:px-8">
        <div className="flex items-center flex-1">
          {mainNavItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group flex gap-2 text-white px-2 py-3 hover:bg-primary transition-colors duration-200 text-sm text-nowrap hover:text-primary-orange"
            >
              <img
                src={playIcon}
                alt="Play Icon"
                className="[filter:grayscale(100%)] group-hover:[filter:grayscale(0%)] transition-all duration-200"
              />
              {item.title}
            </a>
          ))}
        </div>

        {/* Social Media Icons - Desktop */}
        <div className=" flex gap-3 items-center">
          {socialLinks.map((social) => (
            <a key={social.alt} href={social.href}>
              <img
                src={social.icon}
                alt={social.alt}
                className="transition-all duration-200 w-auto h-6 [filter:grayscale(100%)] hover:[filter:grayscale(0%)]"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-full px-4 py-3 flex items-center justify-between text-white"
        >
          <span>Menu</span>
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

        {/* Mobile Menu Items */}
        <div className={clsx("bg-black", isMenuOpen ? "block" : "hidden")}>
          {mainNavItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="transition-all duration-200 block text-white px-4 py-3 hover:bg-primary border-b border-gray-700 hover:text-primary-orange"
            >
              {item.title}
            </a>
          ))}

          {/* Social Media Icons - Mobile */}
          <div className="flex gap-4 px-4 py-3 items-center">
            {socialLinks.map((social) => (
              <a key={social.alt} href={social.href}>
                <img
                  src={social.icon}
                  alt={social.alt}
                  className="transition-all duration-200 w-auto h-6 [filter:grayscale(100%)] hover:[filter:grayscale(0%)]"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
