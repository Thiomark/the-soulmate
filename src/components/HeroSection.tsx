import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-gray-100 min-h-[60vh] md:min-h-[70vh] flex items-center justify-center px-4">
      <div className="absolute top-8 left-8 md:top-12 md:left-12">
        <div className="w-16 h-20 md:w-20 md:h-24 bg-gray-300 rounded-sm opacity-80"></div>
      </div>

      <div className="absolute top-1/4 right-8 md:right-16">
        <div className="w-24 h-32 md:w-32 md:h-40 bg-orange-200 rounded-sm shadow-lg transform rotate-3"></div>
      </div>

      <div className="text-center z-10 bg-white bg-opacity-90 px-8 py-6 md:px-12 md:py-8 rounded-lg shadow-sm">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 tracking-wide">
          We believe in up coming artist.
        </h1>
        <div className="mt-4 w-16 h-1 bg-orange-400 mx-auto"></div>
      </div>

      <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
        <div className="w-20 h-24 md:w-24 md:h-28 bg-gray-200 rounded-sm opacity-70"></div>
      </div>
    </section>
  );
};

export default HeroSection;
