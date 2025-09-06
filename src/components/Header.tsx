import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full py-6 px-4 md:px-8 lg:px-12">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="text-2xl md:text-3xl font-light text-gray-800 hover:text-gray-600 transition-colors">
          The soulmates
        </Link>
        <div className="hidden md:flex space-x-8 lg:space-x-12 text-sm font-light tracking-wide">
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
            ABOUT
          </Link>
          <Link
            href="/services"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            SERVICES
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            CONTACT
          </Link>
        </div>
        <div className="md:hidden">
          <button className="text-gray-600 hover:text-gray-800">
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
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
