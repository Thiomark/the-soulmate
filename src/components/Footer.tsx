import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-2xl md:text-3xl font-light text-gray-800 mb-6">
          The soulmates
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-gray-600">
          <a href="/fashion" className="hover:text-gray-800 transition-colors">
            Fashion
          </a>
          <a href="/musician" className="hover:text-gray-800 transition-colors">
            Musician
          </a>
          <a href="/neo-soul" className="hover:text-gray-800 transition-colors">
            Neo Soul & RNB
          </a>
          <a href="#" className="hover:text-gray-800 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
