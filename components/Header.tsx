"use client";

import { useState } from "react";

export default function Header() {
  // Mobile menu ko open aur close karne ke liye state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navbar ke menu links
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Faculty", href: "#faculty" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  try {
    return (
      <header className="sticky top-0 z-50 border-b border-yellow-500/30 bg-black text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          
          {/* Website Logo and Name */}
          <a href="#home" className="flex items-center">
            <div>
              <h1 className="text-xl font-bold tracking-wide md:text-2xl">
                MKD <span className="text-yellow-400">PATHSHALA</span>
              </h1>
              <p className="text-xs text-gray-300">
                Center for Academic Excellence
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition hover:text-yellow-400"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="rounded-lg bg-yellow-400 px-4 py-2 text-sm font-bold text-black transition hover:bg-yellow-300"
            >
              Enquire Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="text-2xl md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="border-t border-gray-800 bg-black px-4 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium hover:text-yellow-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                className="rounded-lg bg-yellow-400 px-4 py-2 text-center font-bold text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                Enquire Now
              </a>
            </div>
          </nav>
        )}
      </header>
    );
  } catch (error) {
    // Agar component render karte samay koi unexpected error aaye
    console.error("Header rendering error:", error);

    return null;
  }
}