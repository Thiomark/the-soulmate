import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-2xl md:text-3xl font-light text-gray-800 mb-6">
          The soulmates
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-gray-800 transition-colors">
            Home
          </Link>
          <Link
            href="/musician"
            className="hover:text-gray-800 transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="hover:text-gray-800 transition-colors"
          >
            music artist
          </Link>
          <Link
            href="/fashion"
            className="hover:text-gray-800 transition-colors"
          >
            Art artist
          </Link>
          <Link
            href="/neo-soul"
            className="hover:text-gray-800 transition-colors"
          >
            Fashion artist
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-800 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
