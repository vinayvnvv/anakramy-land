"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components";
import Button from "./Button";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#service", label: "Services" },
  { href: "#team", label: "Team" },
];

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Find the section that is currently in view
      const sections = NAV_LINKS.map(
        (link) => document.querySelector(link.href) as HTMLElement
      ).filter((section) => section !== null);

      const currentSection = sections.find((section, index) => {
        const nextSection = sections[index + 1];
        const sectionTop = section.offsetTop - 100; // Offset to trigger earlier
        const sectionBottom = nextSection
          ? nextSection.offsetTop - 100
          : document.documentElement.scrollHeight;

        return scrollPosition >= sectionTop && scrollPosition < sectionBottom;
      });

      if (currentSection) {
        setActiveSection(`#${currentSection.id}`);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActiveLink = (href: string) => {
    return activeSection === href ? "text-primary font-bold" : "text-gray-600";
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent shadow-md z-50">
      <Container className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://ph-files.imgix.net/a9c8517e-42fc-4906-ad79-492ae5e84c72.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&dpr=2"
            alt="Company Logo"
            width={120}
            height={120}
            className="h-12 w-auto scale-125 rounded-full"
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-primary focus:outline-none"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`
          ${isMenuOpen ? "block" : "hidden"} 
          md:block 
          absolute md:relative 
          top-full left-0 md:top-auto 
          w-full md:w-auto 
          bg-black md:bg-transparent 
          shadow-md md:shadow-none
        `}
        >
          <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`
                    ${isActiveLink(link.href)} 
                    text-white
                    hover:text-primaryLight
                    transition-colors 
                    duration-300
                    font-bold
                    text-xl
                  `}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/contact">
            <Button size="large" variant="outlined">
              Connect
            </Button>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
