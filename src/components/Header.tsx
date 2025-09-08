"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <header className="w-full bg-[#E5E0D8] py-6 px-4 md:px-8 lg:px-12">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-2xl md:text-3xl font-light text-gray-800 hover:text-gray-600 transition-colors"
        >
          The soulmates
        </Link>
        <div className="hidden md:flex space-x-6 lg:space-x-8 text-sm font-light tracking-wide">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            HOME
          </Link>
          <Link
            href="/musician"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            ABOUT US
          </Link>
          <Link
            href="/events"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            EVENTS
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            CONTACT US
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-600 hover:text-gray-800 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="block text-gray-600 hover:text-gray-800 transition-colors py-2 text-sm font-light tracking-wide"
            >
              HOME
            </Link>
            <Link
              href="/musician"
              onClick={closeMobileMenu}
              className="block text-gray-600 hover:text-gray-800 transition-colors py-2 text-sm font-light tracking-wide"
            >
              ABOUT US
            </Link>
            <Link
              href="/events"
              onClick={closeMobileMenu}
              className="block text-gray-600 hover:text-gray-800 transition-colors py-2 text-sm font-light tracking-wide"
            >
              EVENTS
            </Link>
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="block text-gray-600 hover:text-gray-800 transition-colors py-2 text-sm font-light tracking-wide"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
