import React, { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  imageBg: string;
  children: ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  imageBg,
  children,
}) => {
  return (
    <div className="group cursor-pointer">
      <div
        className={`${imageBg} h-48 md:h-56 lg:h-64 rounded-lg mb-4 flex items-center justify-center transition-transform group-hover:scale-105`}
      >
        {children}
      </div>
      <h3 className="text-sm md:text-base font-light text-gray-600 tracking-wide text-center">
        {title}
      </h3>
    </div>
  );
};

export default ServiceCard;
