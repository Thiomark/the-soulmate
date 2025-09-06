import React from "react";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm font-light tracking-[0.2em] text-gray-600 mb-8">
            OUR SERVICES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <ServiceCard
            title="CREATIVE DIRECTION"
            imageBg="bg-gradient-to-br from-gray-100 to-gray-200"
          >
            <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-orange-200 rounded-full"></div>
            </div>
          </ServiceCard>

          <ServiceCard
            title="CLIENT TESTIMONIALS"
            imageBg="bg-gradient-to-br from-orange-50 to-orange-100"
          >
            <div className="flex space-x-4">
              <div className="w-12 h-8 bg-orange-300 rounded-full opacity-80"></div>
              <div className="w-8 h-12 bg-gray-400 rounded-sm"></div>
            </div>
          </ServiceCard>

          <ServiceCard
            title="PORTFOLIO"
            imageBg="bg-gradient-to-br from-gray-50 to-gray-150"
          >
            <div className="flex space-x-3">
              <div className="w-8 h-12 bg-gray-300 rounded-sm"></div>
              <div className="w-6 h-16 bg-orange-200 rounded-sm transform rotate-12"></div>
              <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
            </div>
          </ServiceCard>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
