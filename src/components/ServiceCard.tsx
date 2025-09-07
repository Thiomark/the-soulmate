import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  imageBg?: string;
  imageSrc?: string;
  imageAlt?: string;
  children?: ReactNode;
  href?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  imageBg,
  imageSrc,
  imageAlt,
  children,
  href,
}) => {
  const cardContent = (
    <div className="group cursor-pointer">
      <div
        className={`${imageBg || 'bg-gray-100'} h-48 md:h-56 lg:h-64 rounded-lg mb-4 flex items-center justify-center transition-transform group-hover:scale-105 overflow-hidden relative`}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            className="object-cover"
          />
        ) : (
          children
        )}
      </div>
      <h3 className="text-sm md:text-base font-light text-gray-600 tracking-wide text-center">
        {title}
      </h3>
    </div>
  );

  if (href) {
    return <Link href={href}>{cardContent}</Link>;
  }

  return cardContent;
};

export default ServiceCard;
