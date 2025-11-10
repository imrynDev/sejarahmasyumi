// src/Navbar.jsx
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { name: "Beranda", href: "#beranda" },
  { name: "Warisan", href: "#warisan" },
  { name: "Statistik", href: "#statistik" },
  { name: "Tokoh", href: "#tokoh" },
  { name: "Kutipan", href: "#kutipan" },
  { name: "Visi & Misi", href: "#visimisi" },
  { name: "Aliansi Politik", href: "#aliansipolitik" },
  { name: "Arsip", href: "#dokumentasi" },
  { name: "Pembubaran", href: "#pembubaran" },
  { name: "Kuis", href: "#kuis" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#beranda");

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSetActive = (href) => {
    setActiveLink(href);
    setIsOpen(false);
  };

  const navLinkClass =
    "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out";

  return (
    <nav className="fixed w-full z-40 top-0 shadow-lg bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#beranda" className="flex-shrink-0">
            <span className="text-2xl font-extrabold text-green-500">Masyumi</span>
            <p className="text-xs text-gray-400 -mt-1">Sejarah Bangsa</p>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleSetActive(link.href)}
                  className={`${navLinkClass} ${
                    activeLink === link.href
                      ? "bg-green-700 text-white"
                      : "text-gray-300 hover:bg-green-700 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition duration-300"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleSetActive(link.href)}
                className={`${navLinkClass} block ${
                  activeLink === link.href
                    ? "bg-green-700 text-white"
                    : "text-gray-300 hover:bg-green-700 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
