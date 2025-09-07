import React from "react";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm font-light tracking-[0.2em] text-gray-600 mb-8">
            OUR ARTIST
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <ServiceCard
            title="MUSIC ARTIST"
            imageSrc="https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186361/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_1_qzk4ow.jpg"
            imageAlt="Creative Direction - Record player with vinyl"
          />

          <ServiceCard
            title="ART ARTIST"
            imageSrc="https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186360/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.41_cg1cos.jpg"
            imageAlt="Client Testimonials - Abstract art painting with flowers"
          />

          <ServiceCard
            title="FASHION ARTIST"
            imageSrc="https://res.cloudinary.com/dzkjxrxkf/image/upload/v1757186345/the_soulmates/the_soulmates/WhatsApp_Image_2025-09-06_at_20.08.42_mz5nmc.jpg"
            imageAlt="Portfolio - Minimalist wooden hangers"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
